interface equipmentCategory {
    label: string,
    maxLoanDuration: number
}

export interface equipment {
    label: string,
    category: equipmentCategory,
    stock: number,
}

function validateEquipmentLoanDuration(tool: equipment, askedLoaningDuration: number) {
    const isNumberInteger = Number.isInteger(askedLoaningDuration);
    const isAtLeastMinimum = askedLoaningDuration >= 1;
    const isAskedSmallerThanMaximum = tool.category.maxLoanDuration >= askedLoaningDuration
    return isNumberInteger && isAtLeastMinimum && isAskedSmallerThanMaximum
}

export function validateEquipmentLoan(tool: equipment, askedLoaningDuration: number): boolean {
    return validateEquipmentLoanDuration(tool, askedLoaningDuration)
}
