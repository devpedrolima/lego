import { Component } from '@angular/core';
import { Employee, EmployeesService } from './employees.service';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { DxFormModule } from 'devextreme-angular';
import DxForm from 'devextreme/ui/form';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  onButtonClick() {
    window.open('https://www.devpedrolima.tech/', '_blank');
  }
  nButtonClick() {
    window.open('https://stackoverflow.co/', '_blank');
  }
  ButtonClick() {
    window.open('https://stackoverflow.com/questions/29496536/is-there-any-way-with-devexpress-to-explicitly-set-the-ids-of-objects', '_blank');
  }
  uttonClick() {
    window.open('https://www.canva.com', '_blank');
  }
  employ = {
    name: 'Steave',
    position: 'Developer',
    hireDate: new Date(2002, 7, 24),
    officeNumber: 911,
    notes: 'I`m Programmer',
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com',
}
  hireDateOptions = {
    disabled: true
  }
  showMessage = () => {
    alert("i`m best world programmer");
  }

  employees: Employee[] = [];
  selectedEmployee: Employee;
  expanded: Boolean = true;

  constructor(service: EmployeesService) {
    this.employees = service.getEmployees();
    this.selectEmployee = this.selectEmployee.bind(this);
  }

  selectEmployee(e) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
      if(employee) {
        this.selectedEmployee = employee;
      }
    });
  }

  exportGrid(e) {
    if (e.format === 'xlsx') {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet("Main sheet");
      exportDataGrid({
        worksheet: worksheet,
        component: e.component,
      }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) {
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
        });
      });
      e.cancel = true;
    }
    else if (e.format === 'pdf') {
      const doc = new jsPDF();
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: e.component,
      }).then(() => {
        doc.save('DataGrid.pdf');
      });
    }
  }

}
