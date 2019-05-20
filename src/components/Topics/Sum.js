import React, {Component} from 'react';

export default class Sum extends Component{

    render(){
        return(
            <div>
                <h4 className="puzzleBox filterStringPB">
                Palindrome
                    <span className="resultsBox">
                        {JSON.stringify(this.state.palindrome)}
                    </span>
                </h4>
                <input 
                className="inputLine"
                onChange = {(e) => this.setState({userInput: e.target.value})}
                />
                <button 
                onClick={this.handlePalindromeClick}
                className="confirmationButton"> 
                </button>
                
            </div>
        )
    }
}