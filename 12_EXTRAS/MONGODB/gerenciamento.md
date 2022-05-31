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

- 