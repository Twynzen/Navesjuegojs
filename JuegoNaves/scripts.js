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

    function Shot( x, y, array) {
            this.posX = x;
            this.posY = y;
            this.image = new Image();
            this.speed = shotSpeed;
            this.identifier = 0;
            this.add = function () {
                array.push(this);
            };
            this.deleteShot = function (idendificador) {
                arrayRemove(array, idendificador);
            };
        }

        function PlayerShot (x, y) {
            Object.getPrototypeOf(PlayerShot.prototype).constructor.call(this, x, y, playerShotsBuffer);
            this.image.src =  'images/disparo_bueno.png';
            this.isHittingEvil = function() {
                return (!evil.dead && this.posX >= evil.posX && this.posX = evil.posY && this.posY = player.posX && this.posX = player.posY && this.posY
    El comportamiento del bicho malo y del jefe final es una mezcla de los dos casos anterio
