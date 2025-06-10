Esta é uma documentação para o projeto "educational-game", que é um jogo educacional desenvolvido com Angular, Ionic e Phaser.

---

# Jogo Educacional (englishGame)

Este projeto é um jogo educacional interativo desenvolvido com Angular e Ionic, incorporando o framework de jogos Phaser para as cenas do jogo. Ele foi projetado para ser executado como um aplicativo web e potencialmente como um aplicativo móvel através do Capacitor.

## Visão Geral do Projeto

O objetivo principal deste projeto é fornecer uma plataforma de jogo educacional com diferentes cenários ou "mundos". A estrutura do projeto indica um foco em modularidade, com componentes dedicados para a página inicial, página de configuração, seleção de mundos e cada cenário de jogo individual.

## Tecnologias Utilizadas

* **Angular**: Framework para construção de aplicações web.
* **Ionic Framework**: Kit de ferramentas de UI de código aberto para construir aplicativos móveis e de desktop de alta qualidade e desempenho usando tecnologias web.
* **Capacitor**: Uma ponte de código aberto que permite que aplicativos web sejam executados nativamente em iOS, Android, Desktop e na Web.
* **Phaser**: Um framework de jogo rápido, gratuito e divertido para desktop e dispositivos móveis.
* **TypeScript**: Uma linguagem de programação de código aberto desenvolvida pela Microsoft, que é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
* **Sass (SCSS)**: Um pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins.
* **ESLint**: Uma ferramenta de linting plugável para JavaScript e TypeScript.
* **Karma & Jasmine**: Ferramentas para teste unitário.

## Estrutura do Projeto

O projeto segue uma estrutura de aplicativo Ionic/Angular padrão:

```
educational-game/
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts            // Definição das rotas da aplicação.
│   │   ├── app.component.html               // Template HTML do componente raiz.
│   │   ├── app.component.spec.ts            // Arquivo de especificação de teste para o componente raiz.
│   │   ├── app.component.ts                 // Lógica do componente raiz.
│   │   ├── app.module.ts                    // Módulo principal da aplicação Angular.
│   │   ├── config-page/                     // Componente para a página de configurações.
│   │   ├── home-page/                       // Componente para a página inicial.
│   │   ├── middle-age-scenery/              // Componente para o cenário da Idade Média.
│   │   ├── moon-scenery/                    // Componente para o cenário da Lua.
│   │   ├── old-west-scenery/                // Componente para o cenário do Velho Oeste.
│   │   ├── pirates-scenery/                 // Componente para o cenário de Piratas.
│   │   ├── prehistoric-scenery/             // Componente para o cenário Pré-histórico.
│   │   └── worlds-page/                     // Componente para a página de seleção de mundos.
│   ├── assets/                              // Ativos como imagens, ícones, etc.
│   ├── environments/                        // Configurações de ambiente (produção/desenvolvimento).
│   ├── theme/                               // Variáveis de tema e estilos globais.
│   ├── global.scss                          // Estilos CSS globais da aplicação.
│   ├── index.html                           // Arquivo HTML principal.
│   ├── main.ts                              // Ponto de entrada principal da aplicação.
│   ├── polyfills.ts                         // Polyfills necessários para o Angular.
│   └── test.ts                              // Ponto de entrada para os testes.
├── .eslintrc.json                           // Configurações do ESLint.
├── .gitignore                               // Arquivos e diretórios a serem ignorados pelo Git.
├── angular.json                             // Arquivo de configuração do Angular CLI.
├── capacitor.config.ts                      // Configuração do Capacitor.
├── ionic.config.json                        // Configuração do Ionic.
├── karma.conf.js                            // Configuração do Karma para testes.
├── package.json                             // Metadados do projeto e dependências.
├── package-lock.json                        // Gerenciado pelo npm para dependências.
├── README.md                                // Este arquivo.
├── tsconfig.app.json                        // Configuração TypeScript para o aplicativo.
├── tsconfig.json                            // Configuração TypeScript raiz.
└── tsconfig.spec.json                       // Configuração TypeScript para testes.
```

## Primeiros Passos

Para configurar e executar o projeto localmente, siga estas etapas:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* Node.js (versão recomendada pela versão do Angular no `package.json` - `engines.node`: ^16.14.0 || >=18.10.0)
* npm (gerenciador de pacotes do Node.js)
* Angular CLI (`npm install -g @angular/cli`)
* Ionic CLI (`npm install -g @ionic/cli`)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/devkauacarvalho/educational-game.git
    cd educational-game
    ```
2.  Instale as dependências do npm:
    ```bash
    npm install
    ```

## Executando o Projeto

### Servindo a Aplicação Web

Para iniciar um servidor de desenvolvimento e abrir o aplicativo no navegador:

```bash
npm start
# ou
ng serve
```

O aplicativo estará disponível em `http://localhost:8100/` (ou outra porta disponível).

### Construindo para Produção

Para construir o aplicativo para implantação em produção:

```bash
npm run build
# ou
ng build --configuration production
```

Os arquivos de construção serão gerados na pasta `www/`.

### Executando Testes Unitários

Para executar os testes unitários via Karma:

```bash
npm test
# ou
ng test
```

## Linting

Para verificar problemas de linting no código:

```bash
npm run lint
# ou
ng lint
```

## Integração com Capacitor (Aplicativo Móvel)

Este projeto está configurado para Capacitor, permitindo que você construa e implante-o como um aplicativo nativo.

### Adicionar Plataformas Nativas

Para adicionar plataformas iOS ou Android:

```bash
npx cap add ios
npx cap add android
```

### Sincronizar Código com Plataformas Nativas

Após fazer alterações no seu código Angular/Ionic, você precisa sincronizá-las com as plataformas nativas:

```bash
npx cap sync
```

### Abrir Projeto Nativo em IDE

Para abrir o projeto nativo na IDE correspondente (Xcode para iOS, Android Studio para Android):

```bash
npx cap open ios
npx cap open android
```

## Funcionalidades Chave (Baseado nos Componentes)

O projeto parece ser um jogo educacional com foco em diferentes cenários. As páginas e componentes existentes sugerem as seguintes funcionalidades:

* **Página Inicial (`home-page`)**: Provavelmente a tela de boas-vindas do jogo.
* **Página de Mundos (`worlds-page`)**: Uma tela onde o jogador pode selecionar diferentes mundos ou temas de jogo.
* **Cenários de Jogo**:
    * **Idade Média (`middle-age-scenery`)**: Um mundo temático da Idade Média.
    * **Lua (`moon-scenery`)**: Um mundo temático espacial ou lunar.
    * **Velho Oeste (`old-west-scenery`)**: Um mundo temático do Velho Oeste.
    * **Piratas (`pirates-scenery`)**: Um mundo temático de piratas.
    * **Pré-histórico (`prehistoric-scenery`)**: Um mundo temático da era pré-histórica.
* **Página de Configuração (`config-page`)**: Para ajustar configurações do jogo, como som, idioma, etc.

A integração com Phaser (`"phaser": "^3.60.0"` no `package.json`) indica que esses cenários provavelmente contêm lógica de jogo e elementos visuais ricos, características de jogos HTML5.

## Estilização e Temas

O projeto utiliza Sass (SCSS) para a estilização. As variáveis de tema globais são definidas em `src/theme/variables.scss`, permitindo fácil personalização das cores e outros aspectos visuais da aplicação. Há também um `global.scss` para estilos aplicados a todo o aplicativo.

## Configuração de Ambiente

As configurações de ambiente são gerenciadas em `src/environments/environment.ts` (desenvolvimento) e `src/environments/environment.prod.ts` (produção). Isso permite que variáveis e configurações específicas sejam facilmente alternadas durante o processo de build.

## Contribuição

Para contribuir com este projeto, por favor, siga as seguintes etapas:

1.  Faça um fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e adicione os testes necessários.
4.  Certifique-se de que o lint e os testes passem.
5.  Faça commit de suas alterações (`git commit -am 'Add new feature'`).
6.  Envie para a branch (`git push origin feature/sua-feature`).
7.  Abra um Pull Request.

## Licença

Este projeto é licenciado sob a licença [Inserir Tipo de Licença, ex: MIT]. Consulte o arquivo `LICENSE` para mais detalhes.
