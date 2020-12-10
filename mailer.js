const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
        api_key: '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'
    }
}))

const send = ({ name, email, phone, subject, text }) => {

    const textBody = `
Name: ${name}   
Subject: ${subject}             
Email: ${email}
Phone: ${phone}
Body: ${text}
    `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const message = {
        from,
        to: 'nezofinance@gmail.com',
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send