import { User } from './interfaces/User.interface'

export const testUsers: User[] = [{
  id: '1234',
  nickname: 'Testo',
  imageUrl: '../../../public/armstrong-face.jpg',
  numberOfCopiers: 100, // How many people have chosen to copy this user
  ageGroup: '20-24',
  area: 'Tampere',
  saveFromIncomePct: 20,
  monthlyIncome: 1200,
  prefs: 'Vegan'
},
{
  id: '3234',
  nickname: 'Testo2',
  imageUrl: '../../../public/olivier-mira-armstrong-2085.jpg',
  numberOfCopiers: 100, // How many people have chosen to copy this user
  ageGroup: '20-24',
  area: 'Tampere',
  saveFromIncomePct: 20,
  monthlyIncome: 1200,
  prefs: 'Sweettooth'
},
{
  id: '2234',
  nickname: 'Testo3',
  imageUrl: '../../../public/default-avatar.jpg',
  numberOfCopiers: 100, // How many people have chosen to copy this user
  ageGroup: '20-24',
  area: 'Tampere',
  saveFromIncomePct: 20,
  monthlyIncome: 1200,
  prefs: 'Vegan'
}]
