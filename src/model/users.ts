export interface User {
  id: string
  nickname: string
  numberOfCopiers: number
  ageGroup: string
  area: string
  saveFromIncomePct: number
  monthlyIncome: number
  prefs: string[]
}

export interface UserMonthlyBankData {
  userId: string
  recurring: Category[]
  savings: Category[]
  investments: Category[]
  rainyDay: Category[]
  dicretionary: Category[]
}

export interface Category {
  name: string
  percentage: number
}

