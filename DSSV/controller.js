// viet function nhan vao array va render table

function renderDSSV(dssv) {
  //tao bien chua danh sach the tr
  var contentHTML = "";
  // tao dang sach chuoi tr chua thong tin object sv
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    var trString = `
    <tr>
    <td>${sv.ma} </td>
    <td> ${sv.ten}</td>
    <td>${sv.email} </td>
    <td>${sv.tinhDTB()}</td>
    <td> 
    <button onclick=xoaSv("${sv.ma}") class="btn btn-success">
    Xóa
    </button>
    <button onclick=suaSv("${sv.ma}") class="btn btn-success">
    Sửa
    </button>
    </td>
    </tr>
    `;
    contentHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

// JSON.Stringify : convert array => string
// JSON.parse : convert string => array

// localStorage.getItem : luu du lieu dang string xuong local storage

// localStorage.setItem : lay du lieu tu localStorage

// Luu mang DSSV xuong local storage: convert array => string => luu xuong => localStorage.setItem(key.value)

// luc render: lay du lieu tu local storage len: localStorage.getItem(key.value) => convert string => mang - array => renderDSSV

// viet function hienThiThongTin

function hienThiThongTin(data) {
  document.getElementById("txtMaSV").value = data.ma;
  document.getElementById("txtTenSV").value = data.ten;
  document.getElementById("txtEmail").value = data.email;
  document.getElementById("txtPass").value = data.matKhau;
  document.getElementById("txtDiemToan").value = data.toan;
  document.getElementById("txtDiemLy").value = data.ly;
  document.getElementById("txtDiemHoa").value = data.hoa;
}

// viet function layThongTinSinhVien

function layThongTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = Number(document.getElementById("txtDiemToan").value);
  var ly = Number(document.getElementById("txtDiemLy").value);
  var hoa = Number(document.getElementById("txtDiemHoa").value);
  // tao object tu class sinh vien
  var sv = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
  return sv;
}
