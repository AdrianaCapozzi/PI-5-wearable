---
name: inspect-sqlite-db
description: "Inspeciona os dados armazenados no banco de dados local SQLite (iot_data.db)."
---

# Skill: Inspect SQLite DB

Quando ativada, esta skill ajuda a consultar manualmente os registros do SQLite (arquivo \`iot_data.db\`) diretamente no terminal usando Node ou o comando sqlite3, evitando que o usuário precise instalar um cliente visual.

## Instruções:
1. Verifique se o arquivo \`iot_data.db\` existe.
2. Utilize o \`run_in_terminal\` para exibir as últimas 10 linhas da tabela \`frames\` ou \`geolocation\`.
   - Exemplo de comando rápido: \`sqlite3 iot_data.db "SELECT * FROM geolocation ORDER BY id DESC LIMIT 5;"\` ou crie um script rápido em Node caso o CLI do sqlite3 não esteja disponível.
3. Formate bem a saída na interface para o usuário visualizar.