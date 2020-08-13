import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { SideTab } from '../styles/SideTabStyle';
import { useSelector } from 'react-redux';

function MainNav() {
  const { token } = useSelector(state => state.auth);

  return (
    <>
      <section className="logo">logo</section>
      <section className="description">description</section>
      <SideTab className="sidebar" token={token}>
        <ul>
          {sideTabs(token).map(({ id, title, link }) => (
            <li key={id}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
          <li>
            <button>
              {token === null && (
                <>
                  <i className="fab fa-twitter"></i>
                  <span>Twitter 로그인</span>
                </>
              )}
              {token !== null && <span>Rabbit</span>}
            </button>
          </li>
        </ul>
      </SideTab>
    </>
  );
}

export default MainNav;

// 사이드 메뉴 구성
function sideTabs(token) {
  const side = [
    {
      id: 1,
      title: '홈',
      link: '/',
    },
    {
      id: 2,
      title: '서비스소개',
      link: '/intro',
    },
  ];

  if (token !== null) {
    side.push(
      {
        id: 3,
        title: '마이페이지',
        link: '/mypage',
      },
      {
        id: 4,
        title: '관심글',
        link: '/favorite',
      }
    );
  }

  return side;
}
