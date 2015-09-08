/*
 * TitleScene
 */


phina.namespace(function() {

  /**
   * @class phina.game.TitleScene
   * 
   */
  phina.define('phina.game.TitleScene', {
    superClass: 'phina.display.CanvasScene',
    /**
     * @constructor
     */
    init: function(params) {
      this.superInit(params);

      params = (params || {}).$safe(phina.game.TitleScene.default);

      this.backgroundColor = params.backgroundColor;

      this.fromJSON({
        children: {
          titleLabel: {
            className: 'phina.display.Label',
            arguments: [params.title, {
              color: params.fontColor,
              stroke: false,
              fontSize: 64,
            }],
            x: this.gridX.center(),
            y: this.gridY.span(4),
          }
        }
      });

      if (params.exitType === 'touch') {
        this.fromJSON({
          children: {
            touchLabel: {
              className: 'phina.display.Label',
              arguments: ["TOUCH START", {
                color: 'white',
                color: params.fontColor,
                stroke: false,
                fontSize: 32,
              }],
              x: this.gridX.center(),
              y: this.gridY.span(12),
            },
          },
        });

        this.on('pointstart', function() {
          this.exit();
        });
      }
    },

    _static: {
      default: {
        title: 'phina.js games',
        message: '',
        width: 640,
        height: 960,

        fontColor: 'white',
        backgroundColor: 'hsl(200, 80%, 64%)',
        backgroundImage: '',

        exitType: 'touch',
      },
    },

  });

});