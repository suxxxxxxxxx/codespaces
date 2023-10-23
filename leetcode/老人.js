var countSeniors = function(details) {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        const ageString = details[i].substring(11, 13);
        const age = parseInt(ageString, 10);
        if (age > 60) {
            count++;
        }
    }
    return count;
};

var details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
console.log(countSeniors(details));