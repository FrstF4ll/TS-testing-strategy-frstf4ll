import {describe, expect, it} from "vitest";
import {validateEquipmentLoan} from "./equipment.ts";


describe('Loaning availability', () => {

    const dummyTool = (maxDuration: number = 3, stock: number = 1) => ({
        label: 'tool',
        category: {label: 'category', maxLoanDuration: maxDuration},
        stock: stock,
    })

    const isLoanDurationApproved = (askedDuration: number, maxDuration: number = 3) => validateEquipmentLoan(dummyTool(maxDuration), askedDuration)

    it.each([3, 7, 14])('should approve loan only if asked duration <= max allowed duration', (maxDuration) => {
        expect(isLoanDurationApproved(maxDuration, maxDuration)).toBe(true)
        expect(isLoanDurationApproved(maxDuration + 1, maxDuration)).toBe(false)
    })
    it('should approve only if loan duration >= 1 day', () => {
        expect(isLoanDurationApproved(1)).toBe(true)
        expect(isLoanDurationApproved(0)).toBe(false)
    })

    it('should refuse negative duration', () => {
        expect(isLoanDurationApproved(-1)).toBe(false)
    })

    it('should refuse duration values that are not integer', () => {
        expect(isLoanDurationApproved(1.5)).toBe(false)
    })

    it.each([NaN, Infinity
    ])('should refuse duration %s (not a finite number)', (duration) => {
        expect(isLoanDurationApproved(duration)).toBe(false)
    })
})
