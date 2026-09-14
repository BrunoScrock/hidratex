# HIDRATEX — Site Institucional

Site institucional profissional da **Hidratex**, empresa especializada em **construção civil e serviços hidráulicos**.

> Site **100% estático** (HTML, CSS e JavaScript puro). Funciona diretamente no GitHub Pages e em qualquer hospedagem que aceite arquivos estáticos.

---

## Objetivo

Criar uma vitrine profissional que permita ao visitante:

- Conhecer a empresa;
- Entender os serviços oferecidos;
- Ver fotos de obras e serviços realizados;
- Consultar as áreas de atuação;
- Solicitar orçamento pelo **WhatsApp**;
- Acessar pelo celular, tablet ou computador.

---

## Tecnologias

- HTML5
- CSS3 (gradientes, blur, transitions, animations)
- JavaScript ES6+ (IntersectionObserver, sem bibliotecas pesadas)
- SVG via biblioteca leve [Lucide](https://lucide.dev/) (ícones)
- Fonte **Inter** via Google Fonts

Sem backend, banco de dados, PHP ou frameworks.

---

## Estrutura de Pastas

```text
hidratex/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── config.js    ← Configuração centralizada da empresa
│   └── script.js    ← Interações do site
│
├── assets/
│   ├── images/
│   │   ├── logo/       ← Logo da Hidratex (usada como favicon)
│   │   ├── hero/       ← Imagem do Hero
│   │   ├── servicos/   ← Imagens de serviços
│   │   └── obras/      ← Fotos das obras
│   └── icons/
│
├── robots.txt
├── sitemap.xml
├── llms.txt
├── README.md
└── .gitignore
```

---

## Como Executar Localmente

Opção 1 — abrir direto no navegador:

```bash
# basta abrir o arquivo index.html no seu navegador
```

Opção 2 — servidor local (recomendado):

```bash
# Python
python -m http.server 8000

# Ou com Node.js (npx)
npx serve .
```

Acesse: `http://localhost:8000`

---

## Como Alterar as Informações da Empresa

Tudo fica centralizado no arquivo **`js/config.js`**.

### Telefone / WhatsApp

```javascript
whatsapp: "55DDDNUMERO",   // somente dígitos — ex.: 5541999999999
telefone: "(00) 00000-0000",
email: "contato@hidratex.com.br",
```

### Endereço e área de atendimento

```javascript
cidade: "Curitiba",
endereco: "Rua Exemplo, 123 - Centro",
atendimento: "Curitiba e Região Metropolitana",
horario: "Seg a Sex: 08h às 18h",
```

### Redes sociais

```javascript
instagram: "https://instagram.com/hidratex",
facebook: "https://facebook.com/hidratex",
```

---

## Como Alterar Textos do Site

- **Título, subtítulo e descrições** → editar diretamente no `index.html`
- **Mensagens do WhatsApp** → editar em `js/config.js` (campo `mensagemPadrao`)
- **Textos marcados com `[INSERIR ...]`** → substituir pelas informações reais

---

## Como Adicionar Novos Serviços

No arquivo **`index.html`**, dentro da seção `<!-- SERVIÇOS -->`, duplique um bloco:

```html
<article class="service-card">
  <div class="service-icon"><i data-lucide="wrench"></i></div>
  <h3>Nome do Serviço</h3>
  <p>Descrição curta.</p>
  <ul class="service-list">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <a href="#" class="btn-service" onclick="enviarOrcamento('chave'); return false;">
    Solicitar Orçamento <i data-lucide="arrow-right"></i>
  </a>
</article>
```

Dica: use um `data-lucide` válido (veja a lista em lucide.dev). A `chave` do `onclick` gera uma mensagem específica se existir em `config.js` como `mensagemChave`.

---

## Como Adicionar Fotos das Obras

1. Coloque as fotos em `assets/images/obras/`.
2. Edite o array **`PORTFOLIO`** em `js/config.js`:

```javascript
{
  tag: "Construção",
  titulo: "Nome da Obra",
  descricao: "Descrição curta.",
  imagem: "assets/images/obras/obra-nome.jpg",           // foto capa
  imagens: [
    "assets/images/obras/obra-nome.jpg",                 // 1ª foto
    "assets/images/obras/obra-nome-2.jpg"                // demais fotos
  ],
  categoria: "Construcao"
},
```

Para adicionar uma obra, basta inserir um novo item no array.

---

## Como Substituir as Imagens de Demonstração

As imagens atuais usam **Unsplash** (apenas para desenvolvimento). Para usar fotos reais:

1. Salve as fotos em `assets/images/...`.
2. Troque as URLs no `index.html` (hero, sobre) e no `js/config.js` (portfolio).
3. Prefira **WebP** ou JPEG comprimido para melhor performance.
4. Defina `width` e `height` para evitar saltos de layout.

Caminhos recomendados:

```text
assets/images/logo/logo-hidratex.png
assets/images/hero/hero-hidratex.jpg
assets/images/servicos/servico-x.jpg
assets/images/obras/obra-x.jpg
```

---

## Como Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `hidratex`).
2. Envie os arquivos do projeto para o repositório:

```bash
git init
git add .
git commit -m "Site institucional Hidratex"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/hidratex.git
git push -u origin main
```

3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione:
   - Branch: `main`
   - Pasta: `/ (root)`
5. Salve. O site ficará disponível em:

```text
https://SEU_USUARIO.github.io/hidratex/
```

---

## Como Configurar Domínio Personalizado

Após publicar no GitHub Pages:

1. No painel do(s) provedor(es) de DNS do seu domínio, adicione:

```text
CNAME  www → SEU_USUARIO.github.io
A      @   → 185.199.108.153
A      @   → 185.199.109.153
A      @   → 185.199.110.153
A      @   → 185.199.111.153
```

2. No GitHub, em **Settings → Pages → Custom domain**, informe seu domínio e salve.
3. Crie um arquivo `CNAME` na raiz do projeto com o nome do domínio (ex.: `www.hidratex.com.br`).
4. Atualize o `canonical`, o `sitemap.xml` e o `robots.txt` com o domínio real.

---

## SEO e Busca

- `robots.txt` e `sitemap.xml` já criados. Substitua `[SEU-DOMINIO]` pelo domínio real.
- Meta tags (description, keywords, Open Graph, Twitter) já configuradas.
- Dados estruturados **Schema.org** (LocalBusiness) já incluídos no `index.html`.

### Google Search Console

1. Cadastre o site no [Google Search Console](https://search.google.com/search-console).
2. Envie o `sitemap.xml`.
3. Quando solicitada a verificação, cole o código fornecido no `<head>` do `index.html`.

### Google Analytics

Deixe o ID do Google Analytics pronto inserindo o snippet oficial no final do `<head>` do `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

> Não foi incluído nenhum ID fictício — adicione o ID real quando tiver.

### Google Meu Negócio

Quando o perfil comercial existir, garanta que os dados do site (endereço, telefone, horário, URL, avaliações) coincidam com o perfil.

---

## Checklist de Conteúdo Pendente

Itens com `[INSERIR ...]` no código precisam ser substituídos pelos dados reais da empresa:

- [ ] Telefone / WhatsApp (`js/config.js`)
- [ ] E-mail (`js/config.js`)
- [ ] Endereço (`js/config.js`)
- [ ] Cidade e área de atendimento (`js/config.js`)
- [ ] Horário de funcionamento (`js/config.js`)
- [ ] Redes sociais (`js/config.js`)
- [ ] Descrição da empresa (`index.html` e `llms.txt`)
- [ ] Fotos reais (hero, sobre, obras)
- [ ] Logo oficial (`assets/images/logo/`)
- [ ] Domínio real (`sitemap.xml`, `robots.txt`, `canonical`)

---

## Licença

Projeto desenvolvido para a empresa Hidratex. Todos os direitos reservados.