namespace console
{
    public class MailOptions
    {
        public string To { get; set; }

        public string Subject { get; set; }

        public string CC { get; set; }

        public string BCC { get; set; }

        public string Body { get; set; }

        public string BodyType { get; set; }

        public string[] Attachments { get; set; }
    }
}
