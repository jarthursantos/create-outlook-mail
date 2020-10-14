import fs from 'fs'
import path from 'path'

import { IEmailOptions } from './types'
import { execAsync, CONSOLE_EXE_PATH, fixPath } from './utils'

export async function createMail(options: IEmailOptions = {}, modal: boolean = false) {
  const { attachments } = options

  if (attachments) {
    attachments.forEach(attachment => {
      if (!fs.existsSync(attachment)) {
        throw Error(`${attachment} don't exists`)
      }
    })
  }
  
  const args: string[] = []

  if (modal) {
    args.push('--modal')
  }

  const filePath = fixPath(path.resolve(__dirname, 'mail.json'))

  const mailConfig = {
    To: options.to || '',
    Subject: options.subject || '',
    CC: options.cc || '',
    BCC: options.bcc || '',
    Body: options.body || '',
    BodyType: options.bodyType || 'text',
    Attachments: options.attachments || []
  }

  fs.writeFileSync(filePath, JSON.stringify(mailConfig, null, 2))

  await execAsync(CONSOLE_EXE_PATH, args)

  fs.unlinkSync(filePath)
}

export * from './types'