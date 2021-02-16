/*
  url: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
*/

function findRankPosition(rank, aliceScore, start, end) {
  start = start || 0;
  end = end || rank.length;
  var pivot = parseInt(start + (end - start) / 2, 10);

  if (rank[pivot] === aliceScore) {
    return pivot + 1;
  } else if (end - start <= 1) {
    return pivot + 2;
  }

  if (rank[pivot] > aliceScore) {
    return findRankPosition(rank, aliceScore, pivot, end);
  } else {
    return findRankPosition(rank, aliceScore, start, pivot);
  }
}

function climbingLeaderboard(scores, alice) {
  const results = [];
  const ordered = scores.sort((a, b) => b - a);
  const rank = [...new Set(ordered)];

  for (let i = 0; i < rank.length; i++) {}

  alice.forEach((aliceScore) => {
    let position;

    if (aliceScore > rank[0]) {
      position = 1;
    } else if (aliceScore < rank[rank.length - 1]) {
      position = rank.length + 1;
    } else {
      position = findRankPosition(rank, aliceScore);
    }

    results.push(position);
  });

  return results;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
