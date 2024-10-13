// 수정된 Header 컴포넌트 코드
import "../../components/css/Layout.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/index">
            <span className="logo">SewonPOS</span>
          </Link>
        </div>
        <div className="header-right">
          <div className="menu-item">
            <Link to="/sale/registe">
              <i className="icon icon-sales"></i> 판매관리
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/order/registe">
              <i className="icon icon-sales"></i> 본사입출관리
            </Link>
          </div>
          <div className="menu-item">
            <i className="icon icon-branch"></i> 점간이동관리
          </div>
          <div className="menu-item">
            <i className="icon icon-stock"></i> 재고관리
          </div>
          <div className="menu-item">
            <i className="icon icon-customer"></i> 고객관리
          </div>
          <div className="menu-item">
            <i className="icon icon-settings"></i> 기초관리
          </div>
          <div className="menu-item">
            <i className="icon icon-message"></i> 메시지관리
          </div>
          <div className="menu-item">
            <i className="icon icon-system"></i> 시스템관리
          </div>
          <div className="menu-item">
            <i className="icon icon-help"></i> 도움말
          </div>
          <div className="menu-item">
            <i className="icon icon-support"></i> 원격지원
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
