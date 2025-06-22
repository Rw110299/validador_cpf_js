const validarCPF = require('../cod/cpfValidator');

test('CPF válido', () => {
  expect(validarCPF('529.982.247-25')).toBe(true);
});

test('CPF inválido (com números aleatórios)', () => {
  expect(validarCPF('123.456.789-00')).toBe(false);
});

test('CPF inválido (todos iguais)', () => {
  expect(validarCPF('111.111.111-11')).toBe(false);
});
