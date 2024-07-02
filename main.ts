namespace SpriteKind {
    export const screen = SpriteKind.create()
    export const Text = SpriteKind.create()
}
// 1-white
// 2-red
// 3-pink
// 4-orange
// 5-yellow
// 6-teal
// 7-green
// 8-dark blue
// 9-sky blue
// 10-purple
// 11-light purple
// 12-dark purple
// 13-tan
// 14-brown
// 15-black
function bigtext (color: number, text: string) {
    myTextSprite3 = fancyText.create(text, 150, color, fancyText.rounded_large)
    myTextSprite3.setKind(SpriteKind.Enemy)
}
// 1-white
// 2-red
// 3-pink
// 4-orange
// 5-yellow
// 6-teal
// 7-green
// 8-dark blue
// 9-sky blue
// 10-purple
// 11-light purple
// 12-dark purple
// 13-tan
// 14-brown
// 15-black
function narrate (text: string, color: number) {
    myTextSprite2 = fancyText.create(text, 150, color, fancyText.art_deco_11)
    myTextSprite2.setPosition(-65, 15)
    myTextSprite2.setKind(SpriteKind.Enemy)
    animation.runMovementAnimation(
    myTextSprite2,
    "h 140",
    2000,
    false
    )
}
function dialouge (sprite: Sprite, say: string, donttalk: Sprite) {
    donttalk.sayText("")
    sprite.sayText(say)
    pauseUntil(() => controller.A.isPressed())
    pauseUntil(() => !(controller.A.isPressed()))
}
function isabuttonpressed () {
    pauseUntil(() => controller.A.isPressed())
    pauseUntil(() => !(controller.A.isPressed()))
}
function rotate (sprite: Sprite, times: number) {
    for (let index = 0; index < times; index++) {
        transformSprites.changeRotation(sprite, 1)
        pause(1)
    }
}
function screen_text (theText: string, Pfp: Image) {
    mySprite4 = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.Player)
    myTextSprite = fancyText.create(theText, 125, 1)
    myTextSprite.setKind(SpriteKind.Player)
}
let myTextSprite: fancyText.TextSprite = null
let mySprite4: Sprite = null
let myTextSprite2: fancyText.TextSprite = null
let myTextSprite3: fancyText.TextSprite = null
let mySprite = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
mySprite.setPosition(29, 99)
dialouge(mySprite, "haiii im sarge!!!", mySprite)
let mySprite2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........ccccc...................
    ......ccbbbbbc..................
    ....ccddbbbbbbf.................
    ...cbbbddbbffbf.................
    ....ffffdbbffbff................
    .......fbbbbbbbf................
    .......fbbbbbbbff...............
    ......ffbbbbbbbbfff.............
    ......f6bbbbbb663ddcc...........
    .....cc66bbbb666dddddc..........
    .....cd36666663dddddddc.........
    .....cddd3333dbddddddbcc........
    .....cddddddddbdddddbbddc.......
    .....cddddddddbbdddbbdddbc......
    ......cddddddddbbdbbddddbbccc...
    ......ccddddddddbbbbcccccbbbcc..
    .......ccddddddddddddddbccffff..
    ........cccbddccbddddbbfff......
    ........c333bb333cbbfff.........
    ........c33cc33cc3fff...........
    `, SpriteKind.Player)
mySprite2.setPosition(110, 99)
dialouge(mySprite2, "and im Richard!!", mySprite)
let mySprite3 = sprites.create(img`
    . . . . . c c c c c c . . . . . 
    . . . . c 8 7 7 7 7 8 c . . . . 
    . . . c 8 6 7 5 7 6 7 c . . . . 
    . . c 8 c 8 6 7 5 5 7 6 c . . . 
    . . c 7 6 c 5 7 5 5 7 c 7 c . . 
    . c 6 5 5 c 6 7 7 7 c 8 5 7 c . 
    . c 7 5 5 7 7 7 6 c 8 7 7 7 c . 
    c 7 c 7 7 6 8 7 c 6 7 5 7 6 c . 
    c 7 c 8 c c 8 f 8 c c 7 6 8 . . 
    . c 8 6 f 8 f 6 f 8 c c 8 f . . 
    . . c 8 6 f 6 7 f f 6 f 8 . . . 
    . . . . 8 6 7 7 7 6 f 8 . . . . 
    . . . . 8 7 f 7 7 f 8 . . . . . 
    . . . . 8 7 7 7 7 7 8 . . . . . 
    . . . . . 8 7 7 7 8 . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    `, SpriteKind.Player)
mySprite3.setPosition(108, 37)
dialouge(mySprite3, "im Luke, a pro artist", mySprite2)
screen_text("THIS IS...       The Makecode Show", img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `)
let mySprite5 = sprites.create(image.screenImage().clone(), SpriteKind.screen)
mySprite5.z = -19783727
isabuttonpressed()
sprites.destroyAllSpritesOfKind(SpriteKind.Player)
mySprite5.z = 5
mySprite5.setVelocity(150, 150)
rotate(mySprite5, 100)
for (let index = 0; index < 2; index++) {
    narrate("Coming Soon...", 2)
    pause(100)
    narrate("Coming Soon...", 3)
}
pause(3000)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
narrate("Featuring Makecoders from around the world", 8)
let mySprite6 = sprites.create(img`
    ff1111111111111111feeeeeeeeeeeeeee1f9999ebeee999999f11111eeee111111f1ffc4555eefffeeff1f999999999999999ff1fffffffff888ffff1fffffffffffffffff1111111d5d1111111dddddddddf5fdddf1cccccccccccccccff11111111d1111111ffff
    ff1111cc88f1111111feeeeefffeeefeee1f999e77e7eeeb999f1111eeeeee11111f1ffee44eeeeeeefff1f999999999999999ff1fffffffff888ffff1fffffffffffffffff11111155555111111dddddddccfc5fcdf1cccccccccccccccff111111111d111111ffff
    ff111ffffffd111111fee2ef8ffeeeeeee1f999feeeeeec7f99f111eeeeeeee1111f1eeeeeeee44eeefcf1f999999999999999ff1fffffffff888ffff1fffffffffffffffff11111d55555d11111bddbddddfffffcbf1cccccccfffcccccff111111111d111111ffff
    ff118ffccccfff1111feeefe45ceeeeeee1f9bcc77eec7e7eb9f11eeeeeeeeee111f1ee4e4eeeeeeeffcf1f999ffffffff9999ff1fff888888888888f1fffffffffffffffff11111185551111111ddddbbfb4558dddf1ccccccffffffcccff111111ddb881d111ffff
    ffcffccc77cc111111ffe8fe88fff2eeef1fb77ee7eceee7e79f1effeeeeeeffe11f1fe4e4ee4eeeeffcf1f999fcdffffb6999ff1fff888888888888f1fffffffdddddcffff1111116666b111111ddddbfffe55c96df1ccccccffeefffccff111111dc68f1d111ffff
    ff111ddccccc811111fffeef8ffeefeeef1fe777eeeeeeeee7dfeee1feeeef1eee1f1fc4e4ee4e4effccf1f99bdcddbb7bd999ff1fff888888888888f1ffffffbdddddbbfff111bf966cfb111111ddddfff55e5d768f1cccccff4fbdffccff111111c88dbc1111ffff
    ff111c8ccccccf1111fefefeeffee2feff1fceeffefeeee7e7dfeee1ffffff1eee1f1cc44ee4ee4effccf1f99bede7c7bcbb99ff1fff777fff888ffff1fffffbbbbbbbbbcff111cffffcfff11111ddcffffeeffd968f1cccccffbfb4fcccff11111cc811d1c111ffff
    ff111ccbbcc8881111fe8feeefffeef8ee1fbee7e7e7e7eeee9feee1f1ee1f1eeeef1ccc44eee4efffccf1f9bdebc666eeebb9ff1fff777fff888ffff1fffffccbbcbbcbbff11cff1c11dcf11111bdffffe5efff54bf1ccccccfbf4bfcccff11111ccbd1111111ffff
    ff11111bbcc88cf111feefeeeffffeeeee1fe77eefefeeecec9feee111ee111eeeef1ccf444442c88ffff1f9beeecfcfceee99ff1fff777fff888ffff1ffffffbbbb33dbfff111fdfcc1fff11111dfffff555fbf54df1cccccccffffccccff111dccdcc1c11111ffff
    ff11111666688cff11feeeeffffffeeeee1feeee97777cfcb99feeeeeeeeeeeeeeef1ccbf44444fffffff1f9beefffffffeeb9ff1fff777fff888ffff1fffffffccccccffff11bffbbbbbfc11111dfffffe9ffcd66df1cccccccf88fccccff111d8cfccd111111ffff
    ff11188666accbff11feeefffffffeeeee1f9ffff77777fce99feeeeddddddeeee1f1bcfbfcccfbbfffff1f9ebfffffffceb99ff1fff777fff888ffff1ffffffffcfccfffff1111cfbbffb111111dfcfff88ffffdbbf1cccccccf88fccccff111d111db11d1111ffff
    ff1188faaaafbfff11feeeffeeffffeeee1f99d7f7777e7fc99f111dddddddd1111f1ffcfcbbbbfcfffcf1fdfffffffffffb99ff1fff777777777ffff1fffffffffbbffffff11111bfc691111111d56888dfffffdddf1cccccccf888ccccff1111111d111d1111ffff
    ff1118816dddbff111feeeeffeefffeeee1f99977f77fed9999f1ffddddddddff11f1fcfccc8ccfffffff1ffffffffffffcf69ff1fff777777777ffff1fffffffffffffffff1111111c66f111111dd688bdd8ffcdddf1cccccccf888fcccff111111d1db1bd111ffff
    ff11188d6ddbff1111feeee2feeeff8eee1f999c77ee77f9999ffffffddddfffff1f1ccffffffffccfccf1ffffffffffffffffff1fff777777777ffff1fffffffffffffffff111111c6666111111bd86dddd86dbdddf1cccccccf888fcccff111111d111111111ffff
    ff1118866dcf111111feeecffeeeeefeee1f999977777799999fffffffddffffff1f1ffbcf88cbfbcfccf1ffffffffffffffffff1ffffffffffffffff1fffffffffffffffff11111111111111111d8f8bddff8bdbddf1cccccccf888fcccff1111111111111111ffff
    ff1111116f11111111feeeffeeeeeeffee1f99999c77c999999f1fffffddfffff11f1ffcfcf8fcfbfffff1ffffffffffffffffff1ffffffffffffffff1fffffffffffffffff11111111111111111dffbdddffddbdddf1cccccccf888fcccff1fffffffffffffffffff
    `, SpriteKind.screen)
mySprite6.setKind(SpriteKind.Enemy)
mySprite6.scale = 2
mySprite6.setPosition(215, 60)
mySprite6.setVelocity(-70, 0)
pause(5000)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
let mySprite7 = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffdcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcbffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffdccffffffffffffffffffffffffffcdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffdcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffcdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffdcdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffffffffffcdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffffffffdcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffffffcdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdcbfffffffffffffdcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcbffffffffffdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcbfffffffffbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcbffffffffcdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcdffffffdcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcbfffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcdffffcdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcdffdcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdcbbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfcccdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffbccccccccccccccccccccccfccfcffccccccccccccccccccccccccccccccccccccccccccbdffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdcbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbebfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdcbbeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceb4ecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebefccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccebecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccccccffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccccfccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccccfccccccccccccccccccccccccccccccccccccccccccccccfcccfcccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccfcccccfccccccccccccccccccccccccccccccccccccfcccccfccfcccbbbbbcccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccccccccb2222244444444455555555557777777778888bcccccccfccbccccbcccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccccb2222222444444444555555555577777777788888bccccfcfcbcebbccbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcccb222222224444444445555555555777777777888888bcccfcfcbfbbebcbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccc22222222244444444455555555557777777778888888cccccfcbcbeebcbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb22222222244444444455555555557777777778888888bccccfcbfeebbcbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb22222222244444444455555555557777777778888888bfcccfcbcceeccbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfccbccccbcccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcccbbbbccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfccbcfccbcccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcbcebbccbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcbfbbebcbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcbfbeebcbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcbfeebbcbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcbcceeccbccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfccbccfcbcccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfccccccccccfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccccccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fccccffffffffffcccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fcccfcccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccb222222222444444444555555555577777777788888888fccccfcfffccccfcccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcc2222222222444444444555555555577777777788888888fcccccccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcc2222222222444444444555555555577777777788888888fcccfccccccccccfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcc2222222222444444444555555555577777777788888888fcccfcccccfffccfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcc2222222222444444444555555555577777777788888888fcccfccffccffccfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabfcccfcffccffffcfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabccccffffffffffffccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccfcfccccccfcfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfcccbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafccccfcffccfccfcfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccfccccbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccfcfcffffffffcfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccccccfbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabfccccccfccffccffccfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccfccccccccccccccccccccccccccccccccccccccccccccccccfccfccfffffcccfccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebecccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffcccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebeccccccfccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebefcccccccffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccebecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdebbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfbbecfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdcb4beccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccebbecfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbefdfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffddccccccceccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfbddfffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffcfeccccecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffdceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecbffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffcccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfdffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdbcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffbcbffbcccccccbffbcccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccfdcdffcccccccccfffffffffffffffffffffffff
    ffffffffffffffffffdbbffdbbbbbbbbffdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfdbdffbbbbbbbbbfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Projectile)
narrate("Coming together to make...", 6)
pause(4000)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
Zoom.SetZoomFilterOffset(
2,
0,
30,
2000
)
pause(1000)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
Zoom.SetZoomFilterOffset(
1,
0,
30
)
bigtext(1, "The Show")
