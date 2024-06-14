import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, html_url: profile, avatar_url: img } = user;
          return (
            <li key={id}>
              <img src={img} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={profile}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
