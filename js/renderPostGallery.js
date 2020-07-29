function renderPostGallery( images ) {
    if ( !images ) {
        return '';
    }

    let HTML = '';
    const maxPhotos = 4;
    let size = images.length;
    if ( size > maxPhotos ) {
        size = maxPhotos;
    }

    for ( let i=0; i<size; i++ ) {
        HTML += `<div class="img ${ (images.length > maxPhotos) && (i === maxPhotos-1) ? 'extra' : '' }"
                    data-extra="${images.length - maxPhotos}">
                    <img src="./img/posts/${images[i]}" alt="Image">
                </div>`;
    }

    return `<div class="gallery gallery-${size}">${HTML}</div>`;
}

export default renderPostGallery;