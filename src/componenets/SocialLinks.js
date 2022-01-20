import React from 'react';

export default function SocialLinks (props) {
    let socialLinks = props.socialLinks.map((socialLink, index) => {
        return (
            <li className="mb-2" key={index}>
                <a className='text-decoration-none' target="_blank" rel='noreferrer' style={{color:'var(--my-white)'}} href={socialLink.link}>
                    {socialLink.name}
                </a>
            </li>
        );
    });
    return (
        <>
            <h5 className='fw-bold' style={{color:'var(--my-white)'}}>{props.title}</h5>
            <ul className='list-unstyled'>
                {socialLinks}
            </ul>
        </>
    );
}
