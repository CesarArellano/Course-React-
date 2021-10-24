const { response } = require('express');
const Event = require('../models/Event');

const getEvents = ( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'getEvents'
  });
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
    res.status(500).json({
      ok: false,
      msg: 'Talk to the admin'
    });
  }

};

const updateEvent = ( req, res = response ) => {

  res.json({
    ok: true,
    msg: 'updateEvent'
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