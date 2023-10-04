import jwt from 'jsonwebtoken';
import jsonSecret from '../config/jsonSecret.js';

export default async function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  const accessToken = token;


  try {
    
    jwt.verify(accessToken, jsonSecret);

    const { id, email, role} = await jwt.decode(accessToken)

    req.loginId = id
    req.loginEmail = email
    req.loginRole = role

    if (role == "1") {

      next();
    } else {
      return res.status(403).json({ message: `Acesso negado. Você não é um administrador. ${decoded}` });
    }
  } catch (erro) {
    return res.status(401).json({ message: 'Token de autenticação inválido. ', erro });
  }
}
