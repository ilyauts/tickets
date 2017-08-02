'use strict';

var request = require('request'),
  config = require('./config');

function callTicketMaster() {
  var options = {
    url: 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=new york',
    qs: {
      apikey: config.ticketMasterKey
    }
  };

  var a = null;
  request(options, function (err, resp, respBody) {
    a = respBody;
    console.log(respBody);
  });
}

function callStubHub() {
  var options = {
    url: 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=new york',
    qs: {
      apikey: config.ticketMasterKey
    }
  };

  var a = null;
  request(options, function (err, resp, respBody) {
    a = respBody;
    console.log(respBody);
  });
}