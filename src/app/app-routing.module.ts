import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ListsComponent } from './pages/lists/lists.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { VerifiedComponent } from './pages/verified/verified.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'lists',
    component: ListsComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
  },
  {
    path: 'communities',
    component: CommunitiesComponent,
  },
  {
    path: 'verified',
    component: VerifiedComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'more',
    component: MoreComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
