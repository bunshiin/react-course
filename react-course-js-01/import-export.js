//import-export methodları sayesinde dosyalar arası iletişimi sağlayıp,
//2 Dosya arasında veri aktarımı yapabiliriz.

// main.js
export const name = "Muhammet";
export const surName = "Bulut";
export const age = 17;


// information.js
import { name, surName, age } from './main.js';
console.log(name); // "Muhammet"
console.log(surName); // "Bulut"
console.log(age); // 17
