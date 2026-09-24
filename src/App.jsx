import { useState } from 'react'

function App() {
	const [result, setResult] = useState("Your future will be revealed...")

	const allRaces = [
		"Gnome",
		"Orc",
		"Night Elf",
		"Tauren",
		"Troll",
		"Undead",
		"Dwarf",
		"Skyborne",
		"Human"
	]
	const allClasses = [
		"Mage",
		"Priest",
		"Druid",
		"Warrior",
		"Paladin",
		"Warlock",
		"Hunter",
		"Shaman",
		"Rogue"
	]

	const allCombos =[
		{race: "Gnome", classes: ["Mage","Priest","Rogue","Warlock","Warrior"]},
		{race: "Orc", classes: ["Hunter","Mage","Rogue","Shaman","Warlock","Warrior"]},
		{race: "Night Elf", classes: ["Druid","Hunter","Priest","Rogue","Warrior"]},
		{race: "Tauren", classes: ["Druid","Hunter","Shaman","Warrior"]},
		{race: "Troll", classes: ["Hunter","Mage","Priest","Rogue","Shaman","Warlock","Warrior"]},
		{race: "Undead", classes: ["Mage","Paladin","Priest","Rogue","Warlock","Warrior"]},
		{race: "Dwarf", classes: ["Hunter","Paladin","Priest","Rogue","Shaman","Warrior"]},
		{race: "Windshaper Skyborne", classes: ["Druid","Hunter","Rogue","Shaman","Warrior"]},
		{race: "Human", classes: ["Hunter","Mage","Paladin","Priest","Rogue","Warlock","Warrior"]},
		{race: "High Order Skyborne", classes: ["Druid","Hunter","Mage","Rogue","Warrior"]}
	]

	function chooseClass(){
		const randomNumber = Math.floor(Math.random() * allClasses.length);
		setResult(allClasses[randomNumber])
	}

	function chooseRace(){
		const randomNumber = Math.floor(Math.random() * allClasses.length);
		setResult(allRaces[randomNumber])
	}

	function chooseCombo(){
		const randomNumber = Math.floor(Math.random() * allCombos.length);
		const race = allCombos[randomNumber].race
		const randomClass = Math.floor(Math.random() * allCombos[randomNumber].classes.length)
		const cClass = allCombos[randomNumber].classes[randomClass]
		setResult(`${race} ${cClass}`)
	}

	return (
		<div id="main">
			<h1>Forever Indecisive</h1>
			<img id="logo" src="/forever_logo.png" alt="WoW Forever logo" />
			<p>Can't choose a class? Or race? or BOTH? Have no fear! Press the magical buttons below to find your future in WoW Forever.</p>
			<div id="select-options">
				<button onClick={(chooseRace)}>Race</button>
				<button onClick={(chooseClass)}>Class</button>
				<button onClick={(chooseCombo)}>Race AND Class</button>
			</div>
			<div id="results">
				<h2>{result}</h2>
			</div>
		</div>
  	)
}

export default App
