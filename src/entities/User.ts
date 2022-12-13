import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 20 })
  clientId?: string;

  @Column({ length: 60 , default: "", nullable: true})
  name?: string;
}