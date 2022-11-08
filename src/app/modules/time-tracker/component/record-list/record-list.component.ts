
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStore } from 'src/app/store/auth-store';
import { RecordStore } from 'src/app/store/record-store';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html'
})
export class RecordListComponent implements OnInit {

  RecordStore = RecordStore;
  form: any = FormGroup;
  date = new Date();
  AuthStore = AuthStore;

  dateReturn: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(AuthStore.getUser);

    let dateString = this.date.toISOString();
    let passDate = dateString.substr(0, 10);
    this.processDate(passDate)

    this.form = this._formBuilder.group({
      start_time: [null, [Validators.required]],
      end_time: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }



  addRecord() {
    let shh = this.form.value.start_time.hour;
    let smm = this.form.value.start_time.minute;
    let sss = this.form.value.start_time.second;
    let statTime = (shh >= 10 ? shh : '0' + shh) + ":" + (smm >= 10 ? smm : '0' + smm) + ":" + (sss >= 10 ? sss : '0' + sss);
    let ehh = this.form.value.end_time.hour;
    let emm = this.form.value.end_time.minute;
    let ess = this.form.value.end_time.second;
    let endTime = (ehh >= 10 ? ehh : '0' + ehh) + ":" + (emm >= 10 ? emm : '0' + emm) + ":" + (ess >= 10 ? ess : '0' + ess);

    let data = {
      start_time: statTime,
      end_time: endTime,
      description: this.form.value.description
    }
    RecordStore._recordList.push(data)
    this.form.reset()
  }

  getMinutes(start_time: any, end_time: any) {
    var time_start: any = new Date();
    var time_end: any = new Date();

    var value_start: any = start_time.split(':');
    var value_end: any = end_time.split(':');
    time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
    time_end.setHours(value_end[0], value_end[1], value_end[2], 0)
    time_end - time_start // millisecond 
    let result = time_end - time_start;
    var minutes = Math.floor(result / 60000);
    var seconds: any = ((result % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


  timeFormat(time: any) {
    if (time) {
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      time.splice(3, 1)
      return time.join(''); // return adjusted time or original string
    } else {
      return '';
    }
  }

  processDate(dt: any) {
    if (dt != null) {
      var date = {
        year: parseInt(dt.split('-')[0]),
        month: parseInt(dt.split('-')[1]),
        day: parseInt(dt.split('-')[2])
      }
      this.dateReturn = date;
      return date;
    }
    else {
      return '';
    }
  }

  delete(i: any) {
    RecordStore.allItems.splice(i, 1)
  }

  edit(i: any) {
    let data = RecordStore.allItems.find(item => item.description == i)
    this.form.patchValue({
      start_time: new Date(0, 0, 0, this.formatTimer(data.start_time).hour, this.formatTimer(data.start_time).minute),
      end_time: new Date(0, 0, 0, this.formatTimer(data.end_time).hour, this.formatTimer(data.end_time).minute),
      description: data.description,
    })

  }

  formatTimer(dt: any) {
    var timer = {
      hour: parseInt(dt.split(':')[0]),
      minute: parseInt(dt.split(':')[1]),
      second: parseInt(dt.split(':')[2]),
    }
    return timer
  }

}
