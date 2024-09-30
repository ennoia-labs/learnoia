export async function fetchLeaderboard(url = './data/leaderboard.json') {
  try {
    const response = await fetch(url);
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
