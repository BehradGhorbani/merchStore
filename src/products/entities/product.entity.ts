import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public userId: string

  @Column()
  public title: string

  @Column()
  public description: string

  @CreateDateColumn({type: 'timestamptz'})
  public createdAt: Date;

  @UpdateDateColumn({type: 'timestamptz'})
  public updatedAt: Date;
}
