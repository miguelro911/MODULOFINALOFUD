import { Component , OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{

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

}
