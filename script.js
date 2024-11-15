function calcular() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const carne = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    document.getElementById('resultado').innerHTML = `
        <h2>Ingredientes Necessários</h2>
        <p>Carne bovina: ${carne.toFixed(2)} kg</p>
        <p>Frango: ${frango.toFixed(2)} kg</p>
        <p>Linguiça: ${linguica.toFixed(2)} kg</p>
        <p>Refrigerante: ${refrigerante.toFixed(2)} L</p>
        <p>Cerveja: ${cerveja.toFixed(2)} L</p>
    `;
}
