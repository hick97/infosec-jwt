const authConfig = require('../../config/auth')
const crypto = require('crypto')
const verify = crypto.createVerify('SHA256')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const jwtHeader = token.split('.')[0]
    const jwtPayload = token.split('.')[1]
    const jwtSignature = token.split('.')[2]

    const data = jwtHeader + '.' + jwtPayload

    const signatureValidator = crypto
      .createHmac('sha256', authConfig.secret)
      .update(data)
      .digest('base64')

    if (signatureValidator !== jwtSignature) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
