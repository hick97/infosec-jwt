const crypto = require('crypto')
const authConfig = require('../../config/auth')

class SessionController {
  async sign(req, res) {
    const date = new Date()

    const payload = JSON.stringify({
      email: req.body.email,
      password: req.body.password,
      date,
      ttl: process.env.TTL
    })
    const header = JSON.stringify({
      alg: req.headers.alg,
      typ: req.headers.typ
    })

    const base64Header = Buffer.from(header)
      .toString('base64')
      .replace(/=/g, '')
    const base64Payload = Buffer.from(payload)
      .toString('base64')
      .replace(/=/g, '')

    const data = base64Header + '.' + base64Payload

    const signature = crypto
      .createHmac('sha256', authConfig.secret)
      .update(data)
      .digest('base64')

    const token = base64Header + '.' + base64Payload + '.' + signature

    return res.json({ token })
  }

  test(req, res) {
    const list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    return res.json({ itens: list, message: 'Token válido' })
  }
}

module.exports = new SessionController()
