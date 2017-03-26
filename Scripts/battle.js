//Getting elements From HTML
let	CombatText = document.getElementById('combatText')

let playerName = document.getElementById('playerName')

let opponentName= document.getElementById('opponentName')
let opponentGif = document.getElementById('opponentGif')


// getting player information
const getPlayerName= function(){
	playerName.innerHTML= player.profile.name
}

//Varrible  
let Opponent ={};

//Adding Opppnent
const pickOpponent = function(){
	let OpponentIndex= Math.round(Math.random()*(mobs.length*(player.profile.level/20)+player.profile.level*2))
	console.log(OpponentIndex)
	if(OpponentIndex >mobs.length){
		Opponentndex = mobs.length
		Opponent = mobs[OpponentIndex]
		getOpponentData(Opponent)
	}else{
		Opponent = mobs[OpponentIndex]
		getOpponentData(Opponent)
	}
}


const getOpponentData = function(Opponent){
	opponentName.innerHTML = Opponent.name;
	opponentGif.setAttribute('src', Opponent.gif)
	}

//Combat code!
	// all make elements
const makeCombatText=function(text){
	let pElement= document.createElement('p')
	pElement.innerHTML =text;
	CombatText.insertBefore(pElement, CombatText.firstChild);
};

const makeLinkElement = function(text){
	let aElement =document.createElement('a')
	aElement.innerHTML=text;
	if(Opponent.alive){
		aElement.href='NewChar.html';
	}else if(player.alive){
		aElement.href='index.html';
	}
	CombatText.insertBefore(aElement, CombatText.firstChild);
};

//Enemy combat
const enemyAttack= function(){
	let damage = Opponent.AtkPwr*0.5
	player.stats.HP = player.stats.HP-damage
	let text=`You take ${damage} damage from ${Opponent.name}. You have ${player.stats.HP} HP left`
	makeCombatText(text)
};

const gainXP = function(){
	if(player.profile.level>=20){
		let text ='You dude is max level, you should get a real life!!'
		makeCombatText(text)
	}else{
		let XPGain = Opponent.XP*(1-(player.profile.level*0.05))
		player.profile.XP += XPGain 
		if (player.profile.XP >30){
			player.profile.level++;
			player.lvlPoints +=5;
			let text =`daim son you just gained a level, your now a lvl ${player.profile.level} ${player.profile.class}. Good on ya`;
			makeCombatText(text)
			player.profile.XP=player.profile.XP%30
		}
	}
};


//player Combat
const playerAttack= function(damage, type){
	Opponent.HP = Opponent.HP-damage
	let text=`Enemy ${Opponent.name} takes ${damage} of ${type} damage. The ${Opponent.name} has ${Opponent.HP} HP left`
	makeCombatText(text)
};

const shield= function(){
	let text= "You hide like a chicken behind your shield"
	let enemyAttack ="enemy looks at your shiled waiting for you to get out behind it."
	makeCombatText(text)
	makeCombatText(enemyAttack)
};

const run= function(){
	let text= 'You run home to your mama'
	makeCombatText(text);
};
// lifecheckers

const lifecheck =function(){
	if(player.stats.HP<=0){
		player.alive=false;
		let text = 'YOU ARE DEAD!!'
		makeCombatText(text)
		resetHero()
	}
};

const enemyLifeCheck= function(){
	if(Opponent.HP <=0){
	Opponent.alive=false;
	let text =`${Opponent.deathText}`	
	makeCombatText(text)
	}
};

//Combat Phase

const playerMove= function(type){
	if(player.alive && Opponent.alive){
		if(type==='attack'){
			let attack= player.stats.AtkPwr*0.5;
			combatPhase(attack, type)
		}else if(type == 'magic'){
			let attack= player.stats.magicPWR*0.75;
			combatPhase(attack, type)
		}
	}else if(Opponent.alive){
		let linktext= 'Click here to make a new charracter'
		let text='Mate your dead, no going back. Gotta make a new dude to fight some more dudes.'
		makeCombatText(text);
		makeLinkElement(linktext)
		resetHero()
	}else{
		let linktext = 'Click here to go back to your home';
		let text='Leavet it man, its dead already no point in beating a dead house.... Well you know the sayin.. Enouigh is enough.'
		makeCombatText(text);
		makeLinkElement(linktext);
	}
};

const combatPhase= function(attack, type){
	playerAttack(attack, type)
	enemyLifeCheck()
	if(Opponent.alive){
		enemyAttack()
		lifecheck()
	}else{
		playerWin()
	}
};
// AfterCombate
const playerWin= function(){
	gainXP()
	saveHero(player)
};

// loading elements from database

window.onload =	pickOpponent();
window.onload = getPlayerName();









