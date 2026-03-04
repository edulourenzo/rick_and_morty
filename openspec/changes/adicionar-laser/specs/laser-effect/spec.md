## ADDED Requirements

### Requirement: Laser beam visual
O sistema **SHOULD** renderizar um feixe de laser visível originando-se na lateral da imagem do cursor personalizado. Sendo o laser uma figura geométrica (retângulo). E terá uma sequência de animações, esticará o retangulo horizontalmente, até o centro da imagem.

### Requirement:Requirement: Alignment and rotation
O sistema **SHOULD** rotacionar o retângulo do feixe de laser usando codenadas polares igual a rotação do ponteiro do mouse personalizado, que aponta para o centro da imagem.

#### Scenario: Step 1 - Initiating the laser beam
- **WHEN** o usuário soltar o botão do mouse após clicar no botão "Generate", iniciará a animação do feixe de laser.
- **THEN** uma forma geomética retancular de cor degrade horizontal, sendo as bordas na cor verde e centro verde limão, será iniciando com lados iguais e bordas arredondadas de 50%, iniciando na lateral direita do cursor personalizado do mouse ao meio. 

#### Scenario: Setp 2 - Stretch the laser halfway.
- **WHEN** terminar a execução do "Step 1".
- **THEN** deve animar o retângulo do feixe do laser em 333ms, linearmente, esticando o retângulo desde a lateral da imagem do ponteiro do mouse personalizado até a metade do comprimento da lateral direita da imagem do curso personalizado e o centro da imagem (caminho), continuando na lateral do cursor.

#### Scenario: Step 3 - Requirement: Move the laser beam bar to the center of the image
- **WHEN** terminar a execução do "Step 2".
- **THEN** deve animar o retângulo do feixe do laser em 334ms, movendo o totalmente com base na lateral direita (metade do caminho) até o centro da imagem.

#### Scenario: Step 4 - Requirement: Shrink the laser beam bar
- **WHEN** terminar a execução do "Step 3".
- **THEN** deve animar o retângulo do feixe do laser encolhendo em 333ms, encolhendo a partir da lateral esquerda, até o retangulo virar um quadrado (lados de mesmo tamanho), continuando no centro da imagem.

#### Scenario: Step 5 - Requirement: Hide the laser beam
- **WHEN** terminar a execução do "Step 4".
- **THEN** deve ocultar o feixe de laser e encerrar a animação.

### Requirement:Requirement: Alignment and rotation
O sistema **SHOULD** encadear as animaçõe do Step 1 ao 5 sequencialmente.