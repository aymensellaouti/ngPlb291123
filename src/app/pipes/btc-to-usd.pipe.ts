import { Pipe, PipeTransform } from '@angular/core';

const BTC = 37711;

@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number): number {
    let result = amount * BTC;
    console.log({ result });
    return result;
  }

}
