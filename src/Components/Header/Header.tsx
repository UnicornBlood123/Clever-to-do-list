import React from 'react';
import './Header.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Paths } from '../../contents/routes';

const Header = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <Routes>
      <Route index element={<div className="header">Tassker</div>} />
      <Route path={Paths.DAY_ID} element={<div className="header">Tassker</div>} />
      <Route
        path={Paths.TASK_ID}
        element={
          <div>
            <div className="buttonHeader">
              <button onClick={back}>
                <p>Back</p>
              </button>
            </div>
            <div className="header" style={{ marginTop: 0 }}>
              <p>Todays Task</p>
            </div>
          </div>
        }
      />
      <Route
        path={Paths.NEW}
        element={
          <div>
            <div className="buttonHeader">
              <button onClick={back}>
                <p>Back</p>
              </button>
            </div>
            <div className="header" style={{ marginTop: 0 }}>
              <p>New Task</p>
            </div>
          </div>
        }
      />
      <Route path="*" element={<Navigate to={Paths.ROOT} />} />
    </Routes>
  );
};

export default Header;
