// require("./lib/social");


require("component-responsive-frame/child");

var r = [];
var e = document.getElementById("event");
var s = document.getElementById("statement");

for ( var i = 0; i < resolutionsData.length; i++ ) {
	r.push(resolutionsData[i].resolution);
}

var count = 0;
function changeText() {
	  e.style.opacity = 0;

	  var last = +new Date();
	  var tick = function() {
	    e.style.opacity = +e.style.opacity + (new Date() - last) / 1000;
	    last = +new Date();

	    if (e.style.opacity < 1) {
	      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
	    }
	  };

	  tick();

    e.textContent = r[count] + ".";
    count < resolutionsData.length - 1 ? count++ : count = 0;
}

changeText();
setInterval(changeText,3000);
