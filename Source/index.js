/* eslint-disable no-unused-vars */
import { create, Client } from '@open-wa/wa-automate';
import {options, color} from './tools/index.js'
import * as ind from './message/text/lang/eng.js';
import { banPerson, msgHandler, verifyText, _ban, _trashGroupId } from './message/index.js';
import figlet from 'figlet';
import * as canvas from 'discord-canvas';
import * as ownerBot from './config.js';
import { startGreetingTimer, stopGreetingTimer } from './function/greeting.js';


/********** VARIABLES **********/

let SOVIET = null;

let allowedNumbers = ["41", "43", "49"];
let botNumbers = 0


setTimeout(() => {
    //console.log(newMsgModule.banList.length);

    //const _banList = msgHandler.banList;
    //console.log(_banList);
    //console.log(_banList.length);
}, 2000);

/********** END OF VARIABLES **********/


const start = async (sovClient = new Client()) => {
    console.log(color(figlet.textSync('SOVIET BOT', 'Larry 3D'), 'magenta'))
    console.log(color('[SOVIET]', 'cyan'), color('SOVIETBot is now online!', 'yellow'))
    console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))

    // Creating a localhost
    /*app.get('/', (req, res) => res.status(200).send('SOVIET Client'))
    const PORT = process.env.PORT || 8080 || 5000 || 3000
    app.listen(PORT, () => {
        console.log(color('Localhost is running!', 'cyan'))
    })  
    */

    if(SOVIET == null) 
        SOVIET = sovClient;
    if(botNumbers == 0) 
        botNumbers = await SOVIET.getHostNumber() + '@c.us';

    SOVIET.onMessage(message => msgHandler(SOVIET, message));

    SOVIET.onStateChanged((state) => {
        console.log(color('[SOVIET]'), state)
        if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') SOVIET.forceRefocus()
    })

    SOVIET.onAddedToGroup(async (chat) => {
        console.log(color('[SOVIET]'), 'Added to a new group. Name:', color(chat.contact.name, 'yellow'), 'Total members:', color(chat.groupMetadata.participants.length, 'yellow'))
        if (chat.groupMetadata.participants.includes(ownerBot)) {
            await SOVIET.sendText(chat.id, ind.addedGroup(chat))
        } else {
            await SOVIET.sendText(chat.id, ind.addedGroup(chat))
        }
    })

    SOVIET.onIncomingCall(async (callData) => {
        await SOVIET.sendText(callData.peerJid, ind.blocked(ownerBot))
        await SOVIET.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked.`, 'yellow'))
    });

    SOVIET.onGlobalParticipantsChanged(async (event) => {
        const isBanned = _ban.includes(event.who);
        const gcChat = await SOVIET.getChatById(event.chat)
        const pcChat = await SOVIET.getContact(event.who)
        let { pushname, verifiedName, formattedName } = pcChat
        pushname = pushname || verifiedName || formattedName
        const { name, groupMetadata } = gcChat
        try {
            if (event.action === 'add' && event.who !== botNumbers) {
                if(event.chat == _trashGroupId) return;
                if(isBanned){
                    await SOVIET.sendText(event.chat, 'Netter versuch.. du bleibst aber gebannt :P.');
                    await SOVIET.removeParticipant(event.chat, event.who);
                    return;
                }
                if(!allowedNumbers.includes(event.who.substring(0, 2))){
                    await SOVIET.sendTextWithMentions(event.chat, `@${event.who} only +41, +43, +49 Numbers are allowed!`);
                    banPerson(event.chat, event.who, 'NOT_VALID_PHONE_NUMBER', 0);
                    return;
                };

                const pic = await SOVIET.getProfilePicFromServer(event.who)
                if (pic === `ERROR: 401`) {
                    var picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                } else {
                    picx = pic
                }
                const welcomer = await new canvas.Welcome()
                    .setUsername(pushname)
                    .setDiscriminator(event.who.substring(6, 10))
                    .setMemberCount(groupMetadata.participants.length)
                    .setGuildName(name)
                    .setAvatar(picx)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
                    .setBackground('./assets/images/background.jpg')
                    //.setBackground('https://wallpapercave.com/wp/wp25174.jpg')
                    .toAttachment()
                const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
                await SOVIET.sendFile(event.chat, base64, 'welcome.png', `Willkommen in dieser Ehrenhaften & Krassen Gruppe ${pushname}!\n\n` + verifyText);
                startGreetingTimer(event.chat, event.who);
            } else if (event.action === 'remove' && event.who !== botNumbers) {
                if(event.chat == _trashGroupId) {
                    SOVIET.addParticipant(event.chat, event.who);
                    return;
                }

                if(isBanned || !allowedNumbers.includes(event.who.substring(0, 2))) return;
                const pic = await SOVIET.getProfilePicFromServer(event.who)
                if (pic === `ERROR: 401`) {
                    var picxs = 'https://pbs.twimg.com/profile_images/1255970580618240006/CvSg6LTf_400x400.jpg'
                } else {
                    picxs = pic
                }
                const bye = await new canvas.Goodbye()
                    .setUsername(pushname)
                    .setDiscriminator(event.who.substring(6, 10))
                    .setMemberCount(groupMetadata.participants.length)
                    .setGuildName(name)
                    .setAvatar(picxs)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
                    .setBackground('./assets/images/background.jpg')
                    .toAttachment()
                const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
                await SOVIET.sendFile(event.chat, base64, 'welcome.png', `Die Ratte ${pushname} verlässt diese Ehrenhafte & Krass Geile Gruppe!\nWir spucken auf dich.`)
				await SOVIET.sendFile(event.chat, './assets/audio/schwanzimmund.mp3', 'audio.mp3')
                stopGreetingTimer(event.who);
            }
        } catch (err) {
            console.error(err)
        }
    })
}

create(options(start))
    .then((SOVIET) => start(SOVIET))
    .catch((err) => console.error(err))
