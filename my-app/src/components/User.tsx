import { useState } from 'react';

interface User {
  uid: string;
  name?: string;
}

const tempUser: User = {
  uid: 'XVE123',
}

export const User = () => {

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'César Arellano'
    }); 
  }

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button
        onClick={ login }
        className="btn btn-primary mb-2"
      >
        Login
      </button>
      {
        (!user)
          ? <pre className="text-white"> Unauthenticated user </pre>
          : <pre className="text-white"> { JSON.stringify(user) } </pre>
      }
    </div>
  )
}
