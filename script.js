document.getElementById("speak").addEventListener("click", speakPressed);
let tts = window.speechSynthesis;
let words;
let w;
let wordSpeed = 0.5;

function speakPressed(e) {
	let msg = document.getElementById("msg").value;
	words = msg.split(" ");
	w = 0;
	stringPreparation()
}

function stringPreparation() {
	if (w < words.length) {
		say(words[w]);
		let timeBetween = words[w].length*wordSpeed*1000;
		w++;
		setTimeout(stringPreparation,timeBetween);
	}
}

function say(word) {
	let toSpeak = new SpeechSynthesisUtterance(word);
	voices = tts.getVoices();
	toSpeak.voice = voices[9];
	
	tts.speak(toSpeak);
	
	if (word.search(",") !== -1) {
		toSpeak.text = "virgule";
		tts.speak(toSpeak);
	} if (word.search("[.]") !== -1) {
		toSpeak.text = "point";
		tts.speak(toSpeak);
	} if (word.search(";") !== -1) {
		toSpeak.text = "point virgule";
		tts.speak(toSpeak);
	} if (word.search(":") !== -1) {
		console.log(word.search(":"))
		toSpeak.text = "deux point";
		tts.speak(toSpeak);
	} if (word.search("!") !== -1) {
		toSpeak.text = "point d'exclamation";
		tts.speak(toSpeak);
	} if (word.search("[?]") !== -1 && word.search("[?]") !== 0) {
		toSpeak.text = "point d'intérogation";
		//tts.speak(toSpeak);
	}
}