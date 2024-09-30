export function filterLeaderboardData(leaderboardData, criteria) {
  if (!leaderboardData || leaderboardData.length === 0) {
    console.error('Invalid or empty leaderboard data:', leaderboardData);
    return;
  }

  let filteredData = [];
  if (criteria === 'all-time') {
    filteredData = leaderboardData
      .sort((a, b) => b.all_time_score - a.all_time_score)
      .map((player) => ({ ...player, score: player.all_time_score }));
  } else if (criteria === 'monthly') {
    filteredData = leaderboardData
      .sort((a, b) => b.monthly_score - a.monthly_score)
      .map((player) => ({ ...player, score: player.monthly_score }));
  } else if (criteria === 'weekly') {
    filteredData = leaderboardData
      .sort((a, b) => b.weekly_score - a.weekly_score)
      .map((player) => ({ ...player, score: player.weekly_score }));
  }

  return filteredData;
}
