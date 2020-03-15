const authConfig = require("../../config/auth");
const crypto = require("crypto");
const fns = require('date-fns');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const jwtHeader = token.split(".")[0];
    const jwtPayload = token.split(".")[1];
    const jwtSignature = token.split(".")[2];

    const decodedPayload = JSON.parse(Buffer.from(jwtPayload, 'base64').toString('utf8'));
    const { date, ttl } = decodedPayload;
    const oldDate = fns.parseISO(date)

    const dateToCompare = fns.add(oldDate, {
      seconds: ttl,
    })

    const dateIsValid = fns.isBefore(new Date(), dateToCompare)

    if (!dateIsValid) {
      return res.status(401).json({ error: "Token expired" });
    }

    const data = jwtHeader + "." + jwtPayload;

    const signatureValidator = crypto
      .createHmac("sha256", authConfig.secret)
      .update(data)
      .digest("base64");

    if (signatureValidator !== jwtSignature) {
      return res.status(401).json({ error: "Invalid token" });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
