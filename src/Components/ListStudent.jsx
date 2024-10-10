import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import './ListStudent.css'
import '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faHome, faFileAlt, faChartBar, faCogs, faUsers, faEnvelopeOpenText, faClipboardList, faCoins, faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-bootstrap';




function ListStudent() {
  return (
    <div className="main container-fluid d-flex py-2">
    {/* Sidebar */}
    <nav className="sidebar text-white p-3">
      <ul className="list-unstyled">
        <li><NavLink href="#" className="text-white active d-block py-2"><FontAwesomeIcon icon={faUser} /> Nguyễn Thanh Thảo</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2" style={{backgroundColor: '#64a5f4'}}><FontAwesomeIcon icon={faHome} /> Quản lý sinh viên</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2"><FontAwesomeIcon icon={faFileAlt} /> Quản lý phòng</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2"><FontAwesomeIcon icon={faClipboardList} /> Quản lý hợp đồng</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2"><FontAwesomeIcon icon={faCoins} /> Quản lý thanh toán</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2"><FontAwesomeIcon icon={faUsers} /> Quản lý nhân viên</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2"><FontAwesomeIcon icon={faChartBar} /> Báo cáo</NavLink></li>
        <li><NavLink href="#" className="text-white d-block py-2"><FontAwesomeIcon icon={faEnvelopeOpenText} /> Yêu cầu</NavLink></li>
        <li><NavLink href="#" className="text-danger d-block py-2"><FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất</NavLink></li>
      </ul>
    </nav>
    <div className="content ">
    <div className="container mt-4">
        <h3 className='titleList'>Danh sách sinh viên</h3>
      {/* Search Bar and Action Buttons */}
      <div className=" justify-content-between mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tên"
            aria-label="Tên"
          />
          <button className="btn btn-primary" type="button">
            Tìm kiếm
          </button>
        </div>
        <div>
          <button className="btn btn-success me-2">+ Tạo mới</button>
          <button className="btn btn-danger">Xóa</button>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Khoa</th>
            <th scope="col">Quê quán</th>
            <th scope="col">Phòng</th>
            <th scope="col">Ngày nhập phòng</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nguyễn Thanh Thảo</td>
            <td>444</td>
            <td>CNTT</td>
            <td>Quảng Nam</td>
            <td>111</td>
            <td>23/04/2022</td>
            <td>Đang ở</td>
            <td className="action-buttons">
              <button className="btn btn-sm btn-success me-2">
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </button>
              <button className="btn btn-sm btn-danger">
                <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
              </button>
            </td>
          </tr>
          {/* Add more rows as necessary */}
        </tbody>
      </table>
    </div>

    </div>

    {/* Content */}
  </div>
  )
}

export default ListStudent