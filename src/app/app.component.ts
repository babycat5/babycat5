
import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-project';

  @ViewChild('a') a: any;
  @ViewChild('b') b: any;
  @ViewChild('c') c: any;
  @ViewChild('d') d: any;
  @ViewChild('e') e: any;
  @ViewChild('f') f: any;
  constructor(
    private el: ElementRef,
    private scroller: ViewportScroller,
  ) { }

  ngOnInit() {

  }

  ngAfterViewChecked(): void {
    // console.log(this.myatt)

  }

  goPage() {
    this.scroller.scrollToPosition([0, this.a.nativeElement.offsetTop]);
  }

  // addEventListener("load", function () {
  //     setTimeout(hideURLbar, 0);
  // }, false);

  // function hideURLbar() {
  //     window.scrollTo(0, 1);
  // }
}
