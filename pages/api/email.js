const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const text = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const msg = {
    to: "idkrazu@gmail.com", // Change to your recipient
    from: "hello@adamsokolski.pl", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: text,
    html: text.replace(/\r\n/g, "<br>"),
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(200).json({ name: "ok" });
}
