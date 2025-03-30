import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <div className='p-4 gap-8 '>
            <div className='flex flex-col items-cetner justify-center bg-inherit'>
                <img src={logo} alt="Logo" className='w-10 inline-block items-center'/> <span>XYZ</span>
                <span>A simple paragraph is comprised of three major components. 
                The first sentence, which is often a declarative sentence.</span>
                <label>
                    <input type="checkbox" className='w-10 inline-block items-center'/>
                </label>
            </div>
    </div>
  )
}

export default Footer;