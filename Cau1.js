
function kiemTraSoPhanTu(number) {
    if (number <= 0 || number > 20) {
        alert("Số phần tử phải lớn hơn 0 và không vượt quá 20.");
        return false;
    }
    return true;
}


function kiemTraBoiChung(so) {
    if (so % 3 === 0 && so % 5 === 0) {
        return true;
    }
    return false;
}


function tinhTongBoiChung(mang) {
    let tong = 0;
    for (let i = 0; i < mang.length; i++) {
        if (kiemTraBoiChung(mang[i])) {
            tong += mang[i];
        }
    }
    return tong;
}


function main() {
    let soPhanTu = parseInt(prompt("Nhập số phần tử của mảng (không vượt quá 20):"));
    if (!kiemTraSoPhanTu(soPhanTu)) {
        return;
    }

    let mang = [];
    for (let i = 0; i < soPhanTu; i++) {
        let so = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        mang.push(so);
    }

    document.getElementById("arr").innerHTML = "Mảng vừa nhập :  " + mang;

    let tongBoiChung = tinhTongBoiChung(mang);
    document.getElementById("boi").innerHTML = "Tổng của các số là bội chung của 3 và 5 =  " + tongBoiChung;
}

main();