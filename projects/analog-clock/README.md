# ⏱️ Relógio Analógico Moderno — HTML, CSS e JavaScript

Este projeto é um **relógio analógico funcional**, desenvolvido com HTML, CSS e JavaScript puro.
Ele utiliza técnicas modernas de interface, efeito de vidro (glassmorphism) e posicionamento matemático para numerais e ponteiros.

O objetivo é demonstrar:

* Manipulação de transformações em CSS (`rotate`, `transform-origin`)
* Posicionamento circular usando variáveis CSS (`--i`)
* Cálculo da hora em tempo real via JavaScript
* Estrutura e estilização moderna para elementos HTML

---

## 🚀 Funcionalidades

✔ Relógio totalmente funcional
✔ Ponteiros animados em tempo real (horas, minutos e segundos)
✔ Design moderno usando glassmorphism
✔ Números posicionados dinamicamente em volta do círculo
✔ Ponteiros alinhados ao centro usando `transform-origin`
✔ Código limpo, organizado e fácil de entender

---

## 🧠 Como funciona

### 🔹 1. Posicionamento dos números

Cada número recebe uma variável CSS:

```html
<div class="number" style="--i:1;"><b>1</b></div>
```

E é rotacionado através de:

```css
transform: rotate(calc(30deg * var(--i)));
```

Assim, os 12 números se distribuem automaticamente no formato circular.

---

### 🔹 2. Mantendo o número “em pé”

O texto dentro do número é rotacionado ao contrário:

```css
transform: rotate(calc(-30deg * var(--i)));
```

Isso evita que os números fiquem de lado.

---

### 🔹 3. Ponteiros com ponto de rotação central

Os ponteiros usam:

```css
transform-origin: 50% 100%;
bottom: 50%;
```

Isso garante que o ponto de rotação fique exatamente no centro do relógio, como em um relógio real.

---

### 🔹 4. Atualização do relógio

O JavaScript calcula:

* 6° por segundo → ponteiro de segundos
* 6° por minuto + fração de segundo → ponteiro de minutos
* 30° por hora + fração de minuto → ponteiro de horas

Exemplo:

```js
const hDeg = hours * 30 + (minutes * 0.5);
```

A atualização ocorre a cada 1000 ms:

```js
setInterval(updateClock, 1000);
```

---

## 📂 Estrutura do Projeto

```
/
├── index.html
└── README.md
```

Todo o projeto funciona em um único arquivo HTML.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estrutura do relógio
* **CSS3** — Estilização, efeitos, posicionamento e animações
* **JavaScript** — Lógica de cálculo e atualização do tempo

---

## 📌 Como usar

Basta abrir o arquivo `index.html` em qualquer navegador moderno.

Não requer servidor, frameworks ou dependências externas.
