# Sentydos Website Refactor

Este repositório contém o código-fonte da refatoração do website da Sentydos. O projeto é uma landing page moderna, responsiva e performática desenvolvida com as tecnologias mais recentes do ecossistema React.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas principais:

- **[Next.js 15](https://nextjs.org/)**: Framework React para produção, utilizando App Router.
- **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
- **[Shadcn UI](https://ui.shadcn.com/)**: Coleção de componentes de UI reutilizáveis, construídos com Radix UI e Tailwind CSS.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e complexas.
- **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários performático e flexível.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado de JavaScript.

## 📂 Estrutura do Projeto

A estrutura de diretórios principal do projeto é organizada da seguinte forma:

```
src/
├── app/                  # Rotas e layouts do Next.js (App Router)
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout raiz da aplicação
│   └── page.tsx          # Página inicial (Landing Page)
├── components/           # Componentes React
│   ├── ui/               # Componentes base do Shadcn UI (Button, Input, etc.)
│   ├── Header.tsx        # Componente de cabeçalho
│   ├── Hero.tsx          # Seção principal (Hero)
│   ├── About.tsx         # Seção "Sobre"
│   ├── Services.tsx      # Seção "Serviços"
│   ├── Testimonials.tsx  # Seção de depoimentos
│   ├── Contact.tsx       # Seção de contato
│   └── Footer.tsx        # Rodapé
└── styles/               # Arquivos de estilo adicionais
```

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd sentydos-website-refactor
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

## ▶️ Como Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria a versão de produção da aplicação.
- `start`: Inicia o servidor de produção (após o build).
- `lint`: Executa o ESLint para verificação de código.

## 🎨 Personalização

O projeto utiliza Tailwind CSS para estilização. As configurações globais de estilo podem ser encontradas em `src/app/globals.css` e a configuração do Tailwind (se houver necessidade de customização avançada) pode ser verificada nos arquivos de configuração na raiz do projeto.

Os componentes de UI baseados no Shadcn UI estão localizados em `src/components/ui` e podem ser personalizados individualmente conforme a necessidade do design system.
