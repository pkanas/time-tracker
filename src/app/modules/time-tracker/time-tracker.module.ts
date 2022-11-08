import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackerRoutingModule } from './time-tracker-routing.module';
import { RecordListComponent } from './component/record-list/record-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RecordListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TimeTrackerRoutingModule
  ]
})
export class TimeTrackerModule { }
