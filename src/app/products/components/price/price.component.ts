import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  interval$?: Subscription;

  ngOnInit(): void {
    console.log('Price component: NgOnInit');
    this.interval$ = interval(1000).subscribe((value) => {
      console.log(`Tick: ${value}`);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price component: NgOnChanges', { changes });
  }
  ngOnDestroy(): void {
    console.log('Price component: NgOnDestroy');
    this.interval$?.unsubscribe();
  }
  @Input() price: number = 0;
}
