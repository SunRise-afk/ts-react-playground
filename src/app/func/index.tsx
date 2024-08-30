import React, { useEffect, useRef, useState } from 'react';

export const App:React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleButtonClick = () => {
    setGuests(prev => [...prev, name]);
    setName('');
  };
  const handleEnterPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') { return; }
    event.preventDefault();
    handleButtonClick();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <div>
    <h3>Guest List</h3>
    <input ref={inputRef} type="text" value={name} onChange={event => setName(event.target.value)} onKeyDown={handleEnterPress}/>
    <button onClick={handleButtonClick}>Add Guest</button>
    <div>
      { guests.map(item => <div key={item}>{ item }</div>) }
    </div>
  </div>;
};
