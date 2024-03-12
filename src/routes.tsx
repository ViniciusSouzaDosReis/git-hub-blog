import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/App/app'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Blog /> },
      { path: 'post/:id', element: <Post /> },
    ],
  },
])
