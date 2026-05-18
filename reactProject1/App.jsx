import {createRoot} from 'react-dom/client'
import Header from './components/Header'
import Entry from './components/Entry'
import Joke from './components/Joke'
import myJournal from './data'

const root=createRoot(document.getElementById('root'))



const entryData=Object.values(myJournal).map((entry)=>{
    return <Entry key={entry.id} {...entry}/>
})
// const myArr=["Rakshika","Saurav","Seema",]

root.render(
    <>
        {/* <Joke joke={joke} /> */}
        <Header />
        {entryData}
    </>
) 

// const entryData={
//     img:{
//         src:"https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/master/pass/GettyImages-955441104",
//         description:"Billi"
//     },
//     owner:{
//         name:"Mr.Sharma",
//         number:"1234567890",
//         email:"abcd@gmail.com"
//     }
// }
// const joke={
//     setup:"Why did the scarecrow win an award?",
//     punchline:"Because he was outstanding in his field!"
// }