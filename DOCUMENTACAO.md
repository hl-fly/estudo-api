# DesafioLuizaLabs
API Rest em nodeJs, teste de dev para o LuizaLabs

# Criar Conta (/sessions) POST
Essa é a unica rota liberada para todos que quiserem se cadastrar. Após usuario estar cadastrado, todas as rotas se liberam para o mesmo

>Ex: http://localhost:3333/sessions 

~~~
body: {email: xxxx@xxxx.com, password: 1234}
~~~ 
      
# Alterar informações (/edti) PUT
Para alteração, é necessario o envio de um header com o login e senha validos já cadastrados.
Segue body com informações que se deseja alterar, entretanto os campos se fazem obrigatorios repetir.

>Ex: http://localhost:3333//edti

~~~
body: {email: yyyy@xxxx.com, password: 1234}
~~~ 

# Deletar conta (/delete) DELETE
Header com login e senha. Sem body.

>Ex: http://localhost:3333//delete

# Salvar favorito (/fave/:id) PUT
Header com Login e senha validos.
ID do produto no corpo de requisição

>Ex: http://localhost:3333//fave/432c3f2a-bcae-e709-4ad6-4ea71f4aa4f7

# Consultar favoritos (/fave_list) GET
Apenas header com login e senha.

>Ex: http://localhost:3333//fave_list
