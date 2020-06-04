<<<<<<< HEAD
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
=======
class Category {
  id: string;

  title: string;

  created_at: Date;

>>>>>>> 8d7e856fe0d23a4629b861902608265c5a652adc
  updated_at: Date;
}

export default Category;
