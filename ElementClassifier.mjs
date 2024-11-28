(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(); // For Node.js
    } else {
        global.ElementClassifier = factory(); // For browsers
    }
})(this, function () {
    const ElementClassifier = {
        classify(elemento): function () {
            elemento = elemento.tagName
            if (elemento == 'H1' || elemento == 'H2' || elemento == 'H3' || elemento == 'H4' || elemento == 'H5' || elemento == 'H6' || elemento == 'P'){
                return 'Text'
            } else if(elemento == 'BODY' || elemento == 'DIV' || elemento == 'SPAN' || elemento == 'MAIN' || elemento == 'HEADER' || elemento == 'NAV' || elemento == 'ASIDE'){
                return 'Div'
            } else if(elemento == 'IMG'){
                return 'Img'
            } else if(elemento == 'A'){
                return 'Link'
            }
        },
    };
    return ElementClassifier;
});
