import React, { Component } from 'react';

import Row from './Row.js';


class GameBoard extends Component {
    constructor(){
        super();
        this.state = {
            currentPlayer: 1,
            columns: 7,
            rows: 6,
            board: [],
            winner: false
        }
        this.addPiece = this.addPiece.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }

    initBoard() {
        let board = [];
        for (let r = 0; r < this.state.rows; r++) {
          let row = [];
          for (let c = 0; c < this.state.columns; c++) {
              row.push(0);
          }
          board.push(row);
        }
        return board;
    }
    
    addPiece(row, col, currentPlayer) {
        let newBoard = this.state.board;
        let rowPos;
        for (let e = 0; e < newBoard.length; e++) {
            if(newBoard[e][col] !== 0 && e !== 0) {
                newBoard[e-1][col] = currentPlayer;
                rowPos = e-1;
                break;
            } else if(e === newBoard.length-1) {
                newBoard[e][col] = currentPlayer;
                rowPos = e;
            }
        }
        var newPlayer = currentPlayer === 1 ? 2 : 1
        this.setState({board: newBoard});
        this.checkWin(this.state.board, currentPlayer, { x:col , y: rowPos });
        this.setState({currentPlayer: newPlayer});
    }

    checkWin(board, player, position) {
        //Check Horizontal
        for (let row = 0; row < board.length; row++){
            for (let col = 0; col < board[row].length - 3; col++){
                if (board[row][col] !== 0 && 
                    board[row][col] === board[row][col+1] &&
                    board[row][col] === board[row][col+2] && 
                    board[row][col] === board[row][col+3])
                {
                   return true;
                    
                } 
            }
        }

        //Check Vertical
        for (let col = 0; col < board[0].length; col++){
            for (let row = 0; row < board.length - 3; row++) {
                if (
                    board[row][col] !== 0 && 
                    board[row][col] === board[row+1][col] &&
                    board[row][col] === board[row+2][col] && 
                    board[row][col] === board[row+3][col])
                {
                    return console.log("YES");
                }
            }
        }      

        //Check Diagonal LTR
        for (let row = 0; row < board.length - 3; row++){
            for (let col = 0; col < board[row].length - 3; col++){
                if (board[row][col] !== 0 && 
                    board[row][col] === board[row+1][col+1] &&
                    board[row][col] === board[row+2][col+2] && 
                    board[row][col] === board[row+3][col+3])
                {
                    return console.log("YES");
                }
            }
        } 
        //Check Diagonal RTL
        for (let row = 0; row < board.length - 3; row++) {
            for (let col = 3; col < board[row].length; col++) {
                if (board[row][col] !== 0 && 
                    board[row][col] === board[row+1][col-1] && 
                    board[row][col] === board[row+2][col-2] && 
                    board[row][col] === board[row+3][col-3])
                {
                    return console.log("YES");
                }
            }
        }               
    }
    
    componentWillMount(){
        this.setState({board: this.initBoard()})
    }

    render() {   
        let rows = this.state.board.map((x, index)=>{
            return <Row key={this.state.board.indexOf(x)} rowpos={index}  columns={x} addPiece={this.addPiece} currentPlayer={this.state.currentPlayer}/>
        })   
        return (
            <div className="gameboard">
                {rows}
            </div>
        );
    }
}

export default GameBoard;