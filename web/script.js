// Função para validar um CPF (Cadastro de Pessoa Física)
function validarCPF(cpf) {
  // Remove tudo que não for dígito (0-9) da string cpf
  cpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais (ex: 11111111111)
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  // Calcula a soma para o primeiro dígito verificador (9 primeiros dígitos do CPF)
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);

  // Calcula o primeiro dígito verificador
  let dig1 = 11 - (soma % 11);
  if (dig1 > 9) dig1 = 0; // Se o dígito calculado for maior que 9, zera

  // Compara o dígito calculado com o décimo dígito do CPF
  if (dig1 !== parseInt(cpf[9])) return false;

  soma = 0;
  // Calcula a soma para o segundo dígito verificador (10 primeiros dígitos do CPF)
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);

  // Calcula o segundo dígito verificador
  let dig2 = 11 - (soma % 11);
  if (dig2 > 9) dig2 = 0; // Se o dígito calculado for maior que 9, zera

  // Retorna true se o segundo dígito calculado for igual ao último dígito do CPF, caso contrário false
  return dig2 === parseInt(cpf[10]);
}

// Função chamada ao clicar no botão "Validar"
function validar() {
  // Pega o valor digitado no input com id "cpf"
  const cpf = document.getElementById("cpf").value;

  // Pega o elemento onde o resultado será mostrado
  const resultado = document.getElementById("resultado");

  // Chama a função validarCPF para verificar se o CPF é válido
  if (validarCPF(cpf)) {
    resultado.textContent = "✅ CPF válido";  // Exibe mensagem de CPF válido
    resultado.style.color = "green";          // Define a cor do texto para verde
  } else {
    resultado.textContent = "❌ CPF inválido"; // Exibe mensagem de CPF inválido
    resultado.style.color = "red";             // Define a cor do texto para vermelho
  }
}
