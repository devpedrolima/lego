import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxCheckBoxModule, DxFormComponent, DxFormModule, DxMenuModule, DxPopoverModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import DxForm from 'devextreme/ui/form';
import { DevExtremeModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   DxButtonModule,
   DxDataGridModule,
   DxCheckBoxModule,
   DxMenuModule,
   DxFormModule,
   DxPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
