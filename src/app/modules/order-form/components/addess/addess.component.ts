import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cheese-addess',
  templateUrl: './addess.component.html',
  styleUrls: ['./addess.component.scss']
})
export class AddessComponent {
  @Input() formControlInformation: FormGroup;
}
