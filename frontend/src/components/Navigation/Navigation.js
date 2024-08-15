import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';

function Navigation({ active, setActive }) {
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h2>Parth</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <ul className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </ul>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 300px;
  height: 100%;
  background: rgba(230, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .menu-items {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      gap: 1rem;
      font-size: 18px;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &.active {
        color: #007BFF;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
        opacity: 0;
        transition: all 0.4s ease-in-out;
      }

      &.active::before {
        opacity: 1;
      }

      span {
        font-size: 16px;
      }
    }
  }

  .bottom-nav {
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 18px;
      color: #E74C3C;
      cursor: pointer;

      &:hover {
        color: #C0392B;
      }
    }
  }
`;

export default Navigation;
