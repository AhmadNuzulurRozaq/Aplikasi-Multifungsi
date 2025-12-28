// Menu 1
function menu1() {
    let menu1 = document.getElementById("menu1Detail").style.display = 'block';
}

function jumlahkan() {
    const a1Jumlah = Number(document.getElementById("a1Jumlah").value);
    const a2Jumlah = Number(document.getElementById("a2Jumlah").value);
    const proses = a1Jumlah + a2Jumlah;
    const output = document.getElementById("outputPenjumlahan").value = proses;
}

function kurangi() {
    const a1Kurang = Number(document.getElementById("a1Kurang").value);
    const a2Kurang = Number(document.getElementById("a2Kurang").value);
    const proses = a1Kurang - a2Kurang;
    const output = document.getElementById("outputPengurangan").value = proses;
}

function kalikan() {
    const a1Kali = Number(document.getElementById("a1Kali").value);
    const a2Kali = Number(document.getElementById("a2Kali").value);
    const proses = a1Kali * a2Kali;
    const output = document.getElementById("outputPerkalian").value = proses;
}

function bagikan() {
    const a1Bagi = Number(document.getElementById("a1Bagi").value);
    const a2Bagi = Number(document.getElementById("a2Bagi").value);
    const proses = a1Bagi / a2Bagi;

    if (a2Bagi == 0) {
        alert("Pembagian tidak bisa dibagi 0 !");
        return;
    }
    const output = document.getElementById("outputPembagian").value = proses;
}
function resetCalculator() {
    document.getElementById("a1Jumlah").value = '';
    document.getElementById("a2Jumlah").value = '';
    document.getElementById("a1Kurang").value = '';
    document.getElementById("a2Kurang").value = '';
    document.getElementById("a1Kali").value = '';
    document.getElementById("a2Kali").value = '';
    document.getElementById("a1Bagi").value = '';
    document.getElementById("a2Bagi").value = '';
    document.getElementById("outputPenjumlahan").value = '';
    document.getElementById("outputPengurangan").value = '';
    document.getElementById("outputPerkalian").value = '';
    document.getElementById("outputPembagian").value = '';
}

function hiddenMenu1() {
    let menu1 = document.getElementById("menu1Detail").style.display = 'none';
}

// Menu 2
function menu2() {
    let menu2 = document.getElementById("menu2Detail").style.display = 'block';
}

function hiddenMenu2() {
    let menu2 = document.getElementById("menu2Detail").style.display = 'none';
}

function tambah() {
    const list = document.getElementById("list");
    const inputList = document.getElementById("inputList").value;
    const spasi = inputList.trim();
    const li = document.createElement("li");
    if (spasi === "") {
        alert("Wajib diisi dan tidak boleh ada spasi !");
        return;
    }
    list.append(li);
    li.append(inputList);
    document.getElementById("inputList").value = "";
}
function resetList() {
    document.getElementById("list").innerHTML = "";
}