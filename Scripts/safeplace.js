//Getting elements From HTML
const playerProfil= document.getElementById('playerProfil')
const playerStats = document.getElementById('playerStats')

//Loading player section 

const MakePlayerProfil= function(){
	for (let [item, value] of Object.entries(player.profile)){
			let text= `${item} : ${value}` 
			let pElement= document.createElement('p')
			pElement.innerHTML =text;
			playerProfil.appendChild(pElement)

	}
};

const MakePlayerStats =function(){
	for (let [item, value] of Object.entries(player.stats)){
			let text= `${item} : ${value}` 
			let pElement= document.createElement('p')
			pElement.innerHTML =text;
			playerStats.appendChild(pElement)
	}
}


const loadInplayer=function(){
	MakePlayerStats()
	MakePlayerProfil()
	PlayerPortrain()
}


const removingPlayerStats=function(){
	while(playerStats.firstChild) playerStats.removeChild(playerStats.firstChild)
}


const healUp=function(){
	player.stats.HP = player.fullHP
	removingPlayerStats()
	MakePlayerStats()
	saveHero(player)

}


// Loading elements in when page has loaded
window.onload= loadInplayer();









