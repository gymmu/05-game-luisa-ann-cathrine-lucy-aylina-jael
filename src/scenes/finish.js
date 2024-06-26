import { k } from "../game.js"
import { backgroundRPG } from "../gameObjects.js"
import { getPlayer } from "../player.js"
import "./intro.js"

/**
 * Dies ist eine weitere Szene die angezeigt wird wenn das Spiel vorbei bzw.
 * gewonnen ist.
 */
k.scene("finish", () => {
  const player = getPlayer()
  player.destroy()
  k.add([
    k.sprite("finish", { width: k.width(), height: k.height() }),
    k.pos(0, 0),
    k.fixed(),
    k.z(-100),
  ])
  k.add([
    k.text("Ken, you made it to Barbie. Congratulation!", {
      size: 32,
      font: "sinko",
    }),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center"),
  ])

  k.onKeyPress("space", () => {
    k.go("intro")
  })
})
