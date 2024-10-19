import WebsiteImg1 from '../assests/eccommerce.png'
import WebsiteImg2 from '../assests/food1.png'
import WebsiteImg3 from '../assests/blog.png'
export default function project(){  

    const config = {
        projects : [
            {
            Image: WebsiteImg1 ,
            description: 'An eCommerce website involves building a product catalog, shopping cart, and secure payment gateway for online transactions.',
            link: 'https://www.eccommerce.com'
        },
        {
            Image: WebsiteImg2 ,
            description: 'A food delivery website allows users to browse menus, place orders, and track deliveries from restaurants.',
            link: 'https://www.fooddelivery' 
        },
        {
           Image: WebsiteImg3,
           description: 'A blog website enables users to publish, manage, and read articles or posts on various topics.',
           link: 'https://www.blogapp'
        }
        ]
    }


    return<section  id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
        <p>These are some of my best projects build during my college time.CHECK THEM OUT!. </p>
        </div>
        </div>
        <div className="w-full">
         <div className='flex  flex-col md:flex-row px-10 gap-5 '>
            {config.projects.map((project) =>(
                
                <div className='relative'>
               <img className='h-[200px] w-[500px]'src={project.Image}/>  

               <div className='project-desc'>
                <p className='text-center px-5 py-5'>{project.description}</p>
                <div className='flex justify-center'>
                <a className='btn' target='_blank'  a href={project.link}>View Project</a>
               </div>
               </div>
            </div>
            
            ))}

         </div>
        </div>
    </section>
}