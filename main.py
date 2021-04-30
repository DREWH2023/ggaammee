zombie: Sprite = None
maincharacter = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.player1.move_sprite(maincharacter, 50, 50)
scene.set_background_color(6)
list2 = [img("""
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
    """),
    img("""
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
    """),
    img("""
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
    """)]
speedlist = [50, 70, 30]
turnlist = [50, 80, 30]
maincharacter.set_bounce_on_wall(True)
zombie.set_bounce_on_wall(True)

def on_update_interval():
    global zombie
    zombie = sprites.create(list2._pick_random(), SpriteKind.enemy)
    zombie.follow(maincharacter,
        speedlist._pick_random(),
        turnlist._pick_random())
    zombie.set_position(randint(0, 160), randint(0, 120))
game.on_update_interval(5000, on_update_interval)
