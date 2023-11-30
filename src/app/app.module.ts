import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScheduleModule ,RecurrenceEditorModule  ,DayService,WorkWeekService, TimelineViewsService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { UserComponent } from './user/user.component';
import { BookingComponent } from './booking/booking.component'

// import { DataManager ,WebApiAdaptor} from '@syncfusion/ej2-data';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    RecurrenceEditorModule,
    // DataManager,WebApiAdaptor
  ],
  providers: [DayService,WorkWeekService,TimelineViewsService ,MonthService ,MonthAgendaService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
