import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RrService } from "./rr.service";
import { RrControllerBase } from "./base/rr.controller.base";

@swagger.ApiTags("rrs")
@common.Controller("rrs")
export class RrController extends RrControllerBase {
  constructor(
    protected readonly service: RrService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
