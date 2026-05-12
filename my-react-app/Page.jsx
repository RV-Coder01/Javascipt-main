import Header from "./Header"
import Footer from "./Footer"

function MainComponent(){
  return(
    <>
      <h1>Fun facts about React</h1>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>It maintain by meta</li>
          <li>Powers 1000s of enterprice apps,including mobile apps</li>
        </ul>
    </>
  )
}

export default function Page(){
  return(
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}

