export function throllte(fn: Function, wait: number) {
  //节流
  let date = 0
  return function (...args: any) {
    const now = Date.now()
    if (now - date > wait) {
      fn(...args)
      date = now
    }
  }
}
