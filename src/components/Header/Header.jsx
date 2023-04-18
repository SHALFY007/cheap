import Style from './Header.module.scss'

function Header() {
    return (
        <header className={Style.header}>
            <div className={Style.header_left}>
                <a href="#" className={Style.header_left_txt}>Главная</a>
                <a href="#" className={Style.header_left_txt}>О&nbsp;чипировании</a>
                <a href="#" className={Style.header_left_txt}>Преимущества</a>
                <a href="#" className={Style.header_left_txt}>Галерея работ</a>
            </div>
            <div className={Style.header_right}>
            <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" width="40" height="3" fill="#DB3138"/>
                <rect y="11" width="40" height="3" fill="#DB3138"/>
                <rect x="10" y="22" width="40" height="3" fill="#DB3138"/>
            </svg>
            </div>
        </header>
    )
}

export default Header