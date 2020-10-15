# create-outlook-mail

Create Outlook new mail dialog with form completation

## Screenshot

[Mail Dialog](.github/scheenshot.png)

## Example

```jsx
  import { createMail, IEmailOptions } from 'create-outlook-mail'

  const options: IEmailOptions = { /* options */ }

  const isModal = false

  await createMail(options, isModal) 
```

```jsx
IEmailOptions {
  to?: string
  subject?: string
  cc?: string
  bcc?: string
  body?: string
  bodyType?: 'html' | 'text'
  attachments?: string[]
}
```

Read more about modal option [here](https://docs.microsoft.com/pt-br/dotnet/api/microsoft.office.interop.outlook._mailitem.display?view=outlook-pia)
