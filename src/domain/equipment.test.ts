
import {describe, it, expect} from "vitest";
import {type equipment, validateEquipmentLoan} from "./equipment.ts";

describe('Loaning availability', () => {
    it('should refuse loaning if asked duration exceed allowed maximum', () => {
        const dummyTool: equipment = {
            label: 'hammer',
            category: {label: 'hand_tool',  maxLoanDuration: 14},
            stock: 4
        };

        expect(validateEquipmentLoan(dummyTool, 10)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 14)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 15)).toBe(false)
    })
})