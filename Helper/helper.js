
//format date into yyyy-mm-dd format.
function formatDateToYMD(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}

//Round off upto 2 decimal places.
function roundOff2Place(data) {
    if (data != "") {
        return parseFloat(data).toFixed(2);
    } else {
        return 0
    }
}
module.exports = { formatDateToYMD, roundOff2Place};

