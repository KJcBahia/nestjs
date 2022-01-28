import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, of } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto): Observable<UpdateUserDto> {
    const proj = new User();
    proj.firstName = createUserDto.firstName;
    proj.lastName = createUserDto.lastName;
    proj.username = createUserDto.username;
    proj.password = createUserDto.password;
    return from(this.userRepository.save(proj));
  }

  findAll(): Observable<UpdateUserDto[]> {
    return from(this.userRepository.find());
  }

  findOne(id: number): Observable<UpdateUserDto> {
    return from(this.userRepository.findOne(id));
  }

  update(id: number, updateUserDto: UpdateUserDto): Observable<boolean> {
    this.userRepository.update(id, updateUserDto);
    return of(true);
  }

  remove(id: number): Observable<boolean> {
    this.userRepository.delete(id);
    return of(true);
  }
}
