interface equipmentCategory {
    label: string,
    maxLoanDuration: number
}

export interface equipment {
    label: string,
    category: equipmentCategory,
    stock: number,
}

function validateEquipmentLoanDuration(maximumDuration: number, askedLoaningDuration: number) {
    const isNumberInteger = Number.isInteger(askedLoaningDuration);
    const isAtLeastMinimum = askedLoaningDuration >= 1;
    const isAskedSmallerThanMaximum = maximumDuration >= askedLoaningDuration
    return isNumberInteger && isAtLeastMinimum && isAskedSmallerThanMaximum
}

export function validateEquipmentLoan(tool: equipment, askedLoaningDuration: number): boolean {
    const maxDuration = tool.category.maxLoanDuration;
    return validateEquipmentLoanDuration(maxDuration, askedLoaningDuration)
}
