const manualDB = {
    players: [
        { id: 1, name: 'Omer Zfira' },
        { id: 2, name: 'Ilya Something' },
        { id: 3, name: 'Gil Rabbi' },
        { id: 4, name: 'Ronen bla' },
    ],
    games: [
        {
            id: 1,
            players: [
                { id: 1, team: 'red' },
                { id: 2, team: 'red' },
                { id: 3, team: 'blue' },
                { id: 4, team: 'blue' },
            ],
            score: { red: Math.ceil(Math.random()) * 10, blue: Math.ceil(Math.random()) * 10 }
        },
        {
            id: 2,
            players: [
                { id: 1, team: 'red' },
                { id: 2, team: 'red' },
                { id: 3, team: 'blue' },
                { id: 4, team: 'blue' },
            ],
            score: { red: Math.ceil(Math.random()) * 10, blue: Math.ceil(Math.random()) * 10 }
        },
        {
            id: 3,
            players: [
                { id: 1, team: 'red' },
                { id: 2, team: 'red' },
                { id: 3, team: 'blue' },
                { id: 4, team: 'blue' },
            ],
            score: { red: Math.ceil(Math.random()) * 10, blue: Math.ceil(Math.random()) * 10 }
        },
        {
            id: 4,
            players: [
                { id: 1, team: 'red' },
                { id: 2, team: 'red' },
                { id: 3, team: 'blue' },
                { id: 4, team: 'blue' },
            ],
            score: { red: Math.ceil(Math.random()) * 10, blue: Math.ceil(Math.random()) * 10 }
        },
    ]
}

export default manualDB;