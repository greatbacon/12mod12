export const codes = {
  USD:{
    symbol: "$",
    alpha: "USD",
    numeric: 840,
    decimals: 2,
    currency: "United States dollar"
  }
};

export const monies = [
  {
    obverse:"/numismatics-img/640px-US_$2_bill_obverse_series_2003_A.jpg",
    reverse:"/numismatics-img/640px-US_$2_bill_reverse_series_2003_A.jpg",
    name:"United States Federal Reserve Note two-dollar bill",
    code: codes[`USD`],
    issued: 1976,
    value: 2,
    description: "The current design of this bill began being issued & printed in 1976. Two-dollar bills do not circulate as well as other denominations of U.S. currency. This comparative scarcity in circulation, coupled with a lack of public knowledge that the bill is still in production and circulation, has also inspired urban legends about its authenticity and value and has occasionally created problems for those trying to use the bill to make purchases.",
    link: "https://en.wikipedia.org/wiki/United_States_two-dollar_bill",
  },
  {
  obverse:"/numismatics-img/480px-2021-P_US_Quarter_Obverse.jpg",
  reverse:"/numismatics-img/488px-1976_Bicentennial_Quarter_Rev.png",
  name:"United States Bicentennial Washington quarter coin",
  code: codes[`USD`],
  issued: 1976,
  value: 0.25,
  description: "A Washington quarter minted as part of a set of circulating commemorative coins celebrating the Bicentennial of the United States of America.",
  link: "https://en.wikipedia.org/wiki/United_States_Bicentennial_coinage",
},
{
  obverse:"/numismatics-img/480px-2021-P_US_Quarter_Obverse.jpg",
  reverse:"/numismatics-img/2014-ATB-Proof-Arches-rev-200.png",
  name:"United States America the Beautiful Utah Washington quarter coin",
  code: codes[`USD`],
  issued: 2014,
  value: 0.25,
  description: "A Washington quarter minted as part of the America the Beautiful series of 2010-2021. This one for Utah's Arches National Park depicts Delicate Arch with the La Sal Mountains in the distance.",
  link: "https://en.wikipedia.org/wiki/America_the_Beautiful_quarters",
},
{
  obverse:"/numismatics-img/480px-2021-P_US_Quarter_Obverse.jpg",
  reverse:"/numismatics-img/2014-ATB-Proof-Great-Sand-Dunes-rev-200.png",
  name:"United States America the Beautiful Colorado Washington quarter coin",
  code: codes[`USD`],
  issued: 2014,
  value: 0.25,
  description: "A Washington quarter minted as part of the America the Beautiful series of 2010-2021. This one for Colorado's Great Sand Dunes National Park and Preserve depicts a father and son playing on the banks of a creek, with sand dunes and the Sangre de Cristo Mountains in the background.",
  link: "https://en.wikipedia.org/wiki/America_the_Beautiful_quarters",
},
// {
//   obverse:"",
//   reverse:"",
//   name:"",
//   code: "",
//   issued: 0,
//   value: 0.25,
//   description: "",
//   link: "",
// },
];