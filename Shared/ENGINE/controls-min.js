/*  Copyright (C)  2009  Thomas S. Visit: http://sites.google.com/site/cssgameengine/
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3
    or any later version published by the Free Software Foundation;
    with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
    A copy of the license is included in the section entitled "GNU
    Free Documentation License". */

function checkEnter(B){var A;if(B&&B.which){B=B;A=B.which}else{B=event;A=B.keyCode}console.output(A);if(A==110){player.superclassKick3();return false}else{if(A==98){player.superclassKick1();return false}else{if(A==97){if(ENGINETIME.lock==false){player.backpedal()}return false}else{if(A==100){if(ENGINETIME.lock==false){player.walk()}return false}else{if(A==113){if(ENGINETIME.lock==false){player.backflip()}return false}else{if(A==119){if(ENGINETIME.lock==false){player.jump1()}return false}else{if(A==103){player.superclassPunch1();return false}else{if(A==122){if(ENGINETIME.lock==false){player.superclassBlock()}return false}else{if(A==101){if(ENGINETIME.lock==false){player.jump2()}return false}else{if(A==96){console.displayOutput();return false}else{if(A==104){player.superclassPunch3();return false}else{return true}}}}}}}}}}}}