"use strict";
// import posts from './data.js';
import renderFeed from './renderFeed.js';

renderFeed(posts);

// EVENT: see more
const moreElements = document.querySelectorAll('.more');
const moreCount = moreElements.length;

function expandPostContent(event) {
    const parent = event.target.closest('p');
    parent.innerText = parent.dataset.fullText;
}

for (let i = 0; i < moreCount; i++) {
    moreElements[i].addEventListener('click', expandPostContent);
}