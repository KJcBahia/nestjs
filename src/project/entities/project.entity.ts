import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', default: '' })
  projectName: string;

  @Column({ default: '' })
  description?: string;

  @Column({ default: '' })
  location?: string;

  @Column({ name: 'current_phase', default: '' })
  currentPhase?: string;
}
