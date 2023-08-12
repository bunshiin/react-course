# React Propslar

Bu depo, React kursunuzun bir parçası olarak "props" kavramını anlamanıza yardımcı olmak için tasarlanmıştır.

## Props Nedir?

React'ta "props" (properties), bileşenler arasında veri iletişimini sağlayan bir mekanizmadır. Bileşenler, dışarıdan aldıkları verilere göre içeriklerini dinamik olarak oluşturabilirler.

## Props Kullanımı

Bir bileşene props geçmek ve kullanmak için aşağıdaki adımları takip edebilirsiniz:

1. Bileşeni kullanırken, prop'ları ilgili isimlerle iletebilirsiniz:


```jsx
<Welcome name="Muhammet"/>
```

2. Bileşen içinde props'u kullanarak dinamik içerik oluşturabilirsiniz:

```jsx
function Welcome(props) {
  return <h1>Merhaba, {props.name}</h1>;
}
```
# Örnekler
Temel Kullanım

```jsx
function Greeting(props) {
  return <p>Merhaba, {props.name}! Yaşınız: {props.age}</p>;
}

const element = <Greeting name="Muhammet" age={17} />;
```
# Fonksiyonları Props Olarak Geçme
Temel Kullanım
```jsx
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

function handleClick() {
  alert("Butona tıklandı!");
}

const element = <Button label="Tıkla" onClick={handleClick} />;

```

