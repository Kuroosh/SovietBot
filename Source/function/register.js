import fs from 'fs-extra';
/**
 * Add user to database.
 * @param {string} userId 
 * @param {string} name 
 * @param {string|number} age 
 * @param {string} time 
 * @param {string} serial 
 * @param {object} _dir 
 */
export const addRegisteredUser = (userId, name, age, time, serial, _dir) => {
    const obj = { id: userId, name: name, age: age, time: time, serial: serial }
    _dir.push(obj)
    fs.writeFileSync('../Database/bot/registered.json', JSON.stringify(_dir))
}

/**
 * Check is user registered.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {boolean}
 */
export const checkRegisteredUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Check is user registered from given serial.
 * @param {string} serial 
 * @param {object} _dir 
 * @returns {boolean}
 */
export const checkRegisteredUserFromSerial = (serial, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            status = true
        }
    })
    return status
}

/**
 * Get registered user ID.
 * @param {string} userId
 * @param {object} _dir
 * @returns {string}
 */
export const getRegisteredUserId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

/**
 * Check user name from serial.
 * @param {string} serial 
 * @param {object} _dir 
 * @returns {string}
 */
export const getRegisteredNameFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].name
    }
}

/**
 * Check user age from serial.
 * @param {string} serial 
 * @param {object} _dir 
 * @returns {number}
 */
export const getRegisteredAgeFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].age
    }
}

/**
 * Check user time registration from serial.
 * @param {string} serial 
 * @param {object} _dir 
 * @returns {string}
 */
export const getRegisteredTimeFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

/**
 * Check user ID from serial.
 * @param {string} serial 
 * @param {object} _dir 
 * @returns {string}
 */
export const getRegisteredIdFromSerial = (serial, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].serial === serial) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

/**
 * Get random user ID.
 * @param {object} _dir 
 * @returns {string}
 */
export const getRegisteredRandomId = (_dir) => {
    return _dir[Math.floor(Math.random() * _dir.length)].id
}