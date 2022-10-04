export function keywordsHandler(currentState, action, newKeyword) {
  return action === "newKeywords"
    ? { ...currentState, keywords: newKeyword }
    : currentState;
}
