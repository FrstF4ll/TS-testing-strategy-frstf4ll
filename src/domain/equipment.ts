interface equipmentCategory {
    label: string,
    maxLoanDuration: number
}

export interface equipment {
    label: string,
    category: equipmentCategory,
    stock: number,
}

export function validateEquipmentLoan(tool: equipment, askedLoaningDuration: number): boolean {
    if (!Number.isInteger(askedLoaningDuration)) {
        return false
    } else {
        return tool.category.maxLoanDuration >= askedLoaningDuration && askedLoaningDuration >= 1
    }
}
