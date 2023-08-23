# Rick and Morty

Sumário:
1. [introdução](#introdução)
1. [Documentação](#documentação)
1. [Paleta de cores](#paleta-de-cores)
1. [Estratégia](#estratégia)
1. [To-Do List](#to-do-list)
1. [Tabela de tempo](#tabela-de-tempo)

## Introdução

![Cartaz do título de abertura da série Rick and Morty](https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_(cropped).png)

Página web com ituito de aprendizado de front-end consumindo uma API externa.
O conceito básico é criar card do desenho animado "Rick and Morty" usando a API do site: [The Rick and Morty API](https://rickandmortyapi.com/).


## Descrição do desenho

<blockquote>
    <p>
        "Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.
    </p>
    <p>
        A série se originou de uma paródia animada em curta-metragem do filme De Volta Para o Futuro criada por Roiland para o festival de cinema Channel 101.
    </p>
    <p>
        O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. As aventuras de Rick e Morty ocorrem em um número infinito de realidades, com os personagens viajando para outros planetas e dimensões através de portais usando o veículo voador de Rick.
    </p>
    <p>
        Rick é um cientista louco excêntrico e alcoólatra, que evita muitas convenções costumeiras como escola, casamento, amor e família. Ele frequentemente vai em aventuras com seu neto de 14 anos de idade, Morty, um menino de bom coração, mas que também fica facilmente angustiado, cuja bússola moral ingênua mas fundamentada funciona em contraponto ao ego maquiavélico de Rick. A irmã de Morty, Summer, de 17 anos, é uma adolescente mais convencional, que se preocupa em melhorar seu status social entre seus colegas e às vezes acompanha Rick e Morty em suas aventuras. A mãe das crianças, Beth, é uma pessoa geralmente equilibrada e uma força assertiva no lar, embora consciente de seu papel profissional como médica cirurgiã especializada em cavalos. Ela está insatisfeita com seu casamento com Jerry, uma pessoa insensata e de mente simples, que constantemente desaprova a influência de Rick sobre sua família."
    </p>  
    <a href="https://pt.wikipedia.org/wiki/Rick_and_Morty">
        Wikipédia
    </a>
</blockquote>


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

- Criar um card.
- O card terá o título de "Rick & Morty".
- Obter um personagem aleatório da API.
- O card terá a imagem do personagem no topo.
- O card terá a descrição do personagem na base.
- O card terá um botão de sortear outro personagem.

## To-Do List
Marque as tarefas concluidas!

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
- [x] Obter link da API.
- [x] Obeter quantidade de personagens.
- [ ] Estudar conexão com API (ansy com try/catch, ou promisse com then).
- [x] Procurar CSV do portal do desenho.
- [ ] Se não usar .png.
- [ ] Fazer o JS da animação do portal girando e crescendo.
- [ ] Criar grid com os dados obtidos da API.
- [ ] Customizar a div e os campos.
- [ ] Verificar capturas de erros.
- [ ] Testar rede e conexão pela ferramenta do browser.
- [ ] Postar no Linkedin e redes sociais.


## Tabela de tempo

O tempo é dividio em 4 períodos: madrugada, manhã, tarde e noite, representando os campos Início (I.) e término (T.).
A quantidade de tempor é representada em minutos.
A data é formado por DD/MM/AA.


| Descrição | Início | Data I. | Término | Data T. | Total |
|:----------|-------:|:-------|---------:|:--------|------:|
| Criar repositório no GitHub | manhã | 25/07/23 | manhã  | 25/07/23 | 5min |
| Criar Readme.md | manhã | 25/07/23 | manhã  | 25/07/23 | 5min |
| Editar Readme.md | manhã | 25/07/23 | manhã  | 25/07/23 | 170min |
| Criar arquivos Index.html, script.js e style.css | manhã | 26/07/23 | manhã | 26/07/23 | 30min |
| Definir tamanho de tela na proporção 9:16 | tarde | 26/07/23 | manhã | 27/07/23 | 480min |
| Criar paleta de cores conforme o desenho| manhã | 14/08/23 | manhã |14/08/16 | 120min |
| Procurar fonte customizada | manhã | 15/08/23 | manhã | 16/08/23 | 180min |
|Fazer contorno do título em CSS | manhã | 17/08/23 | manhã | 17/08/23 | 120min |
| Procurar ícones de sexo | manhã | 18/08/23| manhã | 18/08/23 | 150min |
| Pegar o tamanho da imagem da API | manhã | 21/08/23 | manhã | 21/08/23 | 15min |
| Definir o layout dos dados | manhã | 21/08/23 | manhã | 21/08/23 | 90min|
| Obter link da API | tarde | 21/08/23 | manhã | 23/08 | 360min |
| Obeter quantidade de personagens | manhã | 23/08/23 | manhã | 23/08/23 | 30min |
| Procurar CSV do portal do desenho | manhã | 23/08/23 | manhã | 23/08/23 | 15min |
| | | | | | |
| | | | | | |