# Devvo-Challenge
Teste técnico Devvo.

## Como rodar o projeto

### Pré-requisitos
- Python 3.8 ou superior
- PostgreSQL
- Node.js (para rodar o frontend)

### Configuração do Banco de Dados
1. Crie um banco de dados no PostgreSQL
2. Crie um arquivo `.env` na pasta `server` com as variáveis:
```
DB_NAME=nome_do_seu_banco
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
```

### Backend (Server)
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Devvo-Challenge.git
cd Devvo-Challenge
```

2. Configure o ambiente:
```bash
cd server
python -m venv venv
source venv/bin/activate # Linux
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Execute as migrações e execute:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

O backend irá rodar em `http://localhost:8000`

### Frontend (Client)
1. Abra um novo terminal na pasta client:
```bash
cd client
python -m http.server 5000Tes
```

O frontend estará disponível em `http://localhost:5000`

### Uso
1. Acesse `http://localhost:5000` no seu navegador
2. Você pode criar novos anéis e visualizar a lista de anéis criados
3. O sistema seguirá as regras de criação conforme a história de Senhor dos Anéis:
   - Sauron só pode forjar 1 anel
   - Elfos podem forjar até 3 anéis
   - Anões podem forjar até 7 anéis
   - Homens podem forjar até 9 anéis