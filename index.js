const axios = require('axios');
const readline = require('readline');

// URL'yi oluşturan fonksiyon
function buildApiUrl(sehir, ilce) {
  return `https://kadir.studio/api/eczane/${sehir}/${ilce}`;
}

// Verileri çekme fonksiyonu
async function fetchEczaneBilgileri(sehir, ilce) {
  const apiUrl = buildApiUrl(sehir, ilce);
  try {
    const response = await axios.get(apiUrl);
    const eczaneler = response.data;
    console.log(eczaneler);
  } catch (error) {
    console.error('Veri çekme sırasında hata oluştu:', error);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//kadir studio
rl.question('Lütfen şehir adını girin: ', (sehir) => {
  rl.question('Lütfen ilçe adını girin: ', (ilce) => {
    fetchEczaneBilgileri(sehir, ilce);
    rl.close();
  });
});
