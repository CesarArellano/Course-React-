import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es-mx';

import { Navbar } from '../ui/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { esMessages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeletingEventFab } from '../ui/DeletingEventFab';

moment.locale('es-mx');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  
  const [lastView, setLastView] = useState( localStorage.getItem( 'lastView') || 'month' );
  const dispatch = useDispatch();
  const { events, actionEvent } = useSelector( state => state.calendar );
  
  const onDoubleClick = () => {
    dispatch( uiOpenModal() )
  }

  const onSelectEvent = (e) => {
    dispatch( eventSetA<ctive(e) )
  }
  
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const onSelectedSlot = () => {
    dispatch( eventClearActiveEvent() );
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
          onSelectSlot={ onSelectedSlot }
          selectable={ true }
          components={ {
            event: CalendarEvent
          }}
        />
        {
          (actionEvent ) && <DeletingEventFab />
        }
        <AddNewFab />
        <CalendarModal />
      </div>
    </div>
  )
}
