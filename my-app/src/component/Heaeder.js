import React from 'react'

const Heaeder = () => {
  return (
    <header className="header">
            <div className="grid">
                <nav className="header_navbar">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-list-item" id="header__navbar-call">
                            
                            Gọi điện tư vấn <a href='tel: 0862273012'>0862273012</a>
                        </li>
                        <li className="header__navbar-list-item header__navbar-list-item--gach">
                            SHOWROOM
                        </li>

                        <li className="header__navbar-list-item">
                            <span className="header__navbar-title--no-pointer">kết nối</span>
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=61551102278317"
                                className="header__navbar-icon-link">
                                
                            </a>

                            <a href="" className="header__navbar-icon-link">
                                
                            </a>
                        </li>
                    </ul>
                    
                    <ul className="header__navbar-list">
                        <li className="header__navbar-list-item">
                            <a href="" className="header__navbar-item-link">
                                Trợ giúp
                            </a>
                        </li>
                        <li className="header__navbar-list-item header__navbar-user">
                            <img className="header__navbar-user-img"
                                src="" alt=""/>
                            <span className="header__navbar-user-name">Nguyễn Trọng Nghĩa</span>
                            <ul className="header__navbar-user-menu">
                                <li className="header__navbar-user-item">
                                    <a href="">Tài khoản của tôi</a>
                                </li>
                                <li className="header__navbar-user-item">
                                    <a href="">Địa chỉ của tôi</a>
                                </li>
                                <li className="header__navbar-user-item">
                                    <a href="">Đơn mua</a>
                                </li>
                                <li className="header__navbar-user-item">
                                    <a href="">Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className="header-with-search">
                    <div className="header__logo">
                        <a href="" className="header__logo-link">
                            <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/448437740_122174672972036742_3032855859032713654_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5cYENNR9oX10NX8S2LQu9dLmzomsX8-Z0ubOiaxfz5mZA-pqWqMQ6KVz2Q1hk7qO-UOTCbBW14F_wh2hPakrg&_nc_ohc=oXuLjFYaQ2MQ7kNvgFtNzgs&_nc_ht=scontent.fhan15-1.fna&oh=00_AYD8YKIEJOquBeU8ea0xZAiw6UXbH2owDsT6WbXwRkzbCA&oe=66A948FE" alt="logo trọng nghĩa computer"
                                className="header__logo-link--img"/>
                        </a>
                    </div>
                    <div className="header__search">
                        <div className="header__search-input-wrap">
                            <input type="text" className="header__search-input"
                                placeholder="Nhập mã hàng, tên sản phẩm để tìm kiếm..."/>
                            <div className="header__search-history">
                                <h4 className="header__search-history-heading">Lịch sử tìm kiếm</h4>
                                <ul className="header__search-history-list">
                                    <li className="header__search-history-item">
                                        <a href="">SSD</a>
                                    </li>
                                    <li className="header__search-history-item">
                                        <a href="">Ram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="header__search-btn">
                        </button>
                    </div>


                    
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <span className="header__cart-notice">3</span>
                            
                            <div className="header__cart-list ">
                                <img className="header__cart-list--nocart-img" src="" alt=""/>
                                <span className="header__cart-list--nocart-msg">
                                    Chưa có sản phẩm nào
                                </span>

                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    
                                    <li className="header__cart-item">

                                        <img className="header__cart-img"
                                            src="https://product.hstatic.net/200000420363/product/ktc-product-ssd-snv2s-250g-3-zm-lg_9336cd7ba263454fb5326ab93a6fec75_master.jpg"
                                            alt=""/>
                                        <div className="header__cart-Item-info">
                                            <div className="header__cart-Item-head">
                                                <h5 className="header__cart-Item-Name">SSD Kingston 256gb m.2 NVME</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-Item-price">900.000đ</span>
                                                    <span className="header__cart-Item-multiply">x</span>
                                                    <span className="header__cart-Item-quantity">2</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-Item-body">
                                                <span className="header__cart-Item-description">Phân Loại Hàng: SSD</span>
                                                <span className="header__cart-Item-remove">Xoá</span>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="header__cart-item">

                                        <img className="header__cart-img"
                                            src="https://songphuong.vn/Content/uploads/2020/08/3-ram-HX426C16FB3-8-kingston-songphuong.vn_.jpg"
                                            alt=""/>
                                        <div className="header__cart-Item-info">
                                            <div className="header__cart-Item-head">
                                                <h5 className="header__cart-Item-Name">Ram Kingston DD4 8gb buss 3200</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-Item-price">1.200.000đ</span>
                                                    <span className="header__cart-Item-multiply">x</span>
                                                    <span className="header__cart-Item-quantity">4</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-Item-body">
                                                <span className="header__cart-Item-description">Phân Loại Hàng: Ram
                                                    PC</span>
                                                <span className="header__cart-Item-remove">Xoá</span>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="header__cart-item">

                                        <img className="header__cart-img"
                                            src="https://nguyenvu-store-medias.tn-cdn.net/2023/02/o-cung-ssd-western-digital-green-2.webp"
                                            alt=""/>
                                        <div className="header__cart-Item-info">
                                            <div className="header__cart-Item-head">
                                                <h5 className="header__cart-Item-Name">Ổ Cứng SSD Western Digital Green
                                                    240GB WDS240G2G0A</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-Item-price">1.000.000đ</span>
                                                    <span className="header__cart-Item-multiply">x</span>
                                                    <span className="header__cart-Item-quantity">3</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-Item-body">
                                                <span className="header__cart-Item-description">Phân Loại Hàng: SSD</span>
                                                <span className="header__cart-Item-remove">Xoá</span>
                                            </div>
                                        </div>

                                    </li>

                                    <li className="header__cart-item">

                                        <img className="header__cart-img"
                                            src=""
                                            alt=""/>
                                        <div className="header__cart-Item-info">
                                            <div className="header__cart-Item-head">
                                                <h5 className="header__cart-Item-Name">Smart Tivi Xiaomi EA Pro 75 inch -
                                                    Tần số 120Hz, Phiên bản 2024</h5>
                                                <div className="header__cart-item-price-wrap">
                                                    <span className="header__cart-Item-price">1.000.000đ</span>
                                                    <span className="header__cart-Item-multiply">x</span>
                                                    <span className="header__cart-Item-quantity">3</span>
                                                </div>
                                            </div>
                                            <div className="header__cart-Item-body">
                                                <span className="header__cart-Item-description">Phân Loại Hàng: SSD</span>
                                                <span className="header__cart-Item-remove">Xoá</span>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                                <button className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Heaeder;
