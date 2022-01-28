import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', default: '' })
  firstName: string;

  @Column({ name: 'last_name', default: '' })
  lastName?: string;

  @Column({ default: '' })
  username?: string;

  @Column({ name: 'project_name', default: '' })
  password?: string;
}