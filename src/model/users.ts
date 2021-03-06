export interface User {
  id: string;
  nickname: string;
  numberOfCopiers: number;
  age: number;
  area: string;
  saveFromIncomePct: number;
  monthlyIncome: number;
  prefs: string[];
}

export interface UserMontlyBankData {
  userId: string;
  recurring: Category[];
  savings: Category[];
  investments: Category[];
  rainyDay: Category[];
  dicretionary: Category[];
}

export interface Category {
  name: string;
  percentage: number;
}
