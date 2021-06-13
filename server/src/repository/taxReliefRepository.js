const taxReliefMapping = require('../model/taxReliefModel')

const getTaxRelief = (key) => {
    if (!taxReliefMapping[key]) {
        throw new Error("This Tax Relief Options not ready for this version")
    }
    return taxReliefMapping[key];
}

module.exports = { getTaxRelief };