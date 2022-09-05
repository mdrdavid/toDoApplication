
import jwt from "jsonwebtoken"

const config = process.env;

const verifyToken = (req, res, next) => {
  const authHeader =
    req.body.token || req.query.token || req.headers["authorization"];
  //extracting token
  const token = authHeader.substring(7, authHeader.length);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const verified = jwt.verify(token, config.TOKEN_KEY);
    if (verified) {
      const decoded = jwt.decode(token, { complete: true });
      req.user = decoded;
      console.log("decoded", decoded)
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;