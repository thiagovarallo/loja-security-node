import jwt from 'jsonwebtoken';
import jsonSecret from '../config/jsonSecret.js';

const {verify, decode} = jwt;

export default async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(404).json({mensagem: `${token}`});
    }

    const accessToken = token;

    try {
        verify(accessToken, jsonSecret);

        const { id, email} = await decode(accessToken)

        req.loginId = id
        req.loginEmail = email
        

        return next()
    } catch (error) {
        res.status(401).json({mensagem: `${accessToken} and ${jsonSecret}`, error})
    }

}