import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNG ) { }

    ngOnInit() {
        this.primengConfig.ripple.set(true);
    }
}
