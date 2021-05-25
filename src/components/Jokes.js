import React, {Component} from 'react';

const Joke = ({joke}) => {
    const {setup, punchline} = joke;
    return (
        <p>{setup}<em>{punchline}</em></p>
    )
}
class Jokes extends Component {

    state = {joke: {}, tenJokes: []}
    componentDidMount() {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(json => this.setState( {joke: json}))
        .catch(error => alert("Failed To Fetch!"));    
    }

    tenJokes = () => {
        fetch("https://official-joke-api.appspot.com/random_ten")
        .then(response => response.json())
        .then(json => this.setState( {tenJokes: json}))
        .catch(error => alert("Failed To Fetch!"));
    }


    render() {
        
        return(
            <div>
                <h2>Highlighted Jokes</h2>
                <Joke joke={this.state.joke}/>
                {/* <p>{setup}<em>{punchline}</em></p> */}
                <div>
                    <h2>More Jokes</h2>
                    <button onClick={this.tenJokes} className="btn">{(this.state.tenJokes.length===0)?"Fetch More Jokes":"Refresh"}</button><br/>
                    <div>
                        {
                            this.state.tenJokes.map(joke => (
                                <Joke key={joke.id} joke={joke}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Jokes;