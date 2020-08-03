import renderPostHeader from './renderPostHeader.js';
import renderPostContent from './renderPostContent.js';
import renderPostFooter from './renderPostFooter.js';

function renderPost(data) {
    // validation

    // logic
    return `<div class="post">
                ${renderPostHeader(data.author, data.postTimestamp)}
                ${renderPostContent(data.content)}
                ${renderPostFooter()}
            </div>`;
}

export default renderPost;