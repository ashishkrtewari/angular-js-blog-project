import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  get selectedView() {
    return this.postService.selectedView;
  }

  renderFixedLengthBody(str) {
    return str.slice(0, 150) + "..."
  }

  ngOnInit() {
  }

}