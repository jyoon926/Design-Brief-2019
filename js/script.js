window.addEventListener('mousemove', nutterbutter);
function nutterbutter(){
    var _el = document.getElementById('hover');
    var _al = document.getElementById('cursor');
    _el.style.top = event.clientY - 90 + "px";
	_el.style.left = event.clientX - 90 + "px";
    _al.style.top = event.clientY - 10 + "px";
	_al.style.left = event.clientX - 10 + "px";
}

function hover(){
    document.getElementById('hover').style.transform = "scale(1.2)";
    document.getElementById('cursor').style.opacity = "0";
}
function out(){
    document.getElementById('hover').style.transform = "scale(.2)";
    document.getElementById('cursor').style.opacity = "1";
}