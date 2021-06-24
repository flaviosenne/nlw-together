import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid'
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string

    @Column()
    message: string

    @ManyToOne(() => User)
    @JoinColumn({name:'user_receiver_id', referencedColumnName:'id'})
    userReceiver: User
    
    @ManyToOne(() => User)
    @JoinColumn({name:'user_sender_id', referencedColumnName:'id'})
    userSender: User

    @ManyToOne(() => Tag)
    @JoinColumn({name:'tag_id', referencedColumnName:'id'})
    tag: Tag

    @CreateDateColumn({name:'created_at'})
    createdAt: Date
    
    @UpdateDateColumn({name:'updated_at', nullable: true})
    updateAt: Date

    constructor(){
        if(!this.id) this.id = uuid()
    }
}

export {Compliment}