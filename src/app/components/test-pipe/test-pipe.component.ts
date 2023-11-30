import { Component } from '@angular/core';
const BTC = 37711;
@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css'],
})
export class TestPipeComponent {
  accounts = [2, 3, 4, 5, 6];
  test() {
    console.log('il tape sur le input');
  };
  transform(amount: number): number {
    let result = amount * BTC;
    console.log({ result });
    return result;
  }
}
