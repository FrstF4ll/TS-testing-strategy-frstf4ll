export interface EquipmentCategory {
    label: string,
    maxLoanDuration: number
}

export interface Equipment {
    label: string,
    category: EquipmentCategory,
    stock: number,
}

export function validateEquipmentLoanDuration(maximumDuration: number, askedLoaningDuration: number) {
    const isNumberInteger = Number.isInteger(askedLoaningDuration);
    const isAtLeastMinimum = askedLoaningDuration >= 1;
    const isAskedWithinMaximum = maximumDuration >= askedLoaningDuration
    return isNumberInteger && isAtLeastMinimum && isAskedWithinMaximum
}

export function validateEquipmentLoan(tool: Equipment, askedLoaningDuration: number): boolean {
    const maxDuration = tool.category.maxLoanDuration;
    return validateEquipmentLoanDuration(maxDuration, askedLoaningDuration)
}
