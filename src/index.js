import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Phaser from 'phaser';

import LevelOne from './scenes/LevelOne';
import LevelTwo from './scenes/LevelTwo';

const game = new Phaser.Game({
    height: 500,
    parent: 'phaser-example',
    scene: [
        LevelOne,
        LevelTwo,
    ],
    type: Phaser.AUTO,
    width: 800,
});
