"use strict";

document.addEventListener("DOMContentLoaded", function(event) { 

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const photoRef = db.collection("gallery");

// watch the database ref for changes
photoRef.onSnapshot(function (snapshotData) {
  let photos = snapshotData.docs;
  console.log(photos);
  appendPhotos(photos);
});

// append photos to the DOM
function appendPhotos(photos) {
  let htmlTemplate = "";
  for (let photo of photos) { 
      htmlTemplate += `
    <a href=${photo.data().image} data-lightbox="mygallery" data-title="${photo.data().description}"><img src=${photo.data().image} alt=""></a>
    `;
  }
  document.querySelector('#gallery-container').innerHTML = htmlTemplate;
    }

});
    


