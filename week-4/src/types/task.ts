import { TStatus } from "./status";

export type TTask = {
  id: string;
  title: string;
  type: TStatus;
};
