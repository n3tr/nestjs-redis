import { isString, isSymbol, isError, isResolution, isRejection, isDirectInstanceOf, isNullish } from './is';

describe('isString', () => {
    test('should work correctly', () => {
        expect(isString('')).toBe(true);
        expect(isString('a')).toBe(true);
        expect(isString(1)).toBe(false);
        expect(isString(true)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(Symbol())).toBe(false);
    });
});

describe('isSymbol', () => {
    test('should work correctly', () => {
        expect(isSymbol(Symbol())).toBe(true);
        expect(isSymbol('')).toBe(false);
        expect(isSymbol(1)).toBe(false);
        expect(isSymbol(true)).toBe(false);
        expect(isSymbol(undefined)).toBe(false);
        expect(isSymbol(null)).toBe(false);
    });
});

describe('isError', () => {
    test('should work correctly', () => {
        class CustomError extends Error {}
        class UnknownError {}

        expect(isError(new Error())).toBe(true);
        expect(isError(new CustomError())).toBe(true);
        expect(isError(new UnknownError())).toBe(false);
        expect(isError('')).toBe(false);
        expect(isError(0)).toBe(false);
        expect(isError(true)).toBe(false);
        expect(isError(undefined)).toBe(false);
        expect(isError(null)).toBe(false);
        expect(isError(Symbol())).toBe(false);
    });
});

describe('isResolution', () => {
    test('should work correctly', () => {
        expect(isResolution({ status: 'fulfilled', value: '' })).toBe(true);
        expect(isResolution({ status: 'rejected', reason: '' })).toBe(false);
    });
});

describe('isRejection', () => {
    test('should work correctly', () => {
        expect(isRejection({ status: 'fulfilled', value: '' })).toBe(false);
        expect(isRejection({ status: 'rejected', reason: '' })).toBe(true);
    });
});

describe('isDirectInstanceOf', () => {
    test('should work correctly', () => {
        class CustomError extends Error {}

        expect(isDirectInstanceOf(new CustomError(), CustomError)).toBe(true);
        expect(isDirectInstanceOf(new CustomError(), Error)).toBe(false);
    });
});

describe('isNullish', () => {
    test('should work correctly', () => {
        expect(isNullish(undefined)).toBe(true);
        expect(isNullish(null)).toBe(true);
        expect(isNullish(NaN)).toBe(false);
        expect(isNullish(false)).toBe(false);
        expect(isNullish('')).toBe(false);
        expect(isNullish(0)).toBe(false);
        expect(isNullish(1)).toBe(false);
    });
});
