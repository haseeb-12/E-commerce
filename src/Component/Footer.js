import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../Style/logo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
function Footer() {
    return (
        <footer>
            <div className='container footer-container'>
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='footer logo' />
                    </Link>
                    <p>
                    RYDER is on this list because of its strange (but interesting) take on ecommerce website design. Contrasting elements helps the store stand out. RYDER also has simple navigation, which makes it easy for visitors to find different products on its website.
                    </p>
                    <div className='footer-socials'>
                        <a href='https://linkedin.com' target='_blank' rel='noreffer noopener'><FaLinkedin/></a>
                        <a href='https://facebook.com' target='_blank' rel='noreffer noopener'><FaFacebookF/></a>
                        <a href='https://twitter.com' target='_blank' rel='noreffer noopener'><AiOutlineTwitter/></a>
                        <a href='https://instagram.com' target='_blank' rel='noreffer noopener'><AiFillInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/'>Home</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>

                </article>
            </div>
            <div className='footer-copyright'>
                <small>2022 & copyright:All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer