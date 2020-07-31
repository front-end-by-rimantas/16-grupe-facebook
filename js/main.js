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