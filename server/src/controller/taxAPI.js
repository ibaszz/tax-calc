const annualTaxableIncomeCalc = require('../services/anualTaxableIncomeCalculator');
const annualTaxIncomeCalc = require('../services/anualTaxIncomeCalculator');
const response = require('../util/response');

const taxApiController = (req, res, next) => {
    try {   
        const {salary, reliefCode} = req.body;
        const annualTaxableIncome = annualTaxableIncomeCalc(salary, reliefCode);
        const annualTaxIncome = annualTaxIncomeCalc(annualTaxableIncome);
        return res.status(200).json(response({data: {
            annualTaxableIncome, annualTaxIncome
        }}))
    } catch (err) {
        return next(err);
    }
}

module.exports = taxApiController;