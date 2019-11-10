function Player(life, score) {
        var settings = {
            marginBottom : 10,
            defaultHeight : 66
        };
        player = new Image();
        player.src = 'images/bueno.png';
        player.posX = (canvas.width / 2) - (player.width / 2);
        player.posY = canvas.height - (player.height == 0 ? settings.defaultHeight : player.height) - settings.marginBottom;
        player.life = life;
        player.score = score;
        player.dead = false;
        player.speed = playerSpeed;

        var shoot = function () {
            if (nextPlayerShot  5)
                player.posX -= player.speed;
            if (keyPressed.right && player.posX  0) {
                this.dead = true;
                evilShotsBuffer.splice(0, evilShotsBuffer.length);
                playerShotsBuffer.splice(0, playerShotsBuffer.length);
                this.src = 'images/bueno_muerto.png';
                createNewEvil();
                setTimeout(function () {
                    player = new Player(player.life - 1, player.score);
                }, 500);

            } else {
                saveFinalScore();
                youLoose = true;
            }
        };

        return player;
    }
