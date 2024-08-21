var listProduct = [
  {
    name: "Product Paradigm Supervisor",
    price: "13.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    id: "1",
  },
  {
    name: "Senior Applications Associate",
    price: "757.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    id: "2",
  },
  {
    name: "National Accounts Officer",
    price: "521.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    id: "3",
  },
  {
    name: "Lead Communications Planner",
    price: "210.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    id: "4",
  },
  {
    name: "Principal Paradigm Associate",
    price: "333.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    id: "5",
  },
  {
    name: "Regional Paradigm Developer",
    price: "227.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    id: "6",
  },
  {
    name: "Direct Division Engineer",
    price: "715.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    id: "7",
  },
  {
    name: "Forward Interactions Associate",
    price: "64.00",
    img: "https://loremflickr.com/640/480/cats",
    description: "The Football Is Good For Training And Recreational Purposes",
    id: "8",
  },
  {
    name: "Future Configuration Facilitator",
    price: "851.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "9",
  },
  {
    name: "National Configuration Coordinator",
    price: "17.00",
    img: "https://loremflickr.com/640/480/cats",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    id: "10",
  },
];

// in ra danh sach san pham

// for (var i = 0; i < listProduct.length; i++) {
//   var product = listProduct[i];
//   console.log("🚀 ~ product:", product.name);
// }

// duyet mang bang forEach

listProduct.forEach(function (item) {
  console.log("🚀 ~ item:", item.name, item.price * 1);
});

// filter: loc ra ca san pham thoa man dieu kien va tra ve mang moi

// loc ra cac san pham co gia lon hon 500

var newListProduct = listProduct.filter(function (item) {
  return item.price > 500;
});
console.log("🚀 ~ newListProduct ~ newListProduct:", newListProduct);

// map duyet mang va tra ve mang moi, thuong dung de convert du lieu

// tao ra mang moi chua ten san pham

var listName = listProduct.map(function (item) {
  return item.name;
});
console.log("🚀 ~ listName ~ listName:", listName);
