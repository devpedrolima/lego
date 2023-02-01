import { Component, ViewChild } from '@angular/core';
import { DataService, getForm, State } from './data.service';
import config from 'devextreme/core/config';
import { DxDataGridComponent } from 'devextreme-angular';
import Autocomplete from 'devextreme/ui/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService],
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  dados = [];
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  dataSource: any;
  getForm: any;
  States: State[];
  notesEditorOptions: any;
  formData: any = {};
  Data: any;
  countries: string[];

  constructor(service: DataService) {
    config({
      editorStylingMode: 'filled',
    });
    this.dataSource = service.getEmployees();
    this.States = service.getStates();
    this.notesEditorOptions = {height: 100};
  }

  customizeItem = (item) => {
    if (item && item.itemType === 'group' && item.caption === 'Home Address') {
      const gridInstance = this.dataGrid.instance;
      const editRowKey = gridInstance.option('editing.editRowKey');
      const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
      this.formData.push(this.formData);
      item.visible = gridInstance.cellValue(rowIndex, 'AddressRequired');
    }
  };


  adicionar(e) {
    this.dataSource.push(this.formData);
    this.States.push(this.Data)
    e.preventDefault();
    e.preventDefault(FormData);
    e.preventDefault(this.States);
  }
}
