import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GITHUB_PUBLIC_API } from './githubpublic.api';

@Injectable()
export class DetailService {

  constructor(private http: HttpClient) { }

  getDetailRepository(fullname: string){
    return this.http.get(`${GITHUB_PUBLIC_API}` + '/repos/' + fullname);
  }
}
