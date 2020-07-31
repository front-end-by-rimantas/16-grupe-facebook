"use strict";
import posts from './data.js';
import renderFeed from './renderFeed.js';

renderFeed( posts );

const moreElements = document.querySelectorAll('.more');
const moreCount = moreElements.length;

function expandPostContent() {
    console.log('expanding...');
}

for ( let i=0; i<moreCount; i++ ) {
    moreElements[i].addEventListener('click', expandPostContent);
}

// ----------------------------------------

// paspaudus ant profilio nuotraukos, i console parasyti tos nuotraukos alt turini

const photos = document.querySelectorAll('.user-photo > img');
const photosCount = photos.length;

console.log('Is viso rasta nuotrauku:', photosCount);

function photoClick( event ) {
    console.log( event );

    const clickedElement = event.target;
    console.log( clickedElement );

    const altValue = event.target.getAttribute('alt');
    console.log( altValue );
}

for ( let i=0; i<photosCount; i=i+2 ) {
    photos[i].addEventListener('click', photoClick);
}


// function addEventListener( eventType, whatFunctionToCallAfterEvent ) {
//     let allEventInfo = {}
//     whatFunctionToCallAfterEvent( allEventInfo )      // photoClick( allEventInfo )
// }