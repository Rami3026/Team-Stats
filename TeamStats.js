const team = {
  _players: [
    		{firstName: 'Michael',
    lastName: 'Rami',
    age: 31},
        {firstName: 'Joshua',
    lastName: 'Tipah',
    age: 29},
        {firstName: 'Ben',
    lastName: 'Bentil',
    age: 34},
  ],
  _games: [
    {
      opponent: 'Fulham',
      teampPoints: 42,
      opponentPoints: 22 
    },
    {
      opponent: 'Chelsea',
      teampPoints: 52,
      opponentPoints: 22 
    },
    {
      opponent: 'Barcelona',
      teampPoints: 62,
      opponentPoints: 22 
    },
  ],
      get players () {
  return this._players
},
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    return this._players.push( {
      firstName,
      lastName,
      age
    })
  }
}

console.log(team._players)
team.addPlayer('Ömer', 'Albulak', 34)
console.log(team._players)