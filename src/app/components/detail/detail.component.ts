import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../services/detail.service';
import { DetailRepository } from '../../model/detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detailRepository: DetailRepository;
  constructor(private detailService: DetailService) { }

  ngOnInit() {
  }

  getDetailrepository(fullname: string){
    return this.detailService.getDetailRepository(fullname).subscribe((detailRepository: DetailRepository) => {
        this.detailRepository = detailRepository;
    });
  }


}
