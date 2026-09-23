# Atualizar a versão publicada

O endereço https://carolarrais.vercel.app/ foi conferido e ainda apresenta o site institucional diretamente. O código deste pacote já contém a página de entrada como página inicial.

## Resultado esperado após publicar este código

- `https://carolarrais.vercel.app/`: foto de Carol e duas opções, portfólio ou WhatsApp.
- `https://carolarrais.vercel.app/portfolio#inicio`: site institucional completo, aberto no início.

Esse fluxo é o mesmo no celular e no computador. Não há redirecionamento automático da página de entrada para o portfólio.

## Arquivos para atualizar

Extraia o pacote de código-fonte e substitua os arquivos correspondentes na pasta do repositório usada como raiz do projeto na Vercel. O `package.json` está diretamente na raiz do ZIP. Inclua `src/`, `public/` e os arquivos de configuração.

Confira especialmente:

- `src/app/page.tsx`: deve conter `WelcomePage` e os dois botões.
- `src/app/portfolio/page.tsx`: deve conter o site completo.
- `src/app/welcome.module.css`: estilos da entrada.
- `public/images/carol-perfil.jpg`: foto da entrada.

Salve as mudanças no GitHub e publique na Vercel a versão que contém esse novo commit. Republicar apenas o código antigo não adiciona a página de entrada.

Se a variável `NEXT_PUBLIC_SITE_URL` já estiver configurada na hospedagem, use `https://carolarrais.vercel.app`. Ela afeta os metadados, não o destino dos botões.

Após a publicação, abra o endereço principal sem `/portfolio` e sem `#inicio`. O título da página deve ser **Carol Arrais | Portfólio e contato**, e os dois botões devem aparecer antes de qualquer acesso ao site institucional.
