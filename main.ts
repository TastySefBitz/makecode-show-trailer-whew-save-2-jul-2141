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
function bigtext (color2: number, text: string, animate: boolean) {
    myTextSprite3 = fancyText.create(text, 150, color2, fancyText.rounded_large)
    myTextSprite3.setKind(SpriteKind.Enemy)
    if (animate) {
        fancyText.animateAtSpeed(myTextSprite3, fancyText.TextSpeed.Normal, fancyText.AnimationPlayMode.InBackground)
    }
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
function narrate (text: string, color2: number, imovie_effect_thing: boolean, _2color: number) {
    if (imovie_effect_thing) {
        for (let index = 0; index < 2; index++) {
            myTextSprite2 = fancyText.create(text, 150, color2, fancyText.art_deco_11)
            myTextSprite2.setPosition(-65, 15)
            myTextSprite2.setKind(SpriteKind.Enemy)
            animation.runMovementAnimation(
            myTextSprite2,
            "h 140",
            2000,
            false
            )
            pause(100)
            myTextSprite2 = fancyText.create(text, 150, _2color, fancyText.art_deco_11)
            myTextSprite2.setPosition(-65, 15)
            myTextSprite2.setKind(SpriteKind.Enemy)
            animation.runMovementAnimation(
            myTextSprite2,
            "h 140",
            2000,
            false
            )
        }
    } else {
        myTextSprite2 = fancyText.create(text, 150, color2, fancyText.art_deco_11)
        myTextSprite2.setPosition(-65, 15)
        myTextSprite2.setKind(SpriteKind.Enemy)
        animation.runMovementAnimation(
        myTextSprite2,
        "h 140",
        2000,
        false
        )
    }
}
function dialouge (sprite: Sprite, say: string, donttalk: Sprite) {
    donttalk.sayText("")
    sprite.sayText(say)
    pauseUntil(() => controller.A.isPressed())
    pauseUntil(() => !(controller.A.isPressed()))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function bodytext (text: string, color2: number, animate: boolean) {
    myTextSprite4 = fancyText.create(text, 160, color2, fancyText.rounded_small)
    myTextSprite4.setKind(SpriteKind.Enemy)
    myTextSprite4.setPosition(85, 90)
    if (animate) {
        fancyText.animateAtSpeed(mySprite4, fancyText.TextSpeed.Normal, fancyText.AnimationPlayMode.InBackground)
    }
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
/**
 * CREDITS         ART: Head Artist: Luke(Richard, Luke)     Converted Images: https://kristianpedersen.github.io/Convert-Image-to-MakeCode-Arcade-Sprite/     TV image: ShutterStock 1502125139          MUSIC: Head of Music: InvaildProject(Fossil Falls)     Mission Impossible RTTTL: https://github.com/dhylands/upy-rtttl/blob/master/songs.py           EXTENSIONS: Fancy Text by ricknoll     pxt-zoom by kiwiphoenix364               FEEDBACK: FutureKnight12
 */
let myTextSprite: fancyText.TextSprite = null
let mySprite4: Sprite = null
let myTextSprite4: fancyText.TextSprite = null
let myTextSprite2: fancyText.TextSprite = null
let myTextSprite3: fancyText.TextSprite = null
timer.background(function () {
    music.play(music.createSong(hex`0078000408090305001c000f0a006400f4010a0000040000000000000000000000000000000002090108000c00020d1910001400031114191c002000020d1924002800020d1928002c00020d1934003800020d193c004000020d1944004800020d1948004c0002161950005400020d195c006000020d1964006800020d1968006c000318191b74007600020d197600780002181b7c008000010d80008200011982008400010d84008600011986008800010d88008c00020d1990009400020d199c00a000020d19a400a800020d19a800ac00020d19b400b800020d19bc00c000020d19c400c800020d19c800cc00020d19d000d400020d19dc00e000020d19e400e800020d19e800ec00020d19f400f800020d19fc000001010d00010201011902010401010d04010601011906010801010d07001c00020a006400f401640000040000000000000000000000000000000003610200000200012702000400012904000600012a06000800012c08000a0002292c0a000c0001250c000e0001240e001000012010001200012012001400012514001600012416001800012018001a0001201a001c0001251c001e0001241e002000012020002200012022002400012524002600012426002800012028002a0002181b2a002c0001252c002e0001242e003000012030003200012032003400012534003600012436003800012038003a0001203a003c0001253c003e0001243e004000012040004200012042004400012544004600012446004800012048004a00011e4a004c0001254c004e0001244e005000012050005200012052005400012554005600012456005800012058005a0001205a005c0001255c005e0001245e006000012060006200012062006400012564006600012466006800012068006a0001206a006c0001256c006e0001246e007000012070007200012072007400012574007600012476007800012078007a0001187a007c0001257c007e0001247e008000012080008200012082008400012584008600012486008800012088008a000311141990009200012292009400012494009600012596009800012798009a000125a800c0000314181bc000c2000125c200c4000127c400c6000129c600c800012cc800d000012cd000e0000316191ee000e2000120e200e4000125e400e6000124e600e8000125e800ea0002252cea00ec000122ec00ee000120ee00f0000122f000f2000120f200f4000122f400f6000120f600f8000122f800fa000120fa00fc000122fc00fe000120fe000001012200010201012002010401012204010601012008001c000e050046006603320000040a002d0000006400140001320002010002720090009200012292009400012494009600012596009800012798009a000125ea00ec000122ec00ee000120ee00f0000122f000f2000120f200f4000122f400f6000120f600f8000122f800fa000120fa00fc000122fc00fe000120fe0000010122000102010120020104010122040106010120`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408200402001c000c960064006d019001000478002c010000640032000000000a0600054d005c0060000122600064000120dc00e00001256001640101276c017001012578017c010122800184010120d002d402021922d602da02025c24dc02e002022225e002e40203202427a003a803012505001c000f0a006400f4010a00000400000000000000000000000000000000026c0300000400020d1908000c00020d1914001800020d191c002000020d1920002400020d192c003000020d1934003800020d193c004000020d1940004400020d1948004c00020d1954005800020d195c006000020d1960006400020d196c007000020d1974007800020d197c008000020d1980008400020d1988008c00020d1994009800020d199c00a000020d19a000a400020d19ac00b000020d19b400b800020d19bc00c000020d19c000c40002111dc800cc0002111dd400d80002505cdc00e00002111de000e400020f1bec00f000020814f400f800020814fc0000010208140001040102061208010c01020612140118010206121c012001020612200124010206122c013001020612340138010206123c0140010206124001440102051148014c01020511540158010205115c016001020511600164010244506c017001024450740178010244507c01800102445080018401020f1b88018c01020f1b94019801020f1b9c01a001020f1ba001a401024b57ac01b001024b57b401b801024b57bc01c001024b57c001c401020814c801cc01020814d401d801020814dc01e001020814e001e401020814ec01f001020814f801fc0102081400020402020d1908020c02020d1914021802020d191c022002020d1920022402020d192c023002020d1934023802020d193c024002020d1940024402020d1948024c02020d1954025802020d195c026002020d1960026402020d196c027002020d1974027802020d197c028002020d1980028402020d1988028c02020d1994029802020d199c02a002020d19a002a402020d19ac02b002020d19b402b802020d19bc02c002020d19c002c40202111dc802cc0202111dd402d80202505cdc02e00202111de002e402020f1bec02f002020814f402f802020814fc0200030208140003040302061208030c03020612140318030206121c032003020612200324030206122c033003020612340338030206123c0340030206124003440302051148034c03020511540358030205115c036003020511600364030244506c037003024450740378030244507c03800302445088039003020f1b9803a003020f1ba803b003020616b003b403034b1257b603ba03020612bc03c003020814c003c403020d19c803cc03020d19d403d803020d19dc03e003020d19e003e403020d19ec03f003020d19f403f803020d19fc030004020d1907001c00020a006400f401640000040000000000000000000000000000000003070700001000042025292c1000200004191d202520003000041b20242736003c00021b203c004000022227400048000422252a2c48005000031e222550005600031e222756005c000322252a5c00600004121e2225600068000325292c68006a0001196a006c00011b6c006e0001206e007000012270007200012572007400012774007600012576007800012778007a0001257a007c0001227c007e00012080009000042025292c9000a00004191d2025a000b000041b202427b600bc00021b20bc00c000022227c000c8000320252cc800d000022025d000d600022225d600dc00022425dc00e000021925e000e80003252a2ce800ea000125ea00ec000127ec00ee000129ee00f000012cf000f2000122f200f4000125f400f6000122f600f8000125f800fa000122fa00fc00012500011001041622252a1001200104191e222520013001041b20242736013c01041d2024293c014001021e2a40015001051d2027292c56015c01032024295c01600102202c60016c0102272c6c01780102272c7801800102222580018c010422252a2c8c01a001041b1e2225a801b001041b1e2225b001bc010320292cbc01c001031e272ac001d8010322252cd801e0010122e001e201012ce201e401012ae401e6010127e601e8010124e801ea010120ea01ec01011eec01ee01011bee01f0010118f001f2010120f201f401011ef401f601011bf601f8010118f801fa010114fa01fc010112fc01fe01010ffe010002010c000202020319202502020402012a04020602012906020802012a08020a0201290a020c0201250c020e0201240e02100201251002120202192512021402012014021602012216021802012418021a0201251a021c0201271c021e0201291e022002012a200222020320272c22022402012524022602012726022802012928022a02012a2a022c02012c2c022e0201222e02300201243002320201253202340201243402360201223602380202202c38023a02012a3a023c020220293c023e0201273e02400201254002420203202a2c42024402012544024602012446024802012048024a02021e254a024c02011d4c024e02011e4e025002012050025202021e275202540201205402560201225602580202242958025a0201255a025c0201245c025e0202252a5e02600201276002620202192062026402012064026602012266026802012468026a0201256a026c0201276c026e0201296e027002012a70027202012c72027402012a74027602012976027802012a78027a0201297a027c0201277c027e0201257e0280020124800282020320252c82028402012a84028602012986028802012a88028a0201298a028c0201258c028e0201248e02900201259002920202192592029402012094029602012296029802012498029a0201259a029c0201279c029e0201299e02a002012aa002a2020320272ca202a4020127a402a6020129a602a80201aba802aa02012caa02ac020129ac02ae02012aae02b002012cb002b2020122b202b402012cb402b602012ab602b802022729b802ba020127ba02bc02022225bc02be020124be02c0020122c002c2020320252cc202c4020114c402c6020116c602c8020118c802ca02021925ca02cc02011bcc02ce02011dce02d002019fd202d402011ed402d6020120d802da020124da02dc020125de02e0020122e002e20203202427e202e4020125e402e6020127e602e8020129e802ea0201abea02ec02012cec02ee020122ee02f0020124f002f2020125f202f4020124f402f6020122f602f802012cf802fa02012afa02fc020129fc02fe020127fe02000301250003020302222502030403012c04030603012a06030803012908030a0301270a030c0301250c030e0301240e0310030122100312030319202512031403011e14031603011d16031803011b18031a0301191a031c0301181c031e0301161e032003011820032203011922032403011b24032603011d26032803011e28032a0301202a032c0301612c032e0301242e033003012530033203012732033403012934033603012738033a03021d293c033e0302252a3e034003012c4003420302272c42034403012244034603012046034803012248034a0301204a034c03011e4c034e03011d4e035003011b50035203011d52035403011b54035603011956035803031d242958035a0301255a035c0301245c035e0302202c5e0360030124600362030325272c62036403012564036603016366036803016168036a0301206a036c03011e6c036e0303195c256e037003011e70037203011d72037403011e74037603011d76037803011e78037a0303161d227a037c03011e7c037e03011d7e038003011e800388030320272c88038c03031216198c038e03021e2a8e039003021d29900398030219259803a0030518191d2025a003a80302252aa803b0030316191eb003b403021e2ab603ba03021d29bc03c003021925c003e00304191d202508001c000e050046006603320000040a002d00000064001400013200020100029e003c0040000222275c00600004121e2225bc00c000022227f000f2000122f200f4000125f400f6000122f600f8000125f800fa000122fa00fc00012560016c0101276c017801012578018001022225b002b2020122d002d402021922d602da02029c24dc02e002022225e002e40203202427000302030222251003120302192520032203022427420344030122440346030120460348030122a003a8030125`), music.PlaybackMode.UntilDone)
})
scene.setBackgroundColor(14)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f b f b b b b b b b b b b f . 
    . f b f b 7 7 7 7 7 7 7 7 b f . 
    . f c f c 7 f f f 7 7 f 7 c f . 
    . f b f b 7 f 7 f 7 f f 7 b f . 
    . f b f b 7 f 7 f 7 7 f 7 b f . 
    . f c f c 7 f f f 7 7 f 7 c f . 
    . f b f b 7 7 7 7 7 7 7 7 b f . 
    . f b f b b b b b b b b b b f . 
    . f f f f f f f f f f f f f f . 
    . . . f b b f c c c c f . . . . 
    . . f b b f c c c c c c f . . . 
    . . f f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(29, 99)
dialouge(mySprite, "haiii im sarge!!!", mySprite)
let mySprite2 = sprites.create(img`
    . . . . . f c c f f . . . . . . 
    . . . . f c c f f f . . . . . . 
    . f f f f f f f f f f f . . . . 
    f f f f f c c c c f f f f f . . 
    . f f f c c 5 5 c c f f f . . . 
    . . . c b b 5 f 5 c c . . . . . 
    . . . d 1 b b f 5 b c . . . . . 
    . . f c c f b b b 6 b c . . . . 
    . . f c f b b b 6 b 6 8 . . . . 
    . . f . 8 6 b 6 6 a a 8 8 . . . 
    . . . . 8 6 a 6 a 6 a f f . . . 
    . . . f c a 6 a 6 a c d f f . . 
    . . f c a c a c a c 1 f c c f . 
    . f c c 1 6 7 7 1 1 f c c f 7 . 
    . . f c 1 1 7 6 d 1 f c f f 7 . 
    . f f f 1 d 6 b 1 f c f f 7 . . 
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
scene.setBackgroundColor(0)
narrate("Coming Soon...", 2, true, 3)
pause(3000)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
narrate("Featuring Makecoders from around the world", 8, false, 1)
let mySprite6 = sprites.create(img`
    ff1111111111111111feeeeeeeeeeeeeee1f9999ebeee999999f11111eeee111111f1ffc4555eefffeeff1f999999999999999ff1ffffffffffffffff1fffffffffffffffff1111111d5d1111111dddddddddf5fdddf1cccccccccccccccff11111111d1111111ffff
    ff1111cc88f1111111feeeeefffeeefeee1f999e77e7eeeb999f1111eeeeee11111f1ffee44eeeeeeefff1f999999999999999ff1ffffffffffffffff1fffffffffffffffff11111155555111111dddddddccfc5fcdf1cccccccccccccccff111111111d111111ffff
    ff111ffffffd111111fee2ef8ffeeeeeee1f999feeeeeec7f99f111eeeeeeee1111f1eeeeeeee44eeefcf1f999999999999999ff1ffffffffffffffff1fffffffffffffffff11111d55555d11111bddbddddfffffcbf1cccccccfffcccccff111111111d111111ffff
    ff118ffccccfff1111feeefe45ceeeeeee1f9bcc77eec7e7eb9f11eeeeeeeeee111f1ee4e4eeeeeeeffcf1f999ffffffff9999ff1ffff7777777fffff1fffffffffffffffff11111185551111111ddddbbfb4558dddf1ccccccffffffcccff111111ddb881d111ffff
    ffcffccc77cc111111ffe8fe88fff2eeef1fb77ee7eceee7e79f1effeeeeeeffe11f1fe4e4ee4eeeeffcf1f999fcdffffb6999ff1ffff7777777fffff1fffffffdddddcffff1111116666b111111ddddbfffe55c96df1ccccccffeefffccff111111dc68f1d111ffff
    ff111ddccccc811111fffeef8ffeefeeef1fe777eeeeeeeee7dfeee1feeeef1eee1f1fc4e4ee4e4effccf1f99bdcddbb7bd999ff1ffff7777777fffff1ffffffbdddddbbfff111bf966cfb111111ddddfff55e5d768f1cccccff4fbdffccff111111c88dbc1111ffff
    ff111c8ccccccf1111fefefeeffee2feff1fceeffefeeee7e7dfeee1ffffff1eee1f1cc44ee4ee4effccf1f99bede7c7bcbb99ff1f888ffff777fffff1fffffbbbbbbbbbcff111cffffcfff11111ddcffffeeffd968f1cccccffbfb4fcccff11111cc811d1c111ffff
    ff111ccbbcc8881111fe8feeefffeef8ee1fbee7e7e7e7eeee9feee1f1ee1f1eeeef1ccc44eee4efffccf1f9bdebc666eeebb9ff1f888ffff777fffff1fffffccbbcbbcbbff11cff1c11dcf11111bdffffe5efff54bf1ccccccfbf4bfcccff11111ccbd1111111ffff
    ff11111bbcc88cf111feefeeeffffeeeee1fe77eefefeeecec9feee111ee111eeeef1ccf444442c88ffff1f9beeecfcfceee99ff1f888ffff777fffff1ffffffbbbb33dbfff111fdfcc1fff11111dfffff555fbf54df1cccccccffffccccff111dccdcc1c11111ffff
    ff11111666688cff11feeeeffffffeeeee1feeee97777cfcb99feeeeeeeeeeeeeeef1ccbf44444fffffff1f9beefffffffeeb9ff1f888ffff777fffff1fffffffccccccffff11bffbbbbbfc11111dfffffe9ffcd66df1cccccccf88fccccff111d8cfccd111111ffff
    ff11188666accbff11feeefffffffeeeee1f9ffff77777fce99feeeeddddddeeee1f1bcfbfcccfbbfffff1f9ebfffffffceb99ff1f8888888777888ff1ffffffffcfccfffff1111cfbbffb111111dfcfff88ffffdbbf1cccccccf88fccccff111d111db11d1111ffff
    ff1188faaaafbfff11feeeffeeffffeeee1f99d7f7777e7fc99f111dddddddd1111f1ffcfcbbbbfcfffcf1fdfffffffffffb99ff1f8888888777888ff1fffffffffbbffffff11111bfc691111111d56888dfffffdddf1cccccccf888ccccff1111111d111d1111ffff
    ff1118816dddbff111feeeeffeefffeeee1f99977f77fed9999f1ffddddddddff11f1fcfccc8ccfffffff1ffffffffffffcf69ff1f8888888777888ff1fffffffffffffffff1111111c66f111111dd688bdd8ffcdddf1cccccccf888fcccff111111d1db1bd111ffff
    ff11188d6ddbff1111feeee2feeeff8eee1f999c77ee77f9999ffffffddddfffff1f1ccffffffffccfccf1ffffffffffffffffff1ffffffff777fffff1fffffffffffffffff111111c6666111111bd86dddd86dbdddf1cccccccf888fcccff111111d111111111ffff
    ff1118866dcf111111feeecffeeeeefeee1f999977777799999fffffffddffffff1f1ffbcf88cbfbcfccf1ffffffffffffffffff1ffffffff777fffff1fffffffffffffffff11111111111111111d8f8bddff8bdbddf1cccccccf888fcccff1111111111111111ffff
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
narrate("Coming together to make...", 6, false, 1)
pause(4000)
mySprite7.scale = 1.5
mySprite7.y += -30
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
pause(1000)
color.setColor(1, color.parseColorString("#FF10F0"))
color.setColor(6, color.parseColorString("#808000"))
bigtext(1, "The Show", true)
pause(500)
bodytext("Season 2 starting October 10", 6, false)
pause(5000)
sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
scene.setBackgroundImage(img`
    eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
    222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
    222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
    222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
    e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
    eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
    2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
    2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
    2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
    eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
    eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
    eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
    eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
    eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
    eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
    eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
    eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
    eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
    eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
    eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
    eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
    eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
    eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
    eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
    eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
    eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
    eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
    eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
    eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
    ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
    ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
    eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
    eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
    eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
    eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
    eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
    eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
    eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
    ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
    ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
    e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
    e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
    eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
    eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
    ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
    ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
    e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
    e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
    22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
    22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
    222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
    2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
    2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
    222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
    222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
    222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
    22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
    22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
    22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
    2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
    2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
    2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
    ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
    eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
    eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
    2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
    222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
    22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
    222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
    eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
    222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
    222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
    222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
    222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
    222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
    222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
    222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
    222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
    222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
    222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
    222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
    222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
    2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
    2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
    2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
    2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
    222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
    222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
    2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
    222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
    222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
    222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
    222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
    2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
    22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
    22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
    22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
    22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
    22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
    22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
    22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
    22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
    222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
    222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
    222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
    222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
    222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
    222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
    `)
let myTextSprite5 = fancyText.create("CREDITS", 150, 1, customFont.Bold_Sans)
myTextSprite5.setPosition(116, 18)
pause(500)
let myTextSprite6 = fancyText.create("ART", 100, 10, fancyText.rounded_large)
story.printText("Head Artist: Luke(Richard, Luke)---Converted Images: https://kristianpedersen.github.io/Convert-Image-to-MakeCode-Arcade-Sprite/---TV image: ShutterStock 1502125139", 0, 0, 7, 4, story.TextSpeed.VeryFast)
myTextSprite6.setPosition(13, 21)
myTextSprite6.setBounceOnWall(true)
myTextSprite6.ay = 23
myTextSprite6.setVelocity(-200, 60)
myTextSprite5.ay = 56
music.stopAllSounds()
music.stopAllSounds()
sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
music.stopAllSounds()
timer.background(function () {
    music.play(music.stringPlayable(music.convertRTTTLToMelody("mission:d=4,o=6,b=100:32d,32d#,32d,32d#,32d,32d#,32d,32d#,32d,32d,32d#,32e,32f,32f#,32g,16g,8p,16g,8p,16a#,16p,16c7,16p,16g,8p,16g,8p,16f,16p,16f#,16p,16g,8p,16g,8p,16a#,16p,16c7,16p,16g,8p,16g,8p,16f,16p,16f#,16p,16a#,16g,2d,32p,16a#,16g,2c#,32p,16a#,16g,2c,16p,16a#5,16c"), 120), music.PlaybackMode.UntilDone)
})
