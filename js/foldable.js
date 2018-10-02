$(
    function () {
	$(".foldme").each(function(){
	    if ($(this).children().length > 0)
	    {
		// var reg = /h[1-6]|code|blockquote/i
		var elem = $(this).children().first();
		var summary = elem.html();
		// if (reg.test(elem.prop("tagName")))
		//    summary = elem.prop("outerHTML");
		console.log(summary);
		$(this).wrapInner("<details" + (this.hasAttribute("open")?" open=''":"") + "></details>")
		    .children().first().prepend("<summary " + (this.hasAttribute("summary-style")?(" style='" + this.getAttribute("summary-style") + "'"):"") + ">" + summary + "</summary>")
		    .children().first().next().remove();
	    }
	});
    }
);