import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import type { Message, Persona, Tone } from './types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

const TONE_LABELS: Record<Tone, string> = {
  professional: '👔 Professional',
  casual: '😊 Casual',
  tingtong: '🐱 ติงต๊อง',
}

const PERSONA_GREETING: Record<Persona, string> = {
  recruiter: "recruiter",
  designer: "designer",
  client: "there",
  curious: "there",
}

interface Props {
  persona: Persona
  contextSummary: string
  tone: Tone
  onToneChange: (tone: Tone) => void
}

export function ChatInterface({ persona, contextSummary, tone, onToneChange }: Props) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showTonePicker, setShowTonePicker] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const greeting = `Hey ${PERSONA_GREETING[persona]}! I've got enough context to be useful. What would you like to know about Luka's work, process, or background?`
    setMessages([{ role: 'assistant', content: greeting }])
  }, [persona])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          persona,
          contextSummary,
          tone,
        }),
      })
      const data = (await res.json()) as { reply?: string; error?: string }
      const reply = data.reply ?? "Sorry, I couldn't get a response. Please try again."
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Hmm, something went wrong. Try asking again!" },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void sendMessage()
    }
  }

  const toneOptions: Tone[] = ['professional', 'casual', 'tingtong']

  return (
    <div className="chat-interface">
      <div className="chat-topbar">
        <div className="chat-title">Chat with Luka</div>
        <div className="tone-switcher">
          <button
            className="tone-badge"
            onClick={() => setShowTonePicker((v) => !v)}
            title="Switch tone"
          >
            {TONE_LABELS[tone]}
          </button>
          {showTonePicker && (
            <div className="tone-popover">
              {toneOptions.map((t) => (
                <button
                  key={t}
                  className={`tone-option ${t === tone ? 'tone-option--active' : ''}`}
                  onClick={() => {
                    onToneChange(t)
                    setShowTonePicker(false)
                  }}
                >
                  {TONE_LABELS[t]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="chat-message-list">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chat-bubble ${m.role === 'assistant' ? 'chat-bubble--luka' : 'chat-bubble--user'}`}
          >
            {m.role === 'assistant' ? (
              <ReactMarkdown>{m.content}</ReactMarkdown>
            ) : (
              m.content
            )}
          </div>
        ))}
        {loading && (
          <div className="chat-bubble chat-bubble--luka chat-bubble--loading">
            <span /><span /><span />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-row">
        <textarea
          className="chat-input"
          placeholder="Ask anything about Luka…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          disabled={loading}
        />
        <button
          className="button button-primary chat-send"
          onClick={() => void sendMessage()}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}
