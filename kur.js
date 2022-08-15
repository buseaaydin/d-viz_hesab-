function doviz() {

var birim = document.getElementById('birim').value; // girilen birinci birimi htmlden çekiyor 
var birim2 = document.getElementById('birim2').value; // girilen ikinci birimi htmlden çekiyor 
var para = document.getElementById('para').value.toString().replace(/,/g,'');// girilen para miktarını htmlden çekiyor 

let veri;

    const config = {
        headers: { Authorization: `apikey 0nvidNynTSaqQx7lntej1i:30ks0DJB1fQKen50sl6A7W` } // apikey collectapi üzerinden güncel kurların verilerine ulaşmak için gerekli
    };
    
    const bodyParameters = {
       key: "value"
    };
    
    axios.post( 
    `https://api.collectapi.com/economy/exchange?int=${para}&to=${birim2}&base=${birim}`, //collectapi exchange sayfasına get komutu yolluyoruz.
      bodyParameters,
      config
    ).then(response => {
        veri = response.data.result.data.map((item)=>{
            return item.calculated
        })
        document.getElementById('para2').value = veri.toString()+' '+birim2;
    })
    
    .catch(error => console.error(error));
};

function tersdoviz(){
var birim = document.getElementById('birim');
var birim2 = document.getElementById('birim2');
tur = birim.selectedIndex;
tur2 = birim2.selectedIndex; 
birim.options[tur2].selected = true;birim2.options[tur].selected = true;
doviz();
}    