import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Userservice } from '../../service/userservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],  // remove HttpClientModule here
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserList implements OnInit {
  users: User[] = [];

  constructor(private userService: Userservice) {}

  ngOnInit() {
    console.log('UserList ngOnInit called');
    this.userService.findAll().subscribe({
      next: users => {
        this.users = users;
        console.log('Users loaded', users);
      },
      error: err => {
        console.error('Error fetching users:', err);
      }
    });
  }
}
