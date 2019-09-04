//import SimplePhysicsEngine from 'lance/physics/SimplePhysicsEngine';
import { GameEngine, TwoVector, SimplePhysicsEngine } from 'lance-gg';
//import Ship from './Ship';
//import Missile from './Missile';

export default class GATGameEngine extends GameEngine {

    physicsEngine: SimplePhysicsEngine;

    constructor(options) {
        super(options);
        this.physicsEngine = new SimplePhysicsEngine({
            gameEngine: this,
            collisions: {
                type: 'brute',
                collisionDistance: 28
            }
        });
    }

    makeShip(playerId: number) :Ship {
        let newShipX = Math.floor(Math.random() * (this.worldSettings.width - 200)) + 200;
        let newShipY = Math.floor(Math.random() * (this.worldSettings.height - 200)) + 200;
    }
    
}