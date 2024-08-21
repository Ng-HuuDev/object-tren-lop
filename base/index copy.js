// object: dùng dề mổ ta các thông tin của 1 đối tượng

// tạp object mô tả con mèo

var cat1 = {
  // key: value,
  name: "tom",
  colors: "yellow",
  age: 2,
};
console.log("🚀 ~ cat1:", cat1);

// dung key de truy cap vao value
var name = cat1.name; // hoac su dung: console.log("🚀 ~ cat1:", cat1.name);

// update object

cat1.color = "black";
console.log("🚀 ~ cat1:", cat1);

var cat2 = {
  // thuoc tinh: gia tri

  name: "jerry",

  // phuon thuc:  function

  speak() {
    console.log("meo meo");
    return "ys";
  },
};

console.log(cat2.speak());

// 2 nhom du lieu

// pass by value: number, string,boolean
var a = 5;
console.log("🚀 ~ a:", a);
var b = a;
b = 10;

// pass by reference: object, array

var dog1 = {
  color: "white",
};
var dog2 = dog1;
dog2.color = "black";
console.log("🚀 ~ dog1:", dog1);
