import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public collection : any;
  time = new Date();
  item:any;
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

  // Search(){
  //   if(this.item == ""){
  //     this.ngOnInit();
  //   }else{
  //     this.addList = this.addList
  //     this.filter((res: { item: string; }) => {
  //       return res.item.toLocaleLowerCase().match(this.item.toLocaleLowerCase());
  //     });
  //   }
  // }

}
