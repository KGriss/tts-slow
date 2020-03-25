let playButton = document.getElementById("play");
playButton.addEventListener("click", speakPressed);

let wordTimeInput = document.getElementById("wordTime");
wordTimeInput.addEventListener("input", wordTimeInputed);

let tts = window.speechSynthesis;
let words;
let w;
let wordTime = 0.75;
let play = false;

function wordTimeInputed(e) {
	if (wordTimeInput.value < 0 || isNaN(wordTimeInput.value)) {
		wordTimeInput.value = 0
	}
}

function speakPressed(e) {
	if (play) {
		playButton.innerHTML = "PLAY";
		play = false;
	} else {
		playButton.innerHTML = "STOP";
		play = true;
		
		wordTime = wordTimeInput.value;
		
		let msg = document.getElementById("msg").value;
		msg = msg.replace(/([.,;:"()«»*!?\[\]_\/\\])/g," $1 ");
		msg = msg.replace(/\s\s/g," ");
		msg = msg.replace(/\n/g," ");
		msg = msg.trim()
		
		if (wordTime <= 0) {
			say(msg);
			playButton.innerHTML = "PLAY";
			play = false;
		} else {
			words = msg.split(" ");
			w = 0;
			stringPreparation();
		}
	}
}

function stringPreparation() {
	if (w < words.length && play) {
		say(words[w]);
		let timeBetween = words[w].length*wordTime*1000+1000;
		console.log(timeBetween)
		w++;
		setTimeout(stringPreparation,timeBetween);
	} else {
		playButton.innerHTML = "PLAY";
		play = false;
	}
}

function say(word) {
	let toSpeak = new SpeechSynthesisUtterance(word);
	voices = tts.getVoices();
	toSpeak.voice = voices[9];

	tts.speak(toSpeak);
}
