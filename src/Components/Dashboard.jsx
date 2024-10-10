import React from "react";
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube,faTwitter} from '@fortawesome/free-brands-svg-icons'
import './Dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Dashboard(){
    return(
        <div className="App">
      {/* Header */}
      <header className="header">
        <div className="wrapper">
            <div className="left-side">
                <div className="logo">
                    <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Dai-Hoc-Giao-Thong-Van-Tai-UTC.png" alt="University Logo" />
                </div>
                 <div className="title">
                    <h2>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</h2>
                    <small>UNIVERSITY OF TRANSPORT AND COMMUNICATIONS</small>
                </div>
            </div>
            <div className="right-side">
            <h1 >QUẢN LÝ KÍ TÚC XÁ</h1>
            </div>
        </div>
      </header>

      {/* Main Section */}

      {/* Footer */}
      <footer className="footer">
        <div className="wrapper">
          <div className="left-side">
            <p >Bản quyền thuộc Trường Đại học Giao thông vận tải<br/>
            Địa chỉ kí túc xá: Số 99 Nguyễn Chí Thanh, Láng Hạ, Đống Đa, Hà Nội<br/>
            Điện thoại: 02437663131 - Fax: 02437668913 <br/>
            Email: dhtvtt@utc.edu.vn
            </p>
          </div>
          <div className="center-side">
           <a href="#">Nội quy</a>
            <a href="#">Hướng dẫn</a>
            <a href="#">Giới thiệu</a>
          </div>
          <div className="right-side">
            <p>Theo dõi UTC</p>
            <div className="icon">
                <a href="https://www.facebook.com/dhgtvtcaugiay"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="https://www.youtube.com/@UTC_Channel"><FontAwesomeIcon icon={faYoutube}/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )

}
export default Dashboard