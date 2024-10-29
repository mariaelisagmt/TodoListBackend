const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Importamos a documentação Swagger

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota de documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Armazena as tarefas em memória (in-memory storage)
let tasks = [];

// Rota para listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tasks);
});

// Rota para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'Titulo da tarefa é obrigatório' });
  }

  const novaTarefa = { id: tarefas.length + 1, titulo, completo: false };
  tasks.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// Rota para atualizar uma tarefa
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, completo } = req.body;

  const tarefa = tarefa.find(tarefas => tarefas.id === parseInt(id));
  if (!tarefa) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  if (titulo) completo.titulo = titulo;
  if (typeof completo === 'boolean') tarefa.completo = completo;

  res.json(tarefa);
});

// Rota para deletar uma tarefa
app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  tarefas = tarefas.filter(tarefa => tarefa.id !== parseInt(id));

  res.status(204).send(); // Sem conteúdo
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
