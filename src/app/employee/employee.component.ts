import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  name = 'Bank';
  cssClass = 'myClass';

  @Input() fullName: string = 'default value';
}
