# FOREST RELIC

Protótipo de jogo de terror em primeira pessoa feito em JavaScript + Three.js.

## Estado atual

O projeto está em prototipagem. A versão jogável principal fica em `index.html`.

### Controles

- `WASD` — mover
- `Shift` — correr
- `Espaço` — pular
- `Mouse` — olhar
- `E` — interagir
- `1` — lanterna
- `2` — arco
- `3` — mãos
- `F` — ligar/desligar lanterna

## Estrutura

- `index.html` — build jogável atual
- `docs/CHANGELOG.md` — histórico das mudanças principais
- `src/` — reservado para a próxima etapa de separação do código em módulos
- `assets/` — reservado para texturas, áudio e modelos quando forem migrados para arquivos locais

## Próximo passo

Separar o protótipo monolítico em módulos (`world`, `player`, `creature`, `story`, `audio`, `weather`) sem alterar o comportamento do jogo.
