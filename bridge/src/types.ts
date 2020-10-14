export interface IEmailOptions {
  to?: string
  subject?: string
  cc?: string
  bcc?: string
  body?: string
  bodyType?: 'html' | 'text'
  attachments?: string[]
}
