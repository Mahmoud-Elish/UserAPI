import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [],
})
export class ErrorComponent {
  displayAlert = 'd-block';
  closePopup() {
    this.displayAlert = 'd-none';
  }
}
