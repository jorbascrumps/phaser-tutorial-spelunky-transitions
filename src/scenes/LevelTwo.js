import BaseScene from './Base';

export default class LevelOne extends BaseScene {

    constructor () {
        super({
            key: 'TWO',
        });
    }

    preload () {
        this.load.image('background_two', 'https://labs.phaser.io/assets/demoscene/birdy-nam-nam-bg2.png');
    }

    create () {
        super.create();

        this.add.image(0, 0, 'background_one')
            .setFlipX(true)
            .setOrigin(0, 0)
            .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height)
        ;

        this.input.on('pointerdown', () => {
            this.scene.transition({
                duration: 2500,
                target: 'ONE',
            });
        });
    }

}
