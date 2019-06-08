var coolThingsToAddOntoTheEnd = [
    "made fresh just for you",
    "please use responsibly",
    "I hope you enjoy it",
    "made with love",
    "I put a lot of work into this one",
    "gdfhgdfghdfgh"
];
var lastCoolThing = -1;

function getCoolThingToAddOntoTheEnd() {
    var coolThing;
    do {
        coolThing = Math.floor(Math.random() * coolThingsToAddOntoTheEnd.length);
    } while (coolThing == lastCoolThing);
    lastCoolThing = coolThing;
    return coolThingsToAddOntoTheEnd[coolThing];
}