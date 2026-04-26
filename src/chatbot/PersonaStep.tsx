import type { Persona } from './types'

interface Props {
  onSelect: (persona: Persona) => void
}

const PERSONAS: { id: Persona; emoji: string; label: string; description: string }[] = [
  {
    id: 'recruiter',
    emoji: '🏢',
    label: 'Recruiter',
    description: "Evaluating Luka for a role",
  },
  {
    id: 'designer',
    emoji: '🎨',
    label: 'Designer / Interviewer',
    description: "Reviewing portfolio or assessing skills",
  },
  {
    id: 'client',
    emoji: '💼',
    label: 'Client',
    description: "Exploring a potential project or collaboration",
  },
  {
    id: 'curious',
    emoji: '👀',
    label: 'Just Curious',
    description: "Exploring and learning about Luka's work",
  },
]

export function PersonaStep({ onSelect }: Props) {
  return (
    <div className="onboarding-step">
      <p className="onboarding-prompt">
        Hey! Before we dive in — who are you?
      </p>
      <div className="persona-grid">
        {PERSONAS.map((p) => (
          <button
            key={p.id}
            className="persona-card"
            onClick={() => onSelect(p.id)}
          >
            <span className="persona-emoji">{p.emoji}</span>
            <span className="persona-label">{p.label}</span>
            <span className="persona-description">{p.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
