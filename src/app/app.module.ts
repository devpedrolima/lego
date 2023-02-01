import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxTemplateModule } from 'devextreme-angular/core';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { DxButtonModule, DxCheckBoxModule, DxDateBoxModule, DxDrawerModule, DxSelectBoxModule, DxFormComponent, DxFormModule, DxAccordionModule, DxListModule, DxMenuModule, DxPopoverModule, DxToolbarModule } from 'devextreme-angular';
import DxForm from 'devextreme/ui/form';
import { DevExtremeModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { TeamCardComponent } from './team-card/team-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent
  ],

  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxTextAreaModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDrawerModule,
    DxFormModule,
    DxAccordionModule,
    DxListModule,
    DxMenuModule,
    DxPopoverModule,
    DxToolbarModule,
    DxDateBoxModule,
    DxSelectBoxModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})


export class AppModule { }
