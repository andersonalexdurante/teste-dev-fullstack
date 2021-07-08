import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { MinLength, IsString, IsDecimal, IsInt, MaxLength } from 'class-validator'

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: "date"})
    publicationDate: Date

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

}
