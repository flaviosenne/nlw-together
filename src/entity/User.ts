import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column({nullable: true})
    password: string
    
    @Column({nullable: true})
    admin: boolean

    @CreateDateColumn({name:'created_at'})
    createdAt: Date
    
    @UpdateDateColumn({name:'updated_at', nullable: true})
    updateAt: Date

    constructor(){
        if(!this.id) this.id = uuid()
    }
}

export {User}