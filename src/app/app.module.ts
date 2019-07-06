import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { PostComponent } from '../components/post/post.component';
import { PostPreviewComponent } from '../components/post-preview/post-preview.component';
import { AboutComponent } from '../components/about/about.component';
import { FooterComponent } from '../components/footer/footer.component';

import { PostService } from '../services/post.service';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "post", component: PostComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, PostComponent, PostPreviewComponent, AboutComponent,FooterComponent ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
