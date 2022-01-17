import type { NextPage } from 'next'
import style from '../../styles/header.module.css'

const Header: NextPage = () => {
    return (
        <div className={style.mainDiv}>
            <div className={style.navbar}>
                <div className={style.logo}>
                    <p>Logo</p>
                </div>
                <div className={style.categories}>
                    <p>Home</p>
                    <p>Services</p>
                    <p>About</p>
                    <p>Our works</p>
                    <p>Contact Us</p>
                    <p>Blog</p>
                </div>
                <div className='actions'>
                    <p>Action</p>
                </div>
            </div>
        </div>
    )
}

export default Header