import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    NotificationsComponent,
    MessagesComponent,
    ListsComponent,
    BookmarksComponent,
    CommunitiesComponent,
    VerifiedComponent,
    ProfileComponent,
    MoreComponent,
    SideNavComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
