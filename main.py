namespace SpriteKind {
    export const currency = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.currency, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setKind(SpriteKind.Projectile)
    pause(1000)
    otherSprite.setKind(SpriteKind.Enemy)
})
let yumyum: Sprite = null
let coin: Sprite = null
let zombie : Sprite = null
info.setLife(3)
game.splash("ZOMBIE DASH")
info.setScore(0)
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
let speedlist_HARD = [49, 54, 30]
let turnlist_HARD = [50, 55, 40]
speedlist_HARD = [49, 54, 30]
turnlist_HARD = [50, 55, 40]
maincharacter.setBounceOnWall(true)
tiles.setTilemap(tilemap`level2`)
game.onUpdateInterval(5000, function () {
    zombie = sprites.create(list2._pickRandom(), SpriteKind.Enemy)
    zombie.follow(maincharacter, speedlist_EASY._pickRandom(), turnlist_EASY._pickRandom())
zombie.setPosition(randint(0, 160), randint(0, 120))
})
game.onUpdateInterval(5000, function () {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 f f f f f f 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f f f f f f 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.currency)
    coin.setPosition(randint(0, 160), randint(0, 90))
})
game.onUpdateInterval(5000, function () {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 f f f f f f 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 f f f f f f 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.currency)
    coin.setPosition(randint(0, 160), randint(0, 90))
})
game.onUpdateInterval(6500, function () {
    yumyum = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e e e . . 
        . . . . . . . . . . e e e e e . 
        . . . . . . . . . e e e e e e . 
        . . . . . . . . e e e e e e . . 
        . . . . . . . . e e e e e . . . 
        . . . . . . . e e e e e e . . . 
        . . . . . . 1 1 e e e . . . . . 
        . . . . 1 1 1 1 . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    yumyum.setPosition(randint(0, 160), randint(0, 90))
})
