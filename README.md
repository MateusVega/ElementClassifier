# ElementClassifier
ElementClassifier é uma biblioteca leve em JavaScript que classifica elementos HTML com base no seu tipo de tag. Ela ajuda a identificar se o elemento é um texto, uma divisão (div), uma imagem (img), ou um link (a), entre outros.

## Funcionalidades
###Classifica elementos HTML com base na tag.
###Retorna categorias como Text, Div, Img, ou Link.
###Leve e fácil de integrar.
###Sem dependências externas.

## Como Usar
### 1. Incluir a Biblioteca
Adicione o script da biblioteca ao seu arquivo HTML:

```html
<script src="https://mateusvega.github.io/ElementClassifier/ElementClassifier.mjs"></script>
```
### 2. Classificar um Elemento
Use o método ElementClassifier.classify() para classificar um elemento HTML com base na sua tag. O método retorna uma string representando a categoria do elemento.

Exemplo de uso:

```html
<script>
  const elemento = document.querySelector('h1');  // Selecione um elemento H1
  const categoria = ElementClassifier.classify(elemento);  // Classifique o elemento
  console.log(categoria);  // Resultado: 'Text'
</script>
```
O método classify funciona da seguinte forma:

#### Text: Para elementos de texto como &lt;h1&gt;, &lt;p&gt;, &lt;h2&gt;, etc.
#### Div: Para elementos de bloco como &lt;div&gt;, &lt;span&gt;, &lt;main&gt;, &lt;header&gt;, etc.
#### Img: Para elementos de imagem como &lt;img&gt;.
#### Link: Para elementos de link como &lt;a&gt;.

## 3. Exemplo Completo
Aqui está um exemplo completo de como usar a biblioteca:
```html
html
Copiar código
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo ElementClassifier</title>
</head>
<body>
  <h1>Classificação de Elementos HTML</h1>
  <p>Observe no console o resultado da classificação dos elementos.</p>

  <div id="example">
    <h2>Exemplo de título</h2>
    <a href="#">Exemplo de Link</a>
    <img src="example.jpg" alt="Exemplo de Imagem">
  </div>

  <script src="https://mateusvega.github.io/ElementClassifier/ElementClassifier.mjs"></script>
  <script>
    // Selecione alguns elementos
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const link = document.querySelector('a');
    const img = document.querySelector('img');

    // Classifique os elementos e mostre no console
    console.log(ElementClassifier.classify(h1));  // Resultado: 'Text'
    console.log(ElementClassifier.classify(h2));  // Resultado: 'Text'
    console.log(ElementClassifier.classify(link));  // Resultado: 'Link'
    console.log(ElementClassifier.classify(img));  // Resultado: 'Img'
  </script>
</body>
</html>
```
## Compatibilidade com Navegadores
ElementClassifier é compatível com todos os navegadores modernos.

## Licença
Este projeto é open-source e disponível sob a licença MIT.

Essa documentação e exemplo de uso fornecem uma forma simples e direta de integrar o ElementClassifier em projetos web. Com isso, é possível classificar facilmente os elementos HTML baseados nas suas tags, o que pode ser útil para diversas aplicações como análise de conteúdo ou manipulação dinâmica de páginas.
