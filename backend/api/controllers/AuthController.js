const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../../.env");
const { AuthServices } = require("../services");
const authServices = new AuthServices();

class AuthController {
  static encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  static async signin(req, res) {
    const userInfo = req.body;

    try {
      const user = await authServices.getUser(userInfo.user);

      const isMatch = bcrypt.compareSync(userInfo.password, user.password);
      if (!isMatch) return res.status(401).send("User/Password invalid!");

      const now = Math.floor(Date.now() / 1000);

      const payload = {
        id: user.id,
        user: user.user,
        iat: now,
        exp: now + 60 * 60 * 24 * 3,
      };

      return res.status(200).json({
        ...payload,
        token: jwt.encode(payload, authSecret),
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async validateToken(req, res) {
    const userData = req.body || null;

    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AuthController;
