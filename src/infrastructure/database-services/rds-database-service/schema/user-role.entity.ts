import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("user_role", { schema: "dmpro" })
export class UserRole {
  @Column({ unique: true, type: "uuid", name: "row_id" })
  rowId: string;

  @PrimaryColumn({ type: "varchar", length: 64, name: "org_id", primary: true })
  orgId: string;

  @PrimaryColumn({ type: "varchar", length: 64, name: "user_id", primary: true })
  userId: string;

  @Column({ type: "varchar", length: 16, name: "dmpro_role", default: "manager" })
  dmproRole: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
