import { Component, OnInit } from '@angular/core';
import { DemoService } from "./demo.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  page_array:Array<Number>=[];
  allData : any = [];
  initial_msg:boolean=false;
  pagination:boolean=false;
  
  constructor(private demoservice:DemoService){
  }
  ngOnInit(){
    this.initial_msg=true;
    this.recordList1();
  
  }
  recordList1(value:any = 1)
  {
      this.pagination=true;
      this.demoservice.getdata(value).subscribe(response => {
        this.allData = response;
        this.initial_msg=false;
        this.pagination=false; 
         for(let i=0;i<this.allData.total_pages;i++){
          this.page_array[i]=(i)+1;
        }
        console.log(this.page_array);
      });    
}
// ondelete(record):void{
//   console.log(record);
//   this.demoservice.deletedata(record).subscribe(()=>{
//     let index = this.allData.data.indexOf(record);
//       console.log(index);
//       this.allData.data.splice(index, 1);
//   });
// }
// onupdate(record){
//   this.demoservice.putdata({record})
//   .subscribe(response => {
//   console.log(this.allData.data); });
// }
  addRecord(){
    
  this.allData.data=null;
  }
}
