//Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

	let firstNameArray = ['Capp','Cappa','Deck','Dirty','First','Ghost','Ghostface','God','GZA','Insane','Inspectah','Method','Ol','Raekwon','Red','RZA','Samurai','Wu','Conqueror','Fearless','Arrogant']
	let lastNameArray = ['Killah','Wu','Inspectah','Ninja','Kwan','Don','DonDada','Knight','Masta','Assassin','Worlock','Man','Mastermind','Gambino','Cappadonna','Mind','Overlord','Madman','Hunter','Ambassador','Beggar']


	
	document.querySelector('button').addEventListener('click', generatorStart)


	function generatorStart(){
		let color = document.getElementById('color').value
		let shape = document.getElementById('shape').value
		let cereal = document.getElementById('cereal').value
		let danceMove = document.getElementById('danceMove').value
		let line = document.getElementById('line').value
		
		let firstNameIndex = Number(color) + Number (shape) + Number (cereal) + Number (danceMove) + Number (line)

		let lastNameIndex = Number(color) + Number (shape) + Number (cereal) + Number (danceMove)+ Number (line)

		console.log(firstNameArray[firstNameIndex] + ' ' +lastNameArray[lastNameIndex])

		document.querySelector('.wuTangName').innerText = firstNameArray[firstNameIndex] +' '+ lastNameArray[lastNameIndex]
	}