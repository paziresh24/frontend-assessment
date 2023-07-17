export const Avatar = ({ avatar, name, family }) => {
  return (
    <img
      src={avatar}
      alt={`${name} ${family}`}
      className='w-24 h-24 border-2 border-blue-600 rounded-full'
    />
  );
};
