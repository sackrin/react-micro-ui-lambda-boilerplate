import React, { useState, useCallback } from 'react';

const ExampleComponent = ({ name = 'Neigh' }) => {
  const [thing, setThing] = useState(false);
  const onThing = useCallback(() => {
    setThing(true);
  }, [setThing]);
	return <div onClick={onThing}>{thing ? 'Typical' : name}</div>;
};

export default ExampleComponent;
