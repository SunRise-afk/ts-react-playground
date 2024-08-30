// outsource dependencies
import { useDispatch } from 'react-redux';
import React, { memo, useCallback, useState } from 'react';

// local dependencies
import { useSelector } from '@/hooks';
import { searchRepositories } from '@/app/func-redux/controller.ts';

export const App:React.FC = memo(() => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { data, loading, error } = useSelector(state => state.func);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchRepositories(search) as any);
  }, [dispatch, search]);

  return <div>
    <h1>Search for npm packages</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={search} onChange={({ target }) => setSearch(target.value)} />
      </div>
      <div>
        <button type="submit" onClick={() => null}>Search</button>
      </div>
    </form>
    <div>
      { error ? <div>{ error }</div> : loading ? <div>Loading...</div> : (data || []).map(item => <div key={item}>{ item }</div>) }
    </div>
  </div>;
});
