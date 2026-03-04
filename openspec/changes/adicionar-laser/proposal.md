## Why

Adicionar uma funcionalidade visual chamada "laser" que permite ao usuário
disparar um feixe luminoso a partir do cursor (Portal Gun) até o centro da imagem (Portal). Isso aumenta o aspecto lúdico e a
imersão da aplicação sem alterar a arquitetura existente.

## What Changes

- Adicionar uma nova capability `laser-effect` que implementa o comportamento
  visual e de interação do feixe.
- Encadear sequencia após "mouseup" disparando o laser (botão generate) e breve CSS para o
  visual do feixe.
- Capturar eventos de ponteiro para posicionamento e animação do feixe.

## Capabilities

### New Capabilities
- `laser-effect`: efeito visual de feixe/laser disparado a partir do cursor;
  fornece animação do feixe, detecção de colisão visual com o card do
  personagem (highlight) e opção de toggle na UI.

### Modified Capabilities
- (nenhuma)

## Impact

- Arquivos afetados: `index.html`, `style.css`, `script.js` — adição de marcação
  mínima, estilos e lógica JS. Não há necessidade de ferramentas de build.
- Dependências: nenhuma externa. Usa APIs Web padrão (Pointer Events,
  requestAnimationFrame, CSS transitions/animations).
- Requisitos de compatibilidade: funcionar em navegadores modernos com
  suporte a Pointer Events e Fetch API.
