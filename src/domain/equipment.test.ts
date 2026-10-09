import {describe, expect, it} from "vitest";
import {type equipment, validateEquipmentLoan} from "./equipment.ts";

describe('Loaning availability', () => {
    const dummyCategory = {label: 'hand_tool', maxLoanDuration: 14}
    const dummyTool: equipment = {
        label: 'hammer',
        category: dummyCategory,
        stock: 4
    };
    const isLoanApproved = (duration: number) => validateEquipmentLoan(dummyTool, duration)

    it('should approve loan only if asked duration <= max allowed duration', () => {
        expect(isLoanApproved(14)).toBe(true)
        expect(isLoanApproved(15)).toBe(false)
    })
    it('should approve only if loan duration >= 1 day', () => {
        expect(isLoanApproved(1)).toBe(true)
        expect(isLoanApproved(0)).toBe(false)
    })

    it('should refuse negative duration', () => {
        expect(isLoanApproved(-1)).toBe(false)
    })

    it('should refuse duration values that are not integer', () => {
        expect(isLoanApproved(1.5)).toBe(false)
    })

    it.each([NaN, Infinity
    ])('should refuse duration %s (not a finite number)', (duration) => {
        expect(isLoanApproved(duration)).toBe(false)
    })
})
