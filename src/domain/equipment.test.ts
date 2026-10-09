import {describe, expect, it} from "vitest";
import {type equipment, validateEquipmentLoan} from "./equipment.ts";

describe('Loaning availability', () => {
    const dummyCategory = {label: 'hand_tool', maxLoanDuration: 14}
    const dummyTool: equipment = {
        label: 'hammer',
        category: dummyCategory,
        stock: 4
    };

    it('should approve loan only if asked duration <= max allowed duration', () => {
        expect(validateEquipmentLoan(dummyTool, 14)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 15)).toBe(false)
    })
    it('should approve only if loan duration >= 1 day', () => {
        expect(validateEquipmentLoan(dummyTool, 1)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 0)).toBe(false)
    })

    it.each([1.5, NaN, Infinity
    ])('should refuse non-integer duration %s', (duration) => {
        expect(validateEquipmentLoan(dummyTool, duration)).toBe(false)
    })
})
