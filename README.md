# CodeConnect Angular

Projeto desenvolvido em Angular 19 para conectar desenvolvedores e oportunidades de trabalho.

## Tecnologias Utilizadas

- Angular 19
- TypeScript
- SCSS
- Angular Router
- Componentes Standalone

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Componentes de página
│   ├── services/      # Serviços
│   ├── utils/         # Funções utilitárias
│   ├── shared/        # Componentes compartilhados
│   ├── core/          # Serviços singleton
│   ├── models/        # Interfaces e tipos
│   ├── guards/        # Guards de rota
│   └── interceptors/  # Interceptors HTTP
```

## Como Executar

1. Clone o repositório

```bash
git clone git@github.com:gss-patricia/codeconnect-angular.git
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto

```bash
ng serve
```

4. Acesse `http://localhost:4200`

## Desenvolvimento

- Use `ng generate component components/nome-do-componente` para criar novos componentes
- Use `ng generate service services/nome-do-servico` para criar novos serviços
- Use `ng generate guard guards/nome-do-guard` para criar novos guards
