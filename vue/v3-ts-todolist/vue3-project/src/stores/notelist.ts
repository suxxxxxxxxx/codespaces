import { defineStore } from 'pinia'
import type { Note, NoteList } from '@/types'
import {
  getNotes,
  addNote,
  getNotesListByContent,
  updateNote,
  getNoteById,
  deleteNoteById
} from '@/api/note'
export const useListStore = defineStore('list', {
  state: () => {
    return {
      list: [] as Note[]
    }
  },
  actions: {
    async getNotesList(page: number, size: number) {
      const res = await getNotes<NoteList>(page, size)
      if (page === 1) {
        this.list = res
      } else {
        this.list.push(...res)
      }
      return [...this.list]
    },
    async addNoteList(payload: Note) {
      return await addNote<Note>(payload)
    },
    async getNotesListSearch(payload: string) {
      const res = await getNotesListByContent<NoteList>(payload)
      this.list = res
      return res
    },
    async updateNoteList(payload: any) {
      return await updateNote<Note>(payload.id, payload.note)
    },
    async getNoteByIdList(payload: string) {
      return await getNoteById<Note>(payload)
    },
    async deleteNoteByIdList(payload: string) {
      return await deleteNoteById<Note>(payload)
    }
  }
})
