import {describe, expect, it} from "vitest";
import {validateEquipmentLoanDuration} from "./equipment.ts";


describe('Loaning availability', () => {

    it.each([3, 7, 14])("should be refused when loan duration exceed %s", (maxDuration) => {
        expect(validateEquipmentLoanDuration(maxDuration, maxDuration)).toBe(true)
        expect(validateEquipmentLoanDuration(maxDuration, maxDuration + 1)).toBe(false)
    })

    it('should approve only if loan duration >= 1 day', () => {
        expect(validateEquipmentLoanDuration(3, 1)).toBe(true)
        expect(validateEquipmentLoanDuration(3, 0)).toBe(false)
    })

    it('should refuse negative duration', () => {
        expect(validateEquipmentLoanDuration(3, -1)).toBe(false)
    })

    it('should refuse duration values that are not integer', () => {
        expect(validateEquipmentLoanDuration(3, 1.5)).toBe(false)
    })

    it.each([NaN, Infinity
    ])('should refuse duration %s (not a finite number)', (duration) => {
        expect(validateEquipmentLoanDuration(3, duration)).toBe(false)
    })
})
