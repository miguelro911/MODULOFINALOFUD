import { Component , OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '@fullcalendar/core';
import { ActivityService } from 'src/app/modules/dashboard/services/activity/activity.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { Activity } from 'src/app/modules/dashboard/util/interfaces/activity';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{

  spinner: boolean = false;
  activitiesRetrieved: Array<Activity> = [];

  constructor(
    private activityService: ActivityService,
    private utilService: UtilService
  ) {
    this.getActivitiesByPeriod();
  }

  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar')!;

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      events: [
        // Aquí puedes agregar tus eventos
        { title: 'Grupo firme', date: '2023-08-03' },
        { title: 'Grupo firme', date: '2023-08-05' },
      ]
    });

    calendar.render();
    
  }

  getActivitiesByPeriod(): void {
    this.spinner = true;
    let bodyRequest: object = {
      period: 202301
    };
    this.activityService.getByPeriod(bodyRequest).subscribe(
      {
        next: (resp: any) => {
          this.activitiesRetrieved = resp.data.activities;
          this.spinner = false;
          this.utilService.showToast("Actividades por periodo consultados exitosamente");
          console.log(this.activitiesRetrieved);
        },
        error: (error: any) => {
          if(error.status == 404) {
            this.utilService.showToast(error.error.message);
          } else {
            this.utilService.showToast("Error consultando actividades por periodo");
            console.error(error);
          }
          this.spinner = false;
        }
      }
    );
  }

}
