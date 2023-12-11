export interface Todo {
  id: number
  title: string
  description: string
  status: { isHigh: boolean; label: string }
  role: string
  isDone: boolean
  createdAt: string
  time: string
}
