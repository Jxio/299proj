"use strict";

/*
 * Database Interface - Functionality required for the application to
 * interact with a database or other method of storing information.
 *
 * The database should be able to store, edit and retrieve data on 
 * players, moves and games.
 *
 * Created by Charlie Friend <cdfriend@uvic.ca>.
 */

class DBInterface {
    
    /*
     * Saves a new game object in the database.
     * 
     * @param data {object} The game data to be saved.
     * @param cb {function} A function to be called when the operation is complete.
     *      Takes a single "id" parameter, which will be NULL if the operation fails.
     * 
     * @throws {Error} Thrown if the data passed does not match the "Game" schema detailed
     *                 in {@link ../../doc/game.json}.
     */
    function newGame(data, cb) {
        throw new Error("Interface method - not callable.");
    }
    
    /*
     * Updates information about a game by id.
     *
     * @param id {number} The id of the game to update in the database.
     * @param data {object} An object containing the fields to update and their new values.
     * @param cb {function} A function to be called when the operation completes.
     *      Takes a single boolean "success" parameter.
     *
     * @throws {Error} Thrown if an invalid or non-existent field is specified in the input data.
     */
    function updateGameById(id, data, cb) {
        throw new Error("Interface method - not callable.");
    }
    
    /*
     * Adds a move to an active game specified by its id.
     * 
     * @param id {number} The id number of the desired game in the database.
     * @param data {object} The move data to be added to the game.
     * @param cb {function} A function to be called when the operation completes/
     *      Takes a single boolean "success" parameter.
     * 
     * @throws {Error} Thrown if the move does not match the schema specified in 
     *                 {@link ../../doc/move.json} or if the game is no longer in
     *                 an ACTIVE state.
     */
    function appendGameMoveById(id, data, cb) {
        throw new Error("Interface method - not callable.");
    }
    
    /*
     * Gets a game object by its id in the database.
     * 
     * @param id {number} The id number of the desired game.
     * @param cb {function} The function to be called when the operation completes.
     *      Takes a single "data" parameter, which will be NULL if the operation fails.
     */
    function getGameById(id, cb) {
        throw new Error("Interface method - not callable.");
    }
    
    /*
     * Saves a new player object in the database.
     * 
     * @param data {object} The game data to be saved.
     * @param cb {function} A function to be called when the operation is complete.
     *      Takes a single "id" parameter, which will be NULL if the operation fails.
     * 
     * @throws {Error} Thrown if the data passed does not match the "Player" schema detailed
     *                 in {@link ../../doc/user.json}.
     */
    function newPlayer(data, cb) {
        throw new Error("Interface method - not callable.");
    }
    
    /*
     * Updates information about a player by id.
     *
     * @param id {number} The id of the player to update in the database.
     * @param data {object} An object containing the fields to update and their new values.
     * @param cb {function} A function to be called when the operation completes.
     *      Takes a single boolean "success" parameter.
     *
     * @throws {Error} Thrown if an invalid or non-existent field is specified in the input data.
     */
    function updatePlayerById(id, data, cb) {
        throw new Error("Interface method - not callable.");
    }
    
    /*
     * Gets a player object by its id in the database.
     * 
     * @param id {number} The id number of the desired player.
     * @param cb {function} The function to be called when the operation completes.
     *      Takes a single "data" parameter, which will be NULL if the operation fails.
     */
    function getPlayerById(id, cb) {
        throw new Error("Interface method - not callable.");
    }
    
}

module.exports = DBInterface;