function lamTronDiem(diem) {
    if (diem < 48) {

        return diem;
    } else {

        let boiSoTiepTheo = Math.ceil(diem / 5) * 5;

        if (boiSoTiepTheo - diem < 3) {

            return boiSoTiepTheo;
        } else {

            return diem;
        }
    }
}


let diem = prompt("Nhập điểm của học sinh (0-100):");


while (isNaN(diem) || diem < 0 || diem > 100) {
    diem = prompt("Điểm nhập vào không hợp lệ. Nhập lại điểm của học sinh (0-100):");
}


let diemSauKhiLamTron = lamTronDiem(parseInt(diem));


document.write("Điểm của học sinh: " + diem + "<br>");
document.write("Điểm sau khi làm tròn: " + diemSauKhiLamTron + "<br>");


if (diemSauKhiLamTron < 50) {
    document.write("Kết quả: Trượt");
} else {
    document.write("Kết quả: Đậu");
}