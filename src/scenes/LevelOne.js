import BaseScene from './Base';

export default class LevelOne extends BaseScene {

    constructor () {
        super({
            key: 'ONE',
        });
    }

    preload () {
        this.load.image('background_one', 'https://labs.phaser.io/assets/demoscene/birdy-nam-nam-bg1.png');
    }

    create () {
        super.create();

        this.add.image(0, 0, 'background_one')
            .setOrigin(0, 0)
            .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height)
        ;

        this.input.on('pointerdown', () => {
            this.scene.transition({
                duration: 2500,
                target: 'TWO',
            });
        });
    }

}
