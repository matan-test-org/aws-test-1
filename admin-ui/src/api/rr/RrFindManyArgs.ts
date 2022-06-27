import { RrWhereInput } from "./RrWhereInput";
import { RrOrderByInput } from "./RrOrderByInput";

export type RrFindManyArgs = {
  where?: RrWhereInput;
  orderBy?: Array<RrOrderByInput>;
  skip?: number;
  take?: number;
};
