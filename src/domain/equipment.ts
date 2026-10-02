interface equipmentCategory {
    label: string,
    maxLoanDuration: number
}
export interface equipment  {
    label: string,
    category: equipmentCategory,
    stock: number,
}
export function validateEquipmentLoan(tool: equipment, askedLoaningDuration: number): boolean  {
    if(tool.category.maxLoanDuration >= askedLoaningDuration) {
        return true
    } else {
        return false
    }
}