const taxReliefRepository = require('../repository/taxReliefRepository');
const {MONTH_IN_YEAR} = require('../constant/index');

const calculateAnnualTaxable = (salary, profile) => {
    if (!salary) {
        throw {code: "2001", status: 400, message: "Wrong input Salary"}
    }

    if (!profile) {
        throw {code: "2002", status: 400, message: "Wrong input Relief Code"}
    }

    if (isNaN(salary)) {
        throw {code: "2003", status: 400, message: "Salary must be number"}
    }
    
    const taxRelief = taxReliefRepository.getTaxRelief(profile);
    return ( salary * MONTH_IN_YEAR ) - taxRelief;
}

module.exports = calculateAnnualTaxable;