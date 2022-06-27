import { Rr as TRr } from "../api/rr/Rr";

export const RR_TITLE_FIELD = "id";

export const RrTitle = (record: TRr): string => {
  return record.id || record.id;
};
