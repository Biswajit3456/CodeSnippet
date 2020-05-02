function setAudio(){
	var id = "myAudio12";
	var audioSrc="https://www.tonesmp3.com/ringtones/astronomia-coffin-dance.mp3";

	audi =  document.createElement("AUDIO"); 
	audi.setAttribute("id",id);
	audi.setAttribute("type","audio/mpeg");
	audi.setAttribute("src",audioSrc);
	document.body.appendChild(audi);
	audio = document.getElementById(id); 
	// audio.play();
}
