function calculateScore(
  currentTyping: number,
  difficulty: 'easy' | 'normal' | 'hard', // ここでdifficultyの型を具体化
  questionResults: boolean[],
): number {
  // 初期値
  let score = 0
  // タイピングの計算
  score = currentTyping * 100
  // クイズ回答の計算
  const questionScore = {
    easy: 500,
    normal: 1000,
    hard: 1500,
  }
  // questionResultsのtrueの数を数える
  const correctAnswers = questionResults.filter((isCorrect) => isCorrect).length

  // 正解数に基づいてスコアを加算
  score += correctAnswers * questionScore[difficulty]
  return score
}

export default calculateScore
