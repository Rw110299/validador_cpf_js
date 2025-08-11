/**
 * Função para validar CPF
 * Regras de validação:
 * 1. O CPF deve ter exatamente 11 dígitos.
 * 2. Não pode conter todos os dígitos iguais (ex: "11111111111").
 * 3. Os dois últimos dígitos (dígito verificador) são calculados a partir dos 9 primeiros
 *    e devem coincidir com os fornecidos no CPF.
 */

function validarCPF(cpf) {
  // Remove qualquer caractere que não seja número (pontos, traços, espaços, letras, etc.)
  cpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF tem exatamente 11 dígitos
  // ou se todos os dígitos são iguais (o que é inválido)
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  // ===============================
  // CÁLCULO DO PRIMEIRO DÍGITO VERIFICADOR
  // ===============================

  let soma = 0; // Variável para armazenar a soma dos cálculos
  for (let i = 0; i < 9; i++) {
    // Multiplica cada dígito por um peso decrescente (10, 9, 8, ..., 2)
    soma += parseInt(cpf[i]) * (10 - i);
  }

  // Calcula o primeiro dígito verificador
  let dig1 = 11 - (soma % 11);

  // Se o resultado for maior que 9, o dígito é 0
  if (dig1 > 9) dig1 = 0;

  // Se o dígito calculado for diferente do informado no CPF, retorna inválido
  if (dig1 !== parseInt(cpf[9])) return false;

  // ===============================
  // CÁLCULO DO SEGUNDO DÍGITO VERIFICADOR
  // ===============================

  soma = 0; // Zera a soma para o segundo cálculo
  for (let i = 0; i < 10; i++) {
    // Multiplica cada dígito por um peso decrescente (11, 10, 9, ..., 2)
    soma += parseInt(cpf[i]) * (11 - i);
  }

  // Calcula o segundo dígito verificador
  let dig2 = 11 - (soma % 11);

  // Se o resultado for maior que 9, o dígito é 0
  if (dig2 > 9) dig2 = 0;

  // Retorna true se o segundo dígito também for válido
  return dig2 === parseInt(cpf[10]);
}

// Exporta a função para ser usada em outros arquivos (Node.js)

