function getISOStandardKeysmash() {
    var rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    var row = randomValueFromArray(rows);

    var characters = random(16, 40);
    var keysmash = "";
    var lastCharacter = "";

    for (var i = 0; i < characters; i += 1) {
        var character;
        do {
            character = randomValueFromArray(row);
        } while (character == lastCharacter);
        lastCharacter = character;
        keysmash += character;
    }

    return keysmash;
}

function getFourLetterRepeatingKeysmash() {
    var thingsWeCanRepeat = ["asdf", "sdfg", "dfgh", "fghj", "ghjk", "hjkl"];
    var thingToRepeat = randomValueFromArray(thingsWeCanRepeat);

    var repetitions = random(4, 10);
    var keysmash = thingToRepeat.repeat(repetitions);

    // occasionally add extra stuff to the end
    if (Math.random() < 0.3)
        keysmash += thingToRepeat.substring(0, Math.random(0, 2));

    // also to the beginning
    if (Math.random() < 0.3)
        keysmash = thingToRepeat.substring(1, Math.random(1, 3)) + keysmash;

    // let's just remove random bits, a bit, maybe
    if (Math.random() < 0.6)
        for (var i = 0; i < random(0, 4); i += 1)
            keysmash = strReplaceAt(keysmash, random(0, keysmash.length), "");
    
    return keysmash;
}

function getTwoLetterRepeatingKeysmash() {
    var allTheLetters = "qwertyuiopasdfghjklzxcvbnm";
    var letter1index = random(0, allTheLetters.length - 1);
    var letter2index;
    do { letter2index = random(0, allTheLetters.length - 1); } while (letter2index == letter1index);
    var letter1 = allTheLetters[letter1index];
    var letter2 = allTheLetters[letter2index];

    var repetitions = random(4, 16);
    var keysmash = (letter1 + letter2).repeat(repetitions);
    
    // sometimes we'll add an extra letter onto the end just for the fun of it!
    if (Math.random() < 0.3)
        keysmash += letter1;
    
    return keysmash;
}

function getAllOverKeysmash() {
    var allTheLetters = "qwertyuiopasdfghjklzxcvbnm";

    var characters = random(16, 40);
    var keysmash = "";
    for (var i = 0; i < characters; i += 1)
        keysmash += allTheLetters[random(0, allTheLetters.length - 1)];

    return keysmash;
}

function fetchKeysmash() {
    // sneal why
    if (Math.random() < 0.0025)
        return "we're all equal in the grave";
    
    // 35% chance of a keysmash like jhfgsjfhgdgjfhdsgkadfgldskgfhj
    // 30% chance of a four letter repeating keysmash like asdfasdfasdfasdfasdf
    // 20% chance of a two letter repeating keysmash like sksksksksksksksk
    // 5% chance of an all over keysmash like ivqnfhrioewfunhuevwhvfmewd
    var keysmash;
    var keysmashTypeChance = Math.random();
    if (keysmashTypeChance <= 0.35)
        keysmash = getISOStandardKeysmash();
    else if (keysmashTypeChance > 0.35 && keysmashTypeChance <= 0.65)
        keysmash = getFourLetterRepeatingKeysmash();
    else if (keysmashTypeChance > 0.65 && keysmashTypeChance <= 0.95)
        keysmash = getTwoLetterRepeatingKeysmash();
    else
        keysmash = getAllOverKeysmash();

    // let's add caps!
    // 33% chance of no caps (as-is)  - fgjshdfgsjhdfg
    // 33% chance of all caps         - FGJSHDGFSJHDFG
    // 33% chance of no-then-all caps - fgjshdgFSJHDFG
    var capsChance = Math.random();
    if (capsChance >= 0.33 && capsChance < 0.66) {
        keysmash = keysmash.toUpperCase();
    } else if (capsChance >= 0.66) {
        // pick a place in the string to start
        var startingLocation = Math.floor(random(keysmash.length / 4, keysmash.length - keysmash.length / 4));
        for (var i = startingLocation; i < keysmash.length; i += 1)
            keysmash = strReplaceAt(keysmash, i, keysmash[i].toUpperCase());
    }

    // if the keysmash is really long and is still all lowercase, make it all uppercase
    if (keysmash.length > 30 && capsChance < 0.33)
        keysmash = keysmash.toUpperCase();

    return keysmash;
}