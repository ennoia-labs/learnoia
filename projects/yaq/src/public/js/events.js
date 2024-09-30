import { fetchLeaderboard } from './fetch.js';
import { displayPodium, displayPlayerList } from './display.js';
import { filterLeaderboardData } from './filter.js';

export async function handleButtonClick(
  playerLists,
  podiumContainer,
  criteria,
  isFullList = false,
) {
  const leaderboardData = await fetchLeaderboard();
  const filteredData = filterLeaderboardData(leaderboardData, criteria);

  if (podiumContainer) {
    const podiumData = filteredData.slice(0, 3);
    displayPodium(podiumContainer, podiumData);
  }

  const playerData = isFullList ? filteredData : filteredData.slice(3, 5);
  displayPlayerList(playerLists, playerData, isFullList);
}

export function initializeButtonEvents(
  toggleButtons,
  playerLists,
  podiumContainer,
  isFullList = false,
) {
  toggleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      toggleButtons.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');

      const criteria = e.target.textContent.toLowerCase().replace(' ', '-');
      handleButtonClick(playerLists, podiumContainer, criteria, isFullList);
    });
  });
  handleButtonClick(playerLists, podiumContainer, 'all-time');

  if (!isFullList) {
    const viewAllLink = playerLists.querySelector('.view-all-text');
    if (viewAllLink) {
      viewAllLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'rank.html';
      });
    }
  }
}
