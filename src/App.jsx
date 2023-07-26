import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import PreviousWorks from "./components/previous-works/PreviousWorks"
import Services from "./components/services/Services"
import Top from "./components/top/Top"
import Video from "./components/video/video"


function App() {

  return (
    <div className="App">
      <Top />
      <Hero />
      <About />
      <Video />
      <Services />
      <PreviousWorks />
    </div>
  )
}

export default App
