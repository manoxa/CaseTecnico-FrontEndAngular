import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GITHUB_PUBLIC_API } from "./githubpublic.api";
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

constructor(private http: HttpClient){}

findAllUser(username: string){
    return this.http.get<any[]>(`${GITHUB_PUBLIC_API}` + username).pipe(map(data => data));;
}

}
