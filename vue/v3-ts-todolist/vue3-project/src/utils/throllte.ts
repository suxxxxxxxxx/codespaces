export function throllte(fn: Function, wait: number) {
  let date = 0
  return function (...args: any) {
    const now = Date.now()
    if (now - date > wait) {
      fn(...args)
      date = now
    }
  }
}
