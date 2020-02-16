const crypto = require('crypto')
const authConfig = require('../../config/auth')

class SessionController {
  async sign(req, res) {
    const payload = JSON.stringify({
      email: req.body.email,
      password: req.body.password
    })
    const header = JSON.stringify({
      alg: req.headers.alg,
      typ: req.headers.typ
    })

    const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '')
    const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '')

    const data = base64Header + '.' + base64Payload

    const signature = crypto
      .createHmac('sha256', authConfig.secret)
      .update(data)
      .digest('base64')

    const token = base64Header + '.' + base64Payload + '.' + signature

    return res.json({ token })
  }

  test(req, res) {
    res.send('TOKEN VÁLIDO')
  }
}

module.exports = new SessionController()
