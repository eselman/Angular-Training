import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { FriendsComponent } from './friends/friends.component';

import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ParentComponent } from './parent/parent.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { FriendComponent } from './friend/friend.component';
import { AlertModule } from 'ngx-bootstrap';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LoginComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'posts/:id', component: PostsComponent },
      { path: 'friends/:id', component: FriendsComponent },
      { path: 'new-post/:id', component: NewPostComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    PostsComponent,
    FriendsComponent,
    ParentComponent,
    PostComponent,
    FriendComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [AuthGuard, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
