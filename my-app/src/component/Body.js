import React from 'react'

const Body = () => {
  return (
    <div className="app__container">
            <div className="grid">
                <div className="grid__row app__content">
                    <div className="grid__column-2">
                        <nav className="category grid__category">
                            <h3 className="category__heading">
                                <i className="fa-solid fa-list-ul category__heading-icon"></i>
                                Danh mục sản phẩm
                            </h3>
                            <ul className="category-list">
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fas fa-home"></i>
                                        Trang chủ</a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fa-solid fa-book"></i>
                                        Giới thiệu
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link category-item--active">
                                        <i className="fa-solid fa-laptop"></i>
                                        Laptop - Máy tính xách tay
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="/html/PC.html" className="category-item__link category-item--active">
                                        <i className="fa-solid fa-desktop"></i>
                                        Máy tính để bàn - PC
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link category-item--active">
                                        <i className="fa-solid fa-print"></i>
                                        Máy in - Printer
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link category-item--active">
                                        <i className="fas fa-camera"></i>
                                        Camera, thiết bị an ninh
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fas fa-home"></i>
                                        SmartHome - Nhà thông minh
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fa-solid fa-headphones-simple"></i>
                                        Audio - Loa - Tai nghe
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fa-solid fa-keyboard"></i>
                                        Phụ kiện máy tính
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fab fa-internet-explorer"></i>
                                        Phụ kiện mạng
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fas fa-american-sign-language-interpreting"></i>
                                        Thủ Thuật
                                    </a>
                                </li>
                                <li className="category-item">

                                    <a href="" className="category-item__link">
                                        <i className="fa-solid fa-address-book"></i>
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="grid__column-10">
                        <div className="home-filter">
                            <span className="home-filter__label">Sắp xếp theo</span>
                            <button className="home-filter__btn btn">Phổ biến</button>
                            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                            <button className="home-filter__btn btn">Bán chạy</button>

                            <div className="select-input">
                                <span className="select-input__label">Giá</span>
                                <i className="select-input__icon fas fa-chevron-down"></i>
                                <ul className="select-input__list">
                                    <li className="select-input__item">
                                        <a href="" className="select-input__link">Giá thấp đến cao</a>
                                    </li>

                                    <li className="select-input__item">
                                        <a href="" className="select-input__link">Giá cao đến thấp</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-current">1</span>/14
                                </span>
                                <div className="home-filter__page-control">
                                    <a href="" className="home-filter__page-btn home-filter__page-btn--disable">
                                        <i className="home-filter__page-icon fas fa-chevron-left"></i>
                                    </a>
                                    <a href="" className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="home-product">
                            <div className="home-product__container">
                                <div className="home-product_preview">
                                    <div className="home-product-preview--title">
                                        <h3 className="home-product-preview--name">Máy tính để bàn - PC</h3>
                                        <a href="PC.html" className="home-product-preview--link">Xem tất cả</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid__row">
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href="/html/PCPA21.html"><img
                                            src="data:image/jpeg;base64,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"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy tính để bàn PCPA G21 -R5/16G/RX6600</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">16.000.000đ</span>
                                        <span className="home-product-item__price-current">13.999.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="data:image/jpeg;base64,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"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy tính để bàn PCPA G05 (Core i5 11400F/ Intel
                                        B560/ 8GB/ 256Gb SSD/ GTX 1660 Super)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">15.000.000đ</span>
                                        <span className="home-product-item__price-current"> 13.599.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="data:image/jpeg;base64,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"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy tính để bàn PCPA G34 (Core i5 12400F/ Intel
                                        B760/ 16GB/ 512GB SSD/ RTX 3050)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">16.500.000đ</span>
                                        <span className="home-product-item__price-current">15.599.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qyFKiJ8zU37UQsr0ixQonYWxpicVGsLJIA&s"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy tính để bàn PCPA G32 (Ryzen 5 5500/ AMD
                                        B550/ 16GB/ 512GB SSD/ RTX 3050 6Gb)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">15.800.000đ</span>
                                        <span className="home-product-item__price-current">14.599.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaqa2bTf7l-CB_rtCWKULNtMLI9B-N7j2BA&s"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy tính để bàn PCPA G30 (Core i5 12400F/ Intel
                                        B760/ 16GB/ 512GB SSD/ RTX 3050)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">18.000.000đ</span>
                                        <span className="home-product-item__price-current">16.599.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOJW9RKFh7_2btKGGO-kF26LnrLscqaVhag&s"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy tính để bàn PCPA G37 (Core i5 11400F/ Intel
                                        B560/ 16GB/ 512GB SSD/ RTX 3050)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">15.500.000đ</span>
                                        <span className="home-product-item__price-current">14.599.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="home-product">
                            <div className="home-product__container">
                                <div className="home-product_preview">
                                    <div className="home-product-preview--title">
                                        <h3 className="home-product-preview--name">Laptop - Máy tính xách tay</h3>
                                        <a href="" className="home-product-preview--link">Xem tất cả</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid__row">
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://phucanhcdn.com/media/product/250_54480_20.jpg" alt=""/></a>
                                    <h4 className="home-product-item__name">Laptop Dell Latitude 3430 L3430I58G256SSD (i5
                                        1235U/ 8GB/ 256GB SSD/14 inch/NoOS/ Black/1Y)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">16.990.000đ</span>
                                        <span className="home-product-item__price-current">14.590.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://phucanhcdn.com/media/product/250_50231_laptop_hp_15s_fq5160tu_7c0s1pa_thumb.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Laptop HP 15s fq5160TU 7C0S1PA (i5 1235U/ 16GB/
                                        512GB SSD/15.6 inch FHD/Win11/ Bạc)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">17.690.000đ</span>
                                        <span className="home-product-item__price-current">15.490.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://phucanhcdn.com/media/product/250_49804_may_tinh_xach_tay_dell_vostro_3520_5m2tt2_thumb.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Laptop Dell Vostro 3520 5M2TT2 (i5 1235U/ 8GB/
                                        512GB SSD/15.6 inch FHD/Win 11/ Office/ Grey/1Y)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">18.990.000đ</span>
                                        <span className="home-product-item__price-current">13.990.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://phucanhcdn.com/media/product/250_54543_laptop_lenovo_v15_g3_amn_82yu00v9vn_thumb.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Laptop Lenovo V15 G4 AMN 82YU00V9VN (R5 7520U/
                                        16GB/ 512GB SSD/15.6 inch FHD/Win11/ Grey/2Y)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">14.290.000đ</span>
                                        <span className="home-product-item__price-current">12.990.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://phucanhcdn.com/media/product/250_54793_laptop_lenovo_v14_g4_iru_83a0a09kvn_thumb123.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Laptop Lenovo V14 G4 IRU (i5 13420H/ 16GB/ 512GB
                                        SSD/14 inch FHD/NoOS/ Black/1Y)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">13.490.000đ</span>
                                        <span className="home-product-item__price-current">12.790.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://phucanhcdn.com/media/product/250_51313_1000x1000_th_____ng__1_.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Laptop Dell Vostro 3430 71011900 (i5 1335U/ 8GB/
                                        512GB SSD/14 inch FHD/Win 11/ Office/ Titan Grey/1Y)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">17.890.000đ</span>
                                        <span className="home-product-item__price-current">16.690.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                        <div className="home-product">
                            <div className="home-product__container">
                                <div className="home-product_preview">
                                    <div className="home-product-preview--title">
                                        <h3 className="home-product-preview--name">Camera - thiết bị an ninh</h3>
                                        <a href="" className="home-product-preview--link">Xem tất cả</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid__row">
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CD1123G0E-IL-510x510.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Camera Dome IP Thông Minh
                                        DS-2CD1123G0E-IL(2mp/POE) Hikvision chính hãng</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.510.000đ</span>
                                        <span className="home-product-item__price-current">1.200.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CD1023G0E-IL-510x510.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Camera IP Thân Hikvision DS-2CD1023G0E-IL</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.710.000đ</span>
                                        <span className="home-product-item__price-current">1.500.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CD1343G0E-IF-1-510x510.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Camera IP Dome 2M Hik DS-2CD1323G0E-ID</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.510.000đ</span>
                                        <span className="home-product-item__price-current">1.250.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CD1323G0E-IL-510x510.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Camera IP Dome Hikvision DS-2CD1323G0E-IL</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.750.000đ</span>
                                        <span className="home-product-item__price-current">1.500.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CE12DF0T-F-510x510.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Camera Báo Động Hik DS-2CE12DF0T-F</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.450.000đ</span>
                                        <span className="home-product-item__price-current">1.300.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CV2Q21FD-IWB-510x510.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Camera Wifi Hikvision DS-2CV2Q21FD-IW(B)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.670.000đ</span>
                                        <span className="home-product-item__price-current">1.400.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                        <div className="home-product">
                            <div className="home-product__container">
                                <div className="home-product_preview">
                                    <div className="home-product-preview--title">
                                        <h3 className="home-product-preview--name">Máy in - Printer</h3>
                                        <a href="" className="home-product-preview--link">Xem tất cả</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid__row">
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://tanphat.com.vn/media/product/676_b2c30eb90ca2c231b10b0a10d296a68e.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy in mã vạch Zebra ZD230 203Dpi
                                        (ZD23042-30PG00E)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">4.800.000đ</span>
                                        <span className="home-product-item__price-current">4.135.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                           
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://tanphat.com.vn/media/product/656_302477acc15f1119edb133d524a30f5c.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy in mã vạch Zebra ZD421 300DPI
                                        (ZD4A043-30PM00EZ)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">6.999.000đ</span>
                                        <span className="home-product-item__price-current">5.999.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://tanphat.com.vn/media/product/2524_" alt=""/></a>
                                    <h4 className="home-product-item__name">Máy in mã vạch Xprinter XP-420B (USB)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.810.000đ</span>
                                        <span className="home-product-item__price-current">1.365.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://tanphat.com.vn/media/product/877_d74a6ad6a4e2b1e439d64a44b3a5b5b6.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy in tem nhãn mã vạch Xprinter 350B 203 DPI
                                        USB</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.645.000đ</span>
                                        <span className="home-product-item__price-current">1.415.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://tanphat.com.vn/media/product/879_may_in_ma_vach_xprinter_dt426b_1.jpg"
                                            alt=""/></a>
                                    <h4 className="home-product-item__name">Máy in mã vạch Xprinter DT426B</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.875.000đ</span>
                                        <span className="home-product-item__price-current">1.650.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            <i className="fa-solid fa-check"></i>
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-2-4">
                                <div className="home-product-item">
                                    <a className="home-product-item__img" href=""><img
                                            src="https://tanphat.com.vn/media/product/3666_xp_d464b_02.jpg" alt=""/></a>
                                    <h4 className="home-product-item__name">Máy in mã vạch XP-D464B (USB)</h4>
                                    <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">1.850.000đ</span>
                                        <span className="home-product-item__price-current">1.550.000đ</span>
                                    </div>
                                    <div className="home-product-item__bottom">
                                        <span className="home-product-item__bottom-icon">
                                            
                                            Có hàng
                                        </span>
                                        <a href="" className="home-product-item__bottom-link">
                                            
                                            Giỏ hàng
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Body;
