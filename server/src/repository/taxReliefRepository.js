const taxReliefMapping = require('../model/taxReliefModel')

const getTaxRelief = (key) => {
    if (!taxReliefMapping[key]) {
        throw {code: 3000, status: 4000, message: "This Tax Relief Options not ready for this version"}
    }
    return taxReliefMapping[key];
}

module.exports = { getTaxRelief };