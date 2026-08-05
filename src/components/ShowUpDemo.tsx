import { useEffect, useRef, useState } from 'react'

// Interactive mini-ShowUp for the case study page. Self-contained on purpose:
// it imitates the product's core loop (pick a lane -> live set -> rest -> summary)
// and Yuna's intent guardrail, using ShowUp's own design tokens, without
// depending on any portfolio styles.

const T = {
  bg: '#0D0D0D',
  surface: '#1A1A1A',
  surface2: '#222222',
  yunaSurface: '#1E1A14',
  border: '#2A2A2A',
  yellow: '#FFE600',
  yellowInk: '#0D0D0D',
  red: '#D4351F',
  blue: '#4A7FA5',
  text: '#FFFFFF',
  muted: '#888888',
  dim: '#555555',
}

const display: React.CSSProperties = {
  fontFamily: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif",
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
  fontWeight: 400,
}
const mono: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', 'Consolas', monospace",
}
const label: React.CSSProperties = {
  ...mono,
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: T.muted,
}

type Screen = 'today' | 'live' | 'rest' | 'summary'
type Intent = 'casual' | 'fitness' | 'logging' | 'planning'
type ChatMsg = { from: 'you' | 'yuna'; text: string; intent?: Intent; logged?: boolean }

const TOTAL_SETS = 3

function classify(raw: string): { intent: Intent; reply: string; logged: boolean } {
  const msg = raw.toLowerCase()
  const hasNumber = /\d/.test(msg)
  const hasExercise = /(press|curl|row|squat|pulldown|pull|fly|extension|plate|kg|rep|set|punch)/.test(msg)

  if (hasNumber && hasExercise) {
    return {
      intent: 'logging',
      reply: 'Logged. On the board, merged into tonight’s session — no duplicate rows. (✧ω✧)',
      logged: true,
    }
  }
  if (/(plan|tonight|workout for)/.test(msg)) {
    return {
      intent: 'planning',
      reply: 'Energy? Condition? Minutes? Give me those three and I’ll build you a board. In the real app this becomes an editable plan table~',
      logged: false,
    }
  }
  if (/(tired|sore|shoulder|energy|hurt|weak|heavy)/.test(msg)) {
    return {
      intent: 'fitness',
      reply: 'Then we go light — lower plate, clean reps. Showing up tired counts double. Nothing gets logged until you tell me numbers.',
      logged: false,
    }
  }
  return {
    intent: 'casual',
    reply: 'Hey. The board’s warm~ Notice nothing was logged just now — greetings never write to the database.',
    logged: false,
  }
}

export function ShowUpDemo() {
  const [screen, setScreen] = useState<Screen>('today')
  const [streak, setStreak] = useState(63)
  const [setsDone, setSetsDone] = useState(0)
  const [plate, setPlate] = useState(10)
  const [reps, setReps] = useState(10)
  const [restLeft, setRestLeft] = useState(45)
  const [sessionKind, setSessionKind] = useState<'strength' | 'rest'>('strength')
  const [yunaLine, setYunaLine] = useState('8PM. You know the deal (ງ ̀_́)ງ — pick a lane.')
  const [chat, setChat] = useState<ChatMsg[]>([])
  const [draft, setDraft] = useState('')
  const [chatLogs, setChatLogs] = useState(0)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (screen !== 'rest') return
    if (restLeft <= 0) {
      setScreen(setsDone >= TOTAL_SETS ? 'summary' : 'live')
      if (setsDone >= TOTAL_SETS) setStreak((s) => s + 1)
      return
    }
    // demo seconds tick faster than gym seconds
    const id = window.setTimeout(() => setRestLeft((r) => r - 1), 90)
    return () => window.clearTimeout(id)
  }, [screen, restLeft, setsDone])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ block: 'nearest' })
  }, [chat])

  const startStrength = () => {
    setSessionKind('strength')
    setSetsDone(0)
    setScreen('live')
    setYunaLine('Quick start is live. Log it clean, then head into rest.')
  }

  const completeSet = () => {
    const done = setsDone + 1
    setSetsDone(done)
    setRestLeft(45)
    setScreen('rest')
    setYunaLine(done >= TOTAL_SETS ? 'Last one banked. Breathe~' : `Set ${done} on the board. Shake it out.`)
  }

  const logRest = () => {
    setSessionKind('rest')
    setStreak((s) => s + 1)
    setScreen('summary')
    setYunaLine('Honest recovery beats fake heroics. The streak stays human.')
  }

  const boxingNudge = () => {
    setYunaLine('Pads are 29 days cold… but this demo only ships the lift. STRENGTH — let’s go 555')
  }

  const resetDemo = () => {
    setScreen('today')
    setStreak(63)
    setSetsDone(0)
    setPlate(10)
    setReps(10)
    setChat([])
    setChatLogs(0)
    setYunaLine('8PM. You know the deal (ງ ̀_́)ງ — pick a lane.')
  }

  const sendChat = () => {
    const text = draft.trim()
    if (!text) return
    const { intent, reply, logged } = classify(text)
    setChat((c) => [...c, { from: 'you', text }, { from: 'yuna', text: reply, intent, logged }])
    if (logged) setChatLogs((n) => n + 1)
    setDraft('')
  }

  const stepBtn: React.CSSProperties = {
    ...mono,
    width: 34,
    height: 34,
    background: T.surface2,
    border: `1px solid ${T.border}`,
    color: T.text,
    fontSize: 16,
    cursor: 'pointer',
    borderRadius: 0,
  }

  const lane = (
    name: string,
    kicker: string,
    sub: string,
    accent: string,
    onClick: () => void,
  ) => (
    <button
      key={name}
      onClick={onClick}
      type="button"
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderLeft: `4px solid ${accent}`,
        padding: '14px 18px',
        cursor: 'pointer',
        borderRadius: 0,
      }}
    >
      <span style={{ ...label }}>{kicker}</span>
      <span style={{ ...display, display: 'block', fontSize: 42, lineHeight: 1, color: T.text }}>{name}</span>
      <span style={{ fontSize: 12, color: T.muted }}>{sub}</span>
    </button>
  )

  return (
    <div
      style={{
        background: T.bg,
        border: `1px solid ${T.border}`,
        color: T.text,
        fontFamily: "'Inter', system-ui, sans-serif",
        borderRadius: 0,
        overflow: 'hidden',
      }}
    >
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&display=swap');"}</style>

      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 16px',
          borderBottom: `1px solid ${T.border}`,
          background: T.surface,
        }}
      >
        <span style={{ ...display, fontSize: 22 }}>
          SHOW UP<span style={{ color: T.yellow }}>.</span>
        </span>
        <span style={{ ...mono, fontSize: 11, color: T.muted }}>
          STREAK <span style={{ color: T.yellow, fontWeight: 700 }}>{String(streak).padStart(2, '0')}</span> DAYS
        </span>
        <button
          onClick={resetDemo}
          type="button"
          style={{ ...label, background: 'none', border: `1px solid ${T.border}`, color: T.muted, padding: '4px 8px', cursor: 'pointer', borderRadius: 0 }}
        >
          Reset demo
        </button>
      </div>

      {/* Yuna line */}
      <div style={{ background: T.yunaSurface, borderLeft: `3px solid ${T.yellow}`, margin: 16, padding: '10px 14px', fontSize: 13 }}>
        <span style={{ ...label, color: T.yellow, display: 'block', marginBottom: 2 }}>Yuna</span>
        {yunaLine}
      </div>

      {/* Stage */}
      <div style={{ padding: '0 16px 16px' }}>
        {screen === 'today' && (
          <div style={{ display: 'grid', gap: 8 }}>
            {lane('Strength', 'Lift tonight', 'PR-ready. Plate 10 is waiting for a rematch.', T.yellow, startStrength)}
            {lane('Boxing', 'Switch session', 'Throw hands. Yuna reads the numbers after.', T.red, boxingNudge)}
            {lane('Rest', 'Honest day off', 'Log the rest and keep the streak human.', T.blue, logRest)}
          </div>
        )}

        {screen === 'live' && (
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, padding: '14px 18px' }}>
              <span style={label}>Set active</span>
              <div style={{ ...display, fontSize: 52, lineHeight: 1, color: T.yellow }}>Chest Press</div>
              <span style={{ ...mono, fontSize: 11, color: T.muted }}>
                SET {Math.min(setsDone + 1, TOTAL_SETS)} OF {TOTAL_SETS} &nbsp;·&nbsp; LAST KNOWN P10
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {(
                [
                  { name: 'WEIGHT', value: `P${plate}`, dec: () => setPlate((v) => Math.max(1, v - 1)), inc: () => setPlate((v) => v + 1) },
                  { name: 'REPS', value: String(reps), dec: () => setReps((v) => Math.max(1, v - 1)), inc: () => setReps((v) => v + 1) },
                ] as const
              ).map((s) => (
                <div key={s.name} style={{ background: T.surface, border: `1px solid ${T.border}`, padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={label}>{s.name}</span>
                    <div style={{ ...display, fontSize: 40, lineHeight: 1 }}>{s.value}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button onClick={s.dec} style={stepBtn} type="button">-</button>
                    <button onClick={s.inc} style={stepBtn} type="button">+</button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={completeSet}
              type="button"
              style={{ ...display, fontSize: 20, background: T.yellow, color: T.yellowInk, border: 'none', padding: '14px 18px', cursor: 'pointer', borderRadius: 0 }}
            >
              Complete set -&gt; rest -&gt;
            </button>
          </div>
        )}

        {screen === 'rest' && (
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, padding: '22px 18px', textAlign: 'center' }}>
            <span style={label}>Rest timer</span>
            <div style={{ ...mono, fontSize: 64, fontWeight: 700, color: T.yellow, lineHeight: 1.1 }}>
              00:{String(restLeft).padStart(2, '0')}
            </div>
            <p style={{ fontSize: 12, color: T.muted, margin: '6px 0 12px' }}>
              Demo seconds run faster than gym seconds 555
            </p>
            <button
              onClick={() => setRestLeft(0)}
              type="button"
              style={{ ...display, fontSize: 15, background: 'none', border: `1px solid ${T.border}`, color: T.text, padding: '8px 16px', cursor: 'pointer', borderRadius: 0 }}
            >
              {setsDone >= TOTAL_SETS ? 'Cut to summary ->' : 'Skip rest ->'}
            </button>
          </div>
        )}

        {screen === 'summary' && (
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, padding: '16px 18px' }}>
              <span style={label}>Session summary</span>
              <div style={{ ...display, fontSize: 46, lineHeight: 1, color: T.yellow }}>Today’s Work</div>
              {sessionKind === 'strength' ? (
                <p style={{ ...mono, fontSize: 12, color: T.muted, margin: '8px 0 0' }}>
                  CHEST PRESS · P{plate} · {TOTAL_SETS}X{reps} · CLEAN
                  {chatLogs > 0 ? ` · +${chatLogs} CHAT LOG${chatLogs > 1 ? 'S' : ''}` : ''}
                </p>
              ) : (
                <p style={{ ...mono, fontSize: 12, color: T.muted, margin: '8px 0 0' }}>REST · LOGGED HONESTLY · STREAK KEPT</p>
              )}
            </div>
            <div style={{ background: T.yunaSurface, borderLeft: `3px solid ${T.yellow}`, padding: '10px 14px', fontSize: 13 }}>
              <span style={{ ...label, color: T.yellow, display: 'block', marginBottom: 2 }}>Yuna’s call</span>
              {sessionKind === 'strength'
                ? 'Short board still counts. Take the win, loosen up, and come back tomorrow.'
                : 'Rest is a lane, not a loophole. See you tomorrow night~'}
            </div>
            <button
              onClick={resetDemo}
              type="button"
              style={{ ...display, fontSize: 18, background: T.yellow, color: T.yellowInk, border: 'none', padding: '12px 18px', cursor: 'pointer', borderRadius: 0 }}
            >
              Back to today -&gt;
            </button>
          </div>
        )}
      </div>

      {/* Yuna chat — the intent guardrail, playable */}
      <div style={{ borderTop: `1px solid ${T.border}`, background: T.surface, padding: 16 }}>
        <span style={label}>Talk to Yuna · watch the intent chip — only clear signals write a log</span>
        <div style={{ maxHeight: 180, overflowY: 'auto', margin: '10px 0', display: 'grid', gap: 6 }}>
          {chat.length === 0 && (
            <p style={{ fontSize: 12, color: T.dim, margin: 0 }}>
              Try: “just did chest press plate 10, 3 sets” — then try “good night” and compare.
            </p>
          )}
          {chat.map((m, i) =>
            m.from === 'you' ? (
              <div key={i} style={{ justifySelf: 'end', background: T.yellow, color: T.yellowInk, padding: '6px 10px', fontSize: 13, maxWidth: '85%' }}>
                {m.text}
              </div>
            ) : (
              <div key={i} style={{ justifySelf: 'start', background: T.yunaSurface, padding: '6px 10px', fontSize: 13, maxWidth: '85%' }}>
                <span style={{ ...mono, fontSize: 9, letterSpacing: '0.15em', color: m.logged ? T.yellowInk : T.muted, background: m.logged ? T.yellow : T.surface2, padding: '1px 5px', marginRight: 6 }}>
                  {(m.intent ?? 'casual').toUpperCase()}{m.logged ? ' · WROTE A LOG' : ' · NO WRITE'}
                </span>
                {m.text}
              </div>
            ),
          )}
          <div ref={chatEndRef} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendChat()
            }}
            placeholder="Tell Yuna something..."
            style={{ flex: 1, background: T.bg, border: `1px solid ${T.border}`, color: T.text, padding: '10px 12px', fontSize: 13, borderRadius: 0, outline: 'none' }}
          />
          <button
            onClick={sendChat}
            type="button"
            style={{ ...display, fontSize: 15, background: T.yellow, color: T.yellowInk, border: 'none', padding: '0 18px', cursor: 'pointer', borderRadius: 0 }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
