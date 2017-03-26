//load player
let player=JSON.parse(localStorage.getItem("player"))
let NavUL= document.getElementById('navigation')

// };
let lvlNotify=''


//save Load and Reset
const resetHero=function(){
	window.localStorage.clear()
};

const saveNewHero=function(player){
	localStorage.setItem('player', JSON.stringify(player))
};

const saveHero=function(player){
	localStorage.setItem('player', JSON.stringify(player))
};

const loadHero=function(){
	let player = localStorage.getItem("player")
	player = JSON.parse(player)
};

//getting Gif

const PlayerPortrain= function(){
	document.getElementById('charPortrait').src=player.gif;
};

const levelUpNotify= function(){
	if(player.lvlPoints>0){
		lvlNotify= '(+stats)'
		let liElement= document.createElement('li')
		liElement.id='lvlNotify'
		let aElement= document.createElement('a')
		aElement.id='lvlNotifyText'
		aElement.innerHTML =lvlNotify;
		aElement.href='index.html';

		liElement.appendChild(aElement)
		NavUL.appendChild(liElement)
	}else{
	}
}



//loading up when page ready
// window.onload-saveHero();
// window.onload=loadHero();

window.onload=PlayerPortrain()
window.onload+levelUpNotify()






