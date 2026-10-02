
import {describe, it, expect} from "vitest";
import {type equipment, validateEquipmentLoan} from "./equipment.ts";

describe('Loaning availability', () => {
    const dummyCategory = {label: 'hand_tool', maxLoanDuration: 14}
    const dummyTool: equipment = {
        label: 'hammer',
        category: dummyCategory,
        stock: 4
    };

    it('should approve loan only if duration does not exceed maximum allowed', () => {
        expect(validateEquipmentLoan(dummyTool, 10)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 14)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 15)).toBe(false)
    })
    it('should approve loan that is >= 1 day' , () => {
        expect(validateEquipmentLoan(dummyTool, 1)).toBe(true)
        expect(validateEquipmentLoan(dummyTool, 0)).toBe(false)
        expect(validateEquipmentLoan(dummyTool, -1)).toBe(false)
    })
})