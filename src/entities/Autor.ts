import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";


  @Entity("authors")

class Autor {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "date", nullable: false })
  birthdate: Date;

  @Column({ type: "text", nullable: true })
  biography: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  nationality: string;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}

export default Autor;