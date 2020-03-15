import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { Container } from './styles';
import { getAllItemsRequest } from '../../store/modules/items/actions';

export default function Dashboard() {
  const items = useSelector(state => state.items);

  const dispatch = useDispatch();

  /*eslint-disable */
  useEffect(() => {
    dispatch(getAllItemsRequest());
  }, []);
  /* eslint-enable */

  return (
    <div>
      <ul>{items && items.items.map(i => <li>{i}</li>)}</ul>
    </div>
  );
}
