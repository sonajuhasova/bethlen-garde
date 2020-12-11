"use strict";

document.addEventListener("DOMContentLoaded", function(event) { 

const eventRef = db.collection("events");

// watch the database ref for changes
eventRef.onSnapshot(function (snapshotData) {
  let events = snapshotData.docs;
  console.log(events);
  appendevents(events);
});

// append events to the DOM
function appendevents(events) {
  let htmlTemplate = "";
  for (let event of events) { 
      htmlTemplate += `
      <h3>${event.data().title}</h3>   
      <p>${event.data().date}</p>
`;
  }
  document.querySelector('#events-container').innerHTML = htmlTemplate;
    }

    }); 