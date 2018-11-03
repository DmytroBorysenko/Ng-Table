import { Component, OnInit, ViewChild } from "@angular/core";

import { DataService } from "../services/data.service";
import { Color } from "../models/data";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-colors-table",
  templateUrl: "./colors-table.component.html",
  styleUrls: ["./colors-table.component.scss"]
})
export class ColorsTableComponent implements OnInit {
  dataSource = new MatTableDataSource(this.dataService.getTableData());
  displayedColumns: string[] = ["colorName", "hexValue"];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
