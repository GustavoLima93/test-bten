import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export default class User {
  @PrimaryGeneratedColumn('uuid')
	id: string;

  @Column('varchar', {
    name: 'home_team',
    nullable: true,
  })
  homeTeam: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  password: string;

  @Column('int')
  age: number;

  @Column('double precision')
  height: number;

  @Column('timestamp', {
    name: 'created_at',
    default: 'NOW()',
  })
	createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    onUpdate: 'NOW()',
    nullable: true,
  })
	updatedAt: Date;
}