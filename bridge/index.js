const { createMail } = require('./dist/index')

createMail({ 
  to: 'arthur.tecinformatica@gmail.com',
  body: '<h1>Teste</h1>',
  bodyType: 'html',
  bcc: 'arthur.bcc@gmail.com',
  cc: 'arthur.cc@gmail.com',
  subject: 'Assunto'
})