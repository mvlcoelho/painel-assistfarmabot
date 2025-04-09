function carregarTabela(refPath, tabelaId, incluirSenha = false) {
  const tabela = document.getElementById(tabelaId).getElementsByTagName('tbody')[0];
  tabela.innerHTML = '';

  database.ref(refPath).once('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      Object.entries(data).forEach(([id, info]) => {
        const row = tabela.insertRow();
        row.insertCell().innerText = info.nome || '';
        row.insertCell().innerText = info.registro || '';
        row.insertCell().innerText = id;
        if (incluirSenha) {
          row.insertCell().innerText = info.senha || '';
        }
      });
    }
  });
}

window.onload = () => {
  carregarTabela('usuarios_autorizados', 'tabela-autorizados');
  carregarTabela('usuarios_pendentes', 'tabela-pendentes', true);
};
