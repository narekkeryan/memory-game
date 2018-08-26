# Memory Game
This is picture match game for training concentration and short-term memory. Game was created with [Node](https://nodejs.org/en/), [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Socket.io](https://socket.io/).

To start playing go to [https://multiplayer-memory-game.herokuapp.com](https://multiplayer-memory-game.herokuapp.com). There are 12 rooms which are named after planet names from [Star Wars](https://en.wikipedia.org/wiki/Star_Wars). You can chose to play with time (singular) or with other players (multiplayer).

In singular mode there are 4 difficulty levels: easy, normal, difficult, legendary. In each level you will have some time to memorize as much pictures as possible before starting initial timer. When there is a match you will get extra time.

In multiplayer mode you can play with 1, 2 or 3 opponent. The game will start with all players joining. Players will play in join order. If there is match player will get another opportunity to open pictures. In every match player gets 2 points. In the end wins player with maximum points.