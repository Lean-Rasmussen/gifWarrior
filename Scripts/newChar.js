//Getting HTML elements
const gifSearchWord= document.getElementById('playerSearchGifWord')
const gifContainer= document.getElementById('gifContainer')
const playerSelectedGif = document.getElementById('playerGif')
let gifs=[];
let playerGif=''
// Making a new hero

const getPlayerInput= function(){
	let playerName = document.getElementById('charName').value
	let playerClass = document.getElementById('selectedClass').value

	if(document.getElementById('selectedClass').value=='Bookwurm'){
		let stats=Bookworm
		makePlayer(stats)
	}else if (document.getElementById('selectedClass').value=='Jock'){
		let stats=Jock
		makePlayer(stats)
	}else if (document.getElementById('selectedClass').value=='Creep'){
		let stats=Creep
		makePlayer(stats)
	}else if (document.getElementById('selectedClass').value=='Goth'){
		let stats=Goth
		makePlayer(stats)
	}
};

const makePlayer=function(stats){
window.localStorage.clear()	
	let player={
		profile:{
			name:document.getElementById('charName').value,
			class:document.getElementById('selectedClass').value,
			level:0,
			XP:0,
		},
		alive:true,
		inventory:[],
		image: 'css/img/bookworm.png',
		gif: playerGif,
	}
	player.stats = stats;
	saveNewHero(player)
}


const selectGif= function(gif){
	playerSelectedGif.setAttribute('src', gif)
	playerGif =gif
	}


const Bookworm={
	HP:50,
	mana:20,
	AtkPwr:10,
	magicPWR:40,
};
const Jock={
	HP:70,
	mana:5,
	AtkPwr:40,
	magicPWR:10,
};
const Creep={
	HP:55,
	mana:10,
	AtkPwr:35,
	magicPWR:35,
};
const Goth={
	HP:40,
	mana:20,
	AtkPwr:10,
	magicPWR:70,
};



//getting Gif


const performSearch = function(){
	let query= gifSearchWord.value
	fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
	.then( response => response.json())
	.then(responseData => { displayGifs(responseData.data)})
	.catch(error =>{
	console.log('error in Fetching or parsing data', error)
	});
};

const displayGifs= function(responseData){
	responseData.map((gif)=>{
		linkToGif= gif.images.downsized.url
		let liElement = document.createElement('li')
		let imgElement= document.createElement('img')
		imgElement.setAttribute('src', linkToGif)
		imgElement.setAttribute('class', 'gif')
		imgElement.setAttribute('onclick', 'selectGif(this.src)')
		liElement.setAttribute('class', 'gifListContainer')
		liElement.appendChild(imgElement)
		gifContainer.appendChild(liElement)

	})
	
}










