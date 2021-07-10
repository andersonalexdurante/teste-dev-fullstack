import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import User from '../models/Users'


class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User)
        const {email, password} = req.body
        const user = await repository.findOne({where: {
            email: email
        }})

        if(!user){
            return res.sendStatus(401)
        }
        
        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return res.sendStatus(401)
        }

        const token = jwt.sign({id: user.id}, 'secret', {expiresIn: "1d"})

        delete user.password

        return res.json({
            user, 
            token
        })
    }
}

export default new AuthController
