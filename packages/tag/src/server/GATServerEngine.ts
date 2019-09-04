import { ServerEngine, TwoVector, GameEngine } from 'lance-gg';
import GATGameEngine from '../common/GATGameEngine'
const nameGenerator = require('./NameGenerator');
const NUM_BOTS = 3;

interface IShipData {
    kills: number,
    name: string,
}

interface IData {
    [index: string]: IShipData
};

export default class GATServerEngine extends ServerEngine {

    gameEngine: GATGameEngine;
    scoreData: IData;
    shipData: IShipData;

    constructor(io, gameEngine, inputOptions) {
        super(io, gameEngine, inputOptions);
        this.scoreData = {
            "alpha": this.shipData,
            "beta": this.shipData
        };
               
    }

    // when the game starts, create robot spacesships, and register
    // on missile-hit events
    start() {
        super.start();

        for (let x = 0; x < NUM_BOTS; x++) this.makeBot();
    }


    // create a robot spaceship
    makeBot() {
        let bot = this.gameEngine.makeShip(0);
        //bot.attachAI();

        //this.scoreData[bot.id] = {
        this.scoreData[0] = {
            kills: 0,
            name: nameGenerator('general') + 'Bot'
        };

        //this.updateScore();
    }

}