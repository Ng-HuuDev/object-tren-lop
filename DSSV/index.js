//
var DSSV = [];
var dataJson = localStorage.getItem("DSSV_JSON");
if (dataJson !== null) {
  var dataArr = JSON.parse(dataJson);
  DSSV = dataArr.map(function (item) {
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matkhau,
      item.toan,
      item.ly,
      item.hoa
    );
    return sv;
  });
  renderDSSV(DSSV);
}
// var svArr = JSON.parse(dataJson);
// renderDSSV(svArr);
function themSv() {
  // 1: Lay thong tin sinh vien tu form - input
  // var ma = document.getElementById("txtMaSV").value;
  // var ten = document.getElementById("txtTenSV").value;
  // var email = document.getElementById("txtEmail").value;
  // var matKhau = document.getElementById("txtPass").value;
  // var toan = Number(document.getElementById("txtDiemToan").value);
  // var ly = Number(document.getElementById("txtDiemLy").value);
  // var hoa = Number(document.getElementById("txtDiemHoa").value);
  // 2: tao doi tuong sinh vien
  // var sv = {
  //   ma: ma,
  //   ten: ten,
  //   email: email,
  //   matKhau: matKhau,
  //   toan: toan,
  //   ly: ly,
  //   hoa: hoa,
  //   tinhDTB: function () {
  //     return (this.toan + this.ly + this.hoa) / 3;
  //   },
  // };

  // validate trc khi add

  // kiemTraRong(sv.ma, "spanMaSV");
  var sv = layThongTinTuForm();
  var sv = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
  // 3: them sinh vien vao DSSV
  DSSV.push(sv);
  console.log("🚀 ~ themSv ~ sv:", sv);

  // luu xuong localStorage
  var dataJson = JSON.stringify(DSSV);
  localStorage.setItem("DSSV_JSON", dataJson);

  // 4: render ra danh sach sinh vien
  renderDSSV(DSSV);
}

function xoaSv(id) {
  // splice (vi tri, so luong phan tu can xoa)
  // tim vi tri can xoa  => dung findindex
  var index = DSSV.findIndex(function (item) {
    return item.ma == id;
  });
  console.log("🚀 ~ index ~ index:", index);
  DSSV.splice(index, 1);
  // Cap nhat lai danh sach layout sau khi xoa

  renderDSSV(DSSV);
}

// sua Sinh vien

function suaSv(id) {
  // alert("us");
  // id => tim ra index => lay ra object sinh vien can sua => hien thi len form

  var index = DSSV.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = DSSV[index];
  // hien thi len form
  hienThiThongTin(sv);
  document.getElementById("txtMaSV").disabled = true;
}

// reset

// cap nhap sv

function capNhatSv() {
  var sv = layThongTinTuForm();
  var index = DSSV.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  DSSV[index] = sv;
  // render lai layout sau khi update
  renderDSSV(DSSV);
}
