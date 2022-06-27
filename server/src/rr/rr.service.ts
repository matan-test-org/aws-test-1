import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RrServiceBase } from "./base/rr.service.base";

@Injectable()
export class RrService extends RrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
