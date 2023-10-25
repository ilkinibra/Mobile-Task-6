//#hometask #js 
//5 dəqiqəyə kimi işləyən saniyə ölçən yazın. Onluq ədəd olduqda qarşısına 0 əlavə edib console çıxardın. Vaxt sayımı kodun run olunan vaxtdan sonra başlanmalıdı.
//Məsələn:
//Hal-hazırda vaxt 19:10:05 dir. Sayım 10:05 dən başlayıb 15:05 də bitməlidir.

function saniyeOlcen() {
    const basla = new Date();
    const baslaSaniye = basla.getSeconds() + basla.getMinutes() * 60 + basla.getHours() * 3600;

    console.log("Başlama Vaxti:", basla.toLocaleTimeString());
    const sonSaniye = baslaSaniye + 5 * 60;
    const interval = setInterval(() => {
        const hazirkiVaxt = new Date();
        const kecenSaniye = hazirkiVaxt.getSeconds() + hazirkiVaxt.getMinutes() * 60 + hazirkiVaxt.getHours() * 3600;
        console.log("Cari Vaxt:", hazirkiVaxt.toLocaleTimeString());
        if (kecenSaniye >= sonSaniye) {
            clearInterval(interval);
            console.log("Sayim başa çatdi.");
        }
    }, 1000);
}
saniyeOlcen();