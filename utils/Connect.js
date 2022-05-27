import validator from 'validator';

function isValidStr(str) {
    return str && typeof str === 'string' && str.length > 0;
}

function isValidPhone(phone) {
    return validator.isMobilePhone(phone);
}

function postTingGlobal(xApi = false, dataJson, token, successCallback = () => {
}, errorCallback = () => {
}) {
    return fetch(`https://c18.freemyip.com/${xApi ? 'x' : ''}api`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataJson),
    })
        .then(response => successCallback(response))
        .catch(error => errorCallback(error));
}

function singIn(phone, successCallback = () => {
}, errorCallback = () => {
}) {
    if (!isValidPhone(phone)) {
        return false;
    }

    postTingGlobal(false, {signIn: {phone: phone}}, res => {
        // console.log(`successCallback, json=\n${JSON.stringify(res)}`)
        // successCallback(res)
    }, err => {
        // console.log(`errorCallback, json=\n${JSON.stringify(err)}`)
        // errorCallback(err)
    }).then(() => {
        return true
    });

}

function register(username, phone, successCallback = () => {
}, errorCallback = () => {
}) {
    if (!isValidPhone(phone) || !isValidStr(username)) {
        return false;
    }
    postTingGlobal(false,{register: {username: username, phone: phone}}).then();
}

export {singIn, register};
