# React İlk Bileşen Örneği

Bu proje, React kullanarak basit bir bileşen oluşturmayı ve kullanmayı gösteren bir örnektir.


Tarayıcınızda örnek uygulamayı görüntülemek için [http://localhost:3000](http://localhost:3000) adresine gidin.

## Proje Yapısı

- `src` klasörü, uygulamanın kaynak kodlarını içerir.
- `App.js` dosyasının adını, `App.jsx` olarak değiştirelim.
- `logo.svg` ve `App.css` dosyaları, uygulama tasarım öğelerini içerir.

## İlk Bileşen Nasıl Kullanılır?

Projenin temel bileşeni olan `App.jsx` içinde, `FirstCompenent` adlı bir bileşeni çağırarak kullanabilirsiniz. İşte nasıl yapıldığına dair bir örnek:

```jsx
import logo from './logo.svg';
import './App.css';


//FirstCompenent isminde bir bileşen oluşturuyoruz.
function FirstCompenent() {
  return(
    <div>
      <span>FirstCompenent</span>
    </div>
    
  )
}


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Muhammet Bulut
        </p>
             {/* Oluşturduğumuz bu bileşeni burada çağırarak "FirstCompenent" yazısını yazdırmamıza yaradı. */}

        <FirstCompenent />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Kursumuz
        </a>
      </header>
    </div>
  );
}

export default App;

```
