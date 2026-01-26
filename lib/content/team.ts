export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  focus: string[]
  links: {
    github?: string
    linkedin?: string
    website?: string
  }
}

export const team: TeamMember[] = []
