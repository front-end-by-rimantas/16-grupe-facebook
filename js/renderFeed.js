import renderPost from './renderPost.js';

function renderFeed( data ) {
    // validation

    // logic
    console.log('rendering feed...');

    const size = data.length;
    for ( let i=0; i<size; i++ ) {
        renderPost( data[i] );
    }

    return;
}

export default renderFeed;