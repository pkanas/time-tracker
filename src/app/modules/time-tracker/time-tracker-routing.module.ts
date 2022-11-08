import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordListComponent } from './component/record-list/record-list.component';

const routes: Routes = [
	{
		path: '',
		component: RecordListComponent,
		data: {
			core: { title: 'Record' },
			breadcrumb: null
		},
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TimeTrackerRoutingModule { }
