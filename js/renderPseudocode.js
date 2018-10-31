$(".render-pseudocode").each(function (i,o) {
    var code = o.textContent;
    var parentEl = o.parentNode;
    var options = { lineNumber: true };
    pseudocode.render(code, parentEl, options);
});
