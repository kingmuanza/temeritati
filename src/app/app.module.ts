import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { ProfilComponent } from './pages/profil/profil.component';

registerLocaleData(fr);

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#550000'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzPageHeaderModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    { provide: NZ_CONFIG, useValue:  ngZorroConfig  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
