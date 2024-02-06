import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("user_storage", { schema: "dmpro" })
export class UserStorage {
  @PrimaryColumn({ unique: true, type: "uuid", name: "row_id" })
  rowId: string;

  @Column({ type: "varchar", length: 64, name: "user_id" })
  userId: string;

  @Column({ type: "varchar", length: 64 })
  category: string;

  /**
   * 230721 Hyukjin Kwon
   * DM-pro 에서는 userData에 속하는 json의 형태를 client에게 위임했다.
   * 따라서, object type 으로 entity를 지정한다.
   *  */
  @Column({ type: "simple-json", name: "user_data" })
  userData: object;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
