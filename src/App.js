import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      {/* HEADER */}
      <header className='header'>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
      </header>

      {/* SIDE BAR */}
      <nav className='nav'>
        <div><a href='!#'>Profile</a></div>
        <div><a href='!#'>Messages</a></div>
        <div><a href='!#'>News</a></div>
        <div><a href='!#'>Music</a></div>
        <div><a href='!#'>Setting</a></div>  
      </nav>

      {/* CONTENT */}
      <div className='content'>
        <img src="https://images.pexels.com/photos/12906178/pexels-photo-12906178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        
        <div>
          ava + description
        </div>

        <div>
          My post
          <div>New Post</div>
        </div>

        <div>
          Posts
        </div>

        <div>
          Posts 2
        </div>
      </div>
    </div>
  );
}



export default App;
