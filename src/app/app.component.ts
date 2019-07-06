import { Component } from '@angular/core';
import { PostService } from '../services/post.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private postService: PostService) {}
  name = 'Angular';
  ngOnInit() {
    this.postService.getPosts();
  }
}
