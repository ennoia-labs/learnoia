import { fetchLeaderboard } from './fetch.js';
import { displayPodium, displayPlayerList } from './display.js';
import { filterLeaderboardData } from './filter.js';

export async function handleButtonClick(
  playerLists,
  podiumContainer,
  criteria,
) {
  const leaderboardData = await fetchLeaderboard();
  const filteredData = filterLeaderboardData(leaderboardData, criteria);
  let playerData;

  if (podiumContainer) {
    const podiumData = filteredData.slice(0, 3);
    displayPodium(podiumContainer, podiumData);

    playerData = filteredData.slice(3, 5);
  } else {
    playerData = filteredData;
  }

  displayPlayerList(playerLists, playerData, playerData);
}

export function initializeButtonEvents(
  toggleButtons,
  playerLists,
  podiumContainer,
) {
  toggleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      toggleButtons.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');

      const criteria = e.target.textContent.toLowerCase().replace(' ', '-');
      handleButtonClick(playerLists, podiumContainer, criteria);
    });
  });
  handleButtonClick(playerLists, podiumContainer, 'all-time');

  const viewAllLink = playerLists.querySelector('.view-all-text');
  if (viewAllLink) {
    viewAllLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'rank.html';
    });
  }
}

export function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return "GOOD MORNING";
  } else if (currentHour < 18) {
    return "GOOD AFTERNOON";
  } else if (currentHour < 22) {
    return "GOOD EVENING";
  } else {
    return "GOOD NIGHT";
  }
}
document.getElementById("greeting").innerHTML = getGreeting();
