import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <div class="alert alert-success">
      <p>second works!</p>
</div>
  `,
  styles: [
  ]
})
export class SecondComponent {
  constructor(private acr: ActivatedRoute) {
    console.log(this.acr);

  }
}
