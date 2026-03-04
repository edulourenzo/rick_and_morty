## Context

O projeto é uma aplicação de página única (HTML/CSS/JS) que exibe personagens de Rick and Morty obtidos da API pública. A interface usa um cursor personalizado Portal Gun e a Web Animations API para efeitos de portal. Não há etapa de build; as alterações devem ser executadas diretamente no navegador.

## Goals / Non-Goals

**Goals:**
- Implementar `laser-effect` como uma funcionalidade leve e sem dependências que permite um laser visual acionado pelo "mouseup" após clicar no botão "Generate", usando como referências o cursor personalizado do mouse e o cartão de personagem.

**Non-Goals:**
- Sem componentes server-side nem alterações na API. Sem bibliotecas externas.

## Decisions

- Local de implementação: adicionar marcação mínima em `index.html`, estilos em `style.css` e comportamento em `script.js` para seguir as convenções existentes.
- Abordagem de renderização: usar um `<div>` posicionado de forma absoluta para o feixe, animado com `Animation e/ou `CSS transforms` para esticar visualmente. Evitar criar muitos nós DOM.
- Manipulação do feixe de laser rotacionando igual a imagem do cursor personalizado que usa rotação polar (`rotateCursor()`).
- Usar matemática simples de para o retângulo para determinar de onde começou a esticar, mover e de onde terminou de encoher.

## Risks / Trade-offs

- Risco: Quando o retangulo esticar, não manter a lateral esqueda junto a lateral direita do cursor do mouse personalizado.
- Risco: Quando o retangulo se mover não parar com a lateral direita no centro do card de personagem.
- Risco: Quando o retangulo encolher, não manter a lateral direita junto ao centro do card do personagem.

## Migration Plan

- Deploy: adicionar as três edições de arquivos e verificar o comportamento no navegador.
- Rollback: remover as seções CSS e JS adicionadas; a funcionalidade é opt-in via um toggle, portanto desativar o toggle reverte visivelmente o comportamento para o usuário.

## Open Questions

- O laser deve ser persistente entre recarregamentos da página (persistir a configuração)?
