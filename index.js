const resultadospan = document.getElementById("Resultado");
const botaoConverter = document.getElementById("botaoConverter");

const conversao = {
  b: 1,
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
  TB: 1024 * 1024 * 1024 * 1024,
  PB: 1024 * 1024 * 1024 * 1024 * 1024,
};

function calcular() {
  const valorInput = parseFloat(document.getElementById("valores").value);
  const unidadeInicial = document.getElementById("unidade_inicial").value;
  const unidadeFinal = document.getElementById("unidade_final").value;

  // Check if the input value is a valid number
  if (isNaN(valorInput) || valorInput < 0) {
    resultadospan.textContent = "Por favor, insira um valor numérico válido.";
    return;
  }

  const fatorInicial = conversao[unidadeInicial];
  const fatorFinal = conversao[unidadeFinal];

  // Avoid division by zero (though it shouldn't happen with valid units)
  if (fatorFinal === 0) {
    resultadospan.textContent = "Não é possível dividir por zero.";
    return;
  }

  // Perform the conversion
  const resultado = (valorInput * fatorInicial) / fatorFinal;

  resultadospan.innerHTML = `${valorInput.toLocaleString()} ${unidadeInicial} = ${resultado.toFixed(2)} ${unidadeFinal}`;
}

// Event listener for button click
botaoConverter.addEventListener("click", calcular);

// Log the initial values
console.log("Valor inserido:", valorInput);
console.log("Unidade inicial:", unidadeInicial);
console.log("Unidade final:", unidadeFinal);
console.log("Fator de conversão inicial:", fatorInicial);
console.log("Fator de conversão final:", fatorFinal);
