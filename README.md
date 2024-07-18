# Rick and Morty

Sumário:

1. [introdução](#introdução)
1. [Documentação](#documentação)
1. [Paleta de cores](#paleta-de-cores)
1. [Estratégia](#estratégia)
1. [To-Do List](#to-do-list)
1. [Tabela de estudos](#tabela-de-estudos)

## Introdução

![Cartaz do título de abertura da série Rick and Morty](https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_(cropped).png)

Página web com ituito de aprendizado de front-end consumindo uma API externa.
O conceito básico é criar card do desenho animado "Rick and Morty" usando a API do site: [The Rick and Morty API](https://rickandmortyapi.com/).

## Descrição do desenho

 > "Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.
>
> A série se originou de uma paródia animada em curta-metragem do filme De Volta Para o Futuro criada por Roiland para o festival de cinema Channel 101.
>
> O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. As aventuras de Rick e Morty ocorrem em um número infinito de realidades, com os personagens viajando para outros planetas e dimensões através de portais usando o veículo voador de Rick.
>
> Rick é um cientista louco excêntrico e alcoólatra, que evita muitas convenções costumeiras como escola, casamento, amor e família. Ele frequentemente vai em aventuras com seu neto de 14 anos de idade, Morty, um menino de bom coração, mas que também fica facilmente angustiado, cuja bússola moral ingênua mas fundamentada funciona em contraponto ao ego maquiavélico de Rick. A irmã de Morty, Summer, de 17 anos, é uma adolescente mais convencional, que se preocupa em melhorar seu status social entre seus colegas e às vezes acompanha Rick e Morty em suas aventuras. A mãe das crianças, Beth, é uma pessoa geralmente equilibrada e uma força assertiva no lar, embora consciente de seu papel profissional como médica cirurgiã especializada em cavalos. Ela está insatisfeita com seu casamento com Jerry, uma pessoa insensata e de mente simples, que constantemente desaprova a influência de Rick sobre sua família."
>
> [Wikipédia](https://pt.wikipedia.org/wiki/Rick_and_Morty)

## Documentação

A documentação se encontra no site: [Docs](https://rickandmortyapi.com/documentation)
> "Esta documentação ajudará você a se familiarizar com os recursos da API de Rick and Morty e mostrará como fazer diferentes consultas, para que você possa aproveitá-la ao máximo. (Translate)".

## Paleta de cores

As paletas de cores foram inspiradas a partir do blog [Outsider Data Science](https://outsiderdata.blog/posts/2019-02-04-rick-and-morty-palettes/2019-02-04-rick-and-morty-palettes.html) ou [GitHub](https://github.com/apsteinmetz/images-to-pal), criado por @Art Steinmetz.

As cores pincipais foram advindas da imagem "Portal" e se necessário cores adicionais e secundária da imagem "Outdoor".

![Tabela de paletas](https://github.com/apsteinmetz/images-to-pal/blob/master/README_files/figure-markdown_strict/unnamed-chunk-11-1.png)

|Portal |Outdoor|
|:-----:|:-----:|
|![#303055](https://placehold.it/160x40/303055/FFFFFF?text=303055)|![#36445C](https://placehold.it/160x40/36445C/FFFFFF?text=36445C)|
|![#448A32](https://placehold.it/160x40/448A32/FFFFFF?text=448A32)|![#217F31](https://placehold.it/160x40/217F31/FFFFFF?text=217F31)|
|![#6FC41C](https://placehold.it/160x40/6FC41C/FFFFFF?text=6FC41C)|![#9D534A](https://placehold.it/160x40/9D534A/FFFFFF?text=9D534A)|
|![#9ECB0E](https://placehold.it/160x40/9ECB0E/FFFFFF?text=9ECB0E)|![#43C53C](https://placehold.it/160x40/43C53C/FFFFFF?text=43C53C)|
|![#92C752](https://placehold.it/160x40/92C752/000000?text=92C752)|![#5AC1B8](https://placehold.it/160x40/5AC1B8/000000?text=5AC1B8)|
|![#E5EC2E](https://placehold.it/160x40/E5EC2E/000000?text=E5EC2E)|![#C6C199](https://placehold.it/160x40/C6C199/000000?text=C6C199)|
|![#B5C1C3](https://placehold.it/160x40/B5C1C3/000000?text=B5C1C3)|![#72CEFA](https://placehold.it/160x40/72CEFA/000000?text=72CEFA)|
|![#ECE58F](https://placehold.it/160x40/ECE58F/000000?text=ECE58F)|![#9FE4EFZ](https://placehold.it/160x40/9FE4EFZ/000000?text=9FE4EF)|

## Estratégia

- Criar um card na proporção 16:9.
- O card terá Título, corpo e rodapé.
- O título será "Rick & Morty".
- O corpo terá Imagem, descrição e botão.
- O corpo terá a imagem do personagem no topo.
- O corpo terá a descrição do personagem no meio.
- O corpo terá o botão na base.
- O rodapé será um link para o GitHub.
- O botão sorteará um personagem aleatório.
- Será obtido dados de um personagem aleatório da API.
- O título terá uma animação de um raio.
- A imagem terá uma animação de um portal.
- O botão terá uma animação de tiro laser.

## To-Do List

Lista de tarefas concluidas e futuras para manter o histórico de afazeres.

- [x] Criar repositório no GitHub.
- [x] Criar Readme.md.
- [x] Editar Readme.md.
- [x] Criar arquivos Index.html, script.js e style.css.
- [x] Definir tamanho de tela na proporção 9:16 (smartphone).
- [x] Estudar lógica de tamanho adaptável para tela widescreen.
- [x] Estudar max-size do CSS.
- [x] Criar paleta de cores verde e azul conforme o desenho.
- [x] Procurar fonte customizada parecida com a do desenho no Google fonts.
- [x] Como fazer um contorno em CSS puro.
- [x] Procurar ícones de sexo no Google fonts.
- [x] Pegar o tamanho da imagem (300p) da API.
- [x] Definir o layout dos dados.
- [x] Estudar conexão com API (ansy com try/catch, ou promisse com then).
- [x] Obter link da API.
- [x] Obter quantidade de personagens.
- [x] Procurar CSV do portal do desenho.
- [x] Usar .png para o portal (CSV inexistênte).
- [x] Inserir conteúdo na div dinamicamente.
- [x] Criar função para sortear o número do personagem.
- [x] Obter JSON do personagem sorteado.
- [x] Estudar async/await vs. promisse/then.
- [x] Inserir inputs do personagem sorteado.
- [x] Traduzir inputs do personagem sorteado.
- [x] Desfazer tradução (incompatível com os nomes dos personagens adotados no Brasil).
- [x] Criar grid layout com os dados obtidos da API.
- [x] Redimensionar conteúdos.
- [x] Estudar sobre animações.
- [x] Fazer o JS animar gif de raio.
- [x] Adicionar efeito sonoro ao raio.
- [x] Adicionar icone da página.
- [x] Fazer o JS da animação do portal girando
- [x] Fazer o JS ampliar o portal.
- [x] Fazer o JS esmaecer o portal.
- [x] Interligar as animações em sequência.
- [x] Sincronizar a inserção de dados após a animação.
- [x] Estudar sobre ponteiro, clique e toque.
- [x] Capturar arraste do ponteiro.
- [ ] Criar animação de tiro de raio laser.
- [ ] Adicionar efeito sonoro ao tiro.
- [ ] Customizar a div e os campos.
- [ ] Verificar capturas de erros.
- [ ] Testar rede e conexão pela ferramenta do browser.
- [ ] Testar uso e vazamento de memória pela ferramenta do browser.
- [ ] Postar no Linkedin e redes sociais.

## Tabela de estudos

Tabela contendo os temas estudados, junto com os links de referências e as durações de estudos.

| Descrição | Link | Duração |
|:----------|:----:|--------:|
||||
||||
