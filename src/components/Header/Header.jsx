import React, { useRef, useEffect } from "react";

const Header = () => {
    const headerRef = useRef(null);
    // const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener("scroll", stickyHeaderFunc);
    }, []);

    // const handleClick = e => {
    //     e.preventDefault();

    //     const targetAttr = e.target.getAttribute("href");
    //     const location = document.querySelector(targetAttr).offsetTop;

    //     window.scrollTo({
    //         top: location - 80,
    //         left: 0,
    //     });
    // };


    // const toggleMenu = () => menuRef.current.classList.toggle("show__menu");


    return (
        <header
            ref={headerRef}
            className="w-full h-[80px] leading-[80px] flex items-center"
        >
            <div className="flex items-center gap-[10px]">
                <img src="" alt="" />

                <div className="leading-[20px]">
                    <h2 className="text-xl text-smallTextColor font-[700]">Roy Lee</h2>

                    <p className="text-smallTextColor text-[14px] font-[500]">
                        personal
                    </p>
                </div>
            </div>

        </header>
    )
}

export default Header
