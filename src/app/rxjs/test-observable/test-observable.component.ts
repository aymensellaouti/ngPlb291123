import { Component, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnDestroy {
  observable: Observable<number>;
  subscription = new Subscription();
  constructor(private toaster: ToastrService) {
    this.observable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.subscription.add(this.observable.subscribe((val) => {
      console.log(val);
    }));
    this.subscription.add(this.observable
      .pipe(
        // 5 4 3 2 1
        map((x) => x * 3),
        // 15 12 9 6 3
        filter((x) => !(x % 2))
        // TakeUntilDestroyed()
        // 12 6
      )
      .subscribe({
        next: (value) => {
          this.toaster.info('' + value);
        },
        complete: () => {
          this.toaster.error('BOOOOM !!!!!');
        },
      }));
  }
  ngOnDestroy(): void {
    // Todo Unsubscribe
    this.subscription.unsubscribe();
  }
}
