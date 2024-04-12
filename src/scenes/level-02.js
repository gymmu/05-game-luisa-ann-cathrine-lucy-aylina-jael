import { k, addGeneralGameLogic } from "../game.js"
import { generateMapJumpAndRun } from "../map.js"

import { loadKeyboardJumpAndRun } from "../keyboard.js"

import "./level-03.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene(
  "level-02",
  async () => {
    k.setGravity(0)
    //createPlayer()

    loadKeyboardJumpAndRun()

    await generateMapJumpAndRun("maps/level-02.txt")
    k.add([
      k.sprite("background", { width: k.width(), height: k.height() }),
      k.pos(0, 0),
      k.fixed(),
      k.z(-100),
    ])

    addGeneralGameLogic()

    k.onCollide("player", "goal", (player) => {
      {
        k.go("level-03")
      }
    })

    k.onCollide("player", "flower", (player, flower) => {
      flower.destroy()
      player.hasFlower = true
    })
  },
  k.onUpdate(() => {
    const player = k.get("player")[0]
    if (player.pos.y > 720) {
      k.go("lose")
    }

    // Wenn das Wurmloch links aus dem fenster geht, ist das spiel verloren
    const wormhole = k.get("goal")[0]
    if (wormhole.pos.x < 0) {
      k.go("lose")
    }
  }),
)
