document.addEventListener('DOMContentLoaded', function() {
    const detailsContainer = document.getElementById('ring-details');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const makers = {
        'E': 'Elfos',
        'A': 'Anões',
        'H': 'Homens',
        'S': 'Sauron'
    };

    if (id) {
        fetch(`http://localhost:8000/aneis/${id}/`)
            .then(response => response.json())
            .then(ring => {
                const dataCriacao = new Date(ring.dataCriacao).toLocaleDateString('pt-BR');
                detailsContainer.innerHTML = `
                    <h2>Detalhes do Anel</h2>
                    <img src="${ring.imagem}" alt="${ring.nome}" onerror="this.src='fallback-ring-image.jpg'">
                    <h2>${ring.nome}</h2>
                    <div class="ring-info">Poder: ${ring.poder}</div>
                    <div class="ring-info">Portador: ${ring.portador}</div>
                    <div class="ring-info">Forjado por: ${makers[ring.forjadoPor]}</div>
                    <div class="ring-info">Data de criação: ${dataCriacao}</div>
                    <button class="action-button" onclick="window.location.href='criar.html?id=${ring.id}'">Editar</button>
                    <button type="button" class="action-button" onclick="window.location.href='lista.html'">Voltar</button>
                    <button class="action-button delete-button" onclick="deleteRing(${ring.id})">Deletar</button>
                `;
            })
            .catch(error => {
                console.error('Erro:', error);
                detailsContainer.innerHTML = '<p>Erro ao carregar detalhes do anel</p>';
            });
    }

    window.deleteRing = function(id) {
        if (confirm('Tem certeza que deseja deletar este anel?')) {
            fetch(`http://localhost:8000/aneis/${id}/`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'lista.html';
                } else {
                    throw new Error('Erro ao deletar anel');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao deletar o anel');
            });
        }
    };
});
