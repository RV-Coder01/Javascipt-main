export default function Joke(props) {
    return(
        <>
        <h1>Setup: {props.joke.setup}</h1>
        <h1>Punchline: {props.joke.punchline}</h1>
        </>
    )
}