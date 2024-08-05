const err = require("./error");
const nodemailer = require("nodemailer");
const config = require("../../../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.sendMail.mail,
    pass: config.sendMail.password,
  },
});

const mailOptions = (email: string, code: string) => {
  return {
    from: `${config.sendMail.mail}`,
    to: `${email}`,
    subject: "Codigo de verificación - Access Platform",
    html: `<article style="width: 100vw; height: 100vh; text-align: center;">
    <section style="display: inline-block; max-width: 900px; width: 100vw; height: 100vh; padding: 40px; text-align: center; color: #333; font-size: 16px; border-top: 40px solid black; border-bottom: 40px solid black;">
        <h2 style="font-size: 30px;">Código de verificación</h2>
        <p style="text-align: justify; display: inline-block;">Recuerda no compartir este correo con nadie, el PIN solo tiene vigencia una única vez.</p>
        <div style="margin: 60px 0; text-align: center;">
            <span style="display: inline-block;">Tu código de verificación es: </span>
            <span class="pin" style="background: #333; padding: 10px; border-radius: 4px; font-size: 20px; color: white; display: inline-block;">${code}</span>
        </div>
        <p style="text-align: justify; display: inline-block;">Si recibes este PIN pero no lo solicitaste, puedes ignorar el presente correo.</p>
    </section>
</article>
`,
  };
};

function sendMail(email: string, code: string) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions(email, code), (error: any, info: any) => {
      if (error) {
        return reject(error);
      } else {
        resolve("Se envio su mail");
      }
    });
  });
}

export = sendMail;
