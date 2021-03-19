// Pada tugas ini kamu harus bisa membuat aplikasi yang menentukan mana nilai genap dan mana nilai ganjil.Contoh = jika 6 maka program akan mencetak "genap" atau "3" makan akan mencetak "ganjil"

let n=100
function oddEvenNumber(n){
    for(i=1; i<=n; i++){
        if (i%2==0){
            console.log(`${i} is an even number`)
        }else{
            console.log(`${i} is an odd number`)
        }
    }
}
oddEvenNumber(n)