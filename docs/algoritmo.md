# 🧮 Algoritmo de Validação de CPF

Este documento descreve o funcionamento do algoritmo usado para validar números de CPF (Cadastro de Pessoas Físicas), conforme a regra oficial da Receita Federal do Brasil.

---

## 📌 Etapas do algoritmo

### 1. Limpar o CPF
Remover todos os caracteres que **não são números** (pontos e traços, por exemplo).

### 2. Verificar CPF inválido por repetição
Rejeitar CPFs compostos por todos os dígitos iguais (ex: `111.111.111-11`).

### 3. Calcular o 1º dígito verificador
- Usar os **9 primeiros dígitos**.
- Multiplicar cada dígito por um peso decrescente de 10 até 2.
- Somar os resultados.
- Calcular:  
  `resto = (soma * 10) % 11`
- Se `resto === 10` ou `resto === 11`, usar `0`.  
- O resultado deve ser igual ao **10º dígito do CPF**.

### 4. Calcular o 2º dígito verificador
- Usar os **10 primeiros dígitos** (incluindo o dígito anterior).
- Multiplicar cada um por pesos de 11 até 2.
- Somar os resultados.
- Calcular:  
  `resto = (soma * 10) % 11`
- Se `resto === 10` ou `resto === 11`, usar `0`.  
- O resultado deve ser igual ao **11º dígito do CPF**.

---

## ✅ Exemplo prático

**CPF:** `529.982.247-25`

- 1º dígito verificador calculado: `2`
- 2º dígito verificador calculado: `5`
- CPF válido: ✅

---

## 🚫 Exemplo inválido

**CPF:** `123.456.789-00`

- Dígitos verificadores não conferem.
- CPF inválido: ❌

---

## 🧪 Observação

Este algoritmo é aplicado tanto no código do Node.js quanto na versão web, garantindo consistência e confiabilidade.

---
