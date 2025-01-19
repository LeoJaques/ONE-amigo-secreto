# Amigo Secreto - Projeto Web

Este é um projeto simples de uma aplicação para sorteio de amigos secretos. Os usuários podem adicionar nomes à lista, e a aplicação fará o sorteio de forma aleatória.

## 🛠️ Funcionalidades

- Adicionar nomes à lista de amigos.
- Sortear um amigo secreto de forma aleatória.

---

## 🖥️ Pré-requisitos

Para rodar este projeto, você precisará de:

- Um navegador moderno (Google Chrome, Firefox, Edge, etc.).
- Nenhuma dependência adicional é necessária, pois o projeto é puramente front-end.

---

## 🚀 Instalação

1. Faça o download ou clone este repositório:
   ```bash
   git clone https://github.com/LeoJaques/ONE-amigo-secreto.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd amigo-secreto
   ```

3. Abra o arquivo `index.html` diretamente no navegador ou sirva o projeto com uma ferramenta de servidor local (como o Live Server no VS Code).

---

## 🏃‍♂️ Como Executar

1. Abra o arquivo `index.html` no navegador.
2. Digite os nomes dos amigos no campo de entrada e clique em "Adicionar".
3. Após adicionar os amigos, clique no botão "Sortear amigo" para realizar o sorteio.

---

## 💡 Problemas Conhecidos

### Problema: O botão "Adicionar" não funciona ao pressionar a tecla Enter.
- **Causa**: O botão "Adicionar" é implementado com o evento `onclick`, mas a tecla Enter não dispara este evento.

#### Solução:
Utilizar um `<form>` para encapsular o campo de entrada e o botão, garantindo que a tecla Enter envie os dados corretamente.


## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura e semântica.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica de interação e funcionalidades.

---

## 📂 Estrutura de Diretórios

```plaintext
/
├── index.html       # Página principal
├── style.css        # Arquivo de estilos
├── app.js           # Lógica e interações
├── assets/          # Imagens e ícones utilizados
└── README.md        # Este arquivo
```


