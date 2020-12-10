import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface PeriodicElement {
  name: string;
  age: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Sachin Tendulkar', age: 42, },
  { name: 'Virat Kohli', age: 30 },
];

@Component({
  selector: 'app-exemple-auto-complete-grid',
  templateUrl: './exemple-auto-complete-grid.component.html',
  styleUrls: ['./exemple-auto-complete-grid.component.css']
})
export class ExempleAutoCompleteGridComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  myControl = new FormControl();
  options: string[] = ['Sachin Tendulkar', 'Virat Kohli', 'Rohith Sharma'];
  filteredOptions: Observable<PeriodicElement[]>;
  filteredOptionsAge: Observable<PeriodicElement[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptionsAge = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterAge(value))
      );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
private  _filterAge(value:number): PeriodicElement[] 
  {
if(value)
{
  const filteredSet = ELEMENT_DATA.filter(option => option.age==value);
  this.dataSource = new MatTableDataSource(filteredSet);
  return filteredSet;
} 
else return ELEMENT_DATA;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private _filter(value: string): PeriodicElement[] {
    if(value) {
      const filterValue = value.toLowerCase();
      const filteredSet = ELEMENT_DATA.filter(option => option.name.toLowerCase().includes(filterValue));
      this.dataSource = new MatTableDataSource(filteredSet);
      return filteredSet;
    } 
    else return ELEMENT_DATA;
  }
}
