﻿//Source: http://www.computerhope.com/issues/ch00

function blinker() {
    $('.blinking').fadeOut(500);
    $('.blinking').fadeIn(500);
}
setInterval(blinker, 1000);
