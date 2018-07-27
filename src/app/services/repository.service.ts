import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GITHUB_PUBLIC_API } from "./githubpublic.api";

@Injectable()
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getRepository(username: string){
    return this.http.get(`${GITHUB_PUBLIC_API}`+ '/users/' + username + '/repos');
  }
}
