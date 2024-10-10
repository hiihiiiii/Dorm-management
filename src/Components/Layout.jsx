import React from 'react'
import './Layout.css'

function Layout() {
  return (
    <div className='container'>
        <header className='header'>
            <div className='left-side'>
            <img src='image/Logo.png' alt='logo' className='logo'></img>
            <div className='university-info'>
            <h2 className='title'>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</h2>
            <h4 className='sub-title'>U N I V E R S I T Y  O F  T R A N S P O R T  A N D  C O M M U N I C A T I O N S </h4>
            </div>
            </div>
            <div className='right-side'>
            <h1>QUẢN LÝ KÍ TÚC XÁ</h1>
            </div>
        </header>
        <footer className='footer'>
            <p>Bản quyền thuộc Trường Đại học Giao thông vận tải <br/>
            Địa chỉ: Số 3 đường Cầu Giấy, phường Láng Thượng, quận Đống Đa, Hà Nội. <br/>
            Điện thoại: 02437663131 - Fax: 02437668913
            </p>
            <div className='social-media'>
            <a href='https://www.facebook.com/dhgtvtcaugiay' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
           
          </a>
            </div>
        </footer>
    </div>
  )
}

export default Layout 