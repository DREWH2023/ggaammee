game.splash("ZOMBIE DASH")
info.setScore(0)
let zombie : Sprite = null
let maincharacter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . . f d d d d f d d d d d f . . 
    . . f d f f f d d d f d d f . . 
    . . f d f f f d d d f d d f . . 
    . . f d f f f d d d f d d f . . 
    . . f d f f f d d d f d d f . . 
    . . f f d d d d d d d d d f . . 
    . . f d d d d f f f d d d f . . 
    . . f d d d f 1 1 1 f d d f . . 
    . . f d d d d f f f d d d f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(maincharacter, 50, 50)
scene.setBackgroundColor(6)
let list2 = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . . f 7 7 7 7 7 7 2 2 2 2 f . . 
    . . f 7 7 f 7 7 7 f 2 2 2 f . . 
    . . f 7 7 f 7 7 7 f 7 2 2 f . . 
    . . f 7 7 f 7 7 7 f 7 7 2 f . . 
    . . f 2 2 f 7 7 7 f 7 7 7 f . . 
    . . f 2 2 7 7 7 7 7 7 7 7 f . . 
    . . f 2 7 7 f f f 7 7 7 7 f . . 
    . . f 7 7 f 7 7 7 f 7 7 2 f . . 
    . . f 7 7 7 f f f 7 7 2 2 f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . . f 2 2 7 7 7 7 7 7 7 7 f . . 
    . . f 2 7 f 7 7 7 f 7 7 7 f . . 
    . . f 7 7 f 7 7 7 f 7 7 7 f . . 
    . . f 7 7 f 7 7 7 f 7 7 7 f . . 
    . . f 7 7 f 7 7 7 f 7 7 7 f . . 
    . . f 7 7 7 7 7 7 7 7 7 7 f . . 
    . . f 2 2 2 7 7 7 7 7 7 7 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . . f 7 7 7 7 7 7 2 2 2 2 f . . 
    . . f 7 7 7 7 7 7 2 2 2 2 f . . 
    . . f 7 7 7 7 7 7 7 2 2 2 f . . 
    . . f 7 f f 7 7 7 f f 2 2 f . . 
    . . f 7 7 7 7 7 7 7 7 7 2 f . . 
    . . f 7 7 7 f f f 7 7 7 7 f . . 
    . . f 7 7 f 1 1 1 f 7 7 7 f . . 
    . . f 7 7 f 1 1 2 f 7 7 7 f . . 
    . . f 7 7 7 f f 2 2 7 7 7 f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
let speedlist = [51, 70, 30]
let turnlist = [50, 80, 40]
maincharacter.setBounceOnWall(true)
effects.confetti.endScreenEffect()
game.onUpdateInterval(5000, function () {
    zombie = sprites.create(list2._pickRandom(), SpriteKind.Enemy)
    zombie.follow(maincharacter, speedlist._pickRandom(), turnlist._pickRandom())
zombie.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
})
