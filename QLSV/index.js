function submit() {
  // lay thong tin: input
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var diemToan = Number(document.getElementById("txtDiemToan").value);
  var diemVan = Number(document.getElementById("txtDiemVan").value);
  // Tao object sinh vien

  var sv = {
    ma: ma,
    ten: ten,
    loai: loai,
    diemToantoan: diemToan,
    diemVan: diemVan,
    tinhDTB: function () {
      var dtb = (this.diemToantoan + this.diemVan) / 2;
      return dtb;
    },
    xepLoai: function () {
      if (this.tinhDTB() < 5) {
        return "Rot";
      }
      return "Dau";
    },
  };
  // hien thi thong tin sinh vien ra man hinh
  document.getElementById("spanTenSV").innerHTML = sv.ten;
  document.getElementById("spanMaSV").innerHTML = sv.ma;
  document.getElementById("spanLoaiSV").innerHTML = sv.loai;
  document.getElementById("spanDTB").innerHTML = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerHTML = sv.xepLoai();
}
