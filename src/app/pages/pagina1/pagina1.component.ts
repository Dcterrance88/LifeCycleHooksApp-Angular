import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component
          implements OnInit,
                      OnChanges,
                      DoCheck,
                      AfterContentInit,
                      AfterContentChecked,
                      AfterViewInit,
                      AfterViewChecked,
                      OnDestroy {

  public nombre: string = 'terrance';
  public segundos: number = 0;
  public timerSubscription!: Subscription;

  constructor() {
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.timerSubscription = interval(1000).subscribe(i=>{
        this.segundos = i;
      })
  }

  public guardar() {

  }

}
