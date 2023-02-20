import Link from "next/link"
import { useState } from "react"

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    function navOpenEvent() {
        setNavOpen(!navOpen);
    }

    return (
        <nav id="nav" className="sm:fixed sm:pl-[10vw] md:pl-[15vw] lg:pl-[20vw] pt-5 text-center">
            <div className="flex sm:block">
                <span onClick={() => { navOpenEvent() }} id="hamburger" className={"p-3 block sm:hidden"}>{!navOpen ? '햄버거닫힘' : '햄버거열림'}</span>
                <h1 className="p-3">
                    <Link href="/">박대성 블로그</Link>
                </h1>
            </div>
            <hr className="w-full h-[2px]" />
            <ul id="category" className={!navOpen ? 'fixed -left-full sm:block sm:static bg-stone-500' : 'fixed left-0 sm:block sm:static bg-stone-500 text-white'}>
                <li>첫번째 리스트</li>
                <li>두번째 리스트</li>
                <li>세번째 리스트</li>
            </ul>
            {/* <input type="text" placeholder='검색어를 입력해주세요'></input> */}
        </nav>
    )
}