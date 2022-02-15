import { fetchJson, fetchText } from '../tools/fetcher.js'
import * as config from '../config.js';
import * as moment from 'moment-timezone';
import * as needle from 'needle';

/**
 * Remove image background.
 * @param {string} query
 * @returns {Promise<object>}
 */
export let stickernobg = (query) => new Promise((resolve, reject) => {
    console.log('Converting sticker no bg...')
    fetchJson(`https://api.vhtear.com/removebgwithurl?link=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random quotes.
 * @returns {Promise<object>}
 */
export let quotes = () => new Promise((resolve, reject) => {
    console.log('Getting random quotes...')
    fetchJson('https://videfikri.com/api/randomquotes/')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending call.
 * @param {string} phoneNumber
 * @returns {Promise<object>}
 */
export let call = (phoneNumber) => new Promise((resolve, reject) => {
    console.log(`Calling number: ${phoneNumber}...`)
    fetchJson(`https://videfikri.com/api/call?nohp=${phoneNumber}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending email.
 * @param {string} emailTarget
 * @param {string} subjectEmail
 * @param {string} messageEmail
 * @returns {Promise<object>}
 */
export let email = (emailTarget, subjectEmail, messageEmail) => new Promise((resolve, reject) => {
    console.log(`Sending email to: ${emailTarget}\nSubject: ${subjectEmail}\nMessage: ${messageEmail}`)
    fetchJson(`https://videfikri.com/api/spamemail?email=${emailTarget}&subjek=${subjectEmail}&pesan=${messageEmail}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Search for IG story.
 * @param {string} query
 * @returns {Promise<object>}
 */
export let its = (query) => new Promise((resolve, reject) => {
    console.log('Searching for IG Story...')
    fetchJson(`https://api.vhtear.com/igstory?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Alkitab.
 * @param {string} query 
 * @returns {Promise<object>}
 */
export let alkitab = (query) => new Promise((resolve, reject) => {
    console.log('Searching for Alkitab info...')
    fetchJson(`https://docs-jojo.herokuapp.com/api/alkitabsearch?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get new Line sticker.
 * @returns {Promise<object>}
 */
export let linesticker = () => new Promise((resolve, reject) => {
    console.log('Get latest Line sticker...')
    fetchJson(`https://api.vhtear.com/newsticker?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get lyric from title or lyric of the song itself.
 * @param {string} query
 * @returns {Promise<object>}
 */
export let lirik = (query) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${query}...`)
    fetchJson(`https://api.vhtear.com/liriklagu?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Wikipedia result for Indonesian language from given query.
 * @param {string} query
 * @returns {Promise<object>}
 */
export let wiki = (query) => new Promise((resolve, reject) => {
    console.log(`Get result for ${query} in Wikipedia...`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/wiki?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Wikipedia result for English language from given query.
 * @param {string} query
 * @returns {Promise<object>}
 */
export let wikien = (query) => new Promise((resolve, reject) => {
    console.log(`Get result for ${query} in Wikipedia...`)
    fetchJson(`https://videfikri.com/api/wikieng?query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {string} word
 * @returns {Promise<object>}
 */
export let kbbi = (word) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${word} in KBBI...`)
    fetchJson(`https://api.vhtear.com/kbbi?query=${word}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get distance information.
 * @param {string} from
 * @param {string} to
 * @returns {Promise<object>}
 */
export let distance = (from, to) => new Promise((resolve, reject) => {
    console.log('Get data and calculate it...')
    fetchJson(`https://api.vhtear.com/distance?from=${from}&to=${to}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get latest earthquake info in Indonesia from BMKG (Badan Meteorologi Klimatologi dan Geofisika).
 * @returns {Promise<object>}
 */
export let bmkg = () => new Promise((resolve, reject) => {
    console.log('Get data from BMKG...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infogempa')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram account info from username.
 * @param {string} username
 * @returns {Promise<object>}
 */
export let igStalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/stalk?username=${username}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get phone info from GSMArena.
 * @param {string} model
 * @returns {Promise<object>}
 */
export let gsmarena = (model) => new Promise((resolve, reject) => {
    console.log(`Get phone info from GSMArena for ${model}...`)
    fetchJson(`https://api.vhtear.com/gsmarena?query=${model}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get food receipt.
 * @param {string} food
 * @returns {Promise<object>}
 */
export let resep = (food) => new Promise((resolve, reject) => {
    console.log(`Get receipt for ${food}...`)
    fetchJson(`https://api.vhtear.com/resepmasakan?query=${food}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for WhatsApp sticker.
 * @param {string} query 
 * @returns {Promise<object>}
 */
export let sticker = (query) => new Promise((resolve, reject) => {
    console.log('Searching for sticker...')
    fetchJson(`https://api.vhtear.com/wasticker?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube search results.
 * @param {string} query 
 * @returns {Promise<object>}
 */
export let ytSearch = (query) => new Promise((resolve, reject) => {
    console.log(`Get YouTube search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/youtube?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Play Store search results.
 * @param {string} query 
 * @returns {Promise<object>}
 */
export let playstore = (query) => new Promise((resolve, reject) => {
    console.log(`Get Play Store search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/playstore?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Shopee search results.
 * @param {string} query 
 * @param {string} count 
 * @returns {Promise<object>}
 */
export let shopee = (query, count) => new Promise((resolve, reject) => {
    console.log(`Get Shopee search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/shopee?query=${query}&count=${count}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Show surah list.
 * @returns {Promise<object>}
 */
export let listSurah = () => new Promise((resolve, reject) => {
    console.log('Get Al-Qur\'an list...')
    fetchJson(`https://api.vhtear.com/quranlist?&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get surah.
 * @param {string} surah 
 * @returns {Promise<object>}
 */
export let getSurah = (surah) => new Promise((resolve, reject) => {
    console.log(`Getting Al-Qur'an surah ${surah}...`)
    fetchJson(`https://api.vhtear.com/quran?no=${surah}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get motivation text.
 * @returns {string}
 */
export let motivasi = () => new Promise((resolve, reject) => {
    console.log('Get motivation text...')
    fetchText('https://raw.githubusercontent.com/VideFrelan/motivasi/main/motivasi.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Play YT.
 * @param {string} query 
 * @returns {Promise<object>}
 */
export let ytPlay = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query} in YouTube...`)
    fetchJson(`https://api.vhtear.com/ytmp3?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * IP look-up.
 * @param {string} ip 
 * @returns {Promise<object>}
 */
export let whois = (ip) => new Promise((resolve, reject) => {
    console.log(`Look-up IP for ${ip}`)
    fetchJson(`https://api.vhtear.com/ipwhois?ipaddr=${ip}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create shortlink.
 * @param {string} url
 * @returns {Promise<string>}
 */
export let shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchText(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})

/**
 * Get jadwal sholat.
 * @param {string} city
 * @returns {Promise<object>}
 */
export let jadwalSholat = (city) => new Promise((resolve, reject) => {
    let url = 'https://api.banghasan.com/sholat/format/json'
    let kodeKota = new Array()
    let tanggal = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
    console.log(`Get jadwal sholat for ${city}...`)
    needle(url + '/kota/nama/' + city, (err, resp, body) => {
        if (err) throw err
        switch (body.kota.length) {
            case 0:
                reject('Kota tidak ditemukan!')
            break
            default:
                kodeKota.push(body.kota[0]['id'])
                needle(url + '/jadwal/kota/' + kodeKota[0] + '/tanggal/' + tanggal, (err, resp, body) => {
                    if (err) throw err
                    resolve([body.jadwal.data])
                })
            break
        }
    })
})

/**
 * Search for movie.
 * @param {string} title
 * @returns {Promise<object>}
 */
export let movie = (title) => new Promise((resolve, reject) => {
    console.log(`Searching for Movie ${title}...`)
    fetchJson(`https://api.vhtear.com/downloadfilm?judul=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Calculate travel payment.
 * @param {string} courier
 * @param {string} from
 * @param {string} to
 * @returns {Promise<object>}
 */
export let ongkir = (courier, from, to) => new Promise((resolve, reject) => {
    console.log('Checking ongkir...')
    fetchJson(`https://api.vhtear.com/cekongkir?kurir=${courier}&fromcity=${from}&tocity=${to}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter trending.
 * @returns {Promise<object>}
 */
export let trendingTwt = () => new Promise((resolve, reject) => {
    console.log('Get Twitter trending...')
    fetchJson('https://docs-jojo.herokuapp.com/api/trendingtwitter')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get job seek data.
 * @returns {Promise<object>}
 */
export let jobSeek = () => new Promise((resolve, reject) => {
    console.log('Searching for jobs...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infoloker')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending hoax update.
 * @returns {Promise<object>}
 */
export let infoHoax = () => new Promise((resolve, reject) => {
    console.log('Checking hoaxes...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infohoax')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending spam SMS.
 * @param {Number} no 
 * @param {Number} amount 
 * @returns {Promise<object>}
 */
export let spamsms = (no, amount) => new Promise((resolve, reject) => {
    console.log(`Sending spam SMS to: ${no}`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/spamsms?no=${no}&jum=${amount}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create TTP.
 * @param {string} text 
 * @returns {Promise<object>}
 */
export let ttp = (text) => new Promise((resolve, reject) => {
    console.log('Creating TTP...')
    fetchJson(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(text)}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Result Casses Corona.
 * @param {string} query 
 * @returns {Promise<object>}
 */
export let corona = (country) => new Promise((resolve, reject) => {
    console.log(`Search for country ${country}`)
    fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/${country}/`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})