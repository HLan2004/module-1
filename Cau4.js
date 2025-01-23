class KhachHang {
    constructor(name, id, pNumber, address, mail) {
        this.name = name;
        this.id = id;
        this.number = pNumber;
        this.address = address;
        this.mail = mail;
    }
}

let cus1 = new KhachHang("Nguyễn Hoàng Lân","2a13", "0956478475","Sơn La", "lan@gmail.com");
let cus2 = new KhachHang("Trần Anh Thư","2a14", "069760797","Hà Nội", "thu@gmail.com");

let cusList = [];
cusList.push(cus1,cus2);

function displayStd(){
    let tb = document.getElementById("tb");
    let data = "";
    for(let i = 0; i < cusList.length; i++){
        data += `
      <tr>
        <td>${cusList[i].name}</td>
        <td>${cusList[i].id}</td>
        <td>${cusList[i].number}</td>
        <td>${cusList[i].address}</td>
        <td>${cusList[i].mail}</td>
        <td><button onclick="edit(${i})">Edit</button>
            <button onclick="deleted(${i})">Delete</button>
        </td>
      </tr>`;
    }
    tb.innerHTML = data;
}

displayStd();

function addCustomer(){
    let name = document.getElementById("customer-name").value;
    let id = document.getElementById("customer-id").value;
    let number = document.getElementById("customer-number").value;
    let address = document.getElementById("customer-address").value;
    let mail = document.getElementById("customer-mail").value;

    let std = new KhachHang(name, id, number, address, mail);
    cusList.push(std);

    displayStd();
    document.getElementById("customer-form").reset();
}

function edit(i){
    document.getElementById("customer-name").value = cusList[i].name;
    document.getElementById("customer-id").value = cusList[i].id;
    document.getElementById("customer-number").value = cusList[i].number;
    document.getElementById("customer-address").value = cusList[i].address;
    document.getElementById("customer-mail").value = cusList[i].mail;

    cusList.splice(i, 1);
}

function deleted(i){
    if (confirm(`Bạn có muốn xóa sản phẩm "${cusList[i].name}" này không?`)) {
        cusList.splice(i, 1);
        displayStd();
    }
}