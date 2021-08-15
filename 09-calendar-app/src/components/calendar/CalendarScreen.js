import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es-mx';

import { Navbar } from '../ui/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { esMessages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';

moment.locale('es-mx');

const localizer = momentLocalizer(moment);

const events = [{
  title: 'Register Social Service',
  start: moment().toDate(),
  end: moment().add(2, 'days').toDate(),
  bgcolor: '#fafafa',
  notes: 'Comprar el pastel',
  user: {
    _id: '123',
    name: 'César Arellano'
  }
}];

export const CalendarScreen = () => {
  
  const [lastView, setLastView] = useState( localStorage.getItem( 'lastView') || 'month' );
  
  const onDoubleClick = (e) => {
    console.log(e);
  }

  const onSelectEvent = (e) => {
    console.log(e);
  }
  
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.9,
      display: 'block',
      color: 'white'
    };

    return {
      style
    }
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <div className="custom-container">
        <h1>Calendar Screen</h1>
        <Calendar
          localizer={ localizer }
          events={ events }
          startAccessor="start"
          endAccessor="end"
          messages={ esMessages }
          eventPropGetter={ eventStyleGetter }
          onSelectEvent={ onSelectEvent }
          onView={ onViewChange }
          view={ lastView }
          onDoubleClickEvent={ onDoubleClick }
          components={ {
            event: CalendarEvent
          }}
        />
      </div>
    </div>
  )
}
