import React, { Component } from 'react';
import Cell from './Cell.js';

class Row extends Component {
    constructor(props){
        super(props);  
    }    
    render() {
        let columns = this.props.columns.map((x, index)=>{
            return <Cell 
                        colpos={index} 
                        cellvalue={x} 
                        rowpos={this.props.rowpos} 
                        addPiece={this.props.addPiece}
                        currentPlayer={this.props.currentPlayer}
                    />
        }) 
        return (
            <div className="row">
                {columns}
            </div>
        );
    }
}

export default Row;