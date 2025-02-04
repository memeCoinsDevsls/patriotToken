import { Navbar } from "./components/nav/Navbar"
import { About } from "./components/about/About"
import { MeetUs } from "./components/meet/MeetUs"
import { Tokenomics } from "./components/tokenomics/Tokenomics"
import { HowBuy } from "./components/buy/HowBuy"
import { FollowUs } from "./components/follow/FollowUs"
import { Footer } from "./components/footer/Footer"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <MeetUs></MeetUs>
      <Tokenomics></Tokenomics>
      <HowBuy></HowBuy>
      <FollowUs></FollowUs>
      <Footer></Footer>
    </>
  )
}

export default App
