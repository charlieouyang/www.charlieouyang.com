! function ($) {
    'use strict';

    //bind the button events and initialize the dropdowns
    $(function () {
		
		var myCodeMirror1 = CodeMirror.fromTextArea($("#javaCode1")[0]);
		myCodeMirror1.setSize("100%", "100%");
		
		var myCodeMirror2 = CodeMirror.fromTextArea($("#javaCode2")[0]);
		myCodeMirror2.setSize("100%", "100%");
    })

}(window.jQuery);