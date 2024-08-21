// object dung de mo ta cac thong tin cua mot doi tuong nao do

// tao object mo ta con meo

var cat1 = {
  // key: value,
  name: "tom",
  color: "red",
  age: "3",
};
console.log("🚀 ~ cat1:", cat1);

// dung ket de truy cap vao value

console.log("name", cat1.name);

// update object

cat1.color = "black";
console.log("🚀 ~ cat1:", cat1);

var cat2 = {
  // thuoc tinh: gia tri
  name: "jerry",

  // phuong thuc :function
  speak() {
    alert("Meo meo");
    return "yes";
  },
};

// 2 nhom du lieu

// pass by value: number. string, boolean

var a = 5;
var b = 10;
b = 10;
console.log("🚀 ~ a:", a);

// pass by reference: object, array

var dog1 = {
  color: "white",
};
var dog2 = dog1;

// lop doi tuong

// tao lop doi tuong con meo

function Cat(_name, _color) {
  this.name = _name;
  this.color = _color;
  this.speak = function () {};
  console.log("meo meo");
}

// tao doi tuong tu lop doi tuong

var cat1 = new Cat("tom", "red");
var cat2 = new Cat("jerry", "black");
console.log("🚀 ~ cat1:", cat1);
console.log("🚀 ~ cat2:", cat2);
