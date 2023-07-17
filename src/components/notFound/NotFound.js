const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white p-20'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-3xl text-blue-600 lg:text-6xl'>404</h1>
          <h6 className='mb-2 text-2xl font-bold text-center'>
            Oops! The profile you are looking for could not be found.
          </h6>
          <div className='mt-4'>
            <a
              href='/'
              className='px-5 py-2 bg-white rounded-md hover:bg-gray-100'>
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
