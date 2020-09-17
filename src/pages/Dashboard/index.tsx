import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://github.com/newton-duarte.png" alt="Newton Duarte" />
        <div>
          <strong>vuethub</strong>
          <p>A Vue.js application that you can search for GitHub users and see their repos!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://github.com/newton-duarte.png" alt="Newton Duarte" />
        <div>
          <strong>vuethub</strong>
          <p>A Vue.js application that you can search for GitHub users and see their repos!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://github.com/newton-duarte.png" alt="Newton Duarte" />
        <div>
          <strong>vuethub</strong>
          <p>A Vue.js application that you can search for GitHub users and see their repos!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
