interface Post {
  id: number
  title: string
  description: string
}

// Pick
type PostPreviewPick = Pick<Post, 'id' | 'title'>
let pick: PostPreviewPick

// Omit
type PostPreviewOmit = Omit<Post, 'id' | 'title'>
let omit: PostPreviewOmit
