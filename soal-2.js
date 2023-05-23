const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const makananKesukaan = ["Ikan", "Wortel", "Biji-bijian"];
let tamp = "";
const data = () => [...hewanBuas, ...hewanJinak];


const pemetaanHewan =  (hewan, makanan) =>{
    const hasilPemetaan = {};
  
    for (let i = 0; i < hewan.length; i++) {
      hasilPemetaan[hewan[i]] = makanan[i];
    }
  
    return hasilPemetaan;
  }

console.log(pemetaanHewan(hewanJinak,makananKesukaan));
setTimeout(() => {
    console.log(data());
}, 5000);
