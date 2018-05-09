import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {AppComponent} from './app.component';
import {FakeApiService} from './services/fake-api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [FakeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
