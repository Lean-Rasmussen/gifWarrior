//load player
let player=JSON.parse(localStorage.getItem("player"))

// };
let mouse={
	alive:true,
	name:'mouse',
	level :2,
	HP:30,
	AtkPwr:50,
	XP:10,
	gif:'http://media0.giphy.com/media/EPwELUbhreEPC/giphy-downsized.gif'
}



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




//loading up when page ready
// window.onload-saveHero();
// window.onload=loadHero();

window.onload=PlayerPortrain()






