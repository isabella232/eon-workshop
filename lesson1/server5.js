/**
 * Created by josh on 2/17/16.
 */
/**
 * Created by josh on 2/17/16.
 */
/**
 * Produce five streams of random data on the channel: random5
 */
var PubNub = require('pubnub');

var pubnub = new PubNub({
    publishKey   : "pub-c-5a5f3514-32a6-49a0-94d9-ea376729f959",
    subscribeKey : "sub-c-d784e128-da7d-11e5-9511-0619f8945a4f"
});

var numbers = [100,100,100,100,100];
function publish() {
    var message = { eon: {}};
    for(var i=0; i<numbers.length; i++) {
        numbers[i] += (Math.random() - 0.5);
        message.eon["value"+i] = numbers[i];
    }

    console.log("sending",message);
    pubnub.publish({
        channel   : 'random5',
        message   : message
    });
}
setInterval(publish,3*1000); //every three seconds


