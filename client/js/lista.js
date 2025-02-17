document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');

    function loadAll() {
        fetch('http://localhost:8000/aneis/')
            .then(response => response.json())
            .then(rings => {
                list.innerHTML = '';
                rings.forEach(ring => {
                    const card = makeCard(ring);
                    list.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar anéis:', error);
                alert('Erro ao carregar a lista de anéis');
            });
    }

    function makeCard(ring) {
        const makers = {
            'E': 'Elfos',
            'A': 'Anões',
            'H': 'Homens',
            'S': 'Sauron'
        };

        const div = document.createElement('div');
        div.className = 'ring-card';
        div.innerHTML = `
            <img src="${ring.imagem}" alt="${ring.nome}" onerror="this.src='fallback-ring-image.jpg'">
            <h3>${ring.nome}</h3>
            <div class="ring-info">Poder: ${ring.poder}</div>
            <div class="ring-info">Portador: ${ring.portador}</div>
            <div class="ring-info">Forjado por: ${makers[ring.forjadoPor]}</div>
            <div class="card-buttons">
                <button class="card-button" onclick="window.location.href='detalhes.html?id=${ring.id}'">Detalhes</button>
                <button class="card-button" onclick="window.location.href='criar.html?id=${ring.id}'">Editar</button>
                <button class="card-button delete-button" onclick="del(${ring.id})">Deletar</button>
            </div>
        `;
        return div;
    }

    window.del = function(id) {
        if (confirm('Tem certeza que deseja deletar este anel?')) {
            fetch(`http://localhost:8000/aneis/${id}/`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    loadAll();
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

    loadAll();
});