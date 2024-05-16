import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { CommonEntity } from 'src/shared/entites/common.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class User extends CommonEntity {
  @Column({ type: 'text' })
  first_name: string;

  @Column({ type: 'text' })
  last_name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  phone: string;

  @Column({ type: 'text', default: 'user' })
  role: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'text' })
  refresh_token: string;

  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Cart;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
