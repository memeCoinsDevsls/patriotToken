import { Navbar } from "./components/nav/Navbar"
import { About } from "./components/about/About"
import { MeetUs } from "./components/meet/MeetUs"
import { Tokenomics } from "./components/tokenomics/Tokenomics"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <MeetUs></MeetUs>
      <Tokenomics></Tokenomics>
    </>
  )
}

export default App
