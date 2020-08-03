"use strict";
import renderFeed from './renderFeed.js';
import getMyData from './getMyData.js';

getMyData('data/posts-1.json', renderFeed);

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

// LOAD MORE
const btnLoadMore = document.querySelector('#feed > .btn');
let packageIndex = 1;

function loadMorePosts() {
    getMyData(`data/posts-${++packageIndex}.json`, renderFeed);
}

btnLoadMore.addEventListener('click', loadMorePosts)