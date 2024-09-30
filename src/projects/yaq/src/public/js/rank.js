import { displayPlayerList } from './display.js';
import { fetchLeaderboard } from './fetch.js';

async function loadFullLeaderboard() {
  const allPlayerList = document.querySelector('.all-player-list player-list');

  const leaderboardData = await fetchLeaderboard();

  displayPlayerList(allPlayerList, leaderboardData, true);
}

document.addEventListener('DOMContentLoaded', () => {
  loadFullLeaderboard();
});
