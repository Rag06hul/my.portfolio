import HeroImg from '../assests/hero.png';
import {AiOutlineFacebook,AiOutlineLinkedin, AiOutlineWhatsApp,AiOutlineInstagram} from "react-icons/ai";
export default function Hero() {
    const config = {
        subtitle: 'Iam Web Developer',
        social: {
            facebook: 'https://www.facebook.com/profile.php?id=100034317322310',
            linkedin: 'https://www.linkedin.com/in/raghul-m-cse-a0312125a/',
            whatsapp: 'https://api.whatsapp.com/send/?phone=%2B919025844684&text&type=phone_number&app_absent=0',
            instagram: 'https://www.instagram.com/_.r.a.g_h.u.l._/?hl=en'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl font-hero-font'>Hi ,<br/> I'am <span className='text-black'>Raghul M</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 '>
            <a href={config.social.facebook} className='pr-5  hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.whatsapp} className='pr-5  hover:text-white'><AiOutlineWhatsApp size={40}/></a>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href= {config.social.instagram}className=' hover:text-white'><AiOutlineInstagram size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/4'src={HeroImg} alt='hii'/>
    </section>
}