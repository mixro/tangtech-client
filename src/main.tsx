import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import { StoreProvider } from './store/StoreContext'
import { prefetch } from './hooks/useResource'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)

// After first paint, warm the API host and cache the catalogue so Services/Products open instantly.
const idle = (cb: () => void) => ('requestIdleCallback' in window ? window.requestIdleCallback(cb, { timeout: 3000 }) : setTimeout(cb, 1500))
idle(() => prefetch('/services', '/products'))
