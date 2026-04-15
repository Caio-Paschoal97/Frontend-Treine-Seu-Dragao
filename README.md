# 🐲 Frontend - Treine Seu Dragão

Aplicação web para gerenciar registros de treinamento de dragões, consumindo uma API REST.

---

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (Vanilla)
* Fetch API
* PWA (Progressive Web App)

---

## 📁 Estrutura do Projeto

```
frontend/
├── index.html
├── app.js
├── style.css
├── manifest.json
└── icons/
```

---

## ⚙️ Configuração

1. Clone o repositório:

```
git clone <URL_DO_REPOSITORIO>
```

2. Abra o arquivo `app.js` e configure a URL da API:

```js
const API_URL = 'https://sua-api.onrender.com/api/entries';
```

---

## ▶️ Como rodar

Você pode simplesmente abrir o arquivo:

```
index.html
```

Ou usar uma extensão como:

* Live Server (VS Code)

---

## 🧠 Funcionalidades

* Criar registros de dragões
* Listar registros
* Editar registros
* Excluir registros
* Atualização em tempo real
* Interface amigável com Bootstrap

---

## 📱 PWA

O projeto possui suporte básico a Progressive Web App:

* Manifest configurado
* Ícone personalizado
* Pode ser instalado no navegador

---

## 🔄 Integração com Backend

O frontend se comunica com a API via:

```
GET, POST, PUT, DELETE
```

Utilizando `fetch()`.

---

## ⚠️ Possíveis Problemas

### ❌ Erro de CORS

Verifique se o backend está com:

```js
app.use(cors());
```

### ❌ API não responde

* Verifique se o backend está rodando
* Confira a URL da API

---

## 🎨 Interface

* Layout com Bootstrap
* Responsivo
* Simples e direto

---

## 👨‍💻 Autor

Caio Victor de Moura Paschoal
