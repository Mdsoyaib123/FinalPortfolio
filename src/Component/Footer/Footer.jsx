import './Footer.css'
const Footer = () => {

    return (
        <div className='bg-black bg-opacity-90 backdrop-blur-lg text-white shadow'>
            <div name='' className="hidden py-4 pt-20 px-6 max-w-6xl mx-auto md:flex justify-between">
            <div  className="flex gap-5 items-center version pb-6 md:pb-0 ">
                <div>
                    <h1 className='pb-4 text-gray-400'>Version</h1>
                    <p>2024 © Edition</p>
                </div>
                <div>
                    <h1 className='pb-4 text-gray-400'>Version</h1>
                    <p className=''>10:49 AM GMT+6</p>
                </div>
            </div>
            <div >
                <h1 className='pb-4 text-gray-400'>Socials</h1>
                <div className="social flex gap-5">
                    <a className='hover:scale-105 hover:underline' href="https://github.com/Mdsoyaib123" target="_blank">Github</a>
                    <a className='hover:scale-105 hover:underline' href="https://www.linkedin.com/in/md-soyaib-hossain-9b75a92a0/" target="_blank">Linkedin</a>
                    <a className='hover:scale-105 hover:underline' href="https://www.facebook.com/mdsoyaib.hossain.77/" target="_blank">Facebook</a>
                </div>
            </div>
        </div>
        <div className='md:hidden text-center'>
            <h1 className='py-4'>Copyright © 2024by Soyaib Hossain .</h1>
        </div>
        </div>
    );
};

export default Footer;