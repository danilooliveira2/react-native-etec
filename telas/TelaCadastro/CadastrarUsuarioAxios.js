import axios from 'axios';

const uri = 'mongodb+srv://danilo:200999@cluster0.wpbdd.mongodb.net/?retryWrites=true&w=majority';
const database = 'etec_cerq';
const collection = 'cliente';


// Ao gerar o banco no MongoDB Atlas é preciso criar uma API Key
// E usar a Chave Pública nos parametros abaixo

async function cadastrarUsuario(nome, email, senha) {
  const response = await axios.post(
    `${uri}/databases/${database}/collections/${collection}?apiKey=tikncrca`,
    {
      nome,
      email,
      senha,
    }
  );

console.log("Cadastro executado");

  return response.data;
}

export default cadastrarUsuario;
