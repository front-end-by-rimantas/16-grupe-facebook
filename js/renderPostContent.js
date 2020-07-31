import renderPostText from './renderPostText.js';
import renderPostGallery from './renderPostGallery.js';

function renderPostContent( content ) {
    return `<div class="post-content">
                ${ renderPostText(content.text, content.background) }
                ${ renderPostGallery(content.photos) }
            </div>`;
}

export default renderPostContent;