# Cifra de César

## Índice

* [1. Usuario final](#1-Usuario-final)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Como utilizar](#2-Como-utilizar)

***

## 1. Prefácio
O projeto foi criado pensando em delatores dentro da câmara ou até mesmo familiares com informações sobre políticos que estejam infringindo a lei ou envolvido com milicias e esquemas criminosos. Um contato anonimo direto com juizes e/ou imprensa, com mensagem criptografada para que somente o destinatário 
tenha acesso ao conteúdo da mensagem.  

## 2. Resumo do projeto

Comecei estudando um pouco sobre JS , organizando ideias pra depois começar o projeto em si. Enfrentei muitas dificuldades na hora de colocar o projeto em prática pois a logica foi algo que me deixou muito confusa, mas com a ajuda das meninas do squad e dos mentores, a logica foi fazendo sentido a ponto de eu conseguir entender. Foi desafiador.

## 3. Como utilizar

O usuario poderá inserir uma mesagem a ser cifrada juntamente com o numero de deslocamento do qual ele achar necessário, tendo o resultado da frase cifrada na tela. Assim como também podendo decifrar a frase que receber.


### Scripts / Arquivos

* `README.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve estar
  _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve conter
  dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.