import { Module } from "@nestjs/common";
import { DmproDataService } from "./dmpro-data-service.service";
import { IDataService } from "../core/abstracts/data-service.abstract";

import { DucloCallerModule } from "@cloud-development-team/duclo-caller.module";
import { RdsDatabaseServicesModule } from "src/infrastructure/database-services/rds-database-service/rds-database-service.module";




@Module({
  imports: [
    DucloCallerModule.register({
      ducloDomains: {
        ducloPartnerDomain: process.env.DUCLO_PARTNER_DOMAIN,
        ducloPortalDomain : process.env.DUCLO_PORTAL_DOMAIN
      },
      extraOptions: {
        httpTimeout: Number(process.env.DUCLO_HTTP_TIMEOUT),
        tenantId: process.env.DUCLO_TENANT_ID,
        serviceId: process.env.DUCLO_SERVICE_ID,
      },
      mqttConOptions: {
        url: process.env.MQTT_URL,
        clientId: process.env.MQTT_CLIENT_ID,
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
      },
    }),
    RdsDatabaseServicesModule
  ],
  providers: [
    {
      provide: IDataService,
      useClass: DmproDataService,
    },
  ],
  exports: [IDataService],
})
export class DmproDataServiceModule {}
