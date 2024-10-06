import React from "react";
import "../../components/css/SalesRegister.css"; // CSS 파일 경로

const SalesRegister = () => {
  return (
    <div className="sales-register">
      <div className="title-container">
        <h2>판매등록</h2>
        <div className="right-buttons">
          <button type="button">타매장재고</button>
          <button type="button">반품관리</button>
          <button type="button">삭제</button>
        </div>
      </div>

      <div className="sales-header">
        <div className="field">
          <label>판매일자</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>매장존</label>
          <select>
            <option>정상</option>
            <option>행사</option>
            <option>불량</option>
          </select>
        </div>
        <div className="field">
          <label>판매번호</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>판매사원</label>
          <select>
            <option>김명식</option>
          </select>
        </div>
        <div className="field">
          <label>단가적용일</label>
          <input type="date" />
        </div>
        <div className="field">
          <label htmlFor="field">
            {" "}
            <input type="checkbox" id="field" />
            바코드 바로 등록{" "}
          </label>
        </div>
      </div>

      <div className="sales-barcode">
        <div className="field">
          <label>상품바코드</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>총판매수량</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>총판매금액</label>
          <input type="text" />
        </div>
      </div>

      <div className="sales-details">
        <div className="field">
          <label>구분</label>
          <select>
            <option>판매</option>
            <option>반품</option>
          </select>
        </div>
        <div className="field">
          <label>반품구분</label>
          <select>
            <option>선택</option>
          </select>
        </div>
        <div className="field">
          <label>유형</label>
          <select>
            <option>정상</option>
          </select>
        </div>
      </div>

      <div className="sales-barcode">
        <div className="field">
          <label>품번</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>색상</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>사이즈</label>
          <input type="text" />
        </div>
      </div>

      <div className="sales-amounts">
        <div className="field">
          <label>최초가</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>판매구분</label>
          <select>
            <option>정상</option>
          </select>
        </div>
        <div className="field">
          <label>할인율</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>판매단가</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>재고</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>판매금액</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>에누리</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>실판매금액</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>적립율</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>적립포인트</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>사용포인트</label>
          <input type="text" />
        </div>
        <div className="field button-field">
          <button>판매등록</button>
        </div>
      </div>
      <div className="field">
        <label>비고</label>
        <input type="text" />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>유형</th>
              <th>품번</th>
              <th>품명</th>
              <th>색상</th>
              <th>사이즈</th>
              <th>판매구분</th>
              <th>할인율</th>
              <th>현판매금액</th>
              <th>수량</th>
              <th>실판매금액</th>
              <th>에누리</th>
              <th>사용포인트</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="14" >
                등록된 정보가 없습니다.
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="14" >
                총계
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SalesRegister;
