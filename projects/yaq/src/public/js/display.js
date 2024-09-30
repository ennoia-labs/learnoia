export function displayPodium(podiumContainer, podiumData) {
  podiumContainer.innerHTML = '';

  podiumData.forEach((player, index) => {
    const podiumPlace = document.createElement('div');
    podiumPlace.classList.add('.podium-place');
    podiumPlace.innerHTML = `
  <img src="public/images/image.png" alt="${player.name}" class="avatar" />
          <p class="player-name">${player.name}</p>
          <p class="player-score">${player.score} points</p>
          <div class="podium-bar"></div>
  `;

    if (index === 0) {
      podiumPlace.classList.add('first-place');
    } else if (index === 1) {
      podiumPlace.classList.add('second-place');
    } else if (index === 2) {
      podiumPlace.classList.add('third-place');
    }

    podiumContainer.appendChild(podiumPlace);
  });
}

export function displayPlayerList(playerLists, playerData, isFullList = false) {
  const viewAllLink = playerLists.querySelector('.view-all-text');

  playerLists.innerHTML = '';

  playerData.forEach((player) => {
    const playerRow = document.createElement('div');
    playerRow.classList.add('player-item');
    playerRow.innerHTML = `
      <span class="player-rank">${player.rank}</span>
                  <div class="player-info">
                    <img
                      src="public/images/image.png"
                      alt="${player.name}"
                      class="avatar"
                    />
                    <span class="player-name">${player.name}</span>
                  </div>
                  <span class="player-score">${player.score} points</span>`;
    playerLists.appendChild(playerRow);
  });
  if (!isFullList && viewAllLink) {
    playerLists.appendChild(viewAllLink);
  }
  console.log('Leaderboard displayed');
}
