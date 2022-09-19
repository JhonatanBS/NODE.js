import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uudiV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  drive_license: string;

  @Column()
  isAdmin: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uudiV4();
    }
  }
}

export { User };
