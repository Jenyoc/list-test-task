import React, { useCallback } from 'react';
import { Button } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export const ButtonDelete = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ list }) => list, shallowEqual);
  const deleteLastItem = useCallback(() => {
    dispatch({
      type: 'SET_LIST',
      payload: items.slice(0, -1),
    });
  }, [dispatch, items]);

  return <Button onClick={deleteLastItem} className="m-1 bg-white" disabled={!items.length} danger>Удалить</Button>;
};
