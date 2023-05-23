
let objek = {
    nama: "aliya Rohaya Siregar",
    nim: "02042111005",
    email: "aliyarohayasiregar123@gmail.com",
  };

  let { nama, nim, email } = objek;
  console.log(nama);
  console.log(nim);
  console.log(email);

  const t1 = ["maypa", "bunga"];
  const t2 = ["nanda", "fauji"];
  const t3 = ["amel", "avita"];
  
  const bestt = [...t1, ...t2, ...t3];
  console.log(bestt);