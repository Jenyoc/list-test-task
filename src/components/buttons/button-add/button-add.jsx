import React, { useCallback } from 'react';
import { Button } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export const ButtonAdd = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ list }) => list, shallowEqual);
  const addNewItem = useCallback(() => {
    const newItem = {
      id: Math.random(),
      backgroundColor: `#${(`${Math.random().toString(16)}000000`).substring(2, 8).toUpperCase()}`,
    };

    dispatch({
      type: 'SET_LIST',
      payload: [...items, newItem],
    });
  }, [dispatch, items]);

  return <Button onClick={addNewItem} className="m-1 bg-white" disabled={items.length === 5}>Добавить</Button>;
};
