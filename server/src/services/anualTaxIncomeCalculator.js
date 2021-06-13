const taxationScheme = require('../model/taxSchemeModel');

const calculateAnnualTax = (annualTaxableIncome) => {
    let totalAnnualTaxIncome = 0;
    let currAnnualTax = annualTaxableIncome;
    let i = 0;

    while (currAnnualTax > 0) {
        const currTaxScheme = taxationScheme[i];
        const currTaxPercentage = currTaxScheme.percentage / 100;
        const isUsingAggregateAmount = currTaxScheme.max === undefined || currAnnualTax <= currTaxScheme.max;
        const amount = (isUsingAggregateAmount ? currAnnualTax : currTaxScheme.max);
        totalAnnualTaxIncome += amount * currTaxPercentage;
        currAnnualTax -= currTaxScheme.max;
        i += 1;
    }
    return totalAnnualTaxIncome;
}

module.exports = calculateAnnualTax;