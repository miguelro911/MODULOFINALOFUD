import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CalendarService } from 'src/app/modules/dashboard/services/calendar/calendar.service';
import { TheaterPlayService } from 'src/app/modules/dashboard/services/theaterPlay/theater-play.service';
import { UtilService } from 'src/app/modules/dashboard/services/util/util.service';
import { TheaterPlay } from 'src/app/modules/dashboard/util/interfaces/theaterPlay';
import { CalendarType } from 'src/app/modules/dashboard/util/interfaces/calendarType';

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.component.html',
  styleUrls: ['./crearevento.component.scss'],
})
export class CreareventoComponent {
  constructor(
    private calendarService: CalendarService,
    private theaterPlayService: TheaterPlayService,
    public utilService: UtilService
  ) {
    
  }

  theaterPlays: TheaterPlay[] = [];
  calendarTypes: CalendarType[] = [];

  selectedCalendar: string = '';
  selectedTheaterPlay: string = '';

  getRequiredData(period: number) {
    let bodyRequest: object = {
      period: period,
    };
    this.calendarService.getAllTypes().subscribe({
      next: (resp: any) => {
        this.calendarTypes = resp.data.types;
        this.theaterPlayService.getAllByPeriod(bodyRequest).subscribe({
          next: (resp: any) => {
            console.log(resp);
            this.theaterPlays = [resp.data.theaterPlayEntity];
          },
          error: (error: any) => {
            console.error(error);
            this.theaterPlays = [];
          },
        });
      },
      error: (error: any) => {
        console.error(error);
        this.calendarTypes = [];
      },
    });
  }

  createEvent() {}

  formControl_calendarType = new FormControl('', [Validators.required]);
  formControl_theaterPlay = new FormControl('', [Validators.required]);
}
