namespace SpriteKind {
    export const currency = SpriteKind.create()
    export const powerup = SpriteKind.create()
    export const speedup = SpriteKind.create()
    export const safe = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.currency, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.safe, SpriteKind.currency, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.safe, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.speedup, function (sprite, otherSprite) {
    otherSprite.destroy()
    controller.moveSprite(maincharacter, 75, 75)
    pause(3000)
    controller.moveSprite(maincharacter, 50, 50)
})
sprites.onOverlap(SpriteKind.safe, SpriteKind.speedup, function (sprite, otherSprite) {
    otherSprite.destroy()
    controller.moveSprite(maincharacter, 75, 75)
    pause(3000)
    controller.moveSprite(maincharacter, 50, 50)
})
function doSomething () {
    randomnumber = randint(16, 240)
    while (randomnumber >= 96 && randomnumber <= 114) {
        randomnumber = randint(16, 240)
    }
    return randomnumber
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.setKind(SpriteKind.safe)
    pause(3000)
    sprite.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.setKind(SpriteKind.safe)
    pause(1000)
    sprite.setKind(SpriteKind.Player)
})
let yumyum: Sprite = null
let shieldpwrup: Sprite = null
let speedpwrup: Sprite = null
let coin: Sprite = null
let randomnumber = 0
let maincharacter: Sprite = null
let zombie : Sprite = null
info.setLife(3)
game.splash("ZOMBIE DASH")
game.showLongText("AVOID zombies", DialogLayout.Bottom)
game.showLongText("COLLECT coins", DialogLayout.Bottom)
game.showLongText("REPLENISH health", DialogLayout.Bottom)
pause(1000)
info.setScore(0)
maincharacter = sprites.create(img`
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
let list3 = [img`
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
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . e e e e e e e e e e . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e f e e . . . . 
    . . . e e f e e e e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e e e e f e e f e . . . 
    . . . e f e e e e e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e f e e e e e e e . . . 
    . . . . e e e e e f e e . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
let speedlist_EASY = [51, 49, 30]
let turnlist_EASY = [50, 55, 40]
maincharacter.setStayInScreen(true)
tiles.setTilemap(tilemap`level2`)
scene.cameraFollowSprite(maincharacter)
game.onUpdateInterval(5000, function () {
    zombie = sprites.create(list2._pickRandom(), SpriteKind.Enemy)
    zombie.follow(maincharacter, speedlist_EASY._pickRandom(), turnlist_EASY._pickRandom())
zombie.setPosition(randint(16, 240), randint(16, 240))
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
    coin.setPosition(doSomething(), randint(16, 240))
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
    coin.setPosition(doSomething(), randint(16, 240))
})
game.onUpdateInterval(15000, function () {
    speedpwrup = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . f f f f 1 1 . . . . 
        . . . . . . f 8 8 1 1 . . . . . 
        . . . . . . f 8 1 1 . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . f f f f f 8 8 f . . . . . . 
        . . f 8 8 8 8 8 8 f . . . . . . 
        . . f 8 8 8 8 8 8 f . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.speedup)
    speedpwrup.setPosition(doSomething(), randint(16, 240))
})
game.onUpdateInterval(15000, function () {
    shieldpwrup = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . f f f 5 5 1 1 5 5 f f f . . 
        . . f 5 5 1 1 5 5 1 1 5 5 f . . 
        . . f 5 1 5 5 f f 5 5 1 5 f . . 
        . . f 5 1 f f f f f f 1 5 f . . 
        . . f 5 1 5 5 f f 5 5 1 5 f . . 
        . . . f 5 1 5 f f 5 1 5 f . . . 
        . . . f 5 1 5 5 5 5 1 5 f . . . 
        . . . . f 5 1 1 1 1 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.powerup)
    shieldpwrup.setPosition(doSomething(), randint(16, 240))
})
game.onUpdateInterval(6500, function () {
    yumyum = sprites.create(list3._pickRandom(), SpriteKind.Food)
    yumyum.setPosition(doSomething(), randint(16, 240))
})
forever(function () {
    music.playMelody("C5 A G A C5 G A G ", 120)
})
