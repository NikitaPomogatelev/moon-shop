import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from './Home'


function App() {


  return (
    <div className='site-container'>
    <Header />
    <main className='main'>
        <Home />

    </main>
    <Footer />
    </div>
  )
}

export default App
