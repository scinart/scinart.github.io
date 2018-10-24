$(".render-pseudocode").each(function (i,o) {
    var code = o.textContent;
    var parentEl = o.parentNode;
    var options = { lineNumber: true };

    console.log(code);
    console.log(parentEl);
    pseudocode.render(code, parentEl, options);
});
