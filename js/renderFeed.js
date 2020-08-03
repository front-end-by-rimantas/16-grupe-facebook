import renderPost from './renderPost.js';

function renderFeed(data) {
    const selector = '#feed > .btn';
    // randame norima elementa
    const DOM = document.querySelector(selector);

    // validation

    // logic
    let HTML = '';
    const size = data.length;
    for (let i = 0; i < size; i++) {
        HTML += renderPost(data[i]);
    }

    // isstatome sugeneruota turini i jo vidu
    return DOM.insertAdjacentHTML('beforebegin', HTML);
}

export default renderFeed;