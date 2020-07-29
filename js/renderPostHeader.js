function renderPostHeader( author, timestamp ) {
    return `<div class="post-header">
                <a href="${author.link}" class="user-photo">
                    <img src="./img/users/${author.photo}" alt="${author.name} ${author.lastname} profile picture">
                </a>
                <div class="user-details">
                    <a href="${author.link}">${author.name} ${author.lastname}</a>
                    <div class="time">${timestamp} ago</div>
                </div>
                <div class="actions">...</div>
            </div>`;
}

export default renderPostHeader;