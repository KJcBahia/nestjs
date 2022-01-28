import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, of } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto): Observable<UpdateProjectDto> {
    const proj = new Project();
    proj.description = createProjectDto.description;
    proj.currentPhase = createProjectDto.currentPhase;
    proj.location = createProjectDto.location;
    proj.projectName = createProjectDto.projectName;
    return from(this.projectRepository.save(proj));
  }

  findAll(): Observable<UpdateProjectDto[]> {
    return from(this.projectRepository.find());
  }

  findOne(id: number): Observable<UpdateProjectDto> {
    return from(this.projectRepository.findOne(id));
  }

  update(id: number, updateProjectDto: UpdateProjectDto): Observable<boolean> {
    this.projectRepository.update(id, updateProjectDto);
    return of(true);
  }

  remove(id: number): Observable<boolean> {
    this.projectRepository.delete(id);
    return of(true);
  }
}
