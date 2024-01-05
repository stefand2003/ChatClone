import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPT Genius</h1>
          <p className='py-6 text-lg leading-loose'>
            GPTGenius: Your personal AI assistant and language companion.
            Powered by OpenAI, it enhances your productivity and helps you
            achieve your goals.
          </p>
          <Link href='/chat'>
            <button className='btn btn-secondary'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
