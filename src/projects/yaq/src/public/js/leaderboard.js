export function leaderBoard(
  playerList,
  playerRankText,
  playerNameText,
  playerScoreText,
) {
  async function getData() {
    const filePath = `./data/leaderboard.json`;
    const response = await fetch(filePath);
    console.log(response.json());
    // return response.json();
  }
  getData();

  const {
    rank: rank,
    name: name,
    weekly_score: total_score_week,
    monthly_score: total_score_month,
    all_time_score: total_score_all_time,
  } = leaderBoardData;

  playerRankText.textContent = rank;
  playerNameText.textContent = name;
  playerScoreText.textContent = weekly_score;

  function createPlayerRow(leaderBoardData) {
    const playerRow = document.createElement('div');
    playerRow.classList.ass('player-list');

    playerRow.innerHTML = `
     <div class="player-item">
          <span class="player-rank">4</span>
          <div class="player-info">
            <img
              src="public/images/image.png"
              alt="Madelyn Dias"
              class="avatar"
            />
            <span class="player-name">Madelyn Dias</span>
          </div>
          <span class="player-score">590 points</span>
        </div>
    `;
  }
}
