const taxReliefRepository = require('../repository/taxReliefRepository');
const {MONTH_IN_YEAR} = require('../constant/index');

const calculateAnnualTaxable = (salary, profile) => {
    const taxRelief = taxReliefRepository.getTaxRelief(profile);
    return ( salary * MONTH_IN_YEAR ) - taxRelief;
}

module.exports = calculateAnnualTaxable;