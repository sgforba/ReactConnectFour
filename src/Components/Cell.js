import React, { Component } from 'react';


class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            hovered: false,
            taken: false
        }

    }

    mouseOver(){
        this.setState({hovered: !this.state.hovered})
    }

    updateCell(){
        this.setState({taken: !this.state.taken})
    }
    render() {
        let cellColor = ' ';
        if(this.props.cellvalue === 1) {
            cellColor = 'red';
        } else if(this.props.cellvalue === 2) {
            cellColor = 'black';
        }
        return (
            <div 
                className={`col ${cellColor}`} 
                onMouseEnter={()=> this.mouseOver()} 
                onClick={
                    ()=>{
                        this.props.addPiece(
                            this.props.rowpos, 
                            this.props.colpos, 
                            this.props.currentPlayer); 
                        this.updateCell();
                    }
                }
            >
            </div>
        );
    }
}

export default Cell;