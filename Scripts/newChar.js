'use strict'
//Getting HTML elements
const gifSearchWord= document.getElementById('playerSearchGifWord')
const gifContainer= document.getElementById('gifContainer')
const playerSelectedGif = document.getElementById('playerGif')
let gifs=[];
let playerGif=''
// Making a new hero

const getPlayerInput= function(){
	//check for input data
	if (document.getElementById('charName').value ===''){
		alert('You need to add a name, you cant go around being unknown.')
	}else if(playerGif===''){
		alert('This is gif warriors come one man!! You wanna get a giffing!')
	}
	//if name and gif are input make make player
	else{
		let playerClass = document.getElementById('selectedClass').value
		if(playerClass=='Bookwurm'){
			makePlayer(Bookworm)
		}else if (playerClass.value=='Jock'){
			makePlayer(Jock)
		}else if (playerClass.value=='Creep'){
			makePlayer(Creep)
		}else if (playerClass.value=='Goth'){
			makePlayer(Goth)
		}
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
			fullHP: 0,
			fullmana: 0,
			lvlPoints:0,
			image: 'css/img/bookworm.png',
			gif: playerGif,
		}
		player.stats = stats;
		player.fullHP= player.stats.HP
		player.fullmana= player.stats.mana
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
		let linkToGif= gif.images.downsized.url
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










