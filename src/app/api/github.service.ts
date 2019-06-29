import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl: any;
  baseSearchRepoPath: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.github.com';
    this.baseSearchRepoPath = '/search/repositories?q=';
  }

  getRepos(query): Observable<any> {
    const url = this.baseUrl + this.baseSearchRepoPath + query;
    return this.http.get(url);
  }

  getLocalTestData(): Observable<any> {
    return this.http.get('assets/data/testData.json');
  }
}
