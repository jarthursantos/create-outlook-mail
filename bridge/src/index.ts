import fs from 'fs'
import path from 'path'

import { IEmailOptions } from './types'
import { execAsync, CONSOLE_EXE_PATH, fixPath } from './utils'

export async function createMail(options: IEmailOptions, modal: boolean = false) {
  const { to, body, bodyType, attachments } = options

  if (!to || to.length === 0) {
    throw Error('to is a required field')
  }

  if (!body || body.length === 0) {
    throw Error('body is a required field')
  }

  if (!bodyType) {
    options.bodyType = 'text'
  }

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

  fs.writeFileSync(filePath, JSON.stringify(options, null, 2))

  await execAsync(CONSOLE_EXE_PATH, args)

  fs.unlinkSync(filePath)
}

export * from './types'