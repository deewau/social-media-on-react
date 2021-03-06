import header from './Header.module.css'

const Header = () => {
  return (
    <header className={header.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="logo"
        width={55}
      />
    </header>
  );
};

export default Header
