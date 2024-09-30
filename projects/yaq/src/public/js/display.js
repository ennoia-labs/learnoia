export function displayPodium(podiumContainer, podiumData) {
  podiumContainer.innerHTML = '';

  podiumData.forEach((player) => {
    const podiumPlace = document.createElement('div');
    podiumPlace.classList.add('.podium-place');
    podiumPlace.innerHTML = `
  <img src="public/images/image.png" alt="${player.name}" class="avatar" />
          <p class="player-name">${player.name}</p>
          <p class="player-score">${player.score} points</p>
          <div class="podium-bar"></div>
  `;

    podiumPlace.classList.add('podium-place', 'podium-bar');

    podiumContainer.appendChild(podiumPlace);
  });
}

export function displayPlayerList(playerLists, playerData) {
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
  if (viewAllLink) {
    playerLists.appendChild(viewAllLink);
  }
  console.log('Leaderboard displayed');
}
