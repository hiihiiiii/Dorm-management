import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';

const HomepageComponent = () => {
  return (
    <div className="wrapper-form">
      <div className="form">
          <div className="card">
            <div className="card-header text-center">
              <h4>Vui lòng nhập thông tin</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email">Tên đăng nhập</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Mã sinh viên"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ngày tháng năm sinh. VD:01/01/2000"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomepageComponent