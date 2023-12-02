fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const SolPrice = data.solana.eur;
   
    var solanaAmount = 7.62778674;
    document.getElementById('solanaAmount').textContent = "Quantidade : " + solanaAmount + " Solana.";
    var solanavalue = parseFloat((solanaAmount * SolPrice).toFixed(2));
    document.getElementById('solanaPrice').textContent = "Valor: " + solanavalue + " euros.";
    var solanainvestedAmount = 201.54;
    document.getElementById('solanaInvested').textContent = "Valor Investido: " + solanainvestedAmount + " euros.";
    var solanaReturn = parseFloat((solanaAmount * SolPrice).toFixed(2)) - solanainvestedAmount;
    solanaReturn = parseFloat((solanaReturn).toFixed(2))
    profitsolana = (solanaReturn/solanainvestedAmount)*100;
    profitsolana = parseFloat((profitsolana).toFixed(2));
    document.getElementById('solanaCurrentValue').textContent = "Retorno atual : " + solanaReturn + " euros." + "  ("+ profitsolana +" %)";
  })
  .catch(error => {
    console.error('Error:', error);
});

fetch('https://api.coingecko.com/api/v3/simple/price?ids=vechain&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const vetPrice = data.vechain.eur;
   
    var vetAmount = 5997.38224;
    document.getElementById('vetAmount').textContent = "Quantidade : " + vetAmount + " Vechain.";
    var vetvalue = parseFloat((vetAmount * vetPrice).toFixed(2));
    document.getElementById('vetPrice').textContent = "Valor: " + vetvalue + " euros.";
    var vetinvestedAmount = 125.53;
    document.getElementById('vetInvested').textContent = "Valor Investido: " + vetinvestedAmount + " euros.";
    var vetReturn = parseFloat((vetAmount * vetPrice).toFixed(2)) - vetinvestedAmount;
    vetReturn = parseFloat((vetReturn).toFixed(2))
    profitvet = (vetReturn/vetinvestedAmount)*100;
    profitvet = parseFloat((profitvet).toFixed(2));
    document.getElementById('vetCurrentValue').textContent = "Retorno atual : " + vetReturn + " euros." + "  ("+ profitvet +" %)";
  })
  .catch(error => {
    console.error('Error:', error);
});



// Declare variables to store data from API calls
var solanavalue = 0;
var vetvalue = 0;

// Function to update portfolio value
function updatePortfolioValue() {
  var portfolioValue = solanavalue + vetvalue;
  document.getElementById("Portefoliovalue").textContent = "Portfolio Value: " + portfolioValue.toFixed(2) + " euros.";
}

// First API call for Solana
fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const SolPrice = data.solana.eur;
    var solanaAmount = 7.62778674;
    solanavalue = parseFloat((solanaAmount * SolPrice).toFixed(2));
    updatePortfolioValue(); // Update portfolio value after the first API call
  })
  .catch(error => {
    console.error('Error:', error);
});

// Second API call for Vechain
fetch('https://api.coingecko.com/api/v3/simple/price?ids=vechain&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const vetPrice = data.vechain.eur;
    var vetAmount = 5997.38224;
    vetvalue = parseFloat((vetAmount * vetPrice).toFixed(2));
    updatePortfolioValue(); // Update portfolio value after the second API call
  })
  .catch(error => {
    console.error('Error:', error);
});
