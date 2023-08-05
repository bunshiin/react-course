# React: Sıfırdan Kurulum ve İlk Projeniz

Bu rehberde, React framework'ünü sıfırdan nasıl kuracağınızı ve ilk React projesini nasıl oluşturup başlatacağınızı öğreneceksiniz.

## Adım 1: Node.js ve npm Kurulumu

React projeleri oluşturmak için Node.js ve npm'i bilgisayarınıza kurmanız gerekmektedir. [Node.js indirme sayfası](https://nodejs.org/) üzerinden en son sürümü indirip kurabilirsiniz. npm (Node Package Manager), Node.js ile birlikte gelir.

## Adım 2: Yeni Bir React Projesi Oluşturma

1. Komut satırını açın ve projenizi oluşturmak istediğiniz dizine gidin:

```bash
cd proje-dizini
```

2. Yeni bir React projesi oluşturmak için aşağıdaki komutu çalıştırın:

```bash
npx create-react-app ilk-react-projesi
```


Bu komut, "ilk-react-projesi" adında yeni bir dizin oluşturacak ve içine temel React proje yapısını yerleştirecektir.

3. Proje klasörüne gidin:

```bash
cd ilk-react-projesi
```


## Adım 3: React Projesini Başlatma

1. Projenizi başlatmak için aşağıdaki komutu kullanın:

```bash
npm start
```


Bu komut, projenizi geliştirme modunda başlatacak ve otomatik olarak bir tarayıcı penceresi açacaktır. Tarayıcıda `http://localhost:3000` adresine giderek projenizi görebilirsiniz. Ayrıca, kaynak dosyalarında herhangi bir değişiklik yaptığınızda otomatik olarak yeniden yükleme yapılacaktır.

## Adım 4: İlk Değişiklikleri Yapma

1. Proje klasöründeki `src` dizini içerisinde bulunan `App.js` dosyasını açın. Bu dosya, varsayılan olarak oluşturulan React uygulamasının ana bileşenini içerir.

2. `App.js` içeriğini düzenleyerek bir değişiklik yapın. Örneğin:

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>İlk React Projeniz</h1>
      <p>Merhaba, React!</p>
    </div>
  );
}

export default App;
```

![React Logo](https://wallpapercave.com/wp/wp4923992.png)





