import axios from '.'
export function getNotes<T>(page: number, size: number) {
  return axios.get<T>(`/note/page/${page}/${size}`) as Promise<T>
}
export function addNote<T>(note: T) {
  return axios.post<T>('/note', note)
}

export function getNotesListByContent<T>(content: string) {
  return axios.get<T>(`/note/content/${content}`) as Promise<T>
}

export function updateNote<T>(id: string, note: T) {
  return axios.put<T>(`/note/${id}`, note) as Promise<T>
}

//根据id值来获取数据
export function getNoteById<T>(id: string) {
  return axios.get<T>(`/note/id/${id}`) as Promise<T>
}

//根据id值来判断删除
export function deleteNoteById<T>(id: string) {
  return axios.delete<T>(`/note/${id}`) as Promise<T>
}
