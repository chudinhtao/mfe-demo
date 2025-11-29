import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLibService } from '../../../../auth-lib/src/public-api';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<div #reactRoot></div>`, // gan la el dc tao ra vao day
})
export class ReactWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactRoot') reactRoot!: ElementRef;
  unmountReact?: () => void;

  constructor(private authService: AuthLibService) {}

  async ngAfterViewInit() {
    // @ts-ignore
    const m = await import('http://localhost:4202/remote-entry.js');

    const user = this.authService.currentUserValue;

    if (m && m.mount) {
      this.unmountReact = m.mount(this.reactRoot.nativeElement, { user: user });
      console.log('React App mounted!');
    }
  }

  ngOnDestroy() {
    if (this.unmountReact) {
      this.unmountReact();
      console.log('React App unmounted!');
    }
  }
}
