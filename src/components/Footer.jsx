import logo from '../assets/Logo.png';

const Footer = () => {
    return (
      <footer className="bg-[#0D0D3A] text-[#D3D3F5] p-14">
        <div className="max-w-screen-7xl flex flex-wrap justify-between gap-16">
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className='w-10'/> 
              <span className='text-2xl font-bold text-white'>XYZ</span>
            </div>
            <p className="mt-4">
              A simple paragraph is comprised of three major components.
            </p>
            <p>The first sentence, which is often a declarative sentence.</p>
            <div className="mt-4 flex overflow-hidden rounded-2xl bg-[#282873] w-full max-w-[400px]">
                <input
                    type="email"
                    placeholder="Your email"
                    className="h-16 px-4 py-2 text-white flex-1 bg-transparent outline-none"
                />
                <button className="px-6 bg-purple-400 text-white rounded-2xl h-16">
                    Subscribe
                </button>
            </div>
          </div>

          <div className=' flex gap-16 space-x-16'>
            <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold">Platform</h3>
                <ul className="mt-2 space-y-1">
                <li>Overview</li>
                <li>Features</li>
                <li>About</li>
                <li>Pricing</li>
                </ul>
            </div>
            
            <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold">Help</h3>
                <ul className="mt-2 space-y-1">
                <li>How does it work?</li>
                <li>Where to ask a question?</li>
                <li>How to play?</li>
                <li>What is needed for this?</li>
                </ul>
            </div>
            
            <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold">Contacts</h3>
                <p className="mt-2">(012) 1234-567-890</p>
                <p>123 xyz xyz</p>
                <p>qwuerbaihefv, qiw - hrebcl</p>
                <p>095467</p>
            </div>
          </div>

        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between text-sm">
          <p>@ XYZ 20XX — 20XX. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white">🔵</a>
            <a href="#" className="text-white">🟣</a>
            <a href="#" className="text-white">🔷</a>
            <a href="#" className="text-white">🔗</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
