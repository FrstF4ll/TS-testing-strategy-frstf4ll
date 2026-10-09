import {describe, expect, it} from "vitest";
import {validateEquipmentLoanDuration} from "./equipment.ts";


describe('Loaning duration', () => {

    it.each([3, 7, 14])('should not exceed max duration of %s days', (maxDuration) => {
        expect(validateEquipmentLoanDuration(maxDuration, maxDuration)).toBe(true)
        expect(validateEquipmentLoanDuration(maxDuration, maxDuration + 1)).toBe(false)
    })

    it('should be at least 1 day', () => {
        expect(validateEquipmentLoanDuration(3, 1)).toBe(true)
        expect(validateEquipmentLoanDuration(3, 0)).toBe(false)
    })

    it('should not be negative', () => {
        expect(validateEquipmentLoanDuration(3, -1)).toBe(false)
    })

    it('should be an integer', () => {
        expect(validateEquipmentLoanDuration(3, 1.5)).toBe(false)
    })

    it.each([NaN, Infinity
    ])('should not be of duration: %s (not a finite number)', (duration) => {
        expect(validateEquipmentLoanDuration(3, duration)).toBe(false)
    })
})
