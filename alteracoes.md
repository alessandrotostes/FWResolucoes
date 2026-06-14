# Planejamento de Alterações — FW Resoluções

Este documento detalha todas as alterações solicitadas para o projeto, organizadas por página e componente.

---

## 1. Alterações Globais / Estruturais

- **CNPJ da Empresa:**
  - Alterar o CNPJ em todos os rodapés do site para: **CNPJ 67.282.642/0001-00** (anteriormente era `52.515.041/0001-14`).
  
- **Atualização da Logo:**
  - Mudar todas as referências de imagem de `logo.png` (ou `../logo.png`) para o novo arquivo **`LOGO-FW-2026.png`** (ou `../LOGO-FW-2026.png`).

- **Renomeação de "Seguro-Maternidade" para "Salário-Maternidade":**
  - Mudar a nomenclatura de "Seguro-Maternidade" (e variações como "seguro maternidade") para **"Salário-Maternidade"** em todos os textos visíveis, títulos de página (`<title>`), metadados de descrição (`<meta name="description">`), links de navegação e rodapés.
  - Renomear a pasta física `seguro-maternidade` para **`salario-maternidade`** na raiz do projeto.
  - Atualizar os arquivos internos da pasta renomeada de `seguro-maternidade.css`/`seguro-maternidade.js` para `salario-maternidade.css`/`salario-maternidade.js`.
  - Atualizar todos os links de hipertexto (`href`) que apontavam para `seguro-maternidade/` para apontarem para `salario-maternidade/`.

---

## 2. Página Inicial (Home) — `index.html`

- **Telefones de Contato no Rodapé (Seção Contato):**
  - Como os números de atendimento são diferentes para cada serviço, a página inicial deve exibir os dois números de forma clara:
    - **Seguro-Desemprego:** `(33) 99931-4625` (Link: `tel:33999314625`)
    - **Salário-Maternidade:** `(27) 98880-1306` (Link: `tel:27988801306`)
- **Remoção de Termo no Card de Seguro-Desemprego:**
  - Alterar o texto descritivo do card de Seguro-Desemprego para retirar a menção a "parcelas devolvidas".
  - **Texto Atual:** *"Está com problemas cadastrais, PIS duplicado, divergência de dados ou parcelas devolvidas? Conheça nossas soluções"*
  - **Novo Texto:** *"Está com problemas cadastrais, PIS duplicado ou divergência de dados? Conheça nossas soluções"*
- **Renomeação de Links e Menu:**
  - Atualizar o link do menu e rodapé de `seguro-maternidade/` para `salario-maternidade/`.
  - Mudar o texto do card de Seguro-Maternidade para Salário-Maternidade.

---

## 3. Página Seguro-Desemprego — `seguro-desemprego/index.html`

- **Telefone Único de Contato:**
  - Esta página deve conter **apenas** o número do Seguro-Desemprego: **(33) 99931-4625**.
  - Atualizar todos os links do WhatsApp (`wa.me`) para utilizarem o número `5533999314625`.
  - Atualizar o link de telefone no rodapé para `tel:33999314625`.
- **Problemas e Botões de Ação (Baseado na Nova Página de Referência):**
  - Substituir a seção de problemas atual, removendo o card "Parcela devolvida" e adicionando o card **Bloqueio por "Renda Própria"**.
  - A lista final de problemas deve ser:
    1. **Divergência nos dados cadastrais**
       - WhatsApp: `https://wa.me/5533999314625?text=Olá, estou com problema de divergência. Preciso de um especialista em seguro-desemprego`
    2. **Restituição de parcela**
       - WhatsApp: `https://wa.me/5533999314625?text=Olá, estou com problema de restituição de parcela. Preciso de um especialista em seguro-desemprego`
    3. **CNPJ e CEI não encontrado**
       - WhatsApp: `https://wa.me/5533999314625?text=Olá, estou com problema de CNPJ ou CEI não encontrado. Preciso de um especialista em seguro-desemprego`
    4. **CPF ou PIS duplicado**
       - WhatsApp: `https://wa.me/5533999314625?text=Olá, estou com problema de CPF ou PIS duplicado. Preciso de um especialista em seguro-desemprego`
    5. **Bloqueio por "Renda Própria"** (Novo)
       - WhatsApp: `https://wa.me/5533999314625?text=Olá, estou com problema de bloqueio por renda própria. Preciso de um especialista em seguro-desemprego`
  - **Texto dos Botões:** Mudar o texto dos botões de ação de *"Clique aqui para resolver"* para ***"Fale conosco agora mesmo"***.
  - **Estilização dos Botões:** Estilizar como botões clicáveis sólidos e modernos (utilizando classes utilitárias do Tailwind CSS) para garantir maior taxa de conversão, conforme a página de base.

---

## 4. Página Salário-Maternidade — `seguro-maternidade/index.html` (Futura `salario-maternidade/index.html`)

- **Telefone Único de Contato:**
  - Esta página deve conter **apenas** o número do Salário-Maternidade: **(27) 98880-1306**.
  - Atualizar todos os links de WhatsApp (`wa.me`) para utilizarem o número `5527988801306`.
  - Atualizar o link de telefone no rodapé para `tel:27988801306`.
- **Alteração de Texto no Hero:**
  - Mudar o texto do subtítulo do Hero para remover a palavra "jurídico" ao final.
  - **Texto Atual:** *"Mesmo sem carteira assinada, você pode ter direito ao benefício pago pelo INSS. Protegemos o seu momento mais especial com acolhimento jurídico."*
  - **Novo Texto:** *"Mesmo sem carteira assinada, você pode ter direito ao benefício pago pelo INSS. Protegemos o seu momento mais especial com acolhimento."*
