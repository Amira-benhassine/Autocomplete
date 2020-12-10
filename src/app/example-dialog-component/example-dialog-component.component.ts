import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-example-dialog-component',
  templateUrl: './example-dialog-component.component.html',
  styleUrls: ['./example-dialog-component.component.css']
})
export class ExampleDialogComponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
