$(document).ready(function(){
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });

    /*var overlay = document.getElementById("overlay");
    var body = document.getElementById("body");
    window.addEventListener('load', function(){
        $('.bar').animate({ width: '100vw' }, 0);
        window.setTimeout(function () {
            overlay.style.opacity = '0';
            $('.loading').css("opacity", "0");
            overlay.style.zIndex = '-100'; 
        }, 0);
    })*/
    //Smooth scrolling between links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function(){
                window.location.hash = hash;
            });
        }
    });

    //Parallax effect
    if ($(window).width() > 600) {
		var $man = $('.man');
		var $cross = $('.cross');
		var $win = $(window);
		$win.on('scroll', function() {
			var top1 = $win.scrollTop()/1.75;
			var top2 = $win.scrollTop()/8;
			$man.css('top', '-' + top1 + 'px');
			$cross.css('margin-top', '' + top2 + 'px');
		});
    }
    
    //Albums
	var slideIndex = 1;
	
	function plusSlides(n) {
		slideIndex += 1;
		$('.album').removeClass('active');
		$('#album' + slideIndex).addClass('active');
		$('.heading').removeClass('on');
		$('#heading' + slideIndex).addClass('on');
		$('.slidetrack').css('margin-left', '-' + (slideIndex-1)*720 + 'px');
	}

	function minusSlides(n) {
		slideIndex += -1;
		$('.album').removeClass('active');
		$('#album' + slideIndex).addClass('active');
		$('.heading').removeClass('on');
		$('#heading' + slideIndex).addClass('on');
		$('.slidetrack').css('margin-left', '-' + (slideIndex-1)*720 + 'px');
	}
	
	$('.next').click(plusSlides);
	$('.previous').click(minusSlides);
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

window.onload = function load() {
}