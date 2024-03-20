# DeezerList

![GitHub](https://img.shields.io/github/license/vimigueloli/DeezerList?color=brigthgreen) <br/>

#### Esse projeto visa criar uma pagina que lista as musicas mais tocadas do Deezer atualizadas em tempo real e permite você favoritar as musicas para que possa revisitar elas depois, por conta dos direitos de uso das musicas você pode somente ouvir uma previa delas mas se gostar de alguma é só clicar na capa do album que você será redirecionado para o Deezer onde poderá oouvir a musica completa. Você pode acessar o projeto pelo seguinte link: https://deezer-list.vercel.app/

# Dependências

![GitHub](https://img.shields.io/badge/dependências-react-4e8dec?style=plastic)
![GitHub](https://img.shields.io/badge/-local_storage-4e8dec?style=plastic)
![GitHub](https://img.shields.io/badge/-tailwind_css-4e8dec?style=plastic)
![GitHub](https://img.shields.io/badge/-axios-4e8dec?style=plastic)
<br/>

#### O projedo depende de algumas bibliotecas, então para que ele funcione é necessário acessar o terminal no repositorio do projeto e executar os seguintes comandos:

```
npm install
npm run build
npm start
```

# Observações

#### A ideia original era consumir a API do Deezer, porem enfrentei um problema com o "CORS" na hora de usar essa API, sabendo que o uso do Axios era obrigatório e que o mesmo faz requisições XMLHTTP, impossibilitando o uso do modo "no-cors", optei pelo uso da rapidAPI que se alimenta da API do Deezer para tentar me manter na proposta inicial.
