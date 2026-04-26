import { useState } from 'react'
import type { FlowStep, Persona, Tone } from './types'
import { PersonaStep } from './PersonaStep'
import { QuestionStep } from './QuestionStep'
import { ToneStep } from './ToneStep'
import { ChatInterface } from './ChatInterface'

export function ChatbotFlow() {
  const [step, setStep] = useState<FlowStep>('persona')
  const [persona, setPersona] = useState<Persona>('curious')
  const [contextSummary, setContextSummary] = useState('')
  const [tone, setTone] = useState<Tone>('casual')

  const handlePersonaSelect = (p: Persona) => {
    setPersona(p)
    setStep('questions')
  }

  const handleQuestionsComplete = (summary: string) => {
    setContextSummary(summary)
    setStep('tone')
  }

  const handleToneSelect = (t: Tone) => {
    setTone(t)
    setStep('chat')
  }

  return (
    <div className="chatbot-page">
      <header className="chatbot-header">
        <a href="#/" className="chatbot-back">← Back to portfolio</a>
      </header>

      <main className="chatbot-main">
        {step === 'persona' && (
          <PersonaStep onSelect={handlePersonaSelect} />
        )}
        {step === 'questions' && (
          <QuestionStep persona={persona} onComplete={handleQuestionsComplete} />
        )}
        {step === 'tone' && (
          <ToneStep onSelect={handleToneSelect} />
        )}
        {step === 'chat' && (
          <ChatInterface
            persona={persona}
            contextSummary={contextSummary}
            tone={tone}
            onToneChange={setTone}
          />
        )}
      </main>
    </div>
  )
}
