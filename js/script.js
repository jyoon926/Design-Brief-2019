window.addEventListener('mousemove', nutterbutter);
window.addEventListener('mousemove', clicked);

var _hoverB = document.getElementById('hoverB');
var _hoverW = document.getElementById('hoverW');
var _cursor = document.getElementById('cursor');
var _page = document.getElementById('about');
var _clicked = false;
var _link = "";

function everyTick() {
    clicked();
    setTimeout(arguments.callee, 0);
}

function nutterbutter() {
    _hoverB.style.top = event.clientY - 90 + "px";
	_hoverB.style.left = event.clientX - 90 + "px";
    _hoverW.style.top = event.clientY - 90 + "px";
	_hoverW.style.left = event.clientX - 90 + "px";
    _cursor.style.top = event.clientY - 10 + "px";
	_cursor.style.left = event.clientX - 10 + "px";
}
function hover() {
    if (_clicked == false) {
        _hoverB.style.transform = "scale(1.2)";
        _cursor.style.opacity = "0";
        _hoverW.style.transform = "scale(0)";
    }
    if (_clicked == true) {
        _hoverW.style.transform = "scale(1.2)";
        _cursor.style.opacity = "0";
        _hoverB.style.transform = "scale(0)";
    }
}
function out() {
    _hoverB.style.transform = "scale(.2)";
    _cursor.style.opacity = "1";
}
document.getElementById('aboutBtn').addEventListener('click',function(event) {
    event.preventDefault();
    _clicked = true;
    _link = "about";
});
document.getElementById('albumBtn').addEventListener('click',function() {
    event.preventDefault();
    _clicked = true;
    _link = "album";
});
document.getElementById('shopBtn').addEventListener('click',function() {
    event.preventDefault();
    _clicked = true;
    _link = "shop";
});
document.getElementById('contactBtn').addEventListener('click',function() {
    event.preventDefault();
    _clicked = true;
    _link = "contact";
});

function clicked() {
    if (_clicked == true) {
        if (_link == "about") { _page = document.getElementById('about'); }
        if (_link == "album") { _page = document.getElementById('album'); }
        if (_link == "shop") { _page = document.getElementById('shop'); }
        if (_link == "contact") { _page = document.getElementById('contact'); }
        _hoverB.style.transitionDuration = "1s";
        _hoverB.style.transform = "scale(20)";
        _cursor.style.opacity = "1";
        _hoverW.style.transform = "scale(.2)";
        document.getElementById("aboutBtn").style.opacity = "0";
        document.getElementById("albumBtn").style.opacity = "0";
        document.getElementById("shopBtn").style.opacity = "0";
        document.getElementById("contactBtn").style.opacity = "0";
        _page.style.transform = "scale(1)";
        window.setTimeout(clickedFunc, 400);
        function clickedFunc() {
            document.getElementById("aboutBtn").style.display = "none";
            document.getElementById("albumBtn").style.display = "none";
            document.getElementById("shopBtn").style.display = "none";
            document.getElementById("contactBtn").style.display = "none";
            _page.style.opacity = "1";
        }
    }
}