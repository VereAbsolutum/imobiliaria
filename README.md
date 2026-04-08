# Imobiliaria

Portal imobiliário para exibição e busca de imóveis para venda e locação.

## Sobre

Sistema web para imobiliárias com listagem de imóveis, busca com filtros (tipo, cidade, quartos) e cards detalhados com informações como área, vagas de garagem e localização. Interface responsiva com carrossel de imagens e animações.

## Funcionalidades

- Listagem de imóveis com cards detalhados (quartos, área, vagas, localização)
- Busca com filtros por tipo de imóvel, cidade e número de quartos
- Carrossel de imagens na hero section
- Seções de destaques, vendas, locações e parceiros
- Layout responsivo com menu hamburger
- API routes preparadas para expansão

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Backend | Node.js, Express.js, EJS |
| Frontend | Tailwind CSS, DaisyUI, Alpine.js |
| UI | Swiper.js (carrossel), AOS (animações), Font Awesome |
| Build | PostCSS, Nodemon |

## Como rodar

```bash
npm install
npm run build:css   # compilar Tailwind
npm run watch       # servidor com hot reload (porta 5000)
```

## Estrutura

```
src/
├── config/          # Express, EJS, rotas
├── routes/          # Rotas web e API
├── resources/
│   ├── views/       # Templates EJS
│   │   ├── layouts/ # Layout principal
│   │   ├── pages/   # Páginas
│   │   └── components/ # Header, footer, cards, form
│   └── assets/      # CSS compilado
└── public/          # Entry point do servidor
```
