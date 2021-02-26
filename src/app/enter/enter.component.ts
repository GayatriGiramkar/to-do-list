import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { CommonService } from '../common.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  public collection : any;
  time = new Date();
  addList = new FormGroup ({
    item: new FormControl(''),
    time: new FormControl(this.time)
  })

  constructor(private commonService:CommonService) { }
  ngOnInit(): void {}

  createList(){
    this.commonService.addToList(this.addList.value).subscribe((result) => {
      this.addList.reset({});
      console.log("Get data from Service", result);
    });
  }
}
