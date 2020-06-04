// ==UserScript==
// @name     BBC iPlayer Speed
// @description Lets you change the speed of BBC iPlayer playback in the browser, using a userscript manager
// @version  1
// @grant    none
// ==/UserScript== 
var observer = new MutationObserver(resetTimer);
var timer = setTimeout(action, 3000, observer); // wait for the page to stay still for 3 seconds
observer.observe(document, {childList: true, subtree: true});

function resetTimer(changes, observer) {
    clearTimeout(timer);
    timer = setTimeout(action, 3000, observer);
}

function action(o) {
    o.disconnect();
    // code
  var speed=1.0;
  var btn = document.createElement("BUTTON");
    btn.innerHTML = `Video Speed ${speed}`;
	var iframe = document.getElementById('smphtml5iframebbcMediaPlayer0');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var vid=innerDoc.getElementById("p_v_player_0");
  btn.onclick = function(){
    console.log(speed);
    if(speed===1.0){
      speed=1.25;
      console.log(vid);
      vid.playbackRate=speed;
      btn.innerHTML = `Video Speed ${speed}`;
    }
    else if(speed===1.25){
      speed=1.5;
        console.log(vid);
      vid.playbackRate=speed;
      btn.innerHTML = `Video Speed ${speed}`;
    }
    else if(speed===1.5){
      speed=2;
        console.log(vid);
      vid.playbackRate=speed;
      btn.innerHTML = `Video Speed ${speed}`;
    }
    else if(speed===2){
      speed=1.0;
        console.log(vid);
      vid.playbackRate=speed;
      btn.innerHTML = `Video Speed ${speed}`;
    }
  
  };
document.querySelector('.control-tools__versions').appendChild(btn); 
  
  //document.querySelector('.vxp-media__summary').appendChild(btn); 
}
