import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { ButtonAdd } from '../buttons/button-add/button-add';
import { ButtonDelete } from '../buttons/button-delete/button-delete';

export const AppHeader = () => (
  <Header className="d-flex justify-content-center align-items-center w-100">
    <ButtonAdd />
    <ButtonDelete />
  </Header>
);
