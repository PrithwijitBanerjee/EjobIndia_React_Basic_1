import { Suspense, lazy } from 'react'
const ContentPage1 = lazy(() => import('./ContentPage1'))
const ContentPage2 = lazy(() => import('./ContentPage2'))
export default function LazyLoading() {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<>Content 2 is loading... please wait...</>}>
        <ContentPage1 />
      </Suspense>
      <Suspense fallback={<>Content 1 is loading... please wait...</>}>
        <ContentPage2 />
      </Suspense>
    </div>
  )
}
