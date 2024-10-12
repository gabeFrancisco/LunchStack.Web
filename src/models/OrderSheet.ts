import { BaseEntity } from "./BaseEntity";
import { ProductOrder } from "./ProductOrder";
import { OrderState } from "./enums/OrderState";

export interface OrderSheet extends BaseEntity{
    orderState: OrderState;
    openBy?: string;
    tableId: number;
    productOrders: Array<ProductOrder>;
    customerId?: number;
} 