import { Component } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink ],
  providers: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true
})
export class App {
  protected title = 'boot-angular';
}
