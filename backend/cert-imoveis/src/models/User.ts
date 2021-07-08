import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm";
import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'
import * as bcrypt from 'bcryptjs'
import { Property } from "./Property";


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

/**
 * hash password with bcrypt
 */
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8)
    }

/**
 * relationship between many properties (the user can have many properties)
 */
    @OneToMany(() => Property, property => property.userId)
    properties: Property[];

}
