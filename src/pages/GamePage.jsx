import React from "react";

export function GamePage() {
  const moveLeft = (left) => {
    if (left > 0) player.style.left = left - 10 + "px";
  };

  const moveRight = (left) => {
    if (left <= 460) player.style.left = left + 10 + "px";
  };

  const shoot = (gameScreen, left) => {
    var bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.left = left + "px";
    gameScreen.appendChild(bullet);

    //makes the bullet movement to the top
    var moveBullet = setInterval(() => {
      var enemies = document.getElementsByClassName("enemy");
      for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if (enemy != undefined) {
          var enemyBound = enemy.getBoundingClientRect();
          var bulletBound = bullet.getBoundingClientRect();
          if (
            bulletBound.left >= enemyBound.left &&
            bulletBound.right <= enemyBound.right &&
            bulletBound.top <= enemyBound.top &&
            bulletBound.bottom <= enemyBound.bottom
          ) {
            enemy.parentElement.removeChild(enemy); //Just removing that particular rock;
            //Scoreboard
            document.getElementById("score").innerHTML =
              parseInt(document.getElementById("score").innerHTML) + 1;
          }
        }
      }
      var bulletBottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      bullet.style.bottom = bulletBottom + 500 + "px";

      if (bulletBottom >= 500) {
        clearInterval(moveBullet);
      }

      bullet.style.left = left + "px";
      bullet.style.bottom = bulletBottom + 3 + "px";
    });
  };

  var generateEnemies = setInterval(() => {
    console.log("generateEnemies");
    var enemy = document.createElement("div");
    enemy.classList.add("enemy");

    //sets the horizontal position to the enemy apper
    enemy.style.left = Math.floor(Math.random() * 460) + "px";
    enemy.style.top = "5px";
    document.getElementById("screen").appendChild(enemy);
  }, 1000);

  //makes the enemy movement to the bottom
  var moveEnemy = setInterval(() => {
    var enemies = document.getElementsByClassName("enemy");
    for (var i = 0; i < enemies.length; i++) {
      var enemy = enemies[i];
      var enemyTop = parseInt(
        window.getComputedStyle(enemy).getPropertyValue("top")
      );
      enemy.style.top = enemyTop + 10 + "px";

      if (enemyTop >= 460) {
        clearInterval(moveEnemy);
        enemies = [];
        alert("Game Over");
        window.location.reload();
      }
    }
  }, 500);

  document.addEventListener("keydown", (e) => {
    const player = document.getElementById("player");
    const gameScreen = document.getElementById("screen");
    const left = parseInt(
      window.getComputedStyle(player, null).getPropertyValue("left")
    );
    switch (e.key) {
      case "ArrowLeft":
        moveLeft(left);
        break;
      case "ArrowRight":
        moveRight(left);
        break;
      case "ArrowUp":
        shoot(gameScreen, left);
        break;
    }
  });

  return (
    <div className="gamePage">
      <div id="score">0</div>
      <div id="screen">
        <div id="player"></div>
      </div>
    </div>
  );
}
