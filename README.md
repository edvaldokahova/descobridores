# Pequenos Descobridores — Landing page (A Bilonai Group)

Site estático (HTML/CSS/JS). Não precisa de build.

## Publicar
1. Cria um repositório no GitHub e envia todo o conteúdo desta pasta (a raiz do repositório deve ter o `index.html`).
2. No Vercel: Add New → Project → importa o repositório. Framework Preset: **Other**. Build Command e Output Directory ficam vazios. Deploy.

## Editar
- `config.js`: preço de lançamento do Kit Completo (tem de ser igual ao da OkandaPay).
- `index.html`: textos e links de check-out (`data-checkout`).
- Meta Pixel: ID 2154926768468745 (no `<head>`). Eventos: PageView, ViewContent (ao chegar aos kits), InitiateCheckout (clique num kit, com valor em AOA), Contact (clique no WhatsApp).

## Favicon
Coloca o teu `favicon.png` na raiz (ao lado do `index.html`), com o nome exacto `favicon.png` (ideal 512×512 px).

## Provas sociais
Coloca prints REAIS (com autorização do cliente) em `img/provas/` e lista-os em `config.js` → `provas: ['img/provas/cliente1.jpg', ...]`. Com a lista vazia, a secção fica escondida.
