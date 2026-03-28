# Testes Automatizados com Playwright

Este projeto utiliza o [Playwright](https://playwright.dev/) para realizar testes automatizados de interface (E2E - End-to-End).

## Pré-requisitos

Antes de executar os testes pela primeira vez, certifique-se de ter instalado todas as dependências do projeto, bem como os navegadores necessários para o Playwright:

```bash
# Instala as dependências Node.js
npm install

# Instala os navegadores do Playwright (Chromium, etc)
npx playwright install
```

## Como executar os testes

Você pode executar os testes de diversas maneiras, dependendo da sua necessidade.

### 1. Modo Headless (padrão)
Executa os testes em segundo plano sem abrir a janela do navegador. Ideal para validações rápidas.

```bash
npm test
```
*(Este comando configuramos no `package.json` e ele chama o `playwright test`)*

### 2. Modo com Interface Gráfica (UI Mode)
Abre a interface interativa do Playwright. Excelente para desenvolver novos testes, debugar e acompanhar a execução passo a passo visualmente.

```bash
npx playwright test --ui
```

### 3. Modo com visualização do Navegador (Headed)
Executa os testes abrindo a janela do navegador, mas de forma automatizada.

```bash
npx playwright test --headed
```

## Visualizando os Relatórios

Se algum teste falhar ou se você quiser ver os detalhes da execução (como o tempo que levou cada operação), você pode abrir o relatório HTML gerado pelo Playwright:

```bash
npx playwright show-report
```

## Estrutura de Testes

Os testes e as configurações estão organizados da seguinte forma:

* `playwright.config.js`: Gerencia as configurações globais dos testes (como URL base, tempo de timeout, comando para subir o servidor local automaticamente, etc).
* `tests/`: Diretório onde os arquivos de teste estão localizados. Os arquivos devem possuir a extensão `.spec.js`.
  * Exemplo: `tests/dashboard.spec.js` 
