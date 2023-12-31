import { Contract, ethers } from 'ethers'
import { makeAutoObservable } from 'mobx'
import { default as copperIcon } from '../assets/goods/copper.svg'
import gasIcon from '../assets/goods/gas.svg'
import goldIcon from '../assets/goods/gold.svg'
import oilIcon from '../assets/goods/oil.svg'
import wheatIcon from '../assets/goods/wheat.svg'
import { PlateProps } from '../components/marquee/Plate'
import { abi } from '../utils/constants'

const mockTransactions = [
  {
    type: 'sell',
    amountToken: 300,
    tokenName: 'ТТР',
    amountFiat: 300000,
    from: 'Главный счет',
  },
  {
    type: 'buy',
    amountToken: 400,
    tokenName: 'ТТР',
    amountFiat: 400000,
    from: 'Главный счет',
  },
  {
    type: 'buy',
    amountToken: 500,
    tokenName: 'ТТР',
    amountFiat: 500000,
    from: 'Главный счет',
  },
  {
    type: 'sell',
    amountToken: 500,
    tokenName: 'ТТР',
    amountFiat: 500000,
    from: 'Главный счет',
  },
]

const mockCountriesSupply: PlateProps[] = [
  {
    key: '1',
    name: 'Китай',
    price: 435.23,
    change: 3.6,
    trend: '+',
    symbol: '¥',
  },
  {
    key: '2',
    name: 'Россия',
    price: 109.23,
    change: 8.7,
    trend: '+',
    symbol: '₽',
  },
  {
    key: '3',
    name: 'Индия',
    price: 58.23,
    change: 5.2,
    trend: '-',
    symbol: '₹',
  },
  {
    key: '4',
    name: 'Турция',
    price: 890.22,
    change: 9.1,
    trend: '-',
    symbol: '₺',
  },
  {
    key: '5',
    name: 'Монголия',
    price: 10.58,
    change: 5.4,
    trend: '+',
    symbol: '₮',
  },
]

const mockOrders: any = [
  {
    orderId: '3aS4xG83xST',
    status: 'Оплачен',
    progress: 15,
    sum: 300,
    currency: 'ТТК',
    orderIds: [],
  },
  {
    orderId: 'a82xQx9m6cY',
    status: 'Оплачен',
    progress: 15,
    sum: 400,
    currency: 'ТТК',
    orderIds: [],
  },
  {
    orderId: '4aS1gFxX6eE',
    status: 'Оплачен',
    progress: 15,
    sum: 150,
    currency: 'ТТК',
    orderIds: [],
  },
  {
    orderId: '3aS4xG83xST',
    status: 'Оплачен',
    progress: 15,
    sum: 300,
    currency: 'ТТК',
    orderIds: [],
  },
  {
    orderId: 'a82xQx9m6cY',
    status: 'Оплачен',
    progress: 15,
    sum: 400,
    currency: 'ТТК',
    orderIds: [],
  },
  {
    orderId: 'p2xPz01smIm',
    status: 'В сборке',
    progress: 35,
    sum: 150,
    currency: 'ТТК',
    orderIds: [],
  },
  {
    orderId: '2xSfg31smxX',
    status: 'В пути',
    progress: 60,
    sum: 120,
    currency: 'ТТК',
    orderIds: [],
  },
]

const buyInvoices = [
  {
    id: 'sdS2a82xQx',
    product: 'Mercedes-Maybach',
    description: 'GLS 600 4MATIC',
    dateFrom: 1697030801,
    dateTo: 1719030801,
    count: 10,
    price: 100,
    currency: 'ТТР',
    wallet: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC',
  },
  {
    id: 'dasxQx9mewq',
    product: 'Xiaomi',
    description: 'Mi TV P1 50',
    dateFrom: 1697030801,
    dateTo: 1719030801,
    count: 100,
    price: 10,
    currency: 'ТТР',
    wallet: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC',
  },
  {
    id: 'Srqwx1m6cY3',
    product: 'Apple iPhone',
    description: '15 Pro Max 1024Gb',
    dateFrom: 1697030801,
    dateTo: 1719030801,
    count: 200,
    price: 10,
    currency: 'ТТР',
    wallet: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC',
  },
  {
    id: 'XCdfxx9m6cY4',
    product: 'GIGABYTE NVIDIA',
    description: 'Geforce RTX 4090',
    dateFrom: 1697030801,
    dateTo: 1719030801,
    count: 50,
    price: 50,
    currency: 'ТТР',
    wallet: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC',
  },
  // {
  //   id: 'eSDeQx9m6cY5',
  //   product: 'Dyson',
  //   description: 'V11 Total Clean Extra',
  //   dateFrom: 1697030801,
  //   dateTo: 1719030801,
  //   count: 100,
  //   price: 60,
  //   currency: 'ТТР',
  //   wallet: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC',
  // },
  {
    id: 'dsScxz9m6cY6',
    product: 'Makita',
    description: 'DA333DZ CTX 12V',
    dateFrom: 1697030801,
    dateTo: 1719030801,
    count: 100,
    price: 50,
    currency: 'ТТР',
    wallet: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC',
  },
]

const sellInvoices = [
  {
    id: 'asdASEq9m69',
    product: 'ATOM',
    description: '4MATIC',
    dateFrom: 1697030801,
    dateTo: 1719030801,
    count: 10,
    price: 100,
    currency: 'ТТР',
    wallet: '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
  },
]

const nomenclatureGoods = [
  {
    id: 'NEFTVAM500U30',
    title: 'Нефть сырая',
    icon: oilIcon,
    coefficient: 0.095,
    postfix: 'т.',
  },
  {
    id: 'GASBLKS011U2D',
    title: 'Газ природный',
    icon: gasIcon,
    coefficient: 1480,
    postfix: 'куб. м.',
  },
  {
    id: 'COOPRUS073U29',
    title: 'Медь',
    icon: copperIcon,
    coefficient: 0.0082,
    postfix: 'т.',
  },
  {
    id: 'WHEATRUS0143U',
    title: 'Пшеница',
    icon: wheatIcon,
    coefficient: 0.113,
    postfix: 'т.',
  },
  {
    id: 'GOLDRUS3U0804',
    title: 'Золото',
    icon: goldIcon,
    coefficient: 0.001,
    postfix: 'кг.',
  },
]

export class UserStore {
  countrySupply = mockCountriesSupply
  goldPrice = 62
  currentBalance = 19_500_000
  tokenBalances: { [key: string]: number } = {
    ТТР: 180,
    ТТК: 0,
    ТТИ: 0,
  }
  operationStatus = 'waiting'
  transactionHistory = mockTransactions
  ordersHistory = mockOrders
  buyInvoices = buyInvoices
  sellInvoices = sellInvoices
  selectedProduct = undefined
  nomenclatureGoods = nomenclatureGoods

  company = 'Russia'

  constructor() {
    makeAutoObservable(this)
  }

  // Фетч стоимости золота из смарт-контракта оракула в USD
  fetchGoldPrice = async () => {
    try {
      const provider = new ethers.JsonRpcProvider('http://51.250.29.186:8545')
      const blocks2 = await provider.getBlockNumber()
      console.log(blocks2)

      const contract = new Contract(
        '0x0dB9bb97902be823879762C345B89124767DF116',
        abi,
        provider,
      )

      const goldPrice = await contract.getCurrentGoldPrice()

      if (goldPrice) this.goldPrice = parseInt(goldPrice)
      console.log(`Current Gold Price: ${this.goldPrice}`)
    } catch (error) {
      console.error('Error fetching gold price:', error)
    }
  }

  addToken = (key: string, amount: number) => {
    this.tokenBalances[key] = amount
  }

  buyToken = async (key: string, amount: number) => {
    this.operationStatus = 'sending'
    setTimeout(() => {
      this.tokenBalances[key] = this.tokenBalances[key] + Number(amount)
      this.currentBalance =
        this.currentBalance - Number(amount) * this.goldPrice * 95
      this.operationStatus = 'success'
      this.transactionHistory = [
        {
          type: 'buy',
          amountToken: Number(amount),
          tokenName: key,
          amountFiat: Number(amount) * this.goldPrice * 95,
          from: 'Главный счет',
        },
        ...this.transactionHistory,
      ]

      setTimeout(() => {
        this.operationStatus = 'waiting'
      }, 6000)
    }, 2000)
  }

  sellToken = async (key: string, amount: number) => {
    this.operationStatus = 'sending'
    setTimeout(() => {
      this.tokenBalances[key] = this.tokenBalances[key] - Number(amount)
      this.currentBalance =
        this.currentBalance + Number(amount) * this.goldPrice * 95
      this.operationStatus = 'success'
      this.transactionHistory = [
        {
          type: 'sell',
          amountToken: Number(amount),
          tokenName: key,
          amountFiat: Number(amount) * this.goldPrice * 95,
          from: 'Главный счет',
        },
        ...this.transactionHistory,
      ]

      setTimeout(() => {
        this.operationStatus = 'waiting'
      }, 6000)
    }, 2000)
  }

  transferToken = async (key: string, amount: number, orderIds: string[]) => {
    this.operationStatus = 'sending'
    setTimeout(() => {
      this.tokenBalances[key] = this.tokenBalances[key] - Number(amount)
      this.operationStatus = 'success'
      this.buyInvoices = this.buyInvoices.filter(
        ({ id }) => !orderIds.includes(id),
      )
      this.transactionHistory = [
        {
          type: 'transfer',
          amountToken: Number(amount),
          tokenName: key,
          amountFiat: Number(amount) * this.goldPrice * 95,
          from: 'Главный счет',
        },
        ...this.transactionHistory,
      ]

      this.ordersHistory = [
        {
          orderId: (Math.random() + 1).toString(36).substring(2, 16),
          status: 'Оплачен',
          progress: 15,
          sum: amount,
          currency: 'ТТР',
          orderIds: orderIds,
        },
        ...this.ordersHistory,
      ]
      setTimeout(() => {
        this.operationStatus = 'waiting'
      }, 6000)
    }, 2000)
  }

  redeemToken = async (key: string, amount: number, productId: string) => {
    this.operationStatus = 'sending'
    setTimeout(() => {
      this.tokenBalances[key] = this.tokenBalances[key] - Number(amount)
      this.operationStatus = 'success'
      const product = this.nomenclatureGoods.find(({ id }) => id === productId)

      this.transactionHistory = [
        {
          type: 'repayment',
          amountToken: Number(amount),
          tokenName: key,
          amountFiat: Number(amount) * this.goldPrice * 95,
          from: 'Главный счет',
        },
        ...this.transactionHistory,
      ]

      this.ordersHistory = [
        {
          orderId: (Math.random() + 1).toString(36).substring(2, 16),
          status: 'Заявлен к погашению',
          progress: 15,
          sum: amount,
          currency: 'ТТР',
          orderIds: [productId],
        },
        ...this.ordersHistory,
      ]
      setTimeout(() => {
        this.operationStatus = 'waiting'
      }, 6000)
    }, 2000)
  }

  sendInvoice = async (data: any) => {
    setTimeout(() => {
      this.operationStatus = 'success'

      this.sellInvoices = [
        ...this.sellInvoices,
        {
          ...data,
        },
      ]
      setTimeout(() => {
        this.operationStatus = 'waiting'
      }, 6000)
    }, 100)
  }

  selectProduct = (product: any) => {
    this.selectedProduct = product
  }

  clearSelectedProduct = () => {
    this.selectedProduct = undefined
  }

  switchCompany = () => {
    this.company = this.company === 'Russia' ? 'China' : 'Russia'
  }
}
