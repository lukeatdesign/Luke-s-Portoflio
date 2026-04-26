import type { Tone } from './types'

interface Props {
  onSelect: (tone: Tone) => void
}

const TONES: { id: Tone; label: string; preview: string }[] = [
  {
    id: 'professional',
    label: '👔 Professional Luke',
    preview:
      '"I specialise in end-to-end UX research and design, with experience leading enterprise-level research engagements."',
  },
  {
    id: 'casual',
    label: '😊 Casual Luka',
    preview:
      '"I do UX research and design — been doing it about 8 years, worked on some pretty interesting stuff along the way."',
  },
  {
    id: 'tingtong',
    label: '🐱 ติงต๊อง Luka',
    preview:
      '"omg hi!! yes I do UX stuff and I\'ve been doing it for like 8 years and honestly it\'s been a journey (◍•ᴗ•◍)"',
  },
]

export function ToneStep({ onSelect }: Props) {
  return (
    <div className="onboarding-step">
      <p className="onboarding-prompt">
        Last thing — how should I talk to you?
      </p>
      <div className="tone-grid">
        {TONES.map((t) => (
          <button
            key={t.id}
            className="tone-card"
            onClick={() => onSelect(t.id)}
          >
            <span className="tone-label">{t.label}</span>
            <span className="tone-preview">{t.preview}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
