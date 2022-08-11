import { PaisesService } from './../paises.service';
import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Country } from '../country.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit,AfterViewInit  {
  displayedColumns: string[] = [ 'name','capital','region','area'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource=new MatTableDataSource<Country>();

  @ViewChild(MatPaginator,{static:true}) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private contryService:PaisesService) { }

  ngOnInit(): void {
    this.contryService.getPaises()
    .subscribe((resp:Country[])=>{
      debugger;
      this.dataSource.data =resp
    })
  }

}
