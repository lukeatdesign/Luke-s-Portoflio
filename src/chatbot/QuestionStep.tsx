import { useEffect, useRef, useState } from 'react'
import type { Message, Persona } from './types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

const MAX_QUESTIONS = 6

interface Props {
  persona: Persona
  onComplete: (contextSummary: string) => void
}

export function QuestionStep({ persona, onComplete }: Props) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [questionCount, setQuestionCount] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  const fetchNextQuestion = async (history: Message[]) => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/onboarding`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona, history }),
      })
      const data = (await res.json()) as { question?: string; complete: boolean }

      if (data.complete || questionCount >= MAX_QUESTIONS) {
        const summary = buildContextSummary(history)
        onComplete(summary)
        return
      }

      if (data.question) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.question! }])
        setQuestionCount((c) => c + 1)
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "What brings you to Luka's portfolio today?" },
      ])
      setQuestionCount((c) => c + 1)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNextQuestion([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const buildContextSummary = (history: Message[]): string => {
    const pairs: string[] = []
    for (let i = 0; i < history.length - 1; i += 2) {
      const q = history[i]?.content
      const a = history[i + 1]?.content
      if (q && a) pairs.push(`Q: ${q} A: ${a}`)
    }
    return `${persona} context — ${pairs.join(' / ')}`
  }

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const newHistory = [...messages, userMsg]
    setMessages(newHistory)
    setInput('')

    await fetchNextQuestion(newHistory)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void handleSend()
    }
  }

  const progressWidth = `${Math.min((questionCount / MAX_QUESTIONS) * 100, 85)}%`

  return (
    <div className="onboarding-step question-step">
      <div className="progress-strip">
        <div className="progress-fill" style={{ width: progressWidth }} />
      </div>

      <div className="question-messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chat-bubble ${m.role === 'assistant' ? 'chat-bubble--luka' : 'chat-bubble--user'}`}
          >
            {m.content}
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
          placeholder="Type your answer…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          disabled={loading}
        />
        <button
          className="button button-primary chat-send"
          onClick={() => void handleSend()}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}
