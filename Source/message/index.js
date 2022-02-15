/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */

/**
 * This source code below is free, please DO NOT sell this in any form!
 * Source code ini gratis, jadi tolong JANGAN jual dalam bentuk apapun!
 *
 * If you copying one of our source code, please give us CREDITS. Because this is one of our hardwork.
 * Apabila kamu menjiplak salah satu source code ini, tolong berikan kami CREDIT. Karena ini adalah salah satu kerja keras kami.
 *
 * If you want to contributing to this source code, pull requests are always open.
 * Apabila kamu ingin berkontribusi ke source code ini, pull request selalu kami buka.
 *
 * Thanks for the contributions.
 * Terima kasih atas kontribusinya.
 */

/********** MODULES **********/
import { decryptMedia } from '@open-wa/wa-automate'
import fs from 'fs-extra';
import os from 'os';
import isPorn from 'is-porn';
import config from '../config.js';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import ms from 'parse-ms';
import toMs from 'ms';
import canvas from 'canvacord';
import moment from 'moment-timezone';
/********** END OF MODULES **********/

/********** UTILS **********/
import { color, processTime, isUrl, createSerial } from '../tools/index.js';
import * as misc from '../lib/misc.js';
import { uploadImages } from '../tools/fetcher.js';
import * as ind from './text/lang/eng.js';
import * as daily from '../function/daily.js';
import * as level from '../function/level.js';
import * as register from '../function/register.js';
import * as premium from '../function/premium.js';
import { startGreetingTimer, stopGreetingTimer } from '../function/greeting.js';

const cd = 4.32e+7
const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
/********** END OF UTILS **********/

/********** DATABASES **********/
export const _nsfw = JSON.parse(fs.readFileSync('../Database/group/nsfw.json'))
export const _antilink = JSON.parse(fs.readFileSync('../Database/group/antilink.json'))
export const _antinsfw = JSON.parse(fs.readFileSync('../Database/group/antinsfw.json'))
export const _leveling = JSON.parse(fs.readFileSync('../Database/group/leveling.json'))
export const _autosticker = JSON.parse(fs.readFileSync('../Database/group/autosticker.json'))
export const _ban = JSON.parse(fs.readFileSync('../Database/bot/banned.json'))
export const _banReasons = JSON.parse(fs.readFileSync('../Database/bot/banned_reasons.json'))
export const _premium = JSON.parse(fs.readFileSync('../Database/bot/premium.json'))
export const _mute = JSON.parse(fs.readFileSync('../Database/bot/mute.json'))
export const _registered = JSON.parse(fs.readFileSync('../Database/bot/registered.json'))
export const _level = JSON.parse(fs.readFileSync('../Database/user/level.json'))
export const _daily = JSON.parse(fs.readFileSync('../Database/user/daily.json'))
/********** END OF DATABASES **********/

/********** VARIABLES **********/

export let _devGroupId = "120363040896850464@g.us";
export let _trashGroupId = "120363041286897237@g.us"

let SOVIET = null;
let botNumber = 0;
const ownerNumber = config.ownerBot;
const authorWm = config.authorStick;
const packWm = config.packStick;

const _bannedLinks = [
    new RegExp(/(http:\/\/snapchat.com)/gi),
    new RegExp(/(https:\/\/snapchat.com)/gi),
    new RegExp(/(http:\/\/chat.whatsapp.com)/gi),
    new RegExp(/(https:\/\/chat.whatsapp.com)/gi),
    new RegExp(/(http:\/\/fuckpussy.net)/gi),
    new RegExp(/(https:\/\/fuckpussy.net)/gi),
    new RegExp(/(http:\/\/bit.ly)/gi),
    new RegExp(/(https:\/\/bit.ly)/gi),
    new RegExp(/(http:\/\/wa.me)/gi),
    new RegExp(/(https:\/\/wa.me)/gi),
    new RegExp(/(http:\/\/t.me)/gi),
    new RegExp(/(https:\/\/t.me)/gi),
    new RegExp(/(http:\/\/cutt.ly)/gi),
    new RegExp(/(https:\/\/cutt.ly)/gi),
    new RegExp(/(https:\/\/sexybruna.com)/gi),
    new RegExp(/(http:\/\/sexybruna.com)/gi)
];


let _roleNames = {};
_roleNames[0] = "Extremer Lappen";
_roleNames[5] = "Lappen";
_roleNames[10] = "Extremer Knecht";
_roleNames[15] = "Knecht";
_roleNames[20] = "Cringe Person";
_roleNames[25] = "Normalno (Maybe)";
_roleNames[30] = "Normalno";
_roleNames[35] = "Scheint cool zu sein...";
_roleNames[40] = "Scheint aktiv zu sein...";
_roleNames[45] = "Scheint kein Leben zu haben...";
_roleNames[50] = "Ehrenperson";
_roleNames[55] = "Slav";
_roleNames[60] = "Ochin Slav";
_roleNames[65] = "Ochin BOLSHOY Slav";
_roleNames[70] = "Nebolshoy Gopnik";
_roleNames[75] = "Medium Gopnik";
_roleNames[80] = "Bolshoy Gopnik";
_roleNames[90] = "Gopnik Student";
_roleNames[100] = "Gopnik Master";


const prefix = '/';


export const verifyText = 'Du bist noch nicht Verifiziert!🚫\n\Stell dich bitte vor mit einem **Bild** + \n\n*/verify Name Alter Ort*\num dich zu Verifizieren!✅\n\nDu hast **5 MINUTEN!**\n**Automatischer KICK in 5 MINUTEN**'


let cooldownVerifyText = false;

/********** END OF VARIABLES **********/




/********** USEFULL FUNCTIONS **********/

function round5(x)
{
    return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
}


export let banPerson = async function banPersonPermanently(groupId, phoneNumber, reason = 'no-reason', delay = 1000){
    setTimeout(async () =>{
            if(!phoneNumber) return;
            await SOVIET.removeParticipant(groupId, phoneNumber);
            if(_ban.includes(phoneNumber)) return;
            _ban.push(phoneNumber)
            fs.writeFileSync('../Database/bot/banned.json', JSON.stringify(_ban))
            for(let index in _banReasons)
                if(_banReasons[index].phoneNumber == phoneNumber) return;
            let currentDateTimeNow = new Date().toLocaleString();
            _banReasons.push({
                phoneNumber: phoneNumber,
                reason: reason,
                dateTime: currentDateTimeNow
            });
            fs.writeFileSync('../Database/bot/banned_reasons.json', JSON.stringify(_banReasons))
            console.log('BANNED PHONE NUMBER : ' + phoneNumber);
            await SOVIET.contactBlock(phoneNumber);
            SOVIET.sendTextWithMentions(groupId, '@' + phoneNumber + ' got banned! reason : ' + reason);
            stopGreetingTimer(phoneNumber);
    }, delay);
}


/********** END OF USEFULL FUNCTIONS **********/


/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
export async function msgHandler(sovClient, message){
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        const isBanned = _ban.includes(sender.id);
        if(isBanned) return;
        if(SOVIET == null) SOVIET = sovClient;

        if(botNumber == 0) botNumber = await SOVIET.getHostNumber() + '@c.us'

        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await SOVIET.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')

        const cmd = caption || body || ''
        const command = cmd.toLowerCase().split(' ')[0] || ''
        const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const args = body.trim().split(/ +/).slice(1)
        const uaOverride = config.uaOverride
        const q = args.join(' ')
        const ar = args.map((v) => v.toLowerCase())

        /********** VALIDATOR **********/

        // Anti group link detector
        const isOwner = sender.id === ownerNumber
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
        const isDetectorOn = isGroupMsg ? _antilink.includes(groupId) : false

        //console.log(botNumber);

        if (isGroupMsg && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if(!chats) return;
            if (chats.length > 5000) {
                banPerson(groupId, sender.id, 'ANTI-VIRUS-TEXT', 0);
                await SOVIET.sendTextWithMentions(from, `@${sender.id} is detected sending a virtext.\nYou will be kicked!`)
                return;
            }
            for(let val in _bannedLinks){
                if (chats.match(_bannedLinks[val])) {
                    banPerson(groupId, sender.id, 'ANTI-GROUP-LINK', 0);
                    await SOVIET.reply(from, ind.linkDetected(), id)
                    return;
                }
            }
        }

        /********** END OF VALIDATOR **********/

        const isCmd = body.startsWith(prefix)
        /* if(isCmd && !(command == prefix + 'verify')){
            let _registryEntry = register.checkRegisteredUser(sender.id, _registered)
            if(!_registryEntry) return await SOVIET.reply(from, ind.notRegistered(), id)
        }
        */

        const isRegistered = register.checkRegisteredUser(sender.id, _registered)

        if(!isRegistered && !isCmd){
            if(!cooldownVerifyText){
                cooldownVerifyText = true;
                SOVIET.reply(from, verifyText, id);
                setTimeout(() => cooldownVerifyText = false, 10000);
            }
            startGreetingTimer(groupId, sender.id);
        }

        const isNsfw = isGroupMsg ? _nsfw.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isMute = isGroupMsg ? _mute.includes(chat.id) : false
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isImage = type === 'image'
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false

        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = level.getLevelingLevel(sender.id, _level)
        let role = _roleNames[levelRole];
        if(!role)
            role = _roleNames[round5(levelRole)];


        // Leveling [BETA] by Slavyan
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * 10)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await SOVIET.reply(from, `*── 「 LEVEL UP 」 ──*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *Role*: *${role}*`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }

        // Anti NSFW link
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiNsfw && !isOwner) {
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                //console.log(color('[FILTER]', 'yellow'), 'Checking link:', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        banPerson(groupId, sender.id, 'ANTI-NSFW-LINK', 0);
                        //console.log(color('[NSFW]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await SOVIET.reply(from, ind.linkNsfw(), id)
                    } else {
                        //console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }



        // Mute
        if (isCmd && isMute && !isGroupAdmins && !isOwner) return
        
        // Ignore banned and blocked users
        if (isCmd && (isBanned) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && (isBanned) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti spam
        //if (isCmd && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        //if (isCmd && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'blue'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await SOVIET.sendSeen(from)
        }
        if (isCmd && isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'blue'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
            await SOVIET.sendSeen(from)
        }
        
        switch (command) {
            case prefix+'verify':
                if (!isGroupMsg) return await SOVIET.reply(from. ind.groupOnly(), id)
                let _verifyAge = Number(args[1]);
                if(_verifyAge < 14 || _verifyAge > 30){
                    SOVIET.reply(from, 'MINDEST_ALTER_NICHT_EINGEHALTEN_' + _verifyAge);
                    banPerson(groupId, sender.id, 'MINDEST_ALTER_NICHT_EINGEHALTEN_' + _verifyAge, 1000);
                    return;
                }

                if(!isImage) return await SOVIET.reply(from, "Dein Bild fehlt! 😡", id);
                let _verifyName = args[0];
                let _verifyCity = args[2];
                let _verifySerial = "Account vorhanden bereits!"
                if(!isRegistered)
                    _verifySerial = createSerial(20); 

                SOVIET.reply(from, 'Du hast dich Erfolgreich Verifiziert!✅\nDu kannst nun alle Commands nutzen!\nName : ' + _verifyName + ".\nAlter : " + _verifyAge + ". \nOrt : " + _verifyCity + ".\nSerial : " + _verifySerial, id);
                stopGreetingTimer(sender.id);
                if(!isRegistered)
                    register.addRegisteredUser(sender.id, _verifyName, _verifyAge, time, _verifySerial, _registered)
                break;
            case prefix+'adminverify':
                if (!isGroupMsg) return await SOVIET.reply(from. ind.groupOnly(), id)
                if (mentionedJidList.length === 0 || groupAdmins.includes(mentionedJidList[0]) || mentionedJidList[0] === botNumber ) return await SOVIET.reply(from, ind.wrongFormat(), id)
                //await SOVIET.sendTextWithMentions(from, `Verpiss dich \n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                let _adminVerifySerial = "Account vorhanden bereits!"
                let _adminRegistered = register.checkRegisteredUser(sender.id, mentionedJidList[0]);

                if(!_adminRegistered)
                    _adminVerifySerial = createSerial(20); 

                let _adminVerifyName = args[1];
                let _adminVerifyAge = args[2];
                let _adminVerifyCity = args[3];
                SOVIET.reply(from, 'Du hast ' + mentionedJidList[0] + ' Erfolgreich Verifiziert!✅\nDu kannst nun alle Commands nutzen!\nName : ' + _adminVerifyName + ".\nAlter : " + _adminVerifyAge + ". \nOrt : " + _adminVerifyCity + ".\nSerial : " + _adminVerifySerial, id);
                stopGreetingTimer(mentionedJidList[0]);
                if(!_adminRegistered)
                    register.addRegisteredUser(mentionedJidList[0], _adminVerifyName, _adminVerifyAge, time, _adminVerifySerial, _registered)
            break;
            
            case prefix+'level':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isLevelingOn) return await SOVIET.reply(from, ind.levelingNotOn(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                const userLevel = level.getLevelingLevel(sender.id, _level)
                const userXp = level.getLevelingXp(sender.id, _level)
                const ppLink = await SOVIET.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = errorImg
                } else {
                    pepe = ppLink
                }
                const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setLevelColor('#D10000', '#D10000')
                    .setRank(Number(level.getUserRank(sender.id, _level)))
                    .setCurrentXP(userXp)
                    .setOverlay('#00B1C7', 100, false)
                    .setRequiredXP(requiredXp)
                    .setProgressBar('#D10000', 'COLOR')
                    .setBackground('COLOR', '#00B1C7')
                    .setUsername(pushname)
                    .setDiscriminator(sender.id.substring(6, 10))
                rank.build()
                    .then(async (buffer) => {
                        const imageBase64 = `data:image/png;base64,${buffer.toString('base64')}`
                        await SOVIET.sendImage(from, imageBase64, 'rank.png', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await SOVIET.reply(from, 'Error!', id)
                    })
            break
            case prefix+'leaderboard':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isLevelingOn) return await SOVIET.reply(from, ind.levelingNotOn(), id)
                if (!isGroupMsg) return await SOVIET.reply(from. ind.groupOnly(), id)
                const resp = _level
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '*── 「 LEADERBOARDS 」 ──*\n\n'
                try {
                    for (let i = 0; i < 10; i++) {
                        let roles = _roleNames[resp[i].level];
                        if(!roles)
                            roles = _roleNames[round5(resp[i].level)];
                        
                        leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`;
                        //leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`;
                    }
                    await SOVIET.reply(from, leaderboard, id)
                } catch (err) {
                    console.error(err)
                    await SOVIET.reply(from, ind.minimalDb(), id)
                }
            break
            case prefix+'corona': // by CHIKAA CHANTEKKXXZZ
            case prefix+'coronavirus':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!q) return await SOVIET.reply(from, ind.wrongFormat(), id)
                await SOVIET.reply(from, ind.wait(), id)
                misc.corona(q)
                    .then(async (res) => {
                        await SOVIET.sendText(from, '🌎️ Covid Info - ' + q.charAt(0).toUpperCase() + q.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                        console.log('Success sending Result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await SOVIET.reply(from, 'Error!', id)
                    })
            break
            case prefix+'ttp': // CHIKAA CHANTEKKXXZZ
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!q) return await SOVIET.reply(from, ind.wrongFormat(), id)
                await SOVIET.reply(from, ind.wait(), id)
                misc.ttp(q)
                    .then(async (res) => {
                        await SOVIET.sendImageAsSticker(from, res.base64, { author: authorWm, pack: packWm })
                        console.log('Success creating TTP!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await SOVIET.reply(from, 'Error!', id)
                    })
            break
            case prefix+'tomp3': // by: Piyobot
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'video' || isQuotedVideo) {
                    await SOVIET.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await SOVIET.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            // Bot
            /*case prefix+'menu':
            case prefix+'help':
                const jumlahUser = _registered.length
                const levelMenu = level.getLevelingLevel(sender.id, _level)
                const xpMenu = level.getLevelingXp(sender.id, _level)
                const reqXpMenu = 5 * Math.pow(levelMenu, 2) + 50 * 1 + 100
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (args[0] === '1') {
                    await SOVIET.sendText(from, ind.menuDownloader())
                } else if (args[0] === '2') {
                    await SOVIET.sendText(from, ind.menuBot())
                } else if (args[0] === '3') {
                    await SOVIET.sendText(from, ind.menuMisc())
                } else if (args[0] === '4') {
                    await SOVIET.sendText(from, ind.menuSticker())
                } else if (args[0] === '5') {
                    await SOVIET.sendText(from, ind.menuWeeaboo())
                } else if (args[0] === '6') {
                    await SOVIET.sendText(from, ind.menuFun())
                } else if (args[0] === '7') {
                    await SOVIET.sendText(from, ind.menuModeration())
                } else if (args[0] === '8') {
                    if (isGroupMsg && !isNsfw) return await SOVIET.reply(from, ind.notNsfw(), id)
                    await SOVIET.sendText(from, ind.menuNsfw())
                } else if (args[0] === '9') {
                    if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly())
                    await SOVIET.sendText(from, ind.menuOwner())
                } else if (args[0] === '10') {
                    if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                    await SOVIET.sendText(from, ind.menuLeveling())
                } else {
                    await SOVIET.sendText(from, ind.menu(jumlahUser, levelMenu, xpMenu, role, pushname, reqXpMenu, 'NO'))
                }
            break
            */

            case prefix+'startsovietinvade':
                if(!isOwner) return await SOVIET.reply(from, ind.ownerOnly, id);
                for(let _banIndex in _ban){
                    //console.log('added ' + _ban[_banIndex]);
                    //await SOVIET.addParticipant(from, "4915759625603@c.us");
                    await SOVIET.addParticipant(from, _ban[_banIndex]);
                }
                SOVIET.sendText(from, 'Willkommen ihr knechte');
                break;
            case prefix+'stopsovietinvade':
                if(!isOwner) return await SOVIET.reply(from, ind.ownerOnly, id);
                let _stopInvadeMember = await SOVIET.getGroupMembers(groupId)
                for (let i = 0; i < _stopInvadeMember.length; i++)
                    if(groupAdmins.includes(_stopInvadeMember[i].id)) 
                        continue;
                    else 
                        SOVIET.removeParticipant(groupId, _stopInvadeMember[i].id)
                break;
            case prefix+'rules':
            case prefix+'rule':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                await SOVIET.sendText(from, ind.rules())
            break
            case prefix+'nsfw':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isNsfw) return await SOVIET.reply(from, ind.nsfwAlready(), id)
                    _nsfw.push(groupId)
                    fs.writeFileSync('../Database/group/nsfw.json', JSON.stringify(_nsfw))
                    await SOVIET.reply(from, ind.nsfwOn(), id)
                } else if (ar[0] === 'disable') {
                    _nsfw.splice(groupId, 1)
                    fs.writeFileSync('../Database/group/nsfw.json', JSON.stringify(_nsfw))
                    await SOVIET.reply(from, ind.nsfwOff(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'status':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                await SOVIET.sendText(from, `*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem / 1024 / 1024)} MB\n*CPU*: ${os.cpus()[0].model}`)
            break
            case prefix+'listblock':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                let blockNumber = await SOVIET.getBlockedIds()
                let block = ind.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace('@c.us', '')}\n`
                }
                await SOVIET.sendTextWithMentions(from, block)
            break
            case prefix+'ownerbot':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                await SOVIET.sendContact(from, ownerNumber)
            break
            case prefix+'runtime': // BY HAFIZH
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                const formater = (seconds) => {
                    const pad = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
                }
                const uptime = process.uptime()
                await SOVIET.reply(from, `*── 「 BOT UPTIME 」 ──*\n\n❏${formater(uptime)}`, id)
            break
            case prefix+'ping':
            case prefix+'p':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                await SOVIET.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} secs`)
            break
            case prefix+'delete':
            case prefix+'del':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!quotedMsg) return await SOVIET.reply(from, ind.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return await SOVIET.reply(from, ind.wrongFormat(), id)
                await SOVIET.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
            case prefix+'report':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!q) return await SOVIET.reply(from, ind.emptyMess(), id)
                const lastReport = daily.getLimit(sender.id, _daily)
                if (lastReport !== undefined && cd - (Date.now() - lastReport) > 0) {
                    const time = ms(cd - (Date.now() - lastReport))
                    await SOVIET.reply(from, ind.daily(time), id)
                } else {
                    if (isGroupMsg) {
                        await SOVIET.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q}`)
                        await SOVIET.reply(from, ind.received(pushname), id)
                    } else {
                        await SOVIET.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${q}`)
                        await SOVIET.reply(from, ind.received(pushname), id)
                    }
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'groupid':
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                await SOVIET.reply(from, "Group ID : " + groupId, id);
            break;
            case prefix+'serial':
                if (!isRegistered) return await SOVIET.reply(from, ind.registered(), id)
                if (isGroupMsg) return await SOVIET.reply(from, ind.pcOnly(), id)
                if (args.length !== 1) return await SOVIET.reply(from, ind.wrongFormat(), id)
                const serials = args[0]
                if (register.checkRegisteredUserFromSerial(serials, _registered)) {
                    const name = register.getRegisteredNameFromSerial(serials, _registered)
                    const age = register.getRegisteredAgeFromSerial(serials, _registered)
                    const time = register.getRegisteredTimeFromSerial(serials, _registered)
                    const id = register.getRegisteredIdFromSerial(serials, _registered)
                    await SOVIET.sendText(from, ind.registeredFound(name, age, time, serials, id))
                } else {
                    await SOVIET.sendText(from, ind.registeredNotFound(serials))
                }
            break
            case prefix+'quotes':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                await SOVIET.reply(from, ind.wait(), id)
                misc.quotes()
                .then(async ({ result }) => {
                    await SOVIET.reply(from, `➸ *Quotes*: ${result.quotes}\n➸ *Author*: ${result.author}`, id)
                })
            break
            case prefix+'profile':
            case prefix+'me':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (quotedMsg) {
                    const getQuoted = quotedMsgObj.sender.id
                    const profilePic = await SOVIET.getProfilePicFromServer(getQuoted)
                    const username = quotedMsgObj.sender.name
                    const statuses = await SOVIET.getStatus(getQuoted)
                    const benet = _ban.includes(getQuoted) ? 'Yes' : 'No'
                    const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                    const premi = premium.checkPremiumUser(getQuoted, _premium) ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(getQuoted, _level)
                    const xpMe = level.getLevelingXp(getQuoted, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfp = errorImg
                    } else {
                        pfp = profilePic
                    }
                    await SOVIET.sendFileFromUrl(from, pfp, `${username}.jpg`, ind.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                } else {
                    const profilePic = await SOVIET.getProfilePicFromServer(sender.id)
                    const username = pushname
                    const statuses = await SOVIET.getStatus(sender.id)
                    const benet = isBanned ? 'Yes' : 'No'
                    const adm = isGroupAdmins ? 'Yes' : 'No'
                    const premi = 'No'
                    const levelMe = level.getLevelingLevel(sender.id, _level)
                    const xpMe = level.getLevelingXp(sender.id, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfps = errorImg
                    } else {
                        pfps = profilePic
                    }
                    await SOVIET.sendFileFromUrl(from, pfps, `${username}.jpg`, ind.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                }
            break
            case prefix+'wasted':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await SOVIET.reply(from, ind.wait(), id)
                    await SOVIET.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini..., sticker nya lagi di kirim', id).then(() => SOVIET.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'kiss':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                try {
                    if (isMedia && isImage || isQuotedImage) {
                        await SOVIET.reply(from, ind.wait(), id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const ppRaw = await SOVIET.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(encryptMedia, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await SOVIET.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await SOVIET.reply(from, ind.wrongFormat(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await SOVIET.reply(from, 'Error!', id)
                }
            break
            
            // Moderation command
            case prefix+'revoke':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return SOVIET.reply(from, ind.botNotAdmin(), id)
                await SOVIET.revokeGroupInviteLink(groupId)
                await SOVIET.sendTextWithMentions(from, `Group link revoked by @${sender.id.replace('@c.us', '')}`)
            break
            case prefix+'grouplink':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                const gcLink = await SOVIET.getGroupInviteLink(groupId)
                await SOVIET.reply(from, gcLink, id)
            break
            case prefix+'mutegc':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return SOVIET.reply(from, ind.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    await SOVIET.setGroupToAdminsOnly(groupId, true)
                    await SOVIET.sendText(from, ind.gcMute())
                } else if (ar[0] === 'disable') {
                    await SOVIET.setGroupToAdminsOnly(groupId, false)
                    await SOVIET.sendText(from, ind.gcUnmute())
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'add':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                if (args.length !== 1) return await SOVIET.reply(from, ind.wrongFormat(), id)
                try {
                    await SOVIET.addParticipant(from, `${args[0]}@c.us`)
                    await SOVIET.sendText(from, '🎉 Welcome! 🎉')
                } catch (err) {
                    console.error(err)
                    await SOVIET.reply(from, 'Error!', id)
                }
            break
            case prefix+'kick':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length === 0 || groupAdmins.includes(mentionedJidList[0]) || mentionedJidList[0] === botNumber ) return await SOVIET.reply(from, ind.wrongFormat(), id)
				await SOVIET.sendFile(from, './assets/audio/verpissdich.mp3', 'audio.mp3', '', id)
                await SOVIET.sendTextWithMentions(from, `Verpiss dich \n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                banPerson(groupId, mentionedJidList[0], args[1], 0);
            break
            case prefix+'bancount':
                await SOVIET.sendText(from, 'Current ban-count : ' + _ban.length);
            break;

            case prefix+'startsoviet':
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                let currentMember = await SOVIET.getGroupMembers(groupId)
                let allowedNumbers = ["41", "43", "49"];
                let txt = '╔══✪〘 *EVERYONE EXCEPT +41, +43, +49* 〙✪══\n YOU WILL GET KICKED SOON! JOIN WITH A VALID PHONE NUMBER!'
                for (let i = 0; i < currentMember.length; i++) {
                    if(allowedNumbers.includes(currentMember[i].id.substring(0, 2))) continue;
                    txt += '╠➥'
                    txt += ` @${currentMember[i].id.replace(/@c.us/g, '')}\n`
                    banPerson(groupId, currentMember[i].id, 'NO_VALID_NUMBER', 0);
                }
                txt += '╚═〘 *S L A V  B O T* 〙'
                await SOVIET.sendTextWithMentions(from, txt)
            break;

            case prefix+'startsovietblock':
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)            
                
                for(let _banEntrys in _ban) {
                    setTimeout(async() => {
                        await SOVIET.contactBlock(_ban[_banEntrys]);
                        if(SOVIET.getBlockedIds)
                        console.log('Blocked Phone-Number : ' + _ban[_banEntrys]);
                    }, 100);
                }
                
                SOVIET.reply(from, 'Blocked ' + _ban.length + ' contacts.', id);
                break;

            case prefix+'banreason':
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                for(let banReasonNumber in _banReasons)
                    if(_banReasons[banReasonNumber].phoneNumber == (args[0] + '@c.us')){
                        await SOVIET.sendText(from, "BAN-INFO\n\n ➸ *Number:* " + args[0] + "\n ➸ *Reason:* " + _banReasons[banReasonNumber].reason + "\n ➸ *Date:* " + _banReasons[banReasonNumber].dateTime);
                        return;
                    }

                await SOVIET.sendText(from, "Ban reason for ID " + args[0] + " not found!");
            break;


            case prefix+'promote':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await SOVIET.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await SOVIET.reply(from, ind.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return await SOVIET.reply(from, ind.adminAlready(), id)
                await SOVIET.promoteParticipant(groupId, mentionedJidList[0])
                await SOVIET.reply(from, ind.ok(), id)
            break
            case prefix+'demote':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await SOVIET.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await SOVIET.reply(from, ind.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await SOVIET.reply(from, ind.notAdmin(), id)
                await SOVIET.demoteParticipant(groupId, mentionedJidList[0])
                await SOVIET.reply(from, ind.ok(), id)
            break
            case prefix+'leave':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                await SOVIET.sendText(from, 'Bye~ 👋')
                await SOVIET.leaveGroup(groupId)
            break
            case prefix+'admins':
            case prefix+'admin':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                const groupAdm = await SOVIET.getGroupAdmins(groupId)
                const lastAdmin = daily.getLimit(sender.id, _daily)
                if (lastAdmin !== undefined && cd - (Date.now() - lastAdmin) > 0) {
                    const time = ms(cd - (Date.now() - lastAdmin))
                    await SOVIET.reply(from, ind.daily(time), id)
                } else if (isOwner) {
                    let txt = '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *S L A V  B O T* 〙'
                    await SOVIET.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 *ADMINS* 〙✪══\n'
                    for (let i = 0; i < groupAdm.length; i++) {
                        txt += '╠➥'
                        txt += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                    }
                    txt += '╚═〘 *S L A V  B O T* 〙'
                    await SOVIET.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'everyone':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                const groupMem = await SOVIET.getGroupMembers(groupId)
                const lastEveryone = daily.getLimit(sender.id, _daily)
                if (lastEveryone !== undefined && cd - (Date.now() - lastEveryone) > 0) {
                    const time = ms(cd - (Date.now() - lastEveryone))
                    await SOVIET.reply(from, ind.daily(time), id)
                } else if (isOwner) {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *S L A V  B O T* 〙'
                    await SOVIET.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *S L A V  B O T* 〙'
                    await SOVIET.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
            break
            case prefix+'groupicon':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return SOVIET.reply(from, ind.botNotAdmin(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await SOVIET.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await SOVIET.setGroupIcon(groupId, imageBase64)
                    await SOVIET.sendText(from, ind.ok())
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'antilink':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await SOVIET.reply(from, ind.detectorOnAlready(), id)
                    _antilink.push(groupId)
                    fs.writeFileSync('../Database/group/antilink.json', JSON.stringify(_antilink))
                    await SOVIET.reply(from, ind.detectorOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    _antilink.splice(groupId, 1)
                    fs.writeFileSync('../Database/group/antilink.json', JSON.stringify(_antilink))
                    await SOVIET.reply(from, ind.detectorOff(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'leveling':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isLevelingOn) return await SOVIET.reply(from, ind.levelingOnAlready(), id)
                    _leveling.push(groupId)
                    fs.writeFileSync('../Database/group/leveling.json', JSON.stringify(_leveling))
                    await SOVIET.reply(from, ind.levelingOn(), id)
                } else if (ar[0] === 'disable') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('../Database/group/leveling.json', JSON.stringify(_leveling))
                    await SOVIET.reply(from, ind.levelingOff(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'autosticker':
            case prefix+'autostiker':
            case prefix+'autostik':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isAutoStickerOn) return await SOVIET.reply(from, ind.autoStikOnAlready(), id)
                    _autosticker.push(groupId)
                    fs.writeFileSync('../Database/group/autosticker.json', JSON.stringify(_autosticker))
                    await SOVIET.reply(from, ind.autoStikOn(), id)
                } else if (ar[0] === 'disable') {
                    _autosticker.splice(groupId, 1)
                    fs.writeFileSync('../Database/group/autosticker.json', JSON.stringify(_autosticker))
                    await SOVIET.reply(from, ind.autoStikOff(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'antinsfw':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await SOVIET.reply(from, ind.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await SOVIET.reply(from, ind.antiNsfwOnAlready(), id)
                    _antinsfw.push(groupId)
                    fs.writeFileSync('../Database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await SOVIET.reply(from, ind.antiNsfwOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    _antinsfw.splice(groupId, 1)
                    fs.writeFileSync('../Database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await SOVIET.reply(from, ind.antiNsfwOff(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break

            // Owner command
            case prefix+'block':
            case prefix+'blok':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await SOVIET.reply(from, ind.wrongFormat(), id)
                        await SOVIET.contactBlock(blok)
                    }
                    await SOVIET.reply(from, ind.doneOwner(), id)
                } else if (args.length === 1) {
                    await SOVIET.contactBlock(args[0] + '@c.us')
                    await SOVIET.reply(from, ind.doneOwner(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'unblock':
            case prefix+'unblok':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await SOVIET.reply(from, ind.wrongFormat(), id)
                        await SOVIET.contactUnblock(blok)
                    }
                    await SOVIET.reply(from, ind.doneOwner(), id)
                } else if (args.length === 1) {
                    await SOVIET.contactUnblock(args[0] + '@c.us')
                    await SOVIET.reply(from, ind.doneOwner(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'clearall':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                const allChats = await SOVIET.getAllChats()
                for (let delChats of allChats) {
                    await SOVIET.deleteChat(delChats.id)
                }
                await SOVIET.reply(from, ind.doneOwner(), id)
            break
            case prefix+'leaveall':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                if (!q) return await SOVIET.reply(from, ind.emptyMess(), id)
                const allGroup = await SOVIET.getAllGroups()
                for (let gclist of allGroup) {
                    await SOVIET.sendText(gclist.contact.id, q)
                    await SOVIET.leaveGroup(gclist.contact.id)
                }
                await SOVIET.reply(from, ind.doneOwner())
            break
            case prefix+'ban':
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'add') {
                    banPerson(groupId, args[1] + '@c.us', args[2], 0);
                    /*_ban.push(args[1] + '@c.us')
                    
                    fs.writeFileSync('../Database/bot/banned.json', JSON.stringify(_ban))
                     */
                    //await SOVIET.reply(from, args[1] + " got banned! ~ Reason " + args[2], id)
                } else if (ar[0] === 'del') {

                        for(let banNumber in _ban)
                            if(_ban[banNumber] == args[1] + '@c.us')
                                _ban.splice(banNumber, 1);

                        fs.writeFileSync('../Database/bot/banned.json', JSON.stringify(_ban))

                        for(let banindex in _banReasons)
                            if(_banReasons[banindex].phoneNumber == args[1] + '@c.us') 
                                _banReasons.splice(banindex, 1);

                        fs.writeFileSync('../Database/bot/banned_reasons.json', JSON.stringify(_banReasons))
                        
                        //await SOVIET.reply(from, ind.doneOwner(), id)
                        await SOVIET.contactUnblock(args[1] + '@c.us');
                        await SOVIET.reply(from, args[1] + ' ban got removed!', id)

                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'eval':
            case prefix+'ev':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                if (!q) return await SOVIET.reply(from, ind.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await SOVIET.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await SOVIET.reply(from, err, id)
                }
            break
            case prefix+'premium':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let prem of mentionedJidList) {
                            if (prem === botNumber) return await SOVIET.reply(from, ind.wrongFormat(), id)
                            premium.addPremiumUser(prem, args[2], _premium)
                            await SOVIET.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${prem}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await SOVIET.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await SOVIET.reply(from, ind.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('../Database/bot/premium.json', JSON.stringify(_premium))
                        await SOVIET.reply(from, ind.doneOwner(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('../Database/bot/premium.json', JSON.stringify(_premium))
                        await SOVIET.reply(from, ind.doneOwner(), id)
                    }
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'mute':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(pushname), id)
                if (!isGroupMsg) return await SOVIET.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await SOVIET.reply(from, ind.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isMute) return await SOVIET.reply(from, ind.muteChatOnAlready(), id)
                    _mute.push(groupId)
                    fs.writeFileSync('../Database/bot/mute.json', JSON.stringify(_mute))
                    await SOVIET.reply(from, ind.muteChatOn(), id)
                } else if (ar[0] === 'disable') {
                    _mute.splice(groupId, 1)
                    fs.writeFileSync('../Database/bot/mute.json', JSON.stringify(_mute))
                    await SOVIET.reply(from, ind.muteChatOff(), id)
                } else {
                    await SOVIET.reply(from, ind.wrongFormat(), id)
                }
            break
            case prefix+'setname':
                if (!isOwner) return await SOVIET.reply(from, ind.ownerOnly(), id)
                if (!q || q.length > 25) return await SOVIET.reply(from, ind.wrongFormat(), id)
                await SOVIET.setMyName(q)
                await SOVIET.reply(from, ind.nameChanged(q), id)
            break
            case prefix+'grouplist':
                if (!isRegistered) return await SOVIET.reply(from, ind.notRegistered(), id)
                const getGroups = await SOVIET.getAllGroups()
                let txtGc = '*── 「 GROUP LIST 」 ──*\n'
                for (let i = 0; i < getGroups.length; i++) {
                    txtGc += `\n\n❏ *Name*: ${getGroups[i].name}\n❏ *Unread messages*: ${getGroups[i].unreadCount} messages`
                }
                await SOVIET.sendText(from, txtGc)
            break
            default:
                if (isCmd) {
                    await SOVIET.reply(from, ind.cmdNotFound(command), id)
                }
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
/********** END OF MESSAGE HANDLER **********/
