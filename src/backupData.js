// 20211028133845
// https://financialmodelingprep.com/api/v3/actives?apikey=6784095947247f551fb6ecae01c8e048

const backupData = [
    {
      "ticker": "CEI",
      "changes": -0.0289999,
      "price": "1.271",
      "changesPercentage": "-2.2307634",
      "companyName": "Camber Energy, Inc."
    },
    {
      "ticker": "AAPL",
      "changes": 3.5558,
      "price": "152.406",
      "changesPercentage": "2.3888488",
      "companyName": "Apple Inc."
    },
    {
      "ticker": "AMC",
      "changes": 0.225002,
      "price": "34.985",
      "changesPercentage": "0.6473023",
      "companyName": "AMC Entertainment Holdings, Inc."
    },
    {
      "ticker": "F",
      "changes": 1.325,
      "price": "16.835",
      "changesPercentage": "8.542868",
      "companyName": "Ford Motor Company"
    },
    {
      "ticker": "AMD",
      "changes": -1.4513,
      "price": "120.829",
      "changesPercentage": "-1.1868675",
      "companyName": "Advanced Micro Devices, Inc."
    },
    {
      "ticker": "BBIG",
      "changes": 0.38,
      "price": "5.07",
      "changesPercentage": "8.102347",
      "companyName": "Vinco Ventures, Inc."
    },
    {
      "ticker": "EDU",
      "changes": 0.0149999,
      "price": "2.155",
      "changesPercentage": "0.70092833",
      "companyName": "New Oriental Education & Technology Group Inc."
    },
    {
      "ticker": "PLTR",
      "changes": 0.363001,
      "price": "25.423",
      "changesPercentage": "1.4485271",
      "companyName": "Palantir Technologies Inc."
    },
    {
      "ticker": "BAC",
      "changes": 0.665001,
      "price": "47.705",
      "changesPercentage": "1.4136925",
      "companyName": "Bank of America Corporation"
    },
    {
      "ticker": "ITUB",
      "changes": -0.0349998,
      "price": "4.195",
      "changesPercentage": "-0.8274196",
      "companyName": "Itaú Unibanco Holding S.A."
    },
    {
      "ticker": "WISH",
      "changes": 0.22,
      "price": "5.18",
      "changesPercentage": "4.4354796",
      "companyName": "ContextLogic Inc."
    },
    {
      "ticker": "NIO",
      "changes": 0.974998,
      "price": "40.285",
      "changesPercentage": "2.4802809",
      "companyName": "NIO Inc."
    },
    {
      "ticker": "EEM",
      "changes": -0.079998,
      "price": "51.54",
      "changesPercentage": "-0.15497485",
      "companyName": "iShares MSCI Emerging Markets ETF"
    },
    {
      "ticker": "GSAT",
      "changes": 0.0581,
      "price": "1.5581",
      "changesPercentage": "3.8733323",
      "companyName": "Globalstar, Inc."
    },
    {
      "ticker": "T",
      "changes": 0.525,
      "price": "25.585",
      "changesPercentage": "2.0949707",
      "companyName": "AT&T Inc."
    },
    {
      "ticker": "BBD",
      "changes": -0.0502,
      "price": "3.6298",
      "changesPercentage": "-1.36413",
      "companyName": "Banco Bradesco S.A."
    },
    {
      "ticker": "PFE",
      "changes": 0.169998,
      "price": "43.14",
      "changesPercentage": "0.39562058",
      "companyName": "Pfizer Inc."
    },
    {
      "ticker": "VALE",
      "changes": -0.23,
      "price": "13.24",
      "changesPercentage": "-1.7075016",
      "companyName": "Vale S.A."
    },
    {
      "ticker": "CCL",
      "changes": 0.225,
      "price": "21.865",
      "changesPercentage": "1.0397431",
      "companyName": "Carnival Corporation & plc"
    },
    {
      "ticker": "ANY",
      "changes": -0.115,
      "price": "6.335",
      "changesPercentage": "-1.7829423",
      "companyName": "Sphere 3D Corp."
    },
    {
      "ticker": "AAL",
      "changes": 0.0349998,
      "price": "19.065",
      "changesPercentage": "0.18391931",
      "companyName": "American Airlines Group Inc."
    },
    {
      "ticker": "FCEL",
      "changes": 0.655,
      "price": "7.655",
      "changesPercentage": "9.357146",
      "companyName": "FuelCell Energy, Inc."
    },
    {
      "ticker": "PBR",
      "changes": -0.0310001,
      "price": "10.459",
      "changesPercentage": "-0.29552084",
      "companyName": "Petróleo Brasileiro S.A. - Petrobras"
    },
    {
      "ticker": "LCID",
      "changes": 9.835,
      "price": "36.855",
      "changesPercentage": "36.39896",
      "companyName": "Lucid Group, Inc."
    },
    {
      "ticker": "WFC",
      "changes": 0.98,
      "price": "51.03",
      "changesPercentage": "1.9580411",
      "companyName": "Wells Fargo & Company"
    },
    {
      "ticker": "SESN",
      "changes": 0.0599,
      "price": "1.2099",
      "changesPercentage": "5.2086997",
      "companyName": "Sesen Bio, Inc."
    },
    {
      "ticker": "BABA",
      "changes": 0.630005,
      "price": "169.86",
      "changesPercentage": "0.37227732",
      "companyName": "Alibaba Group Holding Limited"
    },
    {
      "ticker": "ATER",
      "changes": 0.108,
      "price": "6.538",
      "changesPercentage": "1.6796311",
      "companyName": "Aterian, Inc."
    },
    {
      "ticker": "NVDA",
      "changes": 2.81471,
      "price": "247.325",
      "changesPercentage": "1.1511647",
      "companyName": "NVIDIA Corporation"
    },
    {
      "ticker": "UBER",
      "changes": 0.0624008,
      "price": "44.7924",
      "changesPercentage": "0.13950552",
      "companyName": "Uber Technologies, Inc."
    }
  ]

export default backupData;