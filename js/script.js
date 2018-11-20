$(document).ready(function(){

    //Smooth scrolling between links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });

    //Parallax effect
    if ( $(window).width()) {
		var $man = $('.man');
		var $win = $(window);
		$win.on('scroll', function() {
			var top1 = $win.scrollTop()/2;
			$man.css('margin-top', '-' + top1 + 'px');
		});
	}
});

/*window.addEventListener('mousemove', cursor);
var $win = $(window);
var _cursor = document.getElementById('cursor');
var _cursorFollower = document.getElementById('cursorFollower');

function everyTick() {
    cursor();
    setTimeout(arguments.callee, 0);
}

function cursor() {
    _cursor.style.top = event.clientY - 4 + $win.scrollTop() + "px";
	_cursor.style.left = event.clientX - 4 + "px";
    _cursorFollower.style.top = event.clientY - 17 + $win.scrollTop() + "px";
	_cursorFollower.style.left = event.clientX - 17 + "px";
}*/