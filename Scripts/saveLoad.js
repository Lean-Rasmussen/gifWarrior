import battle from'/battle';
const resetHero(){
	window.localStorage.clear()
}
const saveHero(){
	window.localStorage.player=player
}
const loadHero(){
	player =window.localStorage.player
}