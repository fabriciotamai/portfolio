// import { HeaderContainer } from './styles'

import { Footer } from './components/Footer'
import { Header } from './components/Header/index'
import { Main } from './components/Main'
import { globalStyles } from './styles/global'

globalStyles()

export default function App() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to right, #181818, #191718, #131212)',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
