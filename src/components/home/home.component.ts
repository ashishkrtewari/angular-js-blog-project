import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostService) { }

  get posts() {
    return this.postService.posts;
  }
  get selectedView() {
    return this.postService.selectedView; 
  }

  setSelectedPost(post) {
    this.postService.setSelectedPost(post);
  }

  handleViewChange(view) {
    this.postService.setSelectedView(view);
  }

  ngOnInit() {
  }

}