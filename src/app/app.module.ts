import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccesosInterceptor } from './config/accesos.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: false,
                    cssLayer: false
                }
            }
        }),
        { provide: HTTP_INTERCEPTORS, useClass: AccesosInterceptor, multi:true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
