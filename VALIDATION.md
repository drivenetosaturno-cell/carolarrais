# Validação — 23/09/2026

- `pnpm typecheck`: aprovado, sem erros de TypeScript/imports.
- `pnpm lint`: aprovado, sem avisos ou erros.
- `pnpm build`: aprovado; página inicial, 404, robots.txt e sitemap.xml exportados em `out/`.
- Prévia local: HTTP 200.
- Responsividade: composição inspecionada nos breakpoints solicitados, de 375 a 1440 px; sem rolagem horizontal do documento. O navegador usa escala de 110%, compensada no controle do viewport para verificar as larguras CSS.
- Menu mobile: abrir, navegar para Portfólio, fechar ao navegar e fechar com Escape.
- Depoimentos: botão próximo e navegação por seta esquerda conferidos.
- FAQ: abertura por clique e Enter; apenas uma resposta aberta por vez.
- Todos os CTAs comerciais apontam para 558821554554, com mensagem presente e codificada. Nenhuma mensagem foi enviada.
- Um único H1; destinos das âncoras existentes; imagens com texto alternativo.
- Imagens locais WebP; retrato principal com prioridade e demais imagens com carregamento sob demanda.
- Animação com fallback visível sem JavaScript e respeito a `prefers-reduced-motion`.

Não foi feita medição de Core Web Vitals em produção. Os testes acima não substituem uma auditoria formal WCAG.

Publicação online não concluída: os scripts locais da integração Sites deixaram de estar disponíveis durante a execução. O cadastro privado criado foi preservado em `.openai/hosting.json`; reutilizar esse ID em uma publicação futura, sem criar outro site. A pasta `out/` pode ser publicada em qualquer hospedagem de arquivos estáticos.
