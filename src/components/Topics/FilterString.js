import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: ['Greg'
            , 'Hello how are you'
            , 'The cake is a lie'
            , 'Old Meme'
            , 'Dank Meme'],
            filteredArray: [],
            userInput: ''
        }
    }

    handleFilterClick = () => {
        let filteredArray = this.state.unFilteredArray.filter(item => {
            return item.includes(this.state.userInput)
        })
        this.setState({
            filteredArray
        })
    }

    render(){
        return(
            <div>
                <h4 className="puzzleBox evenAndOddPB">
                FilterString
                    <span className="resultsBox">
                        {JSON.stringify(this.state.unFilteredArray)}
                    </span>
                    <span className="resultsBox">
                    {JSON.stringify(this.state.filteredArray)}
                    </span>
                </h4>
                <input 
                className="inputLine"
                onChange = {(e) => this.setState({userInput: e.target.value})}
                />
                <button 
                onClick={this.handleFilterClick}
                className="confirmationButton"> 
                </button>
                
            </div>
        )
    }
}
