import { BaseEntity } from "./BaseEntity";

export interface Customer extends BaseEntity{
  name: string;
  phone?: string;
  email?: string;
}