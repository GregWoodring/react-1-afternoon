import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: [
                {name: "Greg", Age: 23},
                {name: "Sauron", Age: 2300, darkLord: true},
                {name: "Bob", Age: 47, darkLord: false}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleFilterClick = () =>{
        let filteredArray = this.state.unFilteredArray.filter(item =>{
            return item[this.state.userInput];
        })
        this.setState({
            filteredArray
        })
    }

    render(){
        return(
            <div>
                <h4 className="puzzleBox evenAndOddPB">
                    FilterObject
                    <span className="resultsBox">
                    {JSON.stringify(this.state.unFilteredArray)}
                    </span>
                    <span className="resultsBox">
                    {JSON.stringify(this.state.filteredArray)}
                    </span>
                </h4>
                <input 
                className="inputLine"
                onChange={e => this.setState({userInput: e.target.value})}
                />
                <button 
                onClick={this.handleFilterClick}
                className="confirmationButton"> 
                </button>
                
            </div>
        )
    }
}
