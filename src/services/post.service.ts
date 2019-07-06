import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces';


@Injectable()
export class PostService {

  getPostsUrl: string;
  selectedView: string = "card";
  selectedPost: Post;
  posts: [Post];

  constructor(private http: HttpClient) {
    this.getPostsUrl = "https://jsonplaceholder.typicode.com/posts/";
  }

  setSelectedView(view) {
    this.selectedView = view;
  }

  setSelectedPost(post) {
    this.selectedPost = post;
  }

  getPosts() {
    this.http.get(this.getPostsUrl).subscribe((data: [Post]) => {
      this.posts = data.slice(0, 10);
    })
  }

}