import { Component } from '@angular/core';
import {View , EventSettingsModel }from '@syncfusion/ej2-angular-schedule';
// import {DataManager ,WebApiAdapter} from '@syncfusion/ej2-angular-schedule'; 

@Component({
  selector: 'app-root',
  template:'<ejs-schedule height="850" width ="1250" [eventSettings]="eventObject" [currentView]="setView"></ejs-schedule>',
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-scheduler-app';
  public setView: View ='WorkWeek';
  // public setDate: Date=new Date (2023,10,15);
  // private eventData:DataManager= new DataManager({
  //   url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/loadData',
  //   adaptor:new WebApiAdapter,
  //   crossDomain:true
  // });

  public eventObject:EventSettingsModel ={
    dataSource:[{
      EventTitle:"",
      EventStart: new Date(2023,10,17,4,0),
      EventEnd: new Date(2023,10,17,6,0),
      // IsReadonly: true
      // RecurrenceRule:"FREQ=DAILY;INTERVAL=1;COUNT=10" 
      // IsAllDay: true
    }],
    fields:{
      subject:{name: 'EventTitle',default:"Hello",title:"Enter Title"}, 
      startTime:{name: 'EventStart'},
      endTime:{name: 'EventEnd'},
    }

  }
}
