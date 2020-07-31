function formatTime( timestamp ) {
    const now = Date.now();         // current timestamp
    const sec = Math.floor((now - timestamp) / 1000);

    if ( sec < 16 ) {
        return 'Just now';
    }
    
    if ( sec < 60 ) {
        return sec + 'sec ago';
    }

    const min = Math.floor(sec / 60);
    if ( min < 60 ) {
        return min + 'min ago';
    }

    const h = Math.floor(min / 60);
    if ( h < 24 ) {
        return h + 'h ago';
    }

    const d = Math.floor(h / 24);
    if ( d < 7 ) {
        return d + 'd ago';
    }

    const w = Math.floor(d / 7);
    if ( w < 5 ) {
        return w + 'w ago';
    }

    const m = Math.floor(d / 30.4);
    if ( m < 12 ) {
        return m + 'm ago';
    }

    return Math.floor(d / 365.25) + 'y ago';
}

export default formatTime;