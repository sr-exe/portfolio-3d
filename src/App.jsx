import { useTheme } from './hooks/useTheme.js'
import { useLenis } from './hooks/useLenis.js'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  useLenis()

  return (
    <>
      <Loader />
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home theme={theme} />
    </>
  )
}
