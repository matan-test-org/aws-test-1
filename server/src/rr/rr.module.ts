import { Module } from "@nestjs/common";
import { RrModuleBase } from "./base/rr.module.base";
import { RrService } from "./rr.service";
import { RrController } from "./rr.controller";
import { RrResolver } from "./rr.resolver";

@Module({
  imports: [RrModuleBase],
  controllers: [RrController],
  providers: [RrService, RrResolver],
  exports: [RrService],
})
export class RrModule {}
