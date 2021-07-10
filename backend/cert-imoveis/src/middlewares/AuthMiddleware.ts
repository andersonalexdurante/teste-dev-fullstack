import { Request, Response, NextFunction } from "express"
import * as jwt from 'jsonwebtoken'

interface TokenProps {
    id: number, 
    iat: number,
    exp: number
}

export default function AuthMiddleware(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers

    /**
     * Verify if exists a autorization header, if not it kills the request
     */
    if(!authorization) {
        return res.sendStatus(401)
    }

    /**
     * Get the token 
     */
    const token = authorization.replace('Bearer', '').trim()

    /**
     * JWT verify if the token is valid, if it is we put the userId in the Express request
     */
    try {
        const data = jwt.verify(token, 'secret')
        const { id } = data as TokenProps

        req.userId = id
        return next()
    } catch {
        return res.sendStatus(401)
    }
} 