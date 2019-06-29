import { Component, OnInit } from '@angular/core';
import { GithubService } from '../api/github.service';
import { LoaderService } from '../util/loader.service';

interface UserInfo {
  users: any;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  users: any;

  constructor(private github: GithubService, private loader: LoaderService) { }

  ngOnInit() {
    this.loader.show();
    this.github.getLocalTestData().subscribe(value => {
      this.loader.hide();
      console.log('local data : ', value);
      this.users = value.users;
    });

  }



}
