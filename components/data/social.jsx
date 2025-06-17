import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/profile.php?id=100069174512308" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                {/*<li><Link href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                <li><Link href="https://behance.net" target="_blank"><i className="fab fa-behance"></i></Link></li> */}
                <li><Link href="https://www.linkedin.com/company/evolapp/about/?viewAsMember=true" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;