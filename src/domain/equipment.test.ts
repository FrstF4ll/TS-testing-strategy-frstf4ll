import {describe, expect, it} from "vitest";
import {type equipment, validateEquipmentLoan} from "./equipment.ts";

describe('Loaning availability', () => {
    const dummyCategory = {label: 'hand_tool', maxLoanDuration: 14}
    const dummyTool: equipment = {
        label: 'hammer',
        category: dummyCategory,
        stock: 4
    };
    const isLoanDurationApproved = (duration: number) => validateEquipmentLoan(dummyTool, duration)

    it('should approve loan only if asked duration <= max allowed duration', () => {
        expect(isLoanDurationApproved(14)).toBe(true)
        expect(isLoanDurationApproved(15)).toBe(false)
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
