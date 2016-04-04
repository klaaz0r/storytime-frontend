(function($) {

    // Switches
	$("[data-toggle='switch']").bootstrapSwitch({
		baseClass: 'switch'
	});

	$("[data-toggle='switch'][class='switch-large']").bootstrapSwitch({
		baseClass: 'switch',
		wrapperClass: 'switch-large'
	});

	// Toolbar
	$('#top-toolbar').toolbar({
		content: '#user-toolbar-options',
		position: 'top'
	});

	$('#bottom-toolbar').toolbar({
		content: '#user-toolbar-options',
		position: 'bottom'
	});

	$('#vertical-top-toolbar').toolbar({
		content: '#user-toolbar-options',
		position: 'vertical-top'
	});

	$('#vertical-bottom-toolbar').toolbar({
		content: '#user-toolbar-options',
		position: 'vertical-bottom'
	});

	// Button Animations
	var animateButtons = Array.prototype.slice.call( document.querySelectorAll( '.btn-animate' ) ),
		totalButtons = animateButtons.length;
		animateButtons.forEach( function( el, i ) {
			el.addEventListener( 'click', activate, false );
		});

	function activate() {
		var self = this, activatedClass = 'btn-activated';

		if( classie.has( this, 'btn-animate-result' ) ) {

			if( classie.has( this, 'btn-result-success' ) ) {
				activatedClass = 'btn-animate-success';
			}

			if( classie.has( this, 'btn-result-error' ) ) {
				activatedClass = 'btn-animate-error';
			}
		}

		if( !classie.has( this, activatedClass ) ) {
			classie.add( this, activatedClass );
			setTimeout( function() { classie.remove( self, activatedClass ) }, 1500 );
		}
	}


})(jQuery);