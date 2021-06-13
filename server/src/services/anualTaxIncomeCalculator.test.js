const { test, expect } = require('@jest/globals');
const services = require('./anualTaxIncomeCalculator');

test('Anual taxable 15000000, anual tax income must be 750000', () => {
    expect(services(15000000)).toBe(750000)
} )

test('Anual taxable 246000000, anual tax income must be 31900000', () => {
    expect(services(246000000)).toBe(31900000)
})

test('Anual taxable 400000000 anual tax income must be ???', () => {
    // 50jt * 5% + 250jt * 15% + 100jt * 25%
    // 2500000 + 37500000 + 25000000
    expect(services(400000000)).toBe(65000000)
} )