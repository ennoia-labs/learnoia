export function filterLeaderboardData(leaderboardData, criteria) {
  if (!leaderboardData || leaderboardData.length === 0) {
    console.error('Invalid or empty leaderboard data:', leaderboardData);
    return;
  }

  let filteredData = [];
  if (criteria === 'all-time') {
    filteredData = leaderboardData
      .sort((a, b) => b.total_score_all_time - a.total_score_all_time)
      .map((player) => ({ ...player, score: player.total_score_all_time }));
  } else if (criteria === 'monthly') {
    filteredData = leaderboardData
      .sort((a, b) => b.total_score_month - a.total_score_month)
      .map((player) => ({ ...player, score: player.total_score_month }));
  } else if (criteria === 'weekly') {
    filteredData = leaderboardData
      .sort((a, b) => b.total_score_week - a.total_score_week)
      .map((player) => ({ ...player, score: player.total_score_week }));
  }

  return filteredData;
}
