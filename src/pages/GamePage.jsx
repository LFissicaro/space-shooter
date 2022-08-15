import React from "react";

export function GamePage() {
  document.addEventListener("keydown", (e) => {
    const player = document.getElementById("player");
    const gameScreen = document.getElementById("screen");
    const left = parseInt(
      window.getComputedStyle(player, null).getPropertyValue("left")
    );
    console.log(e.key);
    switch (e.key) {
      case "ArrowLeft" && left > 0:
        player.style.left = left - 10 + "px";
        break;
      case "ArrowRight" && left <= 460:
        player.style.left = left + 10 + "px";
        break;
      case "ArrowUp" || e.key.code == 32:
        var bullet = document.createElement("div");
        bullet.classList.add("bullet");
        gameScreen.appendChild(bullet);

        const moveBullet = setInterval(() => {
          var enemies = document.getElementsByClassName("enemy");

          // enemies?.map((enemy) => {
          //   if (enemy != undefined) {
          //     var enemybound = enemy.getBoundingClientRect();
          //     var bulletbound = bullet.getBoundingClientRect();

          //     if (
          //       bulletbound.left >= enemybound.left &&
          //       bulletbound.right <= enemybound.right &&
          //       bulletbound.top <= enemybound.top &&
          //       bulletbound.bottom <= enemybound.bottom
          //     ) {
          //       enemy.parentElement.removeChild(enemy);
          //     }
          //   }
          // });
        });
    }
  });

  return (
    <div className="gamePage">
      <div id="screen">
        <div className="enemies"></div>
        <div id="player"></div>
      </div>
    </div>
  );
}
