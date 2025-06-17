
import { Routes } from '@angular/router';
import { UserList } from '../component/user-list/user-list';
import { UserFormComponent } from '../component/user-form/user-form';

export const routes: Routes = [
  { path: 'users', component: UserList },
  { path: 'adduser', component: UserFormComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }, // optional default redirect

];

