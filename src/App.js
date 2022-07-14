function App() {
    return (
        <div className="wrapper clear">
            <header className="dFlex jBetween">
                <div className="itemsCenter dFlex">
                    <img height={64} width={64} src="/img/logo.png" alt="Logo"/>
                    <div className="dFlex fCol">
                        <h3>Asterisk</h3>
                        <p>Магазин корейской косметики</p>
                    </div>
                </div>

                <ul className="dFlex itemsCenter">
                    <li className="dFlex itemsCenter">
                        <img src="/img/CertIcon.png" alt="Cart"/>
                        <span className="ml-8">1560 руб.</span>
                    </li>
                    <li>
                        <img src="/img/FavoriteIcon.png" alt="Favorite"/>
                    </li>
                    <li>
                        <img src="/img/ProfileIcon.png" alt="Profile"/>
                    </li>
                </ul>
            </header>

            <div className="content">
                <h1 className="mb-30">Каталог</h1>

                <div className="card dFlex fCol jBetween">
                    <div className="image tCenter"><img width={128} height={128} src="/img/1.png" alt="1"/></div>
                    <p className="tCenter mt-7">Крем для кожи вокруг глаз против АКНЭ (30 г.), Bio</p>
                    <div className="footerCard dFlex jBetween itemsCenter mt-7">
                        <div className="price dFlex fCol">
                            <span>ЦЕНА:</span>
                            <p>199 руб.</p>
                        </div>
                        <div className="cartIcon">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" stroke="#5A6271"
                                      stroke-opacity="0.4"/>
                                <path
                                    d="M9.59028 15.4929C9.58939 15.4881 9.58859 15.4833 9.58787 15.4784L8.5711 9.37783C8.47065 8.7751 7.94916 8.33333 7.33811 8.33333H7.08332C6.8532 8.33333 6.66666 8.14679 6.66666 7.91667C6.66666 7.68655 6.8532 7.5 7.08332 7.5H7.33811C8.33129 7.5 9.18251 8.20024 9.37937 9.16667H22.9167C23.1935 9.16667 23.3933 9.43163 23.3173 9.6978L21.6506 15.5311C21.5995 15.71 21.436 15.8333 21.25 15.8333H10.4918L10.5955 16.4555C10.696 17.0582 11.2175 17.5 11.8285 17.5H21.25C21.4801 17.5 21.6667 17.6865 21.6667 17.9167C21.6667 18.1468 21.4801 18.3333 21.25 18.3333H11.8285C10.8101 18.3333 9.94097 17.5971 9.77355 16.5925L9.59028 15.4929ZM9.51963 10L10.353 15H20.9357L22.3643 10H9.51963ZM11.6667 22.5C10.7462 22.5 9.99999 21.7538 9.99999 20.8333C9.99999 19.9129 10.7462 19.1667 11.6667 19.1667C12.5871 19.1667 13.3333 19.9129 13.3333 20.8333C13.3333 21.7538 12.5871 22.5 11.6667 22.5ZM11.6667 21.6667C12.1269 21.6667 12.5 21.2936 12.5 20.8333C12.5 20.3731 12.1269 20 11.6667 20C11.2064 20 10.8333 20.3731 10.8333 20.8333C10.8333 21.2936 11.2064 21.6667 11.6667 21.6667ZM19.1667 22.5C18.2462 22.5 17.5 21.7538 17.5 20.8333C17.5 19.9129 18.2462 19.1667 19.1667 19.1667C20.0871 19.1667 20.8333 19.9129 20.8333 20.8333C20.8333 21.7538 20.0871 22.5 19.1667 22.5ZM19.1667 21.6667C19.6269 21.6667 20 21.2936 20 20.8333C20 20.3731 19.6269 20 19.1667 20C18.7064 20 18.3333 20.3731 18.3333 20.8333C18.3333 21.2936 18.7064 21.6667 19.1667 21.6667Z"
                                    fill="#5A6271" fill-opacity="0.4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
