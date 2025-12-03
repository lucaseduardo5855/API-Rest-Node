import app from './app.js';

const port = 3001; //setando a porta

app.listen(port, () => {
  console.log(`Escutando na Porta ${port}`);
  console.log(`CRTL + Clique em http://localhost:${port}`);
});
