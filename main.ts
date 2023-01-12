sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 750)
    info.changeScoreBy(1)
})
let Soccer_Ball: Sprite = null
let Goalie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . d f d d f d f d . . . . . 
    . . . d d d f f d d d . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . 5 5 2 5 5 2 5 5 . . . . . 
    . . . 5 5 2 5 5 2 5 5 . . . . . 
    . . . d 2 2 2 2 2 2 d . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . 9 9 . . 9 9 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Goalie)
Goalie.setStayInScreen(true)
info.setLife(3)
scene.setBackgroundImage(img`
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111111111111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777711111
    7777777777777777111111111111111111111177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777177777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777711111
    7777777777777777111117777777777777777177777777777711111177777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777711777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777177777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777717777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777771777777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777177777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777177777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777717777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777177777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777177777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777771777777777777777777777777777777777777777777777777777777777777777777177777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777717777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777177777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777711777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777711111
    7777777777777777111117777777777777777177777777777711111177777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777177777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777177777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777711111
    7777777777777777111117777777777777777177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777711111
    7777777777777777111111111111111111111177777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777771777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777117777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771177777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111111111111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    7777777777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    Soccer_Ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f f 1 1 1 f f f . . . . 
        . . f f f f 1 1 1 f f f f . . . 
        . . f 1 1 1 f f f 1 1 1 f . . . 
        . . f f 1 1 f f f 1 1 1 f . . . 
        . . f f f f f f f 1 1 1 f . . . 
        . . f f 1 1 f f f 1 1 1 f . . . 
        . . f 1 1 f 1 1 1 f 1 1 f . . . 
        . . f f f f 1 1 1 f f f f . . . 
        . . . f f f 1 1 1 f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Soccer_Ball.setVelocity(-100, 0)
    Soccer_Ball.setPosition(160, randint(5, 115))
    Soccer_Ball.setFlag(SpriteFlag.AutoDestroy, true)
})
