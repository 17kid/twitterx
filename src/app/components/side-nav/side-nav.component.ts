import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  public sideNavLinks = [
    {
      name: 'Home',
      route: '/home',
      icon:'fas fa-home'
    },
    {
      name: 'Explore',
      route: '/explore',
      icon:'fab fa-slack-hash'
    },
    {
      name: 'Notifications',
      route: '/notifications',
      icon:'fas fa-bell'
    },
    {
      name: 'Messages',
      route: '/messages',
      icon:'fas fa-envelope'
    },
    {
      name: 'Lists',
      route: '/lists',
      icon:'fab fa-slack-hash'
    },
    {
      name: 'Bookmarks',
      route: '/bookmarks',
      icon:'fas fa-bookmark'
    },
    {
      name: 'Communities',
      route: '/communities',
      icon:'fab fa-slack-hash'
    },
    {
      name: 'Verified',
      route: '/verified',
      icon:'fab fa-slack-hash'
    },
    {
      name: 'Profile',
      route: '/profile',
      icon:'fas fa-user'
    },
    {
      name: 'More',
      route: '/more',
      icon:'far fa-comment-dots'
    },
    
  ]

}
