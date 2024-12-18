import './App.css'
import ThemeProvider from './context/Themeprovider'
import MainContent from './components/page'
import ToggleButton from './components/button'

function App() {
  

  return (
    <ThemeProvider>
      <h1>Chai and React</h1>
      <MainContent></MainContent>
      <ToggleButton></ToggleButton>
    </ThemeProvider>
  )
}

export default App
