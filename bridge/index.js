const { createMail } = require('./dist/index')

createMail({ to: 'arthur.tecinformatica', body: 'test', bodyType: 'html' })