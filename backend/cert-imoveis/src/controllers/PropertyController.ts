import { validate } from 'class-validator'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Property } from '../models/Property'

class PropertyController {

    async store(req: Request, res: Response){
        const repository = getRepository(Property)
        const {title, area, cep, address, city, uf, district, patio, complement, houseNumber, description, price} = req.body

        if(!title || !area || !cep || !address || !city || !uf || !district || !patio || complement || houseNumber ||description || price){
            return res.json({
                message: 'Fill the fields'
            })
        }

        const propertyAlreadyExists = await repository.findOne({where: {houseNumber, patio, cep}})

        if(propertyAlreadyExists) {
            return res.send('This property is already registered')
        }

        const newProperty = await repository.create({title, area, cep, address, city, uf, district, patio, complement, houseNumber, description, price})
        validate(newProperty).then(async errors => {
            if(errors.length > 0) {
                const allErrors: Array<any> = []
                errors.forEach(error => {
                    allErrors.push(error.constraints)
                });
                return res.json({errors: allErrors})     
            }
            else {
                await repository.save(newProperty)
                const returnProperty = await repository.findOne({where: {title: newProperty.title, area: newProperty.area, cep: newProperty.cep}})
                return res.json(returnProperty)
            }
        })
       


    }
}

export default new PropertyController()