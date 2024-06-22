import useFetchPerson from './useFetchPerson';

const url = 'https://api.github.com/users/QuincyLarson';

const FetchDataHook = () => {
  const { isLoading, isError, user } = useFetchPerson(url);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error....</h2>;
  }

  const { avatar_url, name, bio, company } = user;

  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default FetchDataHook;
