<script setup lang="ts">
import { ref, onMounted, watch, nextTick, reactive } from 'vue'
import type { NoteList, NoteListState, Note } from '@/types'
import { useListStore } from '@/stores/notelist'
import { debounce } from '@/utils/debounce'
import useloadMore from '@/use/useLoadMore'
import { useRouter } from 'vue-router'
import useLongTouch from '@/use/useLongTouch'
import { showSuccessToast } from 'vant'

const notes = ref([] as NoteList)
const items = ref([] as HTMLElement[])
const store = useListStore()
const initList = () => {
  store.getNotesList(stateV.page, stateV.size).then((res) => (notes.value = res))
}
const noteListState: NoteListState = {
  leftList: [],
  rightList: []
}

const state = reactive(noteListState)
const initLRlist = () => {
  let leftHeightSum = 0
  let rightHeightSum = 0
  let leftArr: Note[] = []
  let rightArr: Note[] = []
  nextTick(() => {//等待dom渲染完成
    items.value.forEach((item, index) => {
      if (leftHeightSum <= rightHeightSum) {
        leftArr.push(notes.value[index])
        leftHeightSum += item?.clientHeight
      } else {
        rightArr.push(notes.value[index])
        rightHeightSum += item?.clientHeight//
      }
    })
    state.leftList = leftArr.reverse()
    state.rightList = rightArr.reverse()
  })
}
const refListBox = ref<null | HTMLElement>(null)
const loadMore = () => {
  stateV.page++
  store.getNotesList(stateV.page, stateV.size).then((res) => {
    items.value = []
    notes.value = res
  })
}
onMounted(() => {
  initList()
  useloadMore(refListBox, loadMore)
})
watch(notes, () => {
  initLRlist()
})
const stateV = reactive({
  searchValue: '',
  page: 1,
  size: 13,
  delId: ''
})
const handleSearch = () => {
  console.log(1)
  if (!stateV.searchValue.trim()) {
    store.getNotesList(stateV.page, stateV.size).then((res) => {
      items.value = []
      notes.value = res
    })
  } else {
    store.getNotesListSearch(stateV.searchValue).then((res) => {
      items.value = []
      notes.value = res
    })
  }
}

const handleClear = () => {
  console.log(2)
  store.getNotesList(stateV.page, stateV.size).then((res) => {
    items.value = []
    notes.value = res
  })
}

watch(() => stateV.searchValue, debounce(handleSearch, 1000))
const router = useRouter()
const handleAdd = () => {
  router.push('/addNote')
}
const handleClickItem = (e: any) => {
  if (e.target.className === 'click-model') {
    const id = e.target.id
    router.push({ path: 'addNote', query: { id } })
  }
}
const show = ref(false)
//处理长按删除的功能
const leftDom = ref<null | HTMLElement>(null)
const rightDom = ref<null | HTMLElement>(null)
useLongTouch([leftDom, rightDom], (id: string) => {
  //拿到id值以后，弹出删除框
  //删除dom的显示
  console.log(id)
  stateV.delId = id
  show.value = true
})
const handleDelete = () => {
  store.deleteNoteByIdList(stateV.delId).then((res) => {
    if (res) {
      show.value = false
      showSuccessToast('删除成功')
      store.getNotesList(stateV.page, stateV.size).then((res) => {
        items.value = []
        notes.value = res
      })
    }
  })
}
</script>

<template>
  <div class="note-box">
    <van-search
      placeholder="搜索便签"
      input-align="center"
      v-model="stateV.searchValue"
      @search="handleSearch"
      @clear="handleClear"
    ></van-search>
    <div class="list-box" ref="refListBox">
      <div class="list-left" @click="handleClickItem" ref="leftDom">
        <div class="list-item" v-for="item in state.leftList" :key="item['_id']">
          <div class="item-content">
            <p class="item-text">
              {{ item.content }}
            </p>
          </div>
          <div class="item-bottom">
            <p>
              {{ item.dates }}
            </p>
          </div>
          <div class="click-model" :id="item['_id']"></div>
        </div>
      </div>
      <div class="list-right" @click="handleClickItem" ref="rightDom">
        <div class="list-item" v-for="item in state.rightList" :key="item['_id']">
          <div class="item-content">
            <p class="item-text">
              {{ item.content }}
            </p>
          </div>
          <div class="item-bottom">
            <p>
              {{ item.dates }}
            </p>
          </div>
        </div>
      </div>
      <div class="init-list">
        <div
          class="list-item"
          v-for="item in notes"
          :key="item['_id']"
          :ref="
            (el) => {
              if (el != null) {
                items.push(el as HTMLElement)
              }
            }
          "
        >
          <div class="item-content">
            <p class="item-text">
              {{ item.content }}
            </p>
          </div>
          <div class="item-bottom">
            <p>
              {{ item.dates }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model:show="show" position="bottom" :style="{ height: '10%' }">
      <div class="delete-box" @click="handleDelete">删除</div>
    </van-popup>
    <van-button round icon="plus" class="button" type="primary" @click="handleAdd"></van-button>
  </div>
</template>

<style lang="scss" scoped>
.note-box {
  width: 100%;
  overflow: hidden;
  flex: 1;
  padding: 0 0.1rem;
  box-sizing: border-box;
  .van-search {
    :v-deep(.van-search__content) {
      background-color: rgb(247, 247, 247);
      border-radius: 0.2rem;
    }
    background-color: rgb(247, 247, 247);
  }
  .list-box {
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      /* 滚动条宽 */
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      /* 滚动条 拖动条 */
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      /* 滚动条背景槽 */
      background-color: #eee;
      border-radius: 6px;
    }
    .list-left {
      width: 50%;
      float: left;
      padding-bottom: 50px;
      padding-left: 5px;
    }
    .list-right {
      width: 50%;
      float: left;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-end;
      padding-bottom: 50px;
      padding-right: 5px;
    }
    .init-list {
      width: 50%;
      /* background-color: rgb(122, 129, 127); */
      position: absolute;
      visibility: hidden;
      height: 2rem;
      overflow: hidden;
    }
    .list-item {
      box-sizing: border-box;
      width: 95%;
      max-height: 2rem;
      background-color: rgb(245, 245, 245);
      border-radius: 0.15rem;
      margin-top: 0.1rem;
      padding: 0.2rem;
      position: relative;
      box-shadow: 2px 2px 9px #ccc;
      .item-content {
        max-height: 1.25rem;
        font-size: 0.16rem;
        line-height: 0.25rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        color: rgb(99, 99, 99);
        .item-text:first-line {
          color: rgb(27, 27, 27);
          font-weight: 600;
        }
      }
      .item-bottom {
        height: 0.35rem;
        color: rgb(151, 151, 151);
        display: flex;
        align-items: flex-end;
      }
      .click-model {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
  .button {
    position: fixed;
    bottom: 0.2rem;
    right: 0.2rem;
  }
  .van-button {
    width: 0.44rem;
    height: 0.44rem;
  }
  .delete-box {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1989fa;
    font-size: 0.23rem;
  }
}
</style>
