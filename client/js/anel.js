document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
        fetch(`http://localhost:8000/aneis/${id}/`)
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(key => {
                    const input = document.getElementById(key);
                    if (input) input.value = data[key];
                });
            });
    }

    const imageLabels = document.querySelectorAll('.image-option label');
    const customImageInput = document.getElementById('imagem');

    imageLabels.forEach(label => {
        label.addEventListener('click', function() {
            const radio = this.previousElementSibling;
            customImageInput.value = radio.value;
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fData = new FormData(form);
        const data = Object.fromEntries(fData);
        delete data.imgopt;
        
        const url = id 
            ? `http://localhost:8000/aneis/${id}/`
            : 'http://localhost:8000/aneis/';

        fetch(url, {
            method: id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert(data.erro);
            } else {
                window.location.href = 'lista.html';
            }
        })
        .catch(error => {
            alert('Erro ao salvar o anel: ' + error);
        });
    });
});
