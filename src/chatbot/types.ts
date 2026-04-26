export type Persona = 'recruiter' | 'designer' | 'client' | 'curious'
export type Tone = 'professional' | 'casual' | 'tingtong'
export type FlowStep = 'persona' | 'questions' | 'tone' | 'chat'

export interface Message {
  role: 'user' | 'assistant'
  content: string
}
