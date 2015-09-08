define(function (require) {
    'use strict';

    var Join4Player = require('Join4Player');
    var Join4Board = require('Join4Board');

    var Join4 = function Join4(config) {
        this.numberOfPlayers = config.players || this.numberOfPlayers;
        this.rows = config.rows || this.rows;
        this.cols = config.cols || this.cols;
        this.currentPlayerTurn = config.startPlayerTurn || this.currentPlayerTurn;

        this.init();
    };

    Join4.prototype.cols = 7;
    Join4.prototype.rows = 6;
    Join4.prototype.numberOfPlayers = 2;
    Join4.prototype.currentPlayerTurn = 0;

    Join4.prototype.players = null;
    Join4.prototype.possibleJoins = null;
    Join4.prototype.board = null;

    Join4.prototype.init = function init() {

        this.createPlayers()
            .buildBoard();
            .renderBoard()
            .startGame();
    };

    Join4.prototype.createPlayers = function createPlayers() {
        var i;

        if (this.players) {
            //this should not be called more than once per game.
            return this;
        }
        this.players = [];

        for (i = 0; i < this.numberOfPlayers; i++) {
            this.players.push(new Join4Player(this, i));
        }

        return this;
    };

    /**
     * create
     *
     * @chainable
     */
    Join4.prototype.renderBoard = function renderBoard() {

        this.board = new Join4Board(this.rows, this.cols);
        return this;
    };

    /**
     * Draw up the board..
     *
     * @chainable
     */
    Join4.prototype.renderBoard = function renderBoard() {

        return this;
    };

    /**
     * Let the players know the game is ready to start and do any other maintenance for facilitating that.
     * @return {[type]} [description]
     */
    Join4.prototype.startGame = function startGame() {

        return this;
    };


    Join4.prototype.isWinner = function isWinner() {

    };

    return Join4;
});
