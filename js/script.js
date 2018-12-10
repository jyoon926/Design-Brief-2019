$(document).ready(function(){
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });

    //Loading overlay
    var overlay = document.getElementById("overlay");
    var body = document.getElementById("body");
    window.addEventListener('load', function(){
        setTimeout(function () {
            overlay.style.opacity = '0';
            setTimeout(function () {
                overlay.style.zIndex = '-100';
                body.style.overflowY = 'scroll';
            }, 400);
        }, 1600);
    })

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

window.addEventListener('mousemove', cursor);
var $win = $(window);
var _cursor = document.getElementById('cursor');
var _cursorFollower = document.getElementById('cursorFollower');

function everyTick() {
    cursor();
    setTimeout(arguments.callee, 0);
}

function getX(event) //left position
{
    if(!event.pageX)
    {
        return event.clientX;
    }
        else
    {
        return event.pageX - (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
}

function getY(event) //top position
{
    if(event.pageY)
    {
        return event.pageY - (document.body.scrollTop || document.documentElement.scrollTop);
    }
        else
    {
        return event.clientY;
    }
}

var offset = 15;

function cursor() {
    _cursor.style.top = getY(event) - 4 + "px";
	_cursor.style.left = getX(event) - 4 + "px";
    _cursorFollower.style.top = getY(event) - offset + "px";
    _cursorFollower.style.left = getX(event) - offset + "px";
}

function hover() {
    _cursorFollower.style.height = "60px";
    _cursorFollower.style.width = "60px";
    _cursorFollower.style.borderRadius = "60px";
    offset = 30;
}

function hoverOut() {
    _cursorFollower.style.height = "30px";
    _cursorFollower.style.width = "30px";
    _cursorFollower.style.borderRadius = "30px";
    offset = 15;
}

window.onload = function load() {
}