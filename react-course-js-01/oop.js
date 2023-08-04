//NESNELER (OBJECTS)

//JavaScript'te her şey bir nesnedir. Nesneler, anahtar-değer çiftleri olarak tanımlanır ve özellikleri ve metotları içerebilir. 
//Örneğin, aşağıdaki kod, bir "Araba" nesnesi oluşturur ve "renk" ve "hız" özelliklerini ve "hızlandır" metodunu içerebilir.


let araba = {
    renk: "mor",
    hız: 0
};
console.log(araba.renk); // "mor"
console.log(araba.hız); // 50

//ÖZELLİKLER (PROPERTY)

//JavaScript'te nesneler içinde bulunan özelliklere "property" denir. 
//Propertyler, nesnenin özellikleri, bilgileri, gibi durumları saklar.

//Arabanın rengi, modeli, hızı bu gibi değerlere Özellik "property" denir.

//METHODLAR (METHODS)

let araba = {
    renk: "mor",
    hız: 0,
   hızlandır: function() {
        this.hız += 20;
    }
};
araba.hızlandır();
console.log(araba.hız); // 70

//hızlandır methoduna vermiş olduğumuz "20" değeri sayesinde hızımız 50'den 70'e yükseldi.
//Aynı uygulama ile "boya" methodu oluşturarak arabamızın rengini değiştirebiliriz.

//NOT: BU BÖLÜM AŞIRI DERECE ÖZET VERİLMİŞTİR. OOP BU KADAR KISA DEĞİLDİR. SİZLERİN TEKRAR ETMESİ VE DETAYLARINA GİRMESİ TAVSİYE EDİLRİR!!
