<p align="center">
  <img src="https://github.com/kali-r3i5/concrete-hub/blob/master/src/assets/snapshot.png" width="200" />
  <img src="https://github.com/kali-r3i5/concrete-hub/blob/master/src/assets/profile-snapshot.png" width="200" /> 
  <img src="https://github.com/kali-r3i5/concrete-hub/blob/master/src/assets/not-found-snapshot.png" width="200" />
</p>
<br />

- Ao buscar um usuário pelo login do github, direcionar para
  página de resultado de busca.
- Se o usuário for encontrado apresentar página de detalhes do
  usuário (Layout result), caso contrário exibir mensagem
  amigável (Layout NotFound).
  Requisitos
- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo ver os detalhes desse usuário que foi
  buscado (número de seguidores, número de seguidos, imagem do
  avatar, e-mail e bio);
- Eu, como usuário, desejo ver a listagem dos repositórios desse
  usuário que foi buscado, ordenados pelo número decrescente de
  estrelas;
  Definição de pronto
- O layout deve ser implementado de acordo com a especificação
  do Zeplin.io
- Não é obrigatório o uso de um framework, mas recomendamos
  React.js.
- É obrigatório o uso de rotas.
  Critérios de avaliação
- Organização do projeto: Avalia a estrutura do projeto,
  documentação e uso de controle de versão;
- Inovação tecnológica: Avalia o uso de tecnologias mais
  recentes, desde que estáveis;
- Coerência: Avalia se os requisitos foram atendidos;
- Boas práticas: Avalia se o projeto segue boas práticas de
  desenvolvimento, incluindo segurança e otimização;
- Controle de Qualidade: Avalia se o projeto possui qualidade
  assegurada por testes automatizados (por exemplo Jasmine).
  Submissão
- O desafio deve ser entregue pelo GitHub. A aplicação deve
  estar hospedada (Heroku, Netlify, Firebase, Plunker, etc) e as
  URLs devem ser enviadas por email.

<br /><br />

## Quick start

Para rodar o projeto:

### `git clone https://github.com/kali-r3i5/concrete-hub.git`

Abra o diretório:

### `cd concrete-hub`

Instale as dependências:

### `yarn`

Para rodar o projeto:

### `yarn start`

Para testar:

### `yarn test`

E "buildar":

### `yarn build`

<br /><br />


### Solução

- A função `useNavigate()` provinda da lib `react-router-dom` foi utilizada para redirecionar o usuário para pagina de resultado . O parâmetro de navegação passado foi alimentado pela constante `search`, que é alterada pelo useState Hook `setSeach()` ao receber o input do usuário. Ao ser submetido invoca a função `handleSubmit()` que realiza redirecionamento .

- A constante username é recebido como parâmetro pela função `useParams()` também da lib `react-router-dom`, e é passado como dependência de um useEffect Hook que realiza o `fetch()` recebendo como promise os dados de usuário e repositórios, então a resposta de usuário é tratada para caso de não encontrado e os repositórios do usuário encontrado são ordenados pelo número decrescente de estrelas pela função `sortByStars()`.

- Para a construção do Layout foi utilizado `Styled-Components` seguindo o modelo indicado ( desktop ) e tomei o cuidado de torna-lo responsivo ( mobile ) .