# Instalação do serviços da aplicação
npm install -D prisma jest @types/jest typescript @types/node supertest @types/supertest @swc/core @swc/jest

## Usar o  transform: {v"^.+\\.(t|j)sx?$": ["@swc/jest"],},
vai pegar todos os arquivos TS, TXS ou JSX e vai usar o ["@swc/jest"] para converter os arquivos para JS.

## Para inicializar um projeto TYPESCRYPT
 npx tsc --init 

## npx jest --init
 irá fazer umas perguntas em relação as opções do projeto.
