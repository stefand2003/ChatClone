import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import '../app/globals.css';

const SidebarHeader = () => {
  return (
    <div className='sidebarHeaderContainer'>
      <SiOpenaigym className='aiIcon' />
      <h1 className='gptHeader'>GPTGenius</h1>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
