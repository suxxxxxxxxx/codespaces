// hooks 函数式编程思想
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Banner } from '../models/banner'
import { useBanner } from '../api'
// 仓库的分支,banner
// 专注于数据编程
export const useBannerStore = defineStore("banner", () => {
  const banners = ref<Banner[]>([])
  const getBanners = async () => {
    if (banners.value.length) return
    banners.value = await useBanner()
    console.log(banners.value);

  }
  return {
    banners,
    getBanners
  }

})