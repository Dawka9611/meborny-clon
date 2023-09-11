import styled, { keyframes } from "styled-components";
import Button from "./button";
import Image from "next/image";
import { BsTelephoneFill } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { useThemeToggle } from "@/context/ThemProvider";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useRouter } from "next/navigation"

const menuData = [
    { text: 'Нүүр', link: '/' },
    { text: 'Бидний тухай', link: '/about' },
    { text: 'Хичээлүүд', link: '/lessons' },
    { text: 'Холбоо барих', link: '/contact' },

]

const NavigatioBar = () => {
    const { theme, toggleTheme } = useThemeToggle();
    const router = useRouter()
    return (
        <NavigationStyle>
            <div className="bg-white flex justify-between p-1 px-10 items-center">
                <div className="text-xs text-gray-500 flex gap-5">
                    <div className="flex gap-1 items-center">
                        <IoMail className="text-xl" />
                        info@meborny.com
                    </div>
                    <div className="flex gap-1 items-center">
                        <BsTelephoneFill className="text-lg"/>
                        +(976) 7728-2222
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Button text="Нэвтрэх" className="bg-green-600 text-xs" />
                    <div className="flex gap-2 items-center">
                        <a href="https://www.facebook.com/Meborny/" target="_" className="transition hover:scale-110">
                           <FaFacebook className="text-xl text-gray-400 transition hover:text-gray-500"/>
                        </a>
                        <a href="https://www.instagram.com/meborny/" target="_" className="transition hover:scale-110 pr-5">
                            <RiInstagramFill className="text-2xl text-gray-400 transition hover:text-gray-500"/>
                        </a>
                        <div className='themeChange border border-gray-300 rounded-lg p-1 text-lg transition hover:scale-110' onClick={toggleTheme}>
                            {theme === 'dark'
                                ? <div className={` "theme-animation"}`}><BsFillSunFill className="text-yellow-500" /></div>
                                : <div className={`"theme-animation"}`}><FaMoon className="text-green-600" /></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainNav p-2 px-4 flex items-center justify-between">
                <div>
                    {
                        theme === 'dark' ?
                            <Image
                                src="/images/black.png"
                                width={150}
                                height={30}
                                alt="Logo"
                            /> :
                            <Image
                                src="/images/white.png"
                                width={150}
                                height={30}
                                alt="Logo"
                            />
                    }
                </div>
                <div className="flex flex-grow justify-end gap-10 items-center">
                    <div className="flex gap-10 flex-shrink-0" >
                        {menuData.map(el => {
                            return <div key={el.text} onClick={() => router.push(`${el.link}`)}>
                                {el.text.toLocaleUpperCase()}
                            </div>
                        })
                        }
                    </div>
                    <div>
                        <ImCart className="text-2xl" />
                    </div>
                </div>
            </div>
        </NavigationStyle>
    );
};

export default NavigatioBar;
const childAnimation = keyframes`
from {
    opacity:0;
    transform: translateX(100px);
  }
  to {
    opacity:1;
    transform: translateX(0px);
  }
`

const NavigationStyle = styled.div`
  .mainNav {
    background-color: ${(p) => p.theme.primaryColor};
    color: ${(p) => p.theme.textColor};
  }
  .theme-animation {
        animation: ${childAnimation} 0.2s ease-in-out;
    }
.themeChanger{
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover {
        scale: 1.02;
    }
    /* svg {
        font-size:18px;
    } */
}
`;

