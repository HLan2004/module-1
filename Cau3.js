function demCapSo(arr, k) {
    let dem = 0;
    let soDaKiemTra = {};
    for (let i = 0; i < arr.length; i++) {
        let soCanKiemTra = (k - arr[i] % k) % k;
        if (soDaKiemTra[soCanKiemTra]) {
            dem += soDaKiemTra[soCanKiemTra];
        }
        soDaKiemTra[arr[i] % k] = (soDaKiemTra[arr[i] % k] || 0) + 1;
    }
    return dem;
}


let n = prompt("Nhập số phần tử trong mảng (không quá 50):");
while (isNaN(n) || n < 1 || n > 50) {
    n = prompt("Số phần tử không hợp lệ. Nhập lại số phần tử trong mảng (không quá 50):");
}
let arr = [];
for (let i = 0; i < n; i++) {
    let so = prompt("Nhập phần tử thứ " + (i + 1) + ":");
    while (isNaN(so)) {
        so = prompt("Phần tử không hợp lệ. Nhập lại phần tử thứ " + (i + 1) + ":");
    }
    arr.push(parseInt(so));
}


let k = prompt("Nhập số k:");
while (isNaN(k) || k < 1) {
    k = prompt("Số k không hợp lệ. Nhập lại số k:");
}
k = parseInt(k);


let ketQua = demCapSo(arr, k);


document.write("Mảng số nguyên: ");
document.write(arr + "<br>");
document.write("Số nguyên dương k: " + k + "<br>");
document.write("Số cặp số thỏa mãn yêu cầu: " + ketQua);