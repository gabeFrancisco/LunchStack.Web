import { BaseEntity } from "./BaseEntity";
import { Customer } from "./Customer";
import { ProductOrder } from "./ProductOrder";
import { Table } from "./Table";
import { OrderState } from "./enums/OrderState";

export interface OrderSheet extends BaseEntity{
    orderState: OrderState;
    openBy?: string;
    tableId: number;
    table?: Table
    productOrders: Array<ProductOrder>;
    customerId: number;
    customer?: Customer;
} 