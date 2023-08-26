import React from "react";
import { useState } from "react";
import styled, {keyframes} from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';

const MenuBar3 = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    let navigate = useNavigate();

    return (
        <Navbar>
            <_Logo src='/YSIT-logo.png' onClick={()=>navigate('/')}></_Logo>
        <NavLinks open={isNavOpen}>
            {/* <NavLink>
            <_Link >게시판</_Link>
            </NavLink> */}
            {/* <NavLink>
            <_Link >방과후</_Link>
            </NavLink> */}
            <NavLink>
            <_Link onClick={()=>navigate('/')}>대여/반납</_Link>
            </NavLink>
            {/* <NavLink>
            <_Link >상담신청</_Link>
            </NavLink> */}
            <NavLink>
            <_Link onClick={()=>navigate('/rentallist')}>신청내역</_Link>
            </NavLink>
            <NavLink>
            <_Link onClick={()=>navigate('/add-camera')} >기자재 추가하기</_Link>
            </NavLink>
            
            {/* <_Bell src={bell} alt="logo" onClick={()=>navigate('/Notification')}/> */}
            {/* <_Profile src='/profile.jpeg'  onClick={() => setIsModalVisible(!isModalVisible)}/> */}
            <Ad_btn>관리자 로그인</Ad_btn>
            {isModalVisible && (
                <ModalWrapper>
                    <ModalContent>
                        프로필 수정
                    </ModalContent>
                    <ModalContent>
                        의견 보내기
                    </ModalContent>
                    <ModalContent>
                        로그아웃
                    </ModalContent>
                </ModalWrapper>
            )}
            
        </NavLinks>
        <Hamburger onClick={() => setIsNavOpen(!isNavOpen)}>
            &#9776;
        </Hamburger>
        </Navbar>
    );
}

export default MenuBar3;

const Navbar = styled.nav`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 
        "logo item1 item2 item3 ad_btn";
    align-items: center;
    padding: 0.5rem 1rem;
    color: #555555;
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 0.8px solid #999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const _Logo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

const _Link = styled.span`
    color: #555555;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #1E00D3;
        padding-bottom: 18px;
        box-shadow: inset 0 -2px 0 #1E00D3;
    }
`;

const Hamburger = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: block;
        grid-area: hamburger;
        cursor: pointer;
    }
`;

interface StyledNavLinksProps {
    open: boolean;
}
const NavLinks = styled.ul<StyledNavLinksProps>`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    grid-area: item1 / item2 / item3 / ad_btn; /* NavLinks 컴포넌트를 grid 영역에 배치합니다. */
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: height 0.2s ease;
        ${props => (props.open ? "height: auto;" : "")}
        >div{
            display: none;
        }
    }
    li {
        animation: ${props => props.open ? "slideDown 0.8s ease forwards" : "none"};
    }

    @keyframes slideDown {
        0% {
        transform: translateY(-1rem);
        opacity: 0;
        }
        100% {
        transform: translateY(0);
        opacity: 1;
        }
    }
`;

const NavLink = styled.li`
    grid-area: item1;
    @media (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`;

const _Bell = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const _Profile = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 70%;
    margin-left: 13px;
    cursor: pointer;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 70px;
    /* margin-left: 50px; */
    border-radius: 3px;
    margin-left: 80%;
    z-index: 2;
    background-color: white;
    width: 150px;
    height: 117px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`

const _ModalLink = styled.div`
    padding: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover { background-color: #f2f2f2; };
`

// const Navbar = styled.nav`
//     display: flex;
//     align-items: center;
//     /* justify-content: space-between; */
//     padding: 0.5rem 1rem;
//     color: #555555;
//     background-color: rgba( 255, 255, 255, 0.8 );
//     border-bottom: 0.8px solid #999999;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
// `;

// const _Logo = styled.img`
//     width: 50px;
//     height: 50px;
//     cursor: pointer;
// `;

// const _Link = styled.span`
//     color: #555555;
//     text-decoration: none;
//     cursor: pointer;
//     &:hover {
//         color: #1E00D3;
//         padding-bottom: 18px;
//         box-shadow: inset 0 -2px 0 #1E00D3;
//     }
// `;

// const Hamburger = styled.div`
//     display: none;
//     @media (max-width: 600px) {
//     display: block;
//     cursor: pointer;
//     }
// `;

// interface StyledNavLinksProps {
//     open: boolean;
// }
// const NavLinks = styled.ul<StyledNavLinksProps>`
//     list-style: none;
//     display: flex;
//     margin-left: 25px;
    
//     @media (max-width: 600px) {
//         flex-direction: column;
//         align-items: center;
//         margin-left: -4vw;
//         width: 100%;
//         height: 0;
//         overflow: hidden;
//         transition: height 0.2s ease;
//         ${props => (props.open ? "height: auto;" : "")}
//         >div{
//             display: none;
//         }
//     }
//     li {
//         padding: 1rem;
//         animation: ${props =>
//         props.open ? "slideDown 0.8s ease forwards" : "none"};
//     }
//     @keyframes slideDown {
//         0% {
//         transform: translateY(-1rem);
//         opacity: 0;
//         }
//         100% {
//         transform: translateY(0);
//         opacity: 1;
//         }
//     }
// `;

// const NavLink = styled.li`
//     @media (max-width: 600px) {
//         width: 100%;
//         text-align: center;
//     }
// `;

// const _Rightitemwrap = styled.div`
//     display: flex;
//     align-items: center;
//     position: absolute;
//     margin-left: 83%;
//     margin-top: 0.5%;
// `

// const _Bell = styled.img`
//     width: 25px;
//     height: 25px;
//     cursor: pointer;
// `

// const _Profile = styled.img`
//     width: 38px;
//     height: 38px;
//     border-radius: 70%;
//     margin-left: 13px;
//     cursor: pointer;
// `
// // interface Thprops {
// //     font : any
// // }
// // const _Teacher = styled.span<Thprops>`
// //     color: ${props => props.color};
// //     font-weight: bold;
// //     margin-left: 15px;
// //     font-size: ${props => props.font};
// //     :last-child {
// //         margin-top: 3px;
// //         margin-left: 0;
// //     }
// //     :hover {
// //         cursor: pointer;
// //     }
// // `;

// //모달창 스타일

// const ModalWrapper = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     margin-top: 70px;
//     /* margin-left: 50px; */
//     border-radius: 3px;
//     margin-left: 80%;
//     z-index: 2;
//     background-color: white;
//     width: 150px;
//     height: 117px;
//     box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
// `;

const ModalContent = styled.div`
    padding: 8px;
    :hover {
        color: #ffffff;
        background-color: #afafaf;
    }
`;

const Ad_btn = styled.button`
    
`