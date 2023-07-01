import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'
import { Layout } from '../components'
import Feed from '../pages/Feed'

export default function RootLayout() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Feed />} />
        {/* <Route path='video/:id' element={<VideoDetail />} />
          <Route path='channel/:id' element={<ChannelDetail />} />
          <Route path='search/:searchquery' element={<SearchFeed />} /> */}
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
