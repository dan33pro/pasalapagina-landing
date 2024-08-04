class useSessionStorage {
    static saveToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token));
    }

    static saveEmail(email) {
        sessionStorage.setItem('email', JSON.stringify(email));
    }

    static savePhone(phone, countryCode) {
        sessionStorage.setItem('phone', JSON.stringify(phone));
        sessionStorage.setItem('countryCode', JSON.stringify(countryCode));
    }

    static saveFullName(fullName) {
        sessionStorage.setItem('fullName', JSON.stringify(fullName));
    }

    static saveDOB(dob) {
        sessionStorage.setItem('dob', JSON.stringify(dob));
    }

    static clearUserData() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('phone');
        sessionStorage.removeItem('countryCode');
        sessionStorage.removeItem('fullName');
        sessionStorage.removeItem('dob');
    }

    static isThereSession() {
        return (
            sessionStorage.getItem('token') != null &&
                (sessionStorage.getItem('email') != null ||
                (sessionStorage.getItem('phone') != null &&
                    sessionStorage.getItem('countryCode') != null))
        );
    }

    static getUserData() {
        return {
            token: JSON.parse(sessionStorage.getItem('token')),
            email: JSON.parse(sessionStorage.getItem('email')),
            phone: JSON.parse(sessionStorage.getItem('phone')),
            countryCode: JSON.parse(sessionStorage.getItem('countryCode')),
            fullName: JSON.parse(sessionStorage.getItem('fullName')),
            dob: JSON.parse(sessionStorage.getItem('dob')),
        };
    }
}

export default useSessionStorage;
