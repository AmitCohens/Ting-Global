import validator from 'validator';

function isValidStr(str) {
    return str && typeof str === 'string' && str.length > 0;
}

function isValidPhone(phone) {
    return validator.isMobilePhone(phone);
}

function postTingGlobal(xApi = false, dataJson, token, successCallback = (res) => {console.log(res)
}, errorCallback = () => {
}) {
    console.log(JSON.stringify(dataJson))
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
    let check=phone.substring(0,5);
    if(check.toString()==="+9720") {
        phone = phone.replace("+9720", "+972");
    }
    if (!isValidPhone(phone)) {
        return false;
    }

    postTingGlobal(false, {signIn: {phone: phone}}, res => {
        successCallback(result)
    }, err => {
        errorCallback(err)
    }).then(() => {
        return result;
    });
    return true;

}

function register(registerData, successCallback = () => {
}, errorCallback = () => {
}) {
    if (!registerData || typeof registerData !== 'object' || !('phone' in registerData.register) || !isValidPhone(registerData.register.phone)) {
        return false;
    }

    postTingGlobal(false, registerData, res => {
        successCallback(res)
    }, err => {
        errorCallback(err)
    }).then(() => {
        return true
    });
    return true
}

export {singIn, register};
