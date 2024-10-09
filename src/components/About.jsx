import about from '../assets/about.png'
import about2 from '../assets/about2.png'

const About = () => {
    return(
        <div className="md:px-14 p-4 m max-w-s mx-auto">
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src={about} alt="" />
                </div>

                {/* About content */}
                <div className='md:w-2/6'>

                </div>
            </div>

           {/* 2 part */}

           <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src={about2} alt="" />
                </div>

                {/* About content */}
                <div className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any
                    <span className='text-secondary'> time convinent for you.</span></h2>
                    <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                    'There are many different kinds of animals that live in China.</p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>
        </div>
    )
};

export default About;