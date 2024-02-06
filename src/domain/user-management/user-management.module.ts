import { Module } from "@nestjs/common";
import { UserManagementController } from "./user-management.controller";
import { UserManagementService } from "./user-management.service";
import { DmproDataServiceModule } from "src/infrastructure/data-services/dmpro-data-service/dmpro-data-service.module";

@Module({
  imports: [
    DmproDataServiceModule
  ],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule {}
