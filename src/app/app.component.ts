import { Component, input, model } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  isAdmin = false;
  users: string[] = ['Bank', 'Mali', 'Noyna'];

  fname: string = '';
  lname: string = '';

  myFunction = () => {
    alert('my alert here');
  }

  checked = model(false);
  disabled = input(false);

  toggle() {
    this.checked.set(!this.checked());
  }

  fullName: string = 'visarut issariyoskrai';
}
