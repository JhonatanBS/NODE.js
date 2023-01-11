# Comandos

- **show dbs:** Mostra todos os bancos de dados.
> show dbs

- **db:** Apresenta o banco de dados escolhido.
> db

- **use:** Seleciona o banco de dado.
> use "nome do banco"

- **insertOne()** Cria o collection e o banco de dados selecionado e insere o dado ou documents.
> db.**nome da collection**.insertOne({ **chave: valor**})
> Exemplo : db.teste.insertOne({name: "Paulo"})

- **find():** Filtra os dados ou documents
> **Resgata todos os dados:** db.**nomedacollection**.find({})
> **Resgata um ou mais:** db.**nomedacollection**.find({**chave:valor**})

- **pretty():** Formata os dados para melhorar a visualização.
> db.pessoas.find().pretty()

- **createCollection()** Cria uma coleção com regras definidas dentro do objeto.
> db.createCollection(nomedacollection, {object})
> Exemplo: db.createCollection("minhaColecao", { capped: true, size: 1000, max: 3})

- **show collections:** Apresenta todas as coleções do banco de dados escolhido.
> show collections

- **drop():** Remove uma coleção.
>db.nomedacolecao.drop()
Exemplo: db.teste.drop()

- **dropDatabase:** Remove o banco de dados selecionado pelo use.
> db.dropDatabase()

- **mongoimport:** Faz importação de arquivos do tipo **json**.
> Linha de comando: mongoimport nomedoarquivo -d nomedobanco -c nome da collection
> Exemplo: mongoimport books.json -d booksData -c books

- **mongoexport:** Faz exportação de arquivos para o tipo **json**.
> Linha de comando: mongoexport -c nomedacollection -d nomedobanco -o nomedoarquivo
> Exemplo: mongoexport -c books -d booksData -o booksExample.json

- **mongodump:** Exporta todas coleçôes de um banco.
> mongodump -d banco -o **diretório**
Exemplo: mongodump -d mybank -o mybank

- **mongorestore:** Importa todas as coleções de um banco.
> mongorestore **diretório**
> Exemplo: mongorestore mybank

- **mongostat:** Mostra o status do mongoDB.
> mongostat

- **Remover todos os banco:** Função remove todos os banco, menos 'admin', 'config' e o 'local'.
~~~ MongoDB
 Mongo().getDBName().forEach(function(db){
    if('admin', 'config', 'local'].indexOf(db) < 0){
       Mongo().getDB(db).dropDatabase();
    }
 })