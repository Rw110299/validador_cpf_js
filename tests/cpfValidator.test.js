// Importa a função validarCPF do arquivo onde está implementada a validação do CPF
const validarCPF = require('../cod/cpfValidator');

// Teste para CPF válido
test('CPF válido', () => {
  // Usa a função validarCPF para verificar o CPF '529.982.247-25'
  // Espera que o resultado seja true, pois este é um CPF válido
  expect(validarCPF('529.982.247-25')).toBe(true);
});

// Teste para CPF inválido com números aleatórios
test('CPF inválido (com números aleatórios)', () => {
  // Verifica se o CPF '123.456.789-00' é inválido
  // Espera que a função retorne false, pois este CPF não é válido
  expect(validarCPF('123.456.789-00')).toBe(false);
});

// Teste para CPF inválido com todos os dígitos iguais
test('CPF inválido (todos iguais)', () => {
  // Verifica se o CPF '111.111.111-11' é inválido
  // Espera false, porque CPFs com todos os dígitos iguais são inválidos
  expect(validarCPF('111.111.111-11')).toBe(false);
});
