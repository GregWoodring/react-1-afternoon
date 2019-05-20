import React, {Component} from 'react';

export default class EvenAndOdd extends Component{
    constructor(props){
        super(props);
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: '',
        }

    }

    handleSolveClick = () => {
        let {userInput} = this.state
        let arr = userInput.split(',');
        let evenArray = arr.filter((item) => item %2 === 0)
        let oddArray = arr.filter(item => item %2 !== 0)
        this.setState({
            evenArray,
            oddArray
        })
    }

    render(){
        return(
            <div>
                <h4 className="puzzleBox evenAndOddPB">
                    Evens and Odds
                    <span className="resultsBox">
                    Evens: {JSON.stringify(this.state.evenArray)}
                </span>
                <span className="resultsBox">
                    Odds: {JSON.stringify(this.state.oddArray)}
                </span>
                </h4>
                <input 
                className="inputLine"
                onChange={e => {this.setState({
                    userInput: e.target.value
                })}}
                />
                <button 
                onClick={this.handleSolveClick}
                className="confirmationButton">
                </button>
                
            </div>
        )
    }
}
