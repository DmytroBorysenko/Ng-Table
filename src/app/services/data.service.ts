import { Injectable } from "@angular/core";
import { Data, Color } from "../models/data";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getTableData() {
    const data: Data = {
      colorsArray: [
        {
          colorName: "red",
          hexValue: "#f00"
        },
        {
          colorName: "green",
          hexValue: "#0f0"
        },
        {
          colorName: "blue",
          hexValue: "#00f"
        },
        {
          colorName: "cyan",
          hexValue: "#0ff"
        },
        {
          colorName: "magenta",
          hexValue: "#f0f"
        },
        {
          colorName: "yellow",
          hexValue: "#ff0"
        },
        {
          colorName: "black",
          hexValue: "#000"
        }
      ]
    };

    return data.colorsArray;
  }
}
