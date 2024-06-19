import avatar from '../../assets/default-avatar.svg';

const Person = ({ name, nickName = 'coolpal', images }) => {
  // const img = images[0].small.url;

  // Fix 1
  const img = images && images[0] && images[0].small && images[0].small.url;

  // Fix 2 - Optional Chanining
  // const imgSrc = images?.[0]?.small?.url || avatar;
  const imgSrc = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={imgSrc} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      {/* <p>Nickname: {nickName || 'shake and bake'}</p> */}
      <p>Nickname: {nickName}</p>
    </div>
  );
};

export default Person;
