import {BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { MinLength, IsString, IsDecimal, IsInt, MaxLength } from 'class-validator'
import User from "./User";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    publicationDate: string

    @Column({nullable: false})
    @IsString()
    @MinLength(10)
    title: string

    @Column({nullable: false, type: "text"})
    @IsString()
    @MinLength(30)
    description: string

    @Column({nullable: false, type: 'decimal'})
    @IsDecimal()
    price: number

    @Column({nullable: false})
    @IsDecimal()
    area: number

    @Column({nullable: false})
    @IsInt()
    cep: number

    @Column({nullable: false})
    @IsString()
    address: string

    @Column({nullable: false})
    @IsString()
    city: string

    @Column({nullable: false})
    @IsString()
    @MaxLength(2)
    uf: string

    @Column({nullable: false})
    @IsString()
    district: string

    @Column({nullable: false})
    @IsString()
    patio: string

    @Column({nullable: false})
    @IsString()
    complement: string

    @Column({nullable: false})
    @IsInt()
    houseNumber: number

    @BeforeInsert()
    addPuclicationDate(){
        const date = new Date()
        this.publicationDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear}`
    }

/**
 * relationship between one user (a property only have 1 owner) 
 */
    @OneToOne(() => User)
    @JoinColumn()
    userId: User
    
}
