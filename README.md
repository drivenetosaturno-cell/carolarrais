# Carol Arrais — Design de marcas

Site institucional mobile first em Next.js (App Router), React, TypeScript e Tailwind CSS. Exportação estática, sem backend ou cadastro de leads: todos os contatos comerciais seguem para o WhatsApp **558821554554** com mensagem codificada.

## Páginas do mesmo projeto

- `/`: entrada curta com foto de Carol e duas opções, nesta ordem: acessar o portfólio e conversar pelo WhatsApp.
- `/portfolio`: site institucional completo, preservado em conteúdo, componentes e estilos.

A entrada usa `src/app/page.tsx` e estilos isolados em `src/app/welcome.module.css`. O site original está em `src/app/portfolio/page.tsx`. A foto da entrada está em `public/images/carol-perfil.jpg`. Canonical e sitemap contemplam as duas rotas. A hospedagem estática deve resolver `/portfolio` para o arquivo exportado `portfolio.html` (URLs sem extensão).

## Executar

Requisitos: Node.js 20.9+ e pnpm. As versões instaladas estão fixadas no `pnpm-lock.yaml`.

```sh
pnpm install
pnpm dev
```

Abra a URL exibida no terminal. Para validar e gerar a distribuição:

```sh
pnpm typecheck
pnpm lint
pnpm build
```

A pasta `out/` contém o site estático pronto para hospedagem. Não use `next start` com exportação estática; sirva `out/` usando sua hospedagem ou um servidor estático.

## Edição de conteúdo

- `src/data/site.ts`: links, retratos, logotipo, texto do hero e processo.
- `src/data/services.ts`: serviços e entregáveis.
- `src/data/projects.ts`: seis projetos, imagens, descrições opcionais e links de origem.
- `src/data/testimonials.ts`: depoimentos, indicação de exemplo, screenshots e texto alternativo.
- `src/data/faq.ts`: respostas editáveis, sem condições comerciais inventadas.
- `src/components/Sections.tsx`: textos editoriais das demais seções.
- `src/lib/whatsapp.ts`: função única de geração de links de contato.
- `src/app/globals.css`: paleta, tipografia, espaçamento e breakpoints.

Imagens são armazenadas localmente em `public/images/`, convertidas para WebP e carregadas com dimensões reservadas. A imagem principal tem prioridade; as demais usam lazy loading. Fontes Cormorant Garamond e Manrope são hospedadas pelo Next.js após o build.

## Conteúdo real e pendências

Foram incorporadas oito imagens públicas do Instagram indicado pelo usuário: dois retratos/posts da Carol e seis trabalhos. Veja `ASSETS.md` para a origem de cada uma. As composições originais das publicações foram preservadas; fotografias originais sem texto e em maior resolução poderão melhorar o resultado.

Antes do lançamento comercial:

1. Substituir os três depoimentos ilustrativos por relatos autorizados ou screenshots reais. Os exemplos estão identificados na página e nunca são apresentados como prova social verificada.
2. Fornecer o logotipo original em SVG/PNG transparente. A assinatura tipográfica e o favicon atuais são provisórios; a imagem de destaque do Instagram não tem resolução adequada para funcionar como logo.
3. Validar as respostas do FAQ e o escopo dos serviços com Carol.
4. Definir `NEXT_PUBLIC_SITE_URL` no ambiente da hospedagem antes do build, para atualizar canonical, sitemap, robots e schema. O endereço configurado inicialmente é o endereço esperado do cadastro privado no Sites, não uma confirmação de publicação.

SEO inclui title, description, Open Graph, Twitter summary card, canonical, sitemap, robots e schema ProfessionalService. Nenhum endereço físico, preço, avaliação ou horário foi inventado. Não foi criada uma imagem social específica.

## Interações e acessibilidade

Menu mobile com Escape e retorno de foco, accordion nativo com teclado, carrossel manual com controles acessíveis e setas, skip link, foco visível, headings semânticos, apenas um H1, alt texts e respeito a `prefers-reduced-motion`. O site não envia mensagens automaticamente: o visitante revisa e envia a mensagem no WhatsApp.
