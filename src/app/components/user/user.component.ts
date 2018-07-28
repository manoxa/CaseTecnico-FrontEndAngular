import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../model/repository.model';
import { DetailRepository } from '../../model/detail.model';
import { DetailService } from '../../services/detail.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  user: User;
  repository: Repository;
  detailRepository: DetailRepository;
  username: string;
  fullname: string;
  ativo: boolean = false;

  constructor(
    private userService: UserService,
    private repositoryService: RepositoryService,
    private detailService: DetailService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  mostrar() {
    this.ativo = true;
  }

  onSubmit(formSearchUser: NgForm) {
    this.username = formSearchUser.form.controls.user.value;
    this.getUser(this.username);
    this.getRepositoryUser(this.username);
  }

  getUser(username: string) {
    this.userService.getUser(username).subscribe((user: User) => {
      this.user = user;
    });
  }

  getRepositoryUser(username: string) {
    this.repositoryService.getRepository(username).subscribe((repository: Repository) => {
      this.repository = repository;
      this.dtTrigger.next();
    });
  }

  getDetailRepository(formRepos: NgForm) {
    this.fullname = formRepos.form.controls.detail.value;
    this.detailService.getDetailRepository(this.fullname).subscribe((detailRepository: DetailRepository) => {
      this.detailRepository = detailRepository;
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
