import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { CommonEntity } from 'src/shared/entites/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Review } from '../../review/entities/review.entity';

@Entity()
export class User extends CommonEntity {
  @Column({ type: 'text', nullable: true })
  first_name?: string;

  @Column({ type: 'text', nullable: true })
  last_name?: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  phone?: string;

  @Column({ type: 'text', default: 'user' })
  role: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text', nullable: true })
  refresh_token?: string;

  @Column({ type: 'integer', default: 0 })
  cart_count: number;

  @OneToMany(() => Cart, (cart) => cart.user)
  cart_items: Cart;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
