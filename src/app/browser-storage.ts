const KEY = 'redux'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function loadState () {
  try {
    const serializedState = localStorage.getItem(KEY)
    if (serializedState == null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function saveState (state: any) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(KEY, serializedState)
  } catch (e) {
    // Ignore
  }
}
