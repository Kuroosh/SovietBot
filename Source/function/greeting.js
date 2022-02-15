import { banPerson } from "../message/index.js";


let contactTimers = {};

export function startGreetingTimer(groupId, phoneNumber){
    if(groupId == "120363041286897237@g.us") return console.log("Trash Talk Group");
    if(contactTimers[phoneNumber]) return console.log("Timer already started!");
    let _cTimer = setTimeout(() =>{
        banPerson(groupId, phoneNumber, 'NICHT_VORGESTELLT_BOT_KICK', 0);
        delete _cTimer[phoneNumber];
        console.log('deleted timer 3 by Countdown ' + contactTimers[phoneNumber]);
    }, 5 * 60000);
    contactTimers[phoneNumber] = _cTimer;
    console.log('started timer 1 ' + contactTimers[phoneNumber]);
}

export function stopGreetingTimer(phoneNumber){
    if(!contactTimers[phoneNumber]) return console.log("Timer dont exist!");
    console.log('deleted timer 1 ' + contactTimers[phoneNumber]);
    clearTimeout(contactTimers[phoneNumber]);
    delete contactTimers[phoneNumber];
    console.log('deleted timer 2 ' + contactTimers[phoneNumber]);
}
