import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  get post() {
    return this.postService.selectedPost;
  }

  ngOnInit() {
    window.scrollBy({ top: 0, left: 0, behavior: 'smooth' });
  }

}