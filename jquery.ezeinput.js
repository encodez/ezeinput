/*!
 * ezeinput - jQuery Plugin
 * version: 1.0 (Tue, 03 Nov 2014)
 * @requires jQuery v1.8 or above
 *
 * Examples at https://github.com/encodez/ezeinput
 * License: GNU GENERAL PUBLIC LICENSE
 *
 * Example and documentation will be available soon at http://blog.encodez.com/ezeinput
 *
 * Copyright 2014 Muneer Shaheed - muneer@encodez.com
 *
 * I'd love credit or a shoutout, though.
 * twitter: muneerlk
 * http://www.encodez.com/blog
 *
 */
(function( $ ) {

	var settings = {
		application_path : '',
		close_button : 'close.gif',
		key_sperator : 188
	};

    $.fn.ezeInput = function( options ) {

    	if (options instanceof jQuery || typeof options == 'undefined') {

    		if (options instanceof jQuery)
	    		$.extend(settings, options);

	    	var input_box = $(this);
	    	$(this).wrap("<div class='ezeinput_wrapper'></div>");
	    	$(this).after("<div style='clear:both;'></div>");
	    	$('body').on('click', '.ezeinput_wrapper', function(){
	    		$('input[type=text]', this).focus();
	    	});

	    	$(this).each(function() {
				$(this).keydown(function(e) {
					var key = (window.Event) ? e.which : e.keyCode;
					if (key == settings.key_sperator) {
						ezeinputify($(this));
						return false;
					}
				});	

				$(this).blur(function(e) {
					ezeinputify($(this));
				});			
			});

			$(document).on("click", ".ezeinput_wrapper .single .bttnClose", function() {
				$(this).parent().remove();
			});
		}

		else if (options === 'get') {
			var values = [];
			var parent = $(this).closest('.ezeinput_wrapper');
			$(".userValSpan", parent).each(function() {
				values.push($(this).text());
			});

			return values;
		}

		function ezeinputify(input) {
			var currentVal = input.val();
			if(validate(currentVal)) {
				input.val("");
				var newItem = "<span class='single'><span class='userValSpan'>" + currentVal + "</span><img class='bttnClose' src='" + settings.close_button + "' width='8' height='8' /></span>";						
				input.before(newItem);
			}
		}

		function validate(item) {
			if (item.length > 0)
				return true;
			return false;
		}

    };
 
}( jQuery ));