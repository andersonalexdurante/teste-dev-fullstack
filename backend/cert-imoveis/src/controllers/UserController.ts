import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { validate } from 'class-validator'
 
import User from '../models/Users'

class UserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User)
        const {name, email, phoneNumber, password} = req.body

        if(!name || !email || !phoneNumber || !password){
            return res.json({
                message: 'Fill the fields'
            })
        }

        const emailExists = await repository.findOne({where: {email}})
        const phoneExists = await repository.findOne({where: {phoneNumber}})

        if(emailExists) {
            return res.send('This email is already registered')
        }
        if(phoneExists) {
            return res.send('This phone number is already registered')
        }

        const newUser = repository.create({ name, email, phoneNumber, password })
        validate(newUser).then(async errors =>  {
            if(errors.length > 0) {
                const allErrors: Array<any> = []
                errors.forEach(error => {
                    allErrors.push(error.constraints)
                });
                return res.json({errors: allErrors})     
            }
            else {
                
                await repository.save(newUser)
                return res.json(newUser)
            }
        })
        
    }
}

export default new UserController()