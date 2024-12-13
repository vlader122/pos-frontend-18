import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Escritorio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Modulos',
                items: [
                    { label: 'Clientes', icon: 'pi pi-fw pi-book', routerLink: ['/components/clientes'] },
                    { label: 'Categorias', icon: 'pi pi-fw pi-list', routerLink: ['/components/categorias'] },
                    { label: 'Productos', icon: 'pi pi-fw pi-list', routerLink: ['/components/productos'] },
                    { label: 'Ventas', icon: 'pi pi-fw pi-list', routerLink: ['/components/ventas'] },
                ]
            },
        ];
    }
}
