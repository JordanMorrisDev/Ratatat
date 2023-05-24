canvas = document.getElementById('myCanvas');
let maxWidth = canvas.scrollWidth;
let maxHeight = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

let color;
let randX;
let randY;
let randSize;
let circles = [];
let circleSize = 30;
let circleSpace = circleSize * 2;
let xstart = circleSize;
let ystart = circleSize;
let xpos = xstart;
let ypos = ystart;
let rows = 5;
let cols = 4;
let text = ""
let keyMap = {}

const soundsOne = {
	soundsName: 'Basic Sound Pack',
	artistName: 'Open Source Artist',
	soundCloudLink: 'https://soundcloud.com/open-source-sounds/basic-sound-pack',
	purchaseLink: 'https://www.amazon.com/Open-Source-Sounds-Basic-Sound-Pack/dp/B',
	artistPicture: 'https://i1.sndcdn.com/avatars-7HiDrq59NpEGg6jC-eSdkrA-t200x200.jpg',
	packPicture: 'https://i1.sndcdn.com/artworks-0pnMT61X6phYPZtG-SJR9iw-t500x500.jpg',
	timesDownloaded: 0,
	packSize: 3,
	packPrice: 10,
	sounds: [
		'bubbles',
		'clay',
		'confetti',
		'corona',
		'dotted-spiral',
		'flash-1',
		'flash-2',
		'flash-3',
		'glimmer',
		'moon',
		'pinwheel',
		'piston-1',
		'piston-2',
		'piston-3',
		'prism-1',
		'prism-2',
		'prism-3',
		'splits',
		'squiggle',
		'strike',
		'suspension',
		'timer',
		'ufo',
		'veil',
		'wipe',
		'zig-zag'
	]
};

const soundsTwo = {
	soundsName: 'Smashing and Breaking',
	artistName: 'ZapSplat',
	soundCloudLink: 'https://soundcloud.com/open-source-sounds/second-sound-pack',
	purchaseLink: 'https://www.amazon.com/Open-Source-Sounds-Second-Sound-Pack/dp/B',
	artistPicture: 'https://www.zapsplat.com/wp-content/uploads/2021/06/zapsplat-logo.png',
	packPicture: 'https://www.zapsplat.com/wp-content/uploads/2022/06/zapsplat_pack_cover_glass_bottle_smashes_and_breaks.png',
	timesDownloaded: "1000+",
	packSize: 1.3,
	packPrice: "FREE",
	sounds: [
		'bottle_drop_concrete',
		'bottle_drop_two',
		'bottle_drop',
		'concrete_two',
		'concrete',
		'drop_smash',
		'glass_smash'
	]
};

const colours = [
	'#f44025',
	'#03d2fc',
	'#ff8d00',
	'#8a9a5b',
	'#b30753',
	'#7e71d3',
	'#660000',
	'#777777',
	'#fe3566',
	'#f1c11a',
	'#b0cc26',
	'#5f258f',
	'#1da1f2',
	'#914e72',
	'#007374',
	'#ffc700',
	'#ff6f00',
	'#7938d9',
	'#0066cc',
	'#dd3c7d',
	'#ff69b4',
	'#ffdf00',
	'#95c11f',
	'#9f7aea',
	'#c70039',
	'#3c3c3c'
]

let soundObjects = {
	soundsName: 'Basic Sound Pack',
	artistName: 'Open Source Artist',
	soundCloudLink: 'https://soundcloud.com/open-source-sounds/basic-sound-pack',
	purchaseLink: 'https://www.amazon.com/Open-Source-Sounds-Basic-Sound-Pack/dp/B',
	artistPicture: 'https://i1.sndcdn.com/avatars-7HiDrq59NpEGg6jC-eSdkrA-t200x200.jpg',
	packPicture: 'https://i1.sndcdn.com/artworks-0pnMT61X6phYPZtG-SJR9iw-t500x500.jpg',
	timesDownloaded: 0,
	packSize: 3,
	packPrice: 10,
	sounds: soundsOne.sounds.map(sound => new Howl({
		src: [`assets/sounds/soundRoundOne/${sound}.mp3`]
	}))
};
updateKeymap()

function updateKeymap() {
	keyMap = {
		65: { // A key
			sound: soundObjects.sounds[0],
			color: colours[0]
		},
		66: { // B key
			sound: soundObjects.sounds[1],
			color: colours[1]
		},
		67: { // C key
			sound: soundObjects.sounds[2],
			color: colours[2]
		},
		68: { // D key
			sound: soundObjects.sounds[3],
			color: colours[3]
		},
		69: { // E key
			sound: soundObjects.sounds[4],
			color: colours[4]
		},
		70: { // F key
			sound: soundObjects.sounds[5],
			color: colours[5]

		},
		71: { // G key
			sound: soundObjects.sounds[6],
			color: colours[6]
		},
		72: { // H key
			sound: soundObjects.sounds[7],
			color: colours[7]
		},
		73: { // I key
			sound: soundObjects.sounds[8],
			color: colours[8]
		},
		74: { // J key
			sound: soundObjects.sounds[9],
			color: colours[9]
		},
		75: { // K key
			sound: soundObjects.sounds[10],
			color: colours[10]
		},
		76: { // L key
			sound: soundObjects.sounds[11],
			color: colours[11]
		},
		77: { // M key
			sound: soundObjects.sounds[12],
			color: colours[12]
		},
		78: { // N key
			sound: soundObjects.sounds[13],
			color: colours[13]
		},
		79: { // O key
			sound: soundObjects.sounds[14],
			color: colours[14]
		},
		80: { // P key
			sound: soundObjects.sounds[15],
			color: colours[15]
		},
		81: { // Q key
			sound: soundObjects.sounds[16],
			color: colours[16]
		},
		82: { // R key
			sound: soundObjects.sounds[17],
			color: colours[17]
		},
		83: { // S key
			sound: soundObjects.sounds[18],
			color: colours[18]
		},
		84: { // T key
			sound: soundObjects.sounds[19],
			color: colours[19]
		},
		85: { // U key
			sound: soundObjects.sounds[20],
			color: colours[20]
		},
		86: { // V key
			sound: soundObjects.sounds[21],
			color: colours[21]
		},
		87: { // W key
			sound: soundObjects.sounds[22],
			color: colours[22]
		},
		88: { // X key
			sound: soundObjects.sounds[23],
			color: colours[23]
		},
		89: { // Y key
			sound: soundObjects.sounds[24],
			color: colours[24]
		},
		90: { // Z key
			sound: soundObjects.sounds[25],
			color: colours[25]
		}

	}
}


$(document).keydown(function(e) {
	createRandomColor();
	if (keyMap[e.which]) {
		console.log('keydown')
		keyAction = keyMap[e.which];
		if (keyAction.sound) {
			keyAction.sound.play();
		} else {
			return;
		}

		createRandomPos();
		var circleTest = new Path.Circle(new Point(randX, randY), randSize);
		circleTest.fillColor = keyAction.color;
		circles.push(circleTest);
	}
});


function createRandomColor() {
	//Create a random RGB value each call.
	color = "RGBA(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ',' +
		Math.random().toFixed(2) + ")";
}

function createRandomPos() {
	//Create a random set of values each call.
	randX = Math.floor(Math.random() * maxWidth);
	randY = Math.floor(Math.random() * maxHeight);
	randSize = Math.floor(Math.random() * 250) + 100;
	if (randX > (maxWidth - randSize)) {
		randX = randX - 350;
	}
	if (randX < (0 + randSize)) {
		randX = randX + 350;
	}
	if (randY < (0 + randSize)) {
		randY = randY + 350;
	}
	if (randY > (maxHeight - randSize)) {
		randY = randY - 350;
	}
}


paper.install(window);

window.onload = function() {
	updateDom()

	// Setup directly from canvas id:
	paper.setup('myCanvas');
	view.viewSize = [maxWidth, maxHeight];
	text = new PointText({
		point: [view.viewSize.width * 0.02, view.viewSize.height * 0.05],
		content: 'Sample: ' + soundObjects.soundsName + '\nArtist: ' + soundObjects.artistName,
		fillColor: 'white',
		fontFamily: 'Courier New',
		fontWeight: 'bold',
		fontSize: 22
	});


	view.onFrame = function(event) {
		for (var i = 0; i < circles.length; i++) {
			circles[i].scale(0.95);
			circles[i].fillColor.hue += 1;
		}
		text.content = 'Sample: ' + soundObjects.soundsName + '\nArtist: ' + soundObjects.artistName
		view.draw();
	}
}

// document.getElementById('openKeyboard').addEventListener('click', function() {
// 	var inputElement = document.getElementById('hiddenInput');
// 	inputElement.style.visibility = 'visible'; // unhide the input
// 	inputElement.focus(); // focus on it so keyboard pops
// 	inputElement.style.visibility = 'hidden'; // hide it again
// });

function onResize(event) {
	view.viewSize = [maxWidth, maxHeight];
	// text.fontsize = view.viewSize.width * 0.02;
	text.point = [view.viewSize.width * 0.02, view.viewSize.height * 0.05];


	// maxHeight = view.viewSize.height - 100;
	// maxWidth = view.viewSize.width - 100;
}
window.addEventListener('resize', onResize);

function updateDom() {
	 const profileName = document.querySelector(".profile-name");
  profileName.innerText = soundObjects.artistName;
  const packName = document.querySelector(".profile-pack-name");
  packName.innerText = soundObjects.soundsName;
  // const profilePicture = document.querySelector(".profile-picture img");
  // profilePicture.src = soundObjects.artistPicture;
  // profilePicture.alt = soundObjects.artistName;
  const packPicture = document.querySelector(".profile-pack img");
  packPicture.src = soundObjects.packPicture;
  packPicture.alt = soundObjects.soundsName;
  const soundcloudLink = document.querySelector(".profile-links a:first-child");
  soundcloudLink.href = soundObjects.soundCloudLink;
  soundcloudLink.textContent = `Soundcloud: ${soundObjects.artistName}`;
  const purchaseLink = document.querySelector(".profile-links .cta-button a");
  purchaseLink.href = soundObjects.purchaseLink;
  purchaseLink.textContent = `Purchase ${soundObjects.soundsName}`;
  const timesDownloaded = document.querySelector(".profile-stats li:nth-child(1)");
  timesDownloaded.textContent = `Times Downloaded: ${soundObjects.timesDownloaded}`;
  const packSize = document.querySelector(".profile-stats li:nth-child(2)");
  packSize.textContent = `Pack Size: ${soundObjects.packSize}MB`;
  const packPrice = document.querySelector(".profile-stats li:nth-child(3)");
  packPrice.textContent = `Pack Price: $${soundObjects.packPrice}`;
  const ctaButton = document.querySelector(".cta-button");
  ctaButton.classList.add("large-cta-button");

	// Get the <ul> element for the Sounds list and clear any current items
	const soundsList = document.getElementById('sounds-information').querySelectorAll('ul')[0];
	soundsList.innerHTML = '';
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	// Add each sound name to the list
	soundObjects.sounds.forEach((sound, index) => {
		const soundName = sound._src.split('/').pop().split('.')[0]; // Get the sound name from the file path
		const soundItem = document.createElement('li');
		soundItem.textContent = letters[index] + '. ' + soundName;
		soundsList.appendChild(soundItem);
	});
}

//BUTTONS
document.getElementById("sample-one").addEventListener("click", function() {
	soundObjects = {
		soundsName: soundsOne.soundsName,
		artistName: soundsOne.artistName,
		soundCloudLink: soundsOne.soundCloudLink,
		purchaseLink: soundsOne.purchaseLink,
		artistPicture: soundsOne.artistPicture,
		packPicture: soundsOne.packPicture,
		timesDownloaded: soundsOne.timesDownloaded,
		packSize: soundsOne.packSize,
		packPrice: soundsOne.packPrice,
		sounds: soundsOne.sounds.map(sound => new Howl({
			src: [`assets/sounds/soundRoundOne/${sound}.mp3`]
		}))
	};
	console.log(soundObjects)
	updateDom();
	updateKeymap();
});

document.getElementById("sample-two").addEventListener("click", function() {
	soundObjects = {
		soundsName: soundsTwo.soundsName,
		artistName: soundsTwo.artistName,
		soundCloudLink: soundsTwo.soundCloudLink,
		purchaseLink: soundsTwo.purchaseLink,
		artistPicture: soundsTwo.artistPicture,
		packPicture: soundsTwo.packPicture,
		timesDownloaded: soundsTwo.timesDownloaded,
		packSize: soundsTwo.packSize,
		packPrice: soundsTwo.packPrice,
		sounds: soundsTwo.sounds.map(sound => new Howl({
			src: [`assets/sounds/soundRoundTwo/${sound}.mp3`]
		}))
	};
	updateKeymap();

	console.log(soundObjects)
	updateDom()
});