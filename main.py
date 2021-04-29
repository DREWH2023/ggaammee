
my_sprite3 = sprites.create(img("""
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
"""))
my_enemy = sprites.create(img("""
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
"""))
my_enemy2 = sprites.create(img("""
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
"""))

controller.player1.move_sprite(my_sprite3, 50, 50)

scene.set_background_color(6)

my_enemy.set_position(10, 60)
my_enemy.follow(my_sprite3, 60, 50)

my_enemy2.follow(my_sprite3, 45, 75)
my_enemy2.set_position(150, 60)