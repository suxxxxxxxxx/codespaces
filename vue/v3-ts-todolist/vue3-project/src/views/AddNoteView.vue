<script lang="ts" setup>
import { reactive, onMounted } from 'vue'

import { useListStore } from '@/stores/notelist'
import { showSuccessToast } from 'vant'
import { useRouter, useRoute } from 'vue-router'
const store = useListStore()
const state = reactive({
  note: {
    content: '',
    dates: ''
  },
  oldContent: '',
  id: ''
})
const date = new Date()
const router = useRouter()
const doAddNotes = () => {
  state.note.dates = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  if (state.id) {
    if (state.oldContent !== state.note.content) {
      const payload = { id: state.id, note: state.note }
      store.updateNoteList(payload).then((res) => {
        if (res) {
          showSuccessToast('修改成功')
          router.push('/')
        }
      })
    }
  } else {
    store.addNoteList(state.note).then((res) => {
      if (res) {
        showSuccessToast('添加成功')
        router.push('/')
      }
    })
  }
}
const route = useRoute()
const initNote = () => {
  const id = route.query.id
  if (!id) return
  store.list.forEach((item) => {
    if (item._id === id) {
      state.note.content = item.content
      state.oldContent = item.content
      state.id = id
    }
  })
  if (!store.list.length) {
    store.getNoteByIdList(id as string).then((res) => {
      state.note.content = res.content
      state.oldContent = res.content
      state.id = res._id as string
    })
  }
}
onMounted(() => {
  initNote()
})
</script>
<template>
  <div class="add-note-box">
    <van-nav-bar left-arrow>
      <template #right>
        <van-icon name="success" size="18" @click="doAddNotes" />
      </template>
    </van-nav-bar>
    <van-field
      class="field"
      rows="1"
      autosize
      type="textarea"
      placeholder="请输入笔记内容"
      v-model="state.note.content"
    >
    </van-field>
  </div>
</template>

<style scoped lang="scss">
.add-note-box {
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  background-color: #fff;
  .field {
    font-size: 0.22rem;
  }
}
</style>
