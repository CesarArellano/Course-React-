const { response } = require('express');
const { eventNames } = require('../models/Event');
const Event = require('../models/Event');

const getEvents = async ( req, res = response ) => {

  try {
    const events = await Event.find()
                            .populate('user', 'name') // Rellena datos del usuario;
    
    res.json({
      ok: true,
      events
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }
};

const createEvent = async ( req, res = response ) => {
  // Verificar el evento.

  const event = new Event( req.body );

  try {
    event.user = req.uid;

    const savedEvent = await event.save();
    res.json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }

};

const updateEvent = ( req, res = response ) => {
  const eventId = req.params.id;

  res.json({
    ok: true,
    msg: eventId
  });
};

const deleteEvent = ( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'deleteEvent'
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}