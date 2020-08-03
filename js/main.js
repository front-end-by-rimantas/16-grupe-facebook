"use strict";
import renderFeed from './renderFeed.js';
import getMyData from './getMyData.js';

let posts = [];
const newPosts = getMyData();
// atsisiunciame duomenis -> posts + [...]

posts = posts.concat(newPosts);

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