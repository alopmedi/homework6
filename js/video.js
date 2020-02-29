var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	document.getElementById("volume").innerHTML = video.volume*100 +"%";
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.1
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
  var video = document.getElementById("myVideo");
  video.currentTime += 60;
  if (video.ended){
    video.currentTime = 0;
  }
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  		if (video.muted){
  			console.log("Changing To Unmuted");
  			video.muted = false;
  			document.getElementById("mute").innerHTML = "Mute";
  		}
  		else{
      		console.log("Changing To Muted");
      		video.muted = true;
      		document.getElementById("mute").innerHTML = "Unmute";
  		}
}

function changeVolume() {
  var volume = document.querySelector("#volumeSlider").value;
  video.volume = volume/100;
  document.getElementById("volume").innerHTML = video.volume*100 +"%";
  console.log('Volume is '+ video.volume*100 +"%");
}
       

function gray() {
  document.getElementById("myVideo").style.filter = "grayscale(100%)"; 
	console.log("In grayscale")
}

function color() {
  document.getElementById("myVideo").style.filter = "grayscale(0%)";
	console.log("In color")
}

/* before and after attributes for fancy buttons */

