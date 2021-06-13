const { test, expect } = require('@jest/globals');
const services = require('./anualTaxableIncomeCalculator');

test('Anual taxable person 6500000 married 1 child => 15000000', () => {
    expect(services(6500000, 'K1')).toBe(15000000)
} )

test('Anual taxable person 25000000 single => 246000000', () => {
    expect(services(25000000, 'TK0')).toBe(246000000);
})

test('unrecognized relief code', () => {
    expect(() => services(2500000, 'K4')).toThrow();
})

test('not a number', () => {
    expect(() => services("0x90m", "K4")).toThrow();
})

test('input must be exists', () => {
    expect(() => services(undefined, null)).toThrow();
})