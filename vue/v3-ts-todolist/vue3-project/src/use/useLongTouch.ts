import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
export default function (arr: Ref<null | HTMLElement>[], callback: Function) {
  let timer: any = null
  let isMoving = false
  const touchStart = (e: any) => {
    const id = e.targetTouches[0].target.id
    timer = setTimeout(() => {
      if (!isMoving) {
        callback(id)
      }
    }, 1000)
  }

  const touchEnd = () => {
    clearTimeout(timer)
    isMoving = false
  }
  const touchMove = () => {
    isMoving = true
  }

  onMounted(() => {
    arr.forEach((item) => {
      item.value?.addEventListener('touchstart', touchStart)
      item.value?.addEventListener('touchend', touchEnd)
      item.value?.addEventListener('touchmove', touchMove)
    })
  })
  onUnmounted(() => {
    arr.forEach((item) => {
      item.value?.removeEventListener('touchstart', touchStart)
      item.value?.removeEventListener('touchend', touchEnd)
      item.value?.removeEventListener('touchmove', touchMove)
    })
  })
}
