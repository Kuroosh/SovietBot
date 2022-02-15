/* eslint-disable quotes */
import prefix from '../../../config.js';


export let wait = () => {
    return `Please wait a moment~`
}

export let ok = () => {
    return `Ok Kuroosh~`
}

export let wrongFormat = () => {
    return `Incorrect format! Please check the usage in *${prefix.prefix}menu*.`
}

export let emptyMess = () => {
    return `Please enter the message!`
}

export let cmdNotFound = (cmd) => {
    return `Command *${prefix.prefix}${cmd}* not found!`
}

export let blocked = (ownerNumber) => {
    return `Bot not receiving calls. You have been blocked because breaking the rules!\n\nContact the owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

export let ownerOnly = () => {
    return `This command only Owner-Kuroosh can use!`
}

export let doneOwner = () => {
    return `Done, Owner-Kuroosh~`
}

export let groupOnly = () => {
    return `This command can only be used in group!`
}

export let adminOnly = () => {
    return `This command can only be used by group admins!`
}

export let notNsfw = () => {
    return `NSFW command hasn't been enabled!`
}

export let nsfwOn = () => {
    return `NSFW command was successfully *enabled*!`
}

export let nsfwOff = () => {
    return `NSFW command was successfully *disabled*!`
}

export let nsfwAlready = () => {
    return `NSFW command was successfully enabled before.`
}

export let addedGroup = (chat) => {
    return `Thank you for inviting me, members of *${chat.contact.name}*!\n\nPlease register by typing:\n*${prefix.prefix}register* name | age`
}

export let nhFalse = () => {
    return `Invalid code!`
}

export let listBlock = (blockNumber) => {
    return `
*── 「 HALL OF SHAME 」 ──*

Total blocked: *${blockNumber.length}* user(s)\n
    `
}

export let notPremium = () => {
    return `Sorry! This command can only be used by premium users.`
}

export let notAdmin = () => {
    return `The user is not an admin!`
}

export let adminAlready = () => {
    return `Cannot promote a user who is an admin already!`
}

export let botNotPremium = () => {
    return `This bot does not support premium commands. Please contact the owner of this bot.`
}

export let botNotAdmin = () => {
    return `Make the bot as admin first!`
}

export let ytFound = (res) => {
    return `
*── 「 YOUTUBE 」 ──*

Video has been found!
➸ *Title*: ${res.title}
➸ *Description*:
${res.desc}
➸ *Duration*: ${res.duration}
    
Media is being send, please wait...
    `
}

export let notRegistered = () => {
    return `You haven't registered in our database!\n\nPlease register by typing:\n${prefix.prefix}register name | age`
}

export let registered = (name, age, userId, time, serial) => {
    return `
*── 「 REGISTRATION 」 ──*
    
Your account has been created with data below:
➸ *Name*: ${name}
➸ *Age*: ${age}
➸ *ID*: ${userId}
➸ *Registered time*: ${time}
➸ *Serial*: ${serial}
    
Note:
Don't share your *serial* to anyone!
    
Type *${prefix.prefix}rules* first ok~
    `
}

export let registeredAlready = () => {
    return `You've registered before.`
}

export let received = (pushname) => {
    return `Hello ${pushname}!\nThank you for reporting, we will work on it ASAP.`
}

export let daily = (time) => {
    return `Sorry, but you have reached the limit using this commands.\nPlease wait *${time.hours}* hour(s) *${time.minutes}* minute(s) *${time.seconds}* second(s) more.`
}


export let musiclimit = () => {
    return `The Music size is too large!`
}

export let videoLimit = () => {
    return `The video size is too large!`
}

export let joox = (result) => {
    return `
*── 「 JOOX 」 ──*

Song has been found!
➸ *Artist*: ${result[0].penyanyi}
➸ *Title*: ${result[0].judul}
➸ *Album*: ${result[0].album}
➸ *Ext*: ${result[0].ext}
➸ *Size*: ${result[0].filesize}
➸ *Duration*: ${result[0].duration}
    
Media is being send, please wait...
    `
}

export let gsm = (result) => {
    return `
*── 「 GSMARENA 」 ──*

➸ *Model*: ${result.title}
➸ *Spesification*: ${result.spec}
    `
}

export let receipt = (result) => {
    return `
*${result.title}*

${result.desc}

➸ *Ingredients*: ${result.bahan}
➸ *Steps*:
${result.cara}
    `
}

export let ytResult = (urlyt, title, channel, duration, views) => {
    return `
*── 「 YOUTUBE 」 ──*

➸ *Title*: ${title}
➸ *Channel*: ${channel}
➸ *Duration*: ${duration}
➸ *Views*: ${views}
➸ *Link*: ${urlyt}
    `
}

export let profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `
*── 「 USER INFO」 ──*

➸ *Username*: ${username}
➸ *Status*: ${status}
➸ *Premium*: ${premi}
➸ *Banned*: ${benet}
➸ *Admin*: ${adm}

=_=_=_=_=_=_=_=_=_=_=_=_=

*── 「 PROGRESS 」 ──*

➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
    `
}

export let detectorOn = (name, formattedTitle) => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

Attention for all *${(name || formattedTitle)}* members.
This group has an anti-group link detector, if one of you sending a group link then you'll be kicked immediately.

Thank you for your attention.
- Admin *${(name || formattedTitle)}*
    `
}

export let detectorOff = () => {
    return `Anti-group link feature was successfully *disabled*!`
}

export let detectorOnAlready = () => {
    return `Anti-group link feature has been enabled before.`
}

export let antiNsfwOn = (name, formattedTitle) => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Attention for all *${(name || formattedTitle)}* members.
This group has an anti-NSFW link detector, if one of you sending a NSFW link then you'll be kicked immediately.

Thank you for your attention.
- Admin *${(name || formattedTitle)}*
    `
}

export let antiNsfwOff = () => {
    return `Anti-NSFW link feature was successfully *disabled*!`
}

export let antiNsfwOnAlready = () => {
    return `Anti-NSFW link feature has been enabled before.`
}

export let linkDetected = () => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

You've sent a group link!
Sorry, but you have to leave...
    `
}

export let levelingOn = () => {
    return `Leveling feature was successfully *enabled*!`
}

export let levelingOff = () => {
    return `Leveling feature was successfully *disabled*!`
}

export let levelingOnAlready = () => {
    return `Leveling feature has been enabled before.`
}

export let levelingNotOn = () => {
    return `Leveling feature hasn't been enabled!`
}

export let levelNull = () => {
    return `You don't have any level yet!`
}

export let welcome = (event) => {
    return `Welcome @${event.who.replace('@c.us', '')}!`
}

export let welcomeOn = () => {
    return `Welcome feature was successfully *enabled*!`
}

export let welcomeOff = () => {
    return `Welcome feature was successfully *disabled*!`
}

export let welcomeOnAlready = () => {
    return `Welcome feature has been enabled before.`
}

export let minimalDb = () => {
    return `Need at least *10* users that have a level in database!`
}

export let autoStikOn = () => {
    return `Auto-sticker feature was successfully *enabled*!`
}

export let autoStikOff = () => {
    return `Auto-sticker feature was successfully *enabled*!`
}

export let autoStikOnAlready = () => {
    return `Auto-sticker feature has been enabled before.`
}

export let afkOn = (pushname, reason) => {
    return `
*── 「 AFK MODE 」 ──*
    
AFK feature has been successfully *enabled*!
➸ *Username*: ${pushname}
➸ *Reason*: ${reason}
    `
}

export let afkOnAlready = () => {
    return `AFK feature has been enabled before.`
}

export let afkMentioned = (getReason, getTime) => {
    return `
*── 「 AFK MODE 」 ──*

Sssttt! This person in currently AFK, don't bother!
➸ *Reason*: ${getReason}
➸ *Since*: ${getTime}
    `
}

export let afkDone = (pushname) => {
    return `*${pushname}* is back from AFK, welcome~`
}

export let gcMute = () => {
    return `
*── 「 MUTED 」 ──*
    
Only admins who can send message in this group.
    `
}

export let gcUnmute = () => {
    return `
*── 「 UNMUTED 」 ──*

All members can send message in this group now.
    `
}

export let notNum = (q) => {
    return `"${q}", are not a numbers!`
}

export let playstore = (app_id, title, developer, description, price, free) => {
    return `
*── 「 PLAY STORE 」 ──*
    
➸ *Name*: ${title}
➸ *ID*: ${app_id}
➸ *Developer*: ${developer}
➸ *Free*: ${free}
➸ *Price*: ${price}
➸ *Description*: ${description}
    `
}

export let shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `
*── 「 SHOPEE 」 ──*

➸ *Name*: ${nama}
➸ *Price*: ${harga}
➸ *Sold*: ${terjual}
➸ *Location*: ${shop_location}
➸ *Product link*: ${link_product}
➸ *Description*: ${description}
    `
}

export let registeredFound = (name, age, time, serial, userId) => {
    return `
*── 「 REGISTERED 」 ──* 

Account has been found!
➸ *Name*: ${name}
➸ *Age*: ${age}
➸ *ID*: ${userId}
➸ *Registered time*: ${time}
➸ *Serial*: ${serial}
    `
}

export let registeredNotFound = (serial) => {
    return `Account with serial: *${serial}* not found!`
}

export let ytPlay = (result) => {
    return `
*── 「 PLAY 」 ──*

➸ *Title*: ${result.title}
➸ *Duration*: ${result.duration}
➸ *Link*: ${result.url}

Media is being send, please wait...
    `
}

export let pcOnly = () => {
    return `This command can only be used in private chat!`
}

export let linkNsfw = () => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

You've sent a group link!
Sorry, but you have to leave...
    `
}

export let ageOld = () => {
    return `You're too old for using this feature! Please go back to your youth to be able to using this feature.`
}

export let menuText = () => {
    return `
╔══❉ *𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 (VF)* ❉═══
║
║ For spaces, use *+*
║ Example: ${prefix.prefix}text1 neon good+morning
║
╟⊱ *${prefix.prefix}text1 burnpaper* _text_
╟⊱ *${prefix.prefix}text1 candlemug* _text_
╟⊱ *${prefix.prefix}text1 lovemsg* _text_
╟⊱ *${prefix.prefix}text1 mugflower* _text_
╟⊱ *${prefix.prefix}text1 narutobanner* _text_
╟⊱ *${prefix.prefix}text1 paperonglass* _text_
╟⊱ *${prefix.prefix}text1 romancetext* _text_
╟⊱ *${prefix.prefix}text1 shadowtext* _text_
╟⊱ *${prefix.prefix}text1 tiktokeffect* _text_
║
╚══❉ *SOVIETBot* ❉════
    `
}

export let fakeLink = () => {
    return `Ow, this link looks kinda suspicious, for the security of the members of this group I'm gonna kick you.\nBye~.`
}

export let muteChatOn = () => {
    return `Successfully *mute* bot for this group!`
}

export let muteChatOff = () => {
    return `Successfully *unmute* bot for this group!`
}

export let muteChatOnAlready = () => {
    return `Bot is already muted in this group!`
}

export let randomQuran = (ranquran) => {
    return `
*── 「 AL-QUR'AN 」 ──*

*Surah name*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Meaning*: ${ranquran.data.result.arti}
*Number*: ${ranquran.data.result.nomor}
*Description*: ${ranquran.data.result.keterangan}
*Audio link*: ${ranquran.data.result.audio}
    `
}

export let hadis = () => {
    return `
*── 「 HADIS 」 ──*

List of hadees:
1. Bukhari hadees has 6638 hadees
    _usage_: ${prefix.prefix}hadees bukhari 1
2. Muslim hadees has 4930 hadees
    _usage_: ${prefix.prefix}hadees muslim 25
3. Tirmidzi hadees has 3625 hadees
    _usage_: ${prefix.prefix}hadees tirmidzi 10
4. Nasai hadees has 5364 hadees
    _usage_: ${prefix.prefix}hadees nasai 6
5. Ahmad hadees 4305 hadees
    _usage_: ${prefix.prefix}hadees ahmad 5
6. Abu Daud hadees 4419 hadees
    _usage_: ${prefix.prefix}hadees abudaud 45
7. Malik hadees 1587 hadees
    _usage_: ${prefix.prefix}hadees malik 45
8. Ibnu Majah hadees 4285 hadees
    _usage_: ${prefix.prefix}hadees ibnumajah 8
9. Darimi hadees 2949 hadees
    _usage_: ${prefix.prefix}hadees darimi 3
    `
}

export let limit = () => {
    return `
*── 「 LIMIT 」 ──*

You ran out of usage limit! Please do the following:
❏ *_Wait until 12:00 AM (GMT+7)_*
    `
}

export let asmaulHusna = (assna) => {
    return `
*── 「 ASMAUL HUSNA 」 ──*

*${assna.name}*
❏ *Number*: ${assna.number}
❏ *Transliteration*: ${assna.transliteration}
❏ *English*: ${assna.en.meaning}
    `
}

export let stickerDel = () => {
    return `Sticker has been deleted from database!`
}

export let stickerAdd = () => {
    return `Sticker has been added to database!`
}

export let stickerAddAlready = (q) => {
    return `Sticker with keyword "${q}" is already in database!`
}

export let stickerNotFound = () => {
    return `Sticker not found!`
}

export let reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 REMINDER 」 ──*
    
Reminder has been set!
➸ *Message*: ${messRemind}
➸ *Duration*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *For*: @${sender.id.replace('@c.us', '')}
    `
}

export let reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Message*: ${messRemind}`
}

export let nameChanged = (q) => {
    return `Username has been changed to *${q}*`
}

export let menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*── 「 WELCOME 」 ──*

======================
➸ *Name*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Role*: ${role}
➸ *Premium*: ${premium}
======================

Total registered: *${jumlahUser}*

The following menus are available:

*[1]* Downloader
*[2]* Bot
*[3]* Misc
*[4]* Sticker
*[5]* Weeaboo
*[6]* Fun
*[7]* Moderation
*[8]* NSFW
*[9]* Owner
*[10]* Leveling

Type *${prefix.prefix}menu* index_number to open the selected page menu.

Note:
Treat the bot well, dev will act firmly if the user violates the rules.
This bot has anti-spam in the form of a cooldown command for *5 seconds* every time you use it.
    `
}

export let menuDownloader = () => {
    return `
*── 「 DOWNLOADER 」 ──*

1. *${prefix.prefix}facebook*
Download Facebook video.
Aliases: *fb*
Usage: *${prefix.prefix}facebook* video_link

2. *${prefix.prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix.prefix}ytmp3* link

3. *${prefix.prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix.prefix}ytmp4* link

4. *${prefix.prefix}joox*
Download music from Joox.
Aliases: -
Usage: *${prefix.prefix}joox* song's_title

5. *${prefix.prefix}tiktok*
Downlaod TikTok video.
Aliases: -
Usage: *${prefix.prefix}tiktok* link

6. *${prefix.prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix.prefix}twiter* link

7. *${prefix.prefix}tiktokpic*
Download TikTok profile pic.
Aliases: -
Usage: *${prefix.prefix}tiktokpic* username

8. *${prefix.prefix}tiktoknowm*
Download TikTok video with no WM.
Aliases: *tktnowm*
Usage: *${prefix.prefix}tiktoknowm* link

9. *${prefix.prefix}moddroid*
Search for mod on moddroid.
Aliases: -
Usage: *${prefix.prefix}moddroid* APK_name

10. *${prefix.prefix}happymod*
Search for mod on happymod.
Aliases: -
Usage: *${prefix.prefix}happymod* APK_name

11. *${prefix.prefix}linedl*
Line sticker downloader.
Aliases: -
Usage: *${prefix.prefix}linedl* sticker_link

_Index of [1]_
    `
}

export let menuBot = () => {
    return `
*── 「 BOT 」 ──*

1. *${prefix.prefix}rules*
Must read.
Aliases: *rule*
Usage: *${prefix.prefix}rules*

2. *${prefix.prefix}menu*
Displays available commands.
Aliases: -
Usage: *${prefix.prefix}menu* index_number

3. *${prefix.prefix}status*
Displays bot status.
Aliases: *stats*
Usage: *${prefix.prefix}status*

4. *${prefix.prefix}listblock*
Check blocked numbers.
Aliases: -
Usage: *${prefix.prefix}listblock*

5. *${prefix.prefix}ping*
Check the bot speed.
Aliases: *p*
Usage: *${prefix.prefix}ping*

6. *${prefix.prefix}delete*
Delete messages from bots.
Aliases: *del*
Usage: Reply to deleted messages with a caption *${prefix.prefix}delete*.

7. *${prefix.prefix}report*
Report bugs to dev.
Aliases: -
Usage: *${prefix.prefix}report* text

8. *${prefix.prefix}tos*
Terms of service.
Aliases: -
Usage: *${prefix.prefix}tos*

9. *${prefix.prefix}join*
Join to group via link.
Aliases: -
Usage: *${prefix.prefix}join* group's_link

10. *${prefix.prefix}ownerbot*
Send owner contact.
Aliases: -
Usage: *${prefix.prefix}ownerbot*

11. *${prefix.prefix}getpic*
Send user's profile pic.
Aliases: -
Usage: *${prefix.prefix}getpic* @user/62812xxxxxxxx

12. *${prefix.prefix}premiumcheck*
Premium active time check.
Aliases: *cekpremium*
Usage: *${prefix.prefix}premiumcheck*

13. *${prefix.prefix}premiumlist*
Premium users list.
Aliases: *listpremium*
Usage: *${prefix.prefix}premiumlist*

14. *${prefix.prefix}limit*
Check your remainings limit.
Aliases: -
Usage: *${prefix.prefix}limit*

_Index of [2]_
    `
}

export let menuMisc = () => {
    return `
*── 「 MISC 」 ──*

1. *${prefix.prefix}say*
The bot will repeat your message.
Aliases: -
Usage: *${prefix.prefix}say* text

2. *${prefix.prefix}lyric*
Search for song lyrics.
Aliases: -
Usage: *${prefix.prefix}lyric* song's_title

3. *${prefix.prefix}shortlink*
Create a shortlink.
Aliases: -
Usage: *${prefix.prefix}shortlink* link

4. *${prefix.prefix}wikien*
Send Wikipedia from the given text.
Aliases: -
Usage: *${prefix.prefix}wikien* query

5. *${prefix.prefix}kbbi*
Send word definitions from KBBI.
Aliases: -
Usage: *${prefix.prefix}kbbi* text

6. *${prefix.prefix}igstalk*
Stalk Instagram account.
Aliases: -
Usage: *${prefix.prefix}igstalk* ig_username

7. *${prefix.prefix}gsmarena*
Sending phone info from GSMArena.
Aliases: -
Usage: *${prefix.prefix}gsmarena* phone's_model

8. *${prefix.prefix}receipt*
Sending food receipt.
Aliases: *resep*
Usage: *${prefix.prefix}receipt* food's_name

9. *${prefix.prefix}ytsearch*
Sending YouTube search results.
Aliases: *yts*
Usage: *${prefix.prefix}ytsearch* query

10. *${prefix.prefix}tts*
Create a Text to Speech. You need a language code, you can find it here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
Aliases: -
Usage: *${prefix.prefix}tts* language_code | text

11. *${prefix.prefix}afk*
Set your account to AFK mode, I will them who mentioned you.
Aliases: -
Usage: *${prefix.prefix}afk* reason. Send any message to group to disable.

12. *${prefix.prefix}distance*
Sending city distance information.
Aliases: -
Usage: *${prefix.prefix}distance* from | to

13. *${prefix.prefix}findsticker*
Search sticker.
Aliases: *findstiker*
Usage: *${prefix.prefix}findsticker* text

14. *${prefix.prefix}math*
A calculator.
* = multiplication
+ = addition
- = subtraction
/ = division
Aliases: -
Usage: *${prefix.prefix}math* 12*12

15. *${prefix.prefix}listsurah*
Sending Al-Qur'an list.
Aliases: -
Usage: *${prefix.prefix}listsurah*

16. *${prefix.prefix}surah*
Sending surah.
Aliases: -
Usage: *${prefix.prefix}surah* surah_number

17. *${prefix.prefix}js*
Get sholat schedule.
Aliases: - 
Usage: *${prefix.prefix}js* area

18. *${prefix.prefix}mutual*
Get random contact.
Aliases: -
Usage: *${prefix.prefix}mutual*

19. *${prefix.prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix.prefix}whois* ip_address

20. *${prefix.prefix}play*
Play audio from YouTube.
Aliases: - 
Usage: *${prefix.prefix}play* title

21. *${prefix.prefix}sms*
Send SMS as anonymous. (SMS gateway)
Aliases: -
Usage: *${prefix.prefix}sms* message | number

22. *${prefix.prefix}toxic*
Random toxic. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}toxic*

23. *${prefix.prefix}tafsir*
Al-Qur'an tafsir. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}tafsir* surah_name ayat

24. *${prefix.prefix}motivasi*
Motivation text. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}motivasi*

25. *${prefix.prefix}linesticker*
Latest Line sticker.
Aliases: *linestiker*
Usage: *${prefix.prefix}linesticker*

26. *${prefix.prefix}alkitab*
Bible search. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}* gospel_name

27. *${prefix.prefix}cekongkir*
Postal fee check. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}ongkir* service_name | from | to

28. *${prefix.prefix}movie*
Search for movies.
Aliases: -
Usage: *${prefix.prefix}movie* title

28. *${prefix.prefix}reminder*
Reminder. 
*s* - seconds
*m* - minutes
*h* - hours
*d* - days
Aliases: -
Usage: *${prefix.prefix}reminder* 10s | reminder_message

29. *${prefix.prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Send images with caption *${prefix.prefix}imagetourl* or reply to the image with a caption *${prefix.prefix}imagetourl*.

30. *${prefix.prefix}infohoax*
Hoax info update.
Aliases: -
Usage: *${prefix.prefix}infohoax*

31. *${prefix.prefix}trending*
Twitter trendings.
Aliases: -
Usage: *${prefix.prefix}trending*

32. *${prefix.prefix}jobseek*
Job seeker in Indonesia only.
Aliases: -
Usage: *${prefix.prefix}jobseek*

33. *${prefix.prefix}spamcall*
Spam call.
Aliases: -
Usage: *${prefix.prefix}spamcall* 812xxxxxxxx

34. *${prefix.prefix}spamsms*
Spam SMS.
Aliases: -
Usage: *${prefix.prefix}spamsms* 0812xxxxxxxx amount

35. *${prefix.prefix}email*
Send an email.
Aliases: -
Usage: *${prefix.prefix}email* email | subject | message

36. *${prefix.prefix}quotes*
Random Indonesian quotes.
Aliases: -
Usage: *${prefix.prefix}quotes*

37. *${prefix.prefix}genshininfo*
Genshin Impact characters info.
Aliases: *genshin*
Usage: *${prefix.prefix}genshininfo* chara_name

38. *${prefix.prefix}translate*
Translate a text.
Aliases: *trans*
Usage: *${prefix.prefix}translate* text | code_lang

39. *${prefix.prefix}hadees*
Hadees info.
Aliases: *hadis*
Usage: *${prefix.prefix}hadees* hadees_name | hadees_number

40. *${prefix.prefix}asmaulhusna*
Asmaul husna.
Aliases: -
Usage: *${prefix.prefix}asmaulhusna* asmaulhusna_number

41. *${prefix.prefix}randomquran*
Random Al-Qur'an surah.
Aliases: -
Usage: *${prefix.prefix}randomquran*

42. *${prefix.prefix}coronavirus*
Check a COVID-19 cases.
Aliases: *corona*
Usage: *${prefix.prefix}coronavirus* nation_name

43. *${prefix.prefix}tomp3*
Convert a video to audio only (MP3).
Aliases: -
Usage: Send a video with caption *${prefix.prefix}tomp3* or reply video with a caption *${prefix.prefix}tomp3*.

44. *${prefix.prefix}ttp*
Text to sticker.
Aliases: -
UsageL *${prefix.prefix}ttp* text

45. *${prefix.prefix}bass*
Bass boost.
Aliases: -
Usage: Reply audio/voice with caption *${prefix.prefix}bass* dB_level.

46. *${prefix.prefix}addsticker*
Add sticker to database.
Aliases: *addstiker*
Usage: Reply sticker with caption *${prefix.prefix}addsticker* sticker_keyword.

47. *${prefix.prefix}delsticker*
Delete sticker from database.
Aliases: *delstiker*
Usage: *${prefix.prefix}delstiker* sticker_keyword

48. *${prefix.prefix}stickerlist*
List of added stickers.
Aliases: *liststicker stikerlist liststiker*
Usage: *${prefix.prefix}stickerlist*

49. *${prefix.prefix}nightcore*
Create a nightcore effect.
Aliases: -
Usage: Reply audio/voice with caption *${prefix.prefix}nightcore*.

50. *${prefix.prefix}ocr*
Scan text from image.
Aliases: -
Usage: Send images with caption *${prefix.prefix}ocr* or reply to the images/stickers with a caption *${prefix.prefix}ocr*.

_Index of [3]_
    `
}

export let menuSticker = () => {
    return `
*── 「 STICKER 」 ──*

1. *${prefix.prefix}sticker*
Create stickers from images sent or replied.
Aliases: *stiker*
Usage: Send images with caption *${prefix.prefix}sticker* or reply to the images with a caption *${prefix.prefix}sticker*.

2. *${prefix.prefix}stickergif*
Create stickers from videos/GIFs.
Aliases: *stikergif*
Usage: Send videos/GIFs with caption *${prefix.prefix}stickergif* or reply to the videos/GIFs with a caption *${prefix.prefix}stickergif*.

3. *${prefix.prefix}ttg*
Create text to GIF stickers.
Aliases: -
Usage: *${prefix.prefix}ttg* text

4. *${prefix.prefix}stickertoimg*
Convert sticker to image.
Aliases: *stikertoimg*
Usage: Reply to the stickers with a caption *${prefix.prefix}stickertoimg*.

5. *${prefix.prefix}emojisticker*
Convert emoji to sticker.
Aliases: *emojistiker*
Usage: *${prefix.prefix}emojisticker* emoji

6. *${prefix.prefix}stickerwm*
Create a sticker with metadata/WM.
Aliases: *stcwm*
Usage: Send images with caption *${prefix.prefix}stickerwm* pack_name | author_name or reply to the image with a caption *${prefix.prefix}stickerwm* pack_name | author_name.

7. *${prefix.prefix}stickermeme*
Create a sticker meme.
Aliases: *stcmeme*
Usage: Send images with caption *${prefix.prefix}sticker* upper_text | bottom_text or reply to the images with a caption *${prefix.prefix}sticker* upper_text | bottom_text.

8. *${prefix.prefix}takestick*
Edit sticker metadata.
Aliases: -
Usage: Reply to the stickers with a caption *${prefix.prefix}takestick* pack_name | author_name

_Index of [4]_
    `
}

export let menuWeeaboo = () => {
    return `
*── 「 WEEABOO 」 ──*

1. *${prefix.prefix}neko*
Send a neko girl photo.
Aliases: -
Usage: *${prefix.prefix}neko*

2. *${prefix.prefix}wallpaper*
Send anime wallpapers.
Aliases: *wp*
Usage: *${prefix.prefix}wallpaper*

3. *${prefix.prefix}kemono*
Send kemonomimi girl photos.
Aliases: -
Usage: *${prefix.prefix}kemono*

4. *${prefix.prefix}kusonime*
Look for anime info and batch download links on Kusonime.
Aliases: -
Usage: *${prefix.prefix}kusonime* anime's_title

5. *${prefix.prefix}komiku*
Looking for manga info and download links on Komiku.
Aliases: -
Usage: *${prefix.prefix}komiku* manga's_title

6. *${prefix.prefix}wait*
Search anime source from the screenshots scene.
Aliases: -
Usage: Send screenshots with caption *${prefix.prefix}wait* or reply to the screenshots with a caption *${prefix.prefix}wait*.

7. *${prefix.prefix}source*
Look for sources from the doujin panel, illustrations, and images related to anime.
Aliases: *sauce*
Usage: Send images with caption *${prefix.prefix}source* or reply to the images with a caption *${prefix.prefix}source*.

8. *${prefix.prefix}waifu*
Send random waifu photos.
Aliases: -
Usage: *${prefix.prefix}waifu*

9. *${prefix.prefix}anitoki*
Anitoki fansub latest update.
Aliases: -
Usage: *${prefix.prefix}anitoki*

10. *${prefix.prefix}neonime*
Neonime fansub latest update.
Aliases: -
Usage: *${prefix.prefix}neonime*

11. *${prefix.prefix}anoboy*
On-going anime on Anoboy fansub.
Aliases: -
Usage: *${prefix.prefix}anoboy*

12. *${prefix.prefix}character*
Find Character from anime.
Alias: -
Usage: *${prefix.prefix}character* name_character

13. *${prefix.prefix}lolivid*
Random loli video.
Aliases: -
Usage: *${prefix.prefix}lolivid

_Index of [5]_
    `
}

export let menuFun = () => {
    return `
*── 「 FUN 」 ──*

1. *${prefix.prefix}hartatahta*
Make a picture of the "Harta Tahta Nama".
Aliases: -
Usage: *${prefix.prefix}hartatahta* name

2. *${prefix.prefix}partner*
Weton match. (Indonesian)
Aliases: *pasangan*
Usage: *${prefix.prefix}partner* name | partner

3. *${prefix.prefix}zodiac*
Weekly zodiac fortune. (Indonesian)
Aliases: *zodiak*
Usage: *${prefix.prefix}zodiac* zodiac

4. *${prefix.prefix}write*
Make notes written in a book.
Aliases: *nulis*
Usage: *${prefix.prefix}write* text

5. *${prefix.prefix}glitchtext*
Create a glitch styled text.
Aliases: *glitext*
Usage: *${prefix.prefix}glitchtext* text1 | text2

6. *${prefix.prefix}simi*
SimiSimi chat. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}simi* text

7. *${prefix.prefix}blackpink*
Create a Blackpink logo styled text.
Aliases: -
Usage: *${prefix.prefix}blackpink* text

8. *${prefix.prefix}phmaker*
Create a Pornhub logo styled text.
Aliases: -
Usage: *${prefix.prefix}phmaker* left_text | right_text

9. *${prefix.prefix}galaxy*
Create a galaxy styled text.
Aliases: -
Usage: *${prefix.prefix}galaxy* text

10. *${prefix.prefix}tod*
Play truth or dare. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}tod*

11. *${prefix.prefix}weton*
Weton fortune. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}weton* date | month | year

12. *${prefix.prefix}triggered*
Apply a triggered effect to image.
Aliases: -
Usage: Send image with caption *${prefix.prefix}triggered* or reply to someone message with caption *${prefix.prefix}triggered* or you can directly use *${prefix.prefix}triggered*.

13. *${prefix.prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Send image with caption *${prefix.prefix}kiss* or reply image with caption *${prefix.prefix}kiss*.

14. *${prefix.prefix}asupan*
Daily dose of TikTok.
Aliases: -
Usage: *${prefix.prefix}asupan*

15. *${prefix.prefix}citacita*
Cita-cita meme. (Indonesian)
Aliases: -
Usage: *${prefix.prefix}citacita*

16. *${prefix.prefix}phcomment*
Create a Pornhub comment section styled image.
Aliases: -
Usage: *${prefix.prefix}phcomment* username | text

17. *${prefix.prefix}ffbanner*
Create a Free Fire banner.
Aliases: -
Usage: *${prefix.prefix}ffbanner* text1 | text2

18. *${prefix.prefix}fflogo*
Create a Free Fire characters logo.
Aliases: -
Usage: *${prefix.prefix}fflogo* text1 | text2

19. *${prefix.prefix}neontext*
Create a neon text image
Aliases: *neon*
Usage: *${prefix.prefix}neontext* up | center | bottom

20. *${prefix.prefix}firemaker*
Create a fire text.
Aliases: -
Usage: *${prefix.prefix}firemaker* text

21. *${prefix.prefix}mlmaker*
Create ML hero image with text.
Aliases: -
Usage: *${prefix.prefix}mlmaker* hero_name | text

22. *${prefix.prefix}balloonmaker*
Create a couple balloon image.
Aliases: *blmaker*
Usage: *${prefix.prefix}balloonmaker* name1 | name2

23. *${prefix.prefix}sliding*
Create a sliding text.
Aliases: -
Usage: *${prefix.prefix}sliding* text

24. *${prefix.prefix}wasted*
Create a wasted effect.
Aliases: -
Usage: Send image with caption *${prefix.prefix}wasted* or reply image with caption *${prefix.prefix}wasted*.

25. *${prefix.prefix}caklontong*
Cak Lontong quiz.
Aliases: -
Usage: *${prefix.prefix}caklontong*

26. *${prefix.prefix}hilih*
Hilih-ify your text.
Aliases: -
Usage: *${prefix.prefix}hilih* text.

27. *${prefix.prefix}tebakgambar*
Tebak Gambar quiz.
Aliases: -
Usage: *${prefix.prefix}tebakgambar*

_Index of [6]_
    `
}

export let menuModeration = () => {
    return `
*── 「 MODERATION 」 ──*

1. *${prefix.prefix}add*
Add users to group.
Aliases: -
Usage: *${prefix.prefix}add* 628xxxxxxxxxx

2. *${prefix.prefix}kick*
Remove members from the group.
Aliases: -
Usage: *${prefix.prefix}kick* @member1

3. *${prefix.prefix}promote*
Promote member to become admin.
Aliases: -
Usage: *${prefix.prefix}promote* @member1

4. *${prefix.prefix}demote*
Demote member from admin.
Aliases: -
Usage: *${prefix.prefix}demote* @member1

5. *${prefix.prefix}leave*
Leave bot from group.
Aliases: -
Usage: *${prefix.prefix}leave*

6. *${prefix.prefix}everyone*
Mention all group members.
Aliases: -
Usage: *${prefix.prefix}everyone*

7. *${prefix.prefix}nsfw*
Toogle NSFW mode.
Aliases: -
Usage: *${prefix.prefix}nsfw* enable/disable

8. *${prefix.prefix}groupicon*
Change group icon.
Aliases: -
Usage: Send images with caption *${prefix.prefix}groupicon* or reply to the images with a caption *${prefix.prefix}groupicon*.

9. *${prefix.prefix}antilink*
Toogle anti-group link feature.
Aliases: -
Usage: *${prefix.prefix}antilink* enable/disable

10. *${prefix.prefix}welcome*
Toogle welcome feature.
Aliases: -
Usage: *${prefix.prefix}welcome* enable/disable

11. *${prefix.prefix}autosticker*
Toogle auto-sticker feature. Every sended image will made into a sticker.
Aliases: *autostiker autostik*
Usage: *${prefix.prefix}autostiker* enable/disable

12. *${prefix.prefix}antinsfw*
Toogle anti-NSFW link.
Aliases: -
Usage: *${prefix.prefix}antinsfw* enable/disable

13. *${prefix.prefix}mutegc*
Set group to admin only who can send a message.
Aliases: -
Usage: *${prefix.prefix}mutegc* enable/disable

14. *${prefix.prefix}grouplink*
Send a invite link of current group.
Aliases: -
Usage: *${prefix.prefix}grouplink*

15. *${prefix.prefix}revoke*
Revoke invite link of current group.
Aliases: -
Usage: *${prefix.prefix}revoke*

_Index of [7]_
    `
}

export let menuNsfw = () => {
    return `
*── 「 NSFW 」 ──*

1. *${prefix.prefix}lewds*
Send lewd anime pict.
Aliases: *lewd*
Usage: *${prefix.prefix}lewds*

2. *${prefix.prefix}multilewds*
Send up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix.prefix}multilewds*

3. *${prefix.prefix}nhentai*
Sending doujinshi info from nHentai.
Aliases: *nh*
Usage: *${prefix.prefix}nhentai* code

4. *${prefix.prefix}nhdl*
Download doujin from nHentai as a PDF file. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix.prefix}nhdl* code

5. *${prefix.prefix}nekopoi*
Send the latest video link Nekopoi.
Aliases: -
Usage: *${prefix.prefix}nekopoi*

6. *${prefix.prefix}multifetish*
Send up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix.prefix}multifetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

7. *${prefix.prefix}waifu18*
Send random NSFW waifu photos.
Aliases: -
Usage: *${prefix.prefix}waifu18*

8. *${prefix.prefix}fetish*
Send fetish pics.
Aliases: -
Usage: *${prefix.prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix.prefix}phdl*
Download videos from Pornhub.
Aliases: -
Usage *${prefix.prefix}phdl* link

10. *${prefix.prefix}yuri*
Send random yuri pics.
Aliases: -
Usage: *${prefix.prefix}yuri*

11. *${prefix.prefix}lewdavatar*
Send random lewd avatars.
Aliases: -
Usage: *${prefix.prefix}lewdavatar*

12. *${prefix.prefix}femdom*
Send random femdom pics.
Aliases: -
Usage: *${prefix.prefix}femdom*

13. *${prefix.prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix.prefix}nhsearch* query

14. *${prefix.prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix.prefix}nekosearch* query

15. *${prefix.prefix}cersex*
Random adult stories (Indonesian).
Aliases: -
Usage: *${prefix.prefix}cersex*

_Index of [8]_
    `
}

export let menuOwner = () => {
    return `
*── 「 OWNER 」 ──*

1. *${prefix.prefix}bc*
Make a broadcast.
Aliases: -
Usage: *${prefix.prefix}bc* text

2. *${prefix.prefix}clearall*
Deletes all chats on the bot account.
Aliases: -
Usage: *${prefix.prefix}clearall*

3. *${prefix.prefix}getses*
Take a screenshot of the session from the bot account.
Aliases: -
Usage: *${prefix.prefix}getses*

4. *${prefix.prefix}ban*
Add/remove banned users.
Aliases: -
Usage: *${prefix.prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix.prefix}leaveall*
Leave from all groups.
Aliases: -
Usage: *${prefix.prefix}leaveall*

6. *${prefix.prefix}eval*
Evaluate the JavaScript code.
Aliases: *ev*
Usage: *${prefix.prefix}eval*

7. *${prefix.prefix}shutdown*
Shutdown bot.
Aliases: -
Usage: *${prefix.prefix}shutdown*

8. *${prefix.prefix}premium*
Add/remove premium users.
Aliases: -
Usage: *${prefix.prefix}premium* add/del @user

9. *${prefix.prefix}setstatus*
Set about me.
Aliases: *setstatus setstat*
Usage: *${prefix.prefix}status* text

10. *${prefix.prefix}serial*
Check user's serial.
Aliases: -
Usage: *${prefix.prefix}serial* user_serial

11. *${prefix.prefix}exif*
Adjust your sticker WM.
Aliases: -
Usage: *${prefix.prefix}exif* pack_name | author_name

12. *${prefix.prefix}mute*
Mute all users.
Aliases: -
Usage: Use *${prefix.prefix}mute* to mute and use *${prefix.prefix}mute* once again to unmute.

13. *${prefix.prefix}setname*
Change bot's name. Maximum 25 characters.
Aliases: -
Usage: *${prefix.prefix}name* new_username

14. *${prefix.prefix}block*
Block user.
Aliases: *blok*
Usage: *${prefix.prefix}block* @user/62812xxxxxxxx

15. *${prefix.prefix}unblock*
Unblock user.
Aliases: *unblok*
Usage: *${prefix.prefix}unblock* @user/62812xxxxxxxx

_Index of [9]_
    `
}

export let menuLeveling = () => {
    return `
*── 「 LEVELING 」 ──*

1. *${prefix.prefix}level*
Check your level.
Aliases: -
Usage: *${prefix.prefix}level*

2. *${prefix.prefix}leaderboard*
Check leaderboard.
Aliaases: -
Usage: *${prefix.prefix}leaderboard*

_Index of [10]_
    `
}

export let rules = () => {
    return `
*── 「 RULES 」 ──*

1. Do NOT spam bot. 
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call bot.
Penalty: *SOFT BLOCK*

3. Do NOT exploit bots.
Penalty: *PERMANENT BLOCK*

If you've understand these rules, please type *${prefix.prefix}menu* to get started.
    `
}