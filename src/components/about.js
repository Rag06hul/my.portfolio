import HeroImg from '../assests/hero.png';
export default function About() {
    const config = {
        line1: "some information about my self  Hi Iam Raghul I'm  passsionate web developer,Ibuilt beautifulsites using react and tailwindcss",
        line2: "some information about my self  Hi Iam Raghul I'm  passsionate web developer,Ibuilt beautifulsites using react and tailwindcss",
        line3: "some information about my self  Hi Iam Raghul I'm  passsionate web developer,Ibuilt beautifulsites using react and tailwindcss",

    }
    return <section id='about'className='flex flex-col md:flex-row  bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={HeroImg} alt='hii'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
        <p className='pb-5'>{config.line3}</p>
        </div>
        </div>
    </section>
}