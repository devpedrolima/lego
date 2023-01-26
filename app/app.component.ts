import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import config from 'devextreme/core/config';
import { DxDataGridComponent } from 'devextreme-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService],
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  dataSource: any;
  states: any;
  notesEditorOptions: any;

  constructor(service: DataService) {
    config({
      editorStylingMode: 'filled'
    });
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    this.notesEditorOptions = { height: 100 };
  }

  customizeItem = (item) => {
    if (item && item.itemType === 'group' && item.caption === 'Home Address') {
      const gridInstance = this.dataGrid.instance;
      const editRowKey = gridInstance.option('editing.editRowKey');
      const rowIndex = gridInstance.getRowIndexByKey(editRowKey);
      item.visible = gridInstance.cellValue(rowIndex, "AddressRequired");
    }
  }

  onEditorPreparing(e) {
    if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
      e.editorOptions.disabled = e.row.data && e.row.data.FirstName === '';
    }
  }

  onInitNewRow(e) {
    e.data.AddressRequired = false;
    e.data.FirstName = '';
  }

  setCellValue(newData, value) {
    const column = (this as any);
    column.defaultSetCellValue(newData, value);
  }

  onButtonClick(e) {
    if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
      e.editorOptions.disabled = e.row.data && e.row.data.FirstName === '';
      
    }
  }

}

/*
  selectEmployee(e: { component: { byKey: (arg0: any) => { ($send): any; new(): any; done: { (arg0: (employee: any) => void): void; new($send): any; }; }; }; currentSelectedRowKeys: any[]; }) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done((employee: Employee) => {
      if (employee) {
        this.selectedEmployee = employee;
      }
    });
  }

  exportGrid(e: { format: string; component: any; cancel: boolean; }) {
    if (e.format === 'xlsx') {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet("Main sheet");
      exportDataGrid({
        worksheet: worksheet,
        component: e.component,
      }).then(function () {
        workbook.xlsx.writeBuffer().then(function (buffer) {
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
        });
      });
      e.cancel = true;
    }
  }*/