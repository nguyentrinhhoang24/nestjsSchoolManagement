import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BranchController } from "./branch.controller";
import { BranchService } from "./branch.service";
import { BranchSchema } from "src/branch/schemas/branch.schema";

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'branch', schema: BranchSchema}]),
    ],
    controllers: [BranchController],
    providers: [BranchService],
    exports: [BranchService],
  })
  export class BranchModule {}