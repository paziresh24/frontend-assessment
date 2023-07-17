export const Button = ({ children }) => {
  return (
    <button className='w-full p-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700'>
      {children}
    </button>
  );
};

export default Button;
