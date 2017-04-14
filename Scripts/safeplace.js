//Getting elements From HTML
const playerProfil= document.getElementById('playerProfil')
const playerStats = document.getElementById('playerStats')
const statsUP = document.getElementById('statsUP')

//adding stats logiv

const statsAdd= function(stat, value){
	value +=1
	player.lvlPoints = player.lvlPoints -1
	if(stat == 'HP'){
		player.stats.HP =value
		player.fullHP =value
		saveHero(player)
	}else if(stat == 'mana'){
		player.stats.mana =value
		player.fullmana =value
	}else if(stat == 'AtkPwr'){
		player.stats.AtkPwr =value
		saveHero(player)	
	}else if(stat == 'magicPWR'){
		player.stats.magicPWR =value
		saveHero(player)	
	}
	removingPlayerStats()
	removingPlusStats()
	MakePlayerStats()
	checkForExtraStats()

	
};


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

const makePlusStats =function(){
	for(let [item, value] of Object.entries(player.stats)){
		let text =`+1`
		let buttonElement= document.createElement('button')
		buttonElement.innerHTML =text;
		buttonElement.onclick= function(){statsAdd(item, value) }
		statsUP.appendChild(buttonElement)		
	}
}
const removingPlusStats=function(){
	while(statsUP.firstChild) statsUP.removeChild(statsUP.firstChild)
}



const loadInplayer=function(){
	MakePlayerStats()
	MakePlayerProfil()
	PlayerPortrain()
	checkForExtraStats()
}

const removingPlayerStats=function(){
	while(playerStats.firstChild) playerStats.removeChild(playerStats.firstChild)
}

const healUp=function(){
	player.stats.HP = player.fullHP
	player.stats.mana = player.fullmana
}
const checkForExtraStats= function(){
	if(player.lvlPoints > 0 ){
		makePlusStats()
	}
}

// Loading elements in when page has loaded
window.onload=healUp()
window.onload= loadInplayer();









