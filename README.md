# Instalação do serviços da aplicação

#### npm install -D prisma jest @types/jest typescript @types/node supertest @types/supertest @swc/core @swc/jest.

Para tornar seus testes Jest mais rápidos, você pode trocar o executor padrão baseado em JavaScript ( ts-jest) por um substituto Rust.(abre em uma nova aba)usando o SWC.

O Jest roda o código do seu projeto como JavaScript, mas se você usa alguma sintaxe não suportada pelo Node.js nativamente (como JSX, tipos do TypeScript, templates do Vue e etc.), então você vai precisar transformar esse código em JavaScript puro, de maneira similar ao que você faria quando construindo para navegadores.

Jest suporta isso através da opção de configuração transform.

#### Usar o  
transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
 vai pegar todos os arquivos TS, TXS ou JSX e vai usar o ["@swc/jest"] para converter os arquivos para JS puro.

#### Para inicializar um projeto TYPESCRYPT
 npx tsc --init .

#### npx jest --init
irá fazer umas perguntas em relação as opções do projeto .
