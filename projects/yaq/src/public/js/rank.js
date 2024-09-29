const playerLists = document.querySelector('.player-list');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const allTimeBtn = document.getElementById('all-time-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');

async function fetchLeaderboard() {
  try {
    const response = await fetch('./data/leaderboard.json');
    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error('No leaderboard data found.');
    }
    return data;
  } catch (error) {
    console.error('Error fetching leaderbboard data:', error);
    return [];
  }
}

function displayLeaderboard(playerData) {
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
  console.log('Leaderboard displayed');
}

async function handleButtonClick(criteria) {
  const leaderboardData = await fetchLeaderboard();

  if (!leaderboardData || leaderboardData.length === 0) {
    console.error('Invalid or empty leaderboard data:', leaderboardData);
    return;
  }

  let filteredData;
  if (criteria === 'all-time') {
    filteredData = leaderboardData
      .sort((a, b) => b.total_score_all_time - a.total_score_all_time)
      .map((player) => ({ ...player, score: player.total_score_all_time }));
  } else if (criteria === 'weekly') {
    filteredData = leaderboardData
      .sort((a, b) => b.total_score_week - a.total_score_week)
      .map((player) => ({ ...player, score: player.total_score_week }));
  } else if (criteria === 'monthly') {
    filteredData = leaderboardData
      .sort((a, b) => b.total_score_month - a.total_score_month)
      .map((player) => ({ ...player, score: player.total_score_month }));
  }

  displayLeaderboard(filteredData);
}

toggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    toggleButtons.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');

    const criteria = e.target.textContent.toLowerCase().replace(' ', '-');
    handleButtonClick(criteria);
  });
});

handleButtonClick('all-time');
