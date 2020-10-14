using Newtonsoft.Json;
using Microsoft.Office.Interop.Outlook;
using System;
using System.IO;

namespace console
{
    class Program
    {
        static void Main(string[] args)
        {
            var app = new Application();

            MailItem message = (MailItem) app.CreateItem(OlItemType.olMailItem);

            var jsonPath = AppDomain.CurrentDomain.BaseDirectory + @"\mail.json";
            var json = File.ReadAllText(jsonPath);

            MailOptions options = JsonConvert.DeserializeObject<MailOptions>(json);

            message.To = options.To;
            message.Subject = options.Subject;
            message.CC = options.CC;
            message.BCC = options.BCC;

            if (options.BodyType.Equals("html"))
            {
                message.HTMLBody = options.Body;
            }
            else
            {
                message.Body = options.Body;
            }

            if (options.Attachments.Length != 0)
            {
                foreach (var attach in options.Attachments)
                {
                    message.Attachments.Add(attach, OlAttachmentType.olByValue, Type.Missing, Type.Missing);
                }
            }

            bool modal = args.Length != 0 && args[0].Equals("--modal");

            message.Display(modal);
        }
    }
}
