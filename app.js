function pesquisar() {
  const inputPesquisa = document.getElementById("campo-pesquisa");
  const valorPesquisa = inputPesquisa.value.toLowerCase();
  const resultados = document.getElementById("resultados-pesquisa");


  const artistasFiltrados = artistas.filter(artista =>
    artista.titulo.toLowerCase().includes(valorPesquisa) || artista.descricao.toLowerCase().includes(valorPesquisa)
  );

 
  let html = "";
  if (artistasFiltrados.length > 0) {
    artistasFiltrados.forEach(artista => {
      html += `
        <div class="item-resultado">
          <h2><a href="${artista.link}" target="_blank">${artista.titulo}</a></h2>
          <p class="descricao-meta">${artista.descricao}</p>
          <a href="${artista.spotify}" target="_blank">Ouça agora no Spotify</a>
        </div>
      `;
    });
    resultados.innerHTML = html;
    resultados.style.display = 'block'; 
  } else {
    resultados.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    resultados.style.display = 'block'; 
}

}
