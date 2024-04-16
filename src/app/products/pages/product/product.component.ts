import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  isProductVisible: boolean = true;
  currentPrice: number = 0;
  constructor() {}

  ngOnInit(): void {
    console.log('NgOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges', { changes });
  }
  ngDoCheck(): void {
    console.log('NgDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('NgAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('NgAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('NgAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('NgAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('NgOnDestroy');
  }

  increasePrice(): void {
    this.currentPrice += 1;
  }
}
