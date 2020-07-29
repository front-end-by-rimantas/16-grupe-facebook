function renderPostText( text, background ) {
    const maxTextLength = 300;
    
    if ( text.length <= maxTextLength ) {
        return `<p>${text}</p>`;
    } else {
        // teksto nukirpimas
        const dictionary = text.split(' ');
        const dicSize = dictionary.length;
        let cutText = dictionary[0];

        for ( let i=1; i<dicSize; i++ ) {
            if ( cutText.length < maxTextLength ) {
                cutText += ' ' + dictionary[i];
            } else {
                break;
            }
        }

        return `<p>${cutText}... See more</p>`;
    }
}

export default renderPostText;

/*
size = 14
       ++++++++++++++
text = Lorem ipsum doloer sit amet? Si sinjor?

dictionary = [Lorem, ipsum, doloer, sit, amet., Si, sinjor?]

cutText = ''
for ( dictionary ) {
    if ( cutText.length < size ) {
        cutText += dictionary[i]
    }
}

i = 0, cutText = Lorem                                              length = 5
i = 1, cutText = Lorem + (' ' + ipsum)                              length = 11
i = 2, cutText = Lorem ipsum + (' ' + doloer)                       length = 18

cutText = Lorem ipsum doloer

*/