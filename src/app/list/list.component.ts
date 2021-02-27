import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { CommonService } from '../common.service';
import { List } from '../server/list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public collection : any;
  time = new Date();
  item:any;
  searchValue: any;
  list: List []=[];
  
  addList = new FormGroup ({
    item: new FormControl(''),
    time: new FormControl('')
  })
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });
  }

  key:string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key= key;
    this.reverse = !this.reverse;
  }
}