import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Repository } from '../../model/repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repository;
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.getRepository("algaworks");
  }

  getRepository(username: string){
    this.repositoryService.getRepository(username).subscribe((repository: Repository) => {
      this.repository = repository;
    });
  }



}
