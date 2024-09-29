import { leaderBoard } from './leaderboard.js';

const playerList = document.querySelector('.player-list');
const playerRankText = document.querySelector('.player-rank');
const playerNameText = document.querySelector('.player-name');
const playerScoreText = document.querySelector('player-score');

leaderBoard(playerList, playerRankText, playerNameText, playerScoreText);
