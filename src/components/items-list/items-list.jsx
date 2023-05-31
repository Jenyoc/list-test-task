import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  useTransition,
} from '@react-spring/web';
import { ItemBlock } from './item-block/item-block';

export const ItemsList = () => {
  const items = useSelector(({ list }) => list, shallowEqual);

  const transition = useTransition(items, {
    from: {
      transform: `translateX(-${20 * items.length}vw)`,
    },
    enter: {
      transform: 'translateX(0vw)',
    },
    leave: {
      transform: `translateX(${100 - 20 * items.length}vw)`,
    },
  });

  return (
    <div className="items-list w-100 d-flex">
      {transition((style, item) => (
        item ? (
          <ItemBlock
            key={item.id}
            backgroundColor={item.backgroundColor}
            style={style}
          />
        ) : null
      ))}
    </div>
  );
};
