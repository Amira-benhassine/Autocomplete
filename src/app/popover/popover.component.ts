import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponentComponent } from '../example-dialog-component/example-dialog-component.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
ngOnInit()
{

}
  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialogComponentComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
