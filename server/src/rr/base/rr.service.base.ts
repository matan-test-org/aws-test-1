/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Rr } from "@prisma/client";

export class RrServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RrFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RrFindManyArgs>
  ): Promise<number> {
    return this.prisma.rr.count(args);
  }

  async findMany<T extends Prisma.RrFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RrFindManyArgs>
  ): Promise<Rr[]> {
    return this.prisma.rr.findMany(args);
  }
  async findOne<T extends Prisma.RrFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RrFindUniqueArgs>
  ): Promise<Rr | null> {
    return this.prisma.rr.findUnique(args);
  }
  async create<T extends Prisma.RrCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RrCreateArgs>
  ): Promise<Rr> {
    return this.prisma.rr.create<T>(args);
  }
  async update<T extends Prisma.RrUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RrUpdateArgs>
  ): Promise<Rr> {
    return this.prisma.rr.update<T>(args);
  }
  async delete<T extends Prisma.RrDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RrDeleteArgs>
  ): Promise<Rr> {
    return this.prisma.rr.delete(args);
  }
}
