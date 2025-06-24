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

  deleteUser(id: number): void {
  console.log('id is' + id);  
  if (confirm('Are you sure you want to delete this user?')) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
}

}
