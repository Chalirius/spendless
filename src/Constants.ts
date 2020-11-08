import { User } from './model/users'

export const testUsers: User[] = [{
  id: '1234',
  nickname: 'Testo',
  numberOfCopiers: 100, // How many people have chosen to copy this user
  age: 24,
  area: 'Tampere',
  saveFromIncomePct: 20,
  monthlyIncome: 1200,
  prefs: ['Vegan']
},
{
  id: '3234',
  nickname: 'Testo2',
  numberOfCopiers: 100, // How many people have chosen to copy this user
  age: 24,
  area: 'Tampere',
  saveFromIncomePct: 20,
  monthlyIncome: 1200,
  prefs: ['Sweettooth']
},
{
  id: '2234',
  nickname: 'Testo3',
  numberOfCopiers: 100, // How many people have chosen to copy this user
  age: 24,
  area: 'Tampere',
  saveFromIncomePct: 20,
  monthlyIncome: 1200,
  prefs: ['Vegan']
}]
