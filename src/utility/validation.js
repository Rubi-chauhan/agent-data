// **** data validations ***** //

///  for empty input


const isValidBody = function (value) {
    if (typeof value == "undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    if (typeof value === "Number" && value.trim().length === 0) return false
    return true
};
// for phone number
const isValidPhone = function (value) {
    const regx = /^[6-9]\d{9}$/
    return regx.test(value)
};

// for EmailId
const isValidEmail = function (value) {
    const regx = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/
    return regx.test(value)
};

const enumGender = (gender) => {
    if (!["Male", "Female", "LGBTQ", "Prefer not to say"].includes(gender)) {
        return false;
    }
    return true;

}

const pincodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

const decimalNumRegex = /^[+]?([0-9]+\.?[0-9]*|\.[0-9]+)$/

 module.exports ={isValidEmail, isValidPhone, isValidBody, enumGender, pincodeRegex, decimalNumRegex }