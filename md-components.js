$(document).click(function (e) {
	if (!($(e.target).parents().andSelf().is('.md-menu-popup-trigger'))) {
		if ($(e.target).parent().hasClass('md-menu-popup')) {
			setTimeout(function() {
				$('.md-menu-popup').removeClass('is-visible');
			}, 300);
		}
		else {
			$('.md-menu-popup').removeClass('is-visible');
		}
    }
});

$(document).ready(function() { 
	if ($('.md-input-container input').val()) {
		$('.md-input-container input').parent().find('label').addClass('md-label-active');
	}
	
	if ($('.md-textarea-container textarea').val()) {
		$('.md-textarea-container textarea').parent().find('label').addClass('md-label-active');
	}
});

$(document).on('focus', '.md-input-container input, .md-textarea-container textarea', function() {
	$(this).parent().find('label').addClass('md-label-active');
});

$(document).on('blur', '.md-input-container input, .md-textarea-container textarea', function() {
	if (!$(this).val()) {
		$(this).parent().find('label').removeClass('md-label-active');
	}
});

$(document).on('click', '.md-checkbox-container', function() {
	$(this).find('input').click();
});

$(document).on('click', '.md-menu-popup-trigger', function() {
	var target = ('#' + $(this).attr("for"));
	$(target).addClass('is-visible');
});
