
import { useEffect, useState } from 'react';

export default function FetchUser() {
  const [user, setUser] = useState(Object);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h3>Usuario:</h3>
      {user ? (
        <p>{user.name} - {user.email} <br/> - {user.phone} - {user.website} - {user.street} </p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
