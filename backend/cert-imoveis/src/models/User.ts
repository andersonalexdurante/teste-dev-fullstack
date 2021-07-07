import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'
import * as bcrypt from 'bcryptjs'


@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string

    @Column({nullable: false, unique: true})
    @IsEmail()
    email: string

    @Column({nullable: false, unique: true, type: "bigint"})
    @IsPhoneNumber("BR")
    phoneNumber: number;

    @Column({nullable: false})
    @IsString()
    @MinLength(8)
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }

}
