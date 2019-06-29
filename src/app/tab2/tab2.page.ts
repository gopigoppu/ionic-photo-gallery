import { Component } from '@angular/core';
import { GithubService } from '../api/github.service';
import { LoaderService } from '../util/loader.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  repos: any;

  constructor(private github: GithubService, private loader: LoaderService) { }


  searchRepo(query) {
    this.loader.show();
    console.log(query);
    this.github.getRepos(query).subscribe(value => {
      this.repos = value.items;
      this.loader.hide();
      console.log('search results :', value.items);
    });
  }

}
