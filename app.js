const API_URL = 'https://backend-treine-seu-dragao.onrender.com/api/entries';

const form = document.getElementById('entry-form');
const entryId = document.getElementById('entry-id');

const nome = document.getElementById('nome');
const tipo = document.getElementById('tipo');
const instrucao = document.getElementById('instrucao');
const dataNascimento = document.getElementById('dataNascimento');
const metros = document.getElementById('metros');

console.log({
  nome,
  tipo,
  instrucao,
  dataNascimento,
  metros
});

const entriesList = document.getElementById('entries-list');
const message = document.getElementById('message');
const cancelEdit = document.getElementById('cancel-edit');
const formTitle = document.getElementById('form-title');
const reloadBtn = document.getElementById('reload-btn');

function showMessage(text) {
  message.textContent = text;
}

function clearForm() {
  form.reset();
  entryId.value = '';
  formTitle.textContent = 'Novo registro';
  cancelEdit.classList.add('hidden');
}

async function loadEntries() {
  try {
    const response = await fetch(API_URL);
    const entries = await response.json();

    if (!entries.length) {
      entriesList.innerHTML = '<p>Nenhum registro encontrado.</p>';
      return;
    }

    entriesList.innerHTML = entries.map(entry => `
      <div class="entry-item">
        <h3>${entry.nome}</h3>
        <p><strong>Tipo:</strong> ${entry.tipo}</p>
        <p>${entry.instrucao}</p>
        <p><strong>Nascimento:</strong> ${entry.dataNascimento.split('T')[0]}</p>
        <p><strong>Tamanho:</strong> ${entry.metros}m</p>

        <button onclick="editEntry('${entry._id}')">Editar</button>
        <button onclick="deleteEntry('${entry._id}')">Excluir</button>
      </div>
    `).join('');

  } catch (error) {
    console.error(error);
    showMessage('Erro ao carregar.');
  }
}

async function saveEntry(data) {
  const id = entryId.value;
  const url = id ? `${API_URL}/${id}` : API_URL;
  const method = id ? 'PUT' : 'POST';

  try {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(result);
      showMessage('Erro ao salvar!');
      return;
    }

    console.log('Salvo:', result);

  } catch (error) {
    console.error(error);
    showMessage('Erro de conexão.');
  }
}

window.editEntry = async function (id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const entry = await response.json();

    entryId.value = entry._id;
    nome.value = entry.nome;
    tipo.value = entry.tipo;
    instrucao.value = entry.instrucao;
    dataNascimento.value = entry.dataNascimento.split('T')[0];
    metros.value = entry.metros;

    formTitle.textContent = 'Editar registro';
    cancelEdit.classList.remove('hidden');

  } catch (error) {
    console.error(error);
  }
};

window.deleteEntry = async function (id) {
  if (!confirm('Deseja excluir?')) return;

  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadEntries();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nome: nome.value,
    tipo: tipo.value,
    instrucao: instrucao.value,
    dataNascimento: new Date(dataNascimento.value), // 🔥 CORRIGIDO
    metros: parseFloat(metros.value)
  };

  await saveEntry(data);

  showMessage(entryId.value ? 'Atualizado!' : 'Criado!');
  clearForm();
  loadEntries();
});

cancelEdit.addEventListener('click', clearForm);
reloadBtn.addEventListener('click', loadEntries);

clearForm();
loadEntries();