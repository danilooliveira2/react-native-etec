
// Instalação do Realm - Versão mais antiga
// npm i realm@10.24.0
// npm i mongodb@4.14.0

//Verificando Verões:
// npm ls realm
// npm ls mongodb

//Em MongoDB Atlas precisa ser criado um Novo Aplicativo, 
//https://realm.mongodb.com/
// E também dado permissão para qualquer credencial ter acesso, por meio de usermdb Users.

// const usermdb = new Realm.usermdb({ id: '<usermdb_ID>' });
// const credentials = Realm.Credentials.anonymous();
// const mongodb = usermdb.currentUser.mongoClient('<ATLAS_CLUSTER_NAME>');

// const credentials = Realm.Credentials.emailPassword('danilo.oliveira2@outlook.com.br', '200999');



import Realm from 'realm';

const appId = 'application-0-gepwy';
const appConfig = {
  id: appId,
  timeout: 100000,
};

// const app = new Realm.App({ id: appId });
// const mongodb = app.currentUser.mongoClient("mongodb+srv://danilo:200999@cluster0.wpbdd.mongodb.net/etec_cerq?retryWrites=true&w=majority", );

async function run() {
 
  console.log("funcao executada")
  const app = new Realm.App(appConfig);
  const credentials = Realm.Credentials.anonymous();

    async function cadastrarUsuario(nome, email, senha) {
    }


    const user = await app.logIn(credentials);
    const mongodb = app.currentUser.mongoClient("mongodb+srv://danilo:200999@cluster0.wpbdd.mongodb.net/etec_cerq?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

    console.assert("Retorno: ", user.id === app.currentUser.id);

    
     const collection = mongodb.db('etec_cerq').collection('cliente');
     await collection.find({ nome: "Fabiana"});

     console.log(collection);

    //  await collection.insertOne({ nome: "Danilo", email: "danilo@", senha : "123123" });
    //  await collection.insertOne({ nome, email, senha });

  // await cadastrarUsuario("Danilo", "danilo@example.com", "senha123");
}

export default run;


