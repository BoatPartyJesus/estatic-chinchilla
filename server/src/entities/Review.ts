import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "Anon", type: "varchar" })
  reviewerName: string;

  @Column({ length: 255, type: "varchar" })
  comment: string;

  @Column({ default: 0, type: "int" })
  likes: number;
}
