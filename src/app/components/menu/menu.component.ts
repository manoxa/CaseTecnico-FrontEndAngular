import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output } from '@angular/core';
import { User } from '../../model/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../model/repository.model';
import { Subject } from 'rxjs';
import { DetailService } from '../../services/detail.service';
import { DetailRepository } from '../../model/detail.model';
import { DataTableDirective } from '../../../../node_modules/angular-datatables';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit, OnDestroy, OnInit {


  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  user: User;
  repository: Repository;
  detailRepository: DetailRepository;
  username: string;
  ativo: boolean = false;
  fullname: string;


  constructor(private userService: UserService,
    private repositoryService: RepositoryService,
    private detailService: DetailService) { }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10
    };
  }

  mostrar() {
    this.ativo = true;
  }

  onSubmit(formSearchUser: NgForm) {
    this.username = formSearchUser.form.controls.searchuser.value;
    this.searchUserGitHub(this.username);
    this.searchUserRepository(this.username);
    if(this.username != ''){
      this.mostrar();
    }else{
      this.ativo = false;
    }
  }

  searchUserGitHub(user: string) {
    this.userService.getUser(user).subscribe((usermap: User) => {
      this.user = usermap;
    });
  }

  searchUserRepository(username: string) {
    this.repositoryService.getRepository(username).subscribe((repository: Repository) => {
      this.repository = repository;
      this.rerender();      
    });
  }

  getDetailRepository(formRepos: NgForm) {
    this.fullname = formRepos.form.controls.detail.value;
    this.detailService.getDetailRepository(this.fullname).subscribe((detailRepository: DetailRepository) => {
      this.detailRepository = detailRepository;
    });
  }
  
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

}
