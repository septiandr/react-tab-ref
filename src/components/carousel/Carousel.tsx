import React, { FC, useState } from 'react';
import {FaHome, FaWrench, FaKeycdn} from 'react-icons/fa'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "./style.css"

const slides = [
    {
        icon: FaHome,
        color: "#FF7B54",
        page: (
            <>
                <h2>Home</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
                    quisquam dolorum accusamus porro ea aut eaque nam est. Expedita
                    blanditiis corrupti quaerat vero quibusdam quasi ea velit optio
                    ratione.
                </p>
            </>
        ),
    },
    {
        icon: FaWrench,
        color: "#FFB26B",
        page: (
            <>
                <h2>Settings</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
                    quisquam dolorum accusamus porro ea aut eaque nam est. Expedita
                    blanditiis corrupti quaerat vero quibusdam quasi ea velit optio
                    ratione.
                </p>
            </>
        ),
    },
    {
        icon: FaKeycdn,
        color: "#FFD56F",
        page: (
            <>
                <h2>Account</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
                    quisquam dolorum accusamus porro ea aut eaque nam est. Expedita
                    blanditiis corrupti quaerat vero quibusdam quasi ea velit optio
                    ratione.
                </p>
            </>
        ),
    },
];

type NavProps = {
    selectedItem: number;
    onChange: (index: number) => void;
};

function icon(index : number){
    switch(index){
        case 0 : return <FaHome/>
        case 1 : return <FaWrench/>
        case 2 : return <FaKeycdn/>
    }
}


const Nav: FC<NavProps> = ({ selectedItem, onChange }) => (
    <nav className='nav'>
        {slides.map((slide, index) => (
            <button
                className={index === selectedItem ? "active" : ""}
                key={slide.color}
                onClick={() => onChange(index)}
            >
            {icon(index)}
            </button>
        ))}
    </nav>
);

export default function Carousel() {
    const [selectedItem, setSelectedItem] = useState<number>(0)
    const handleOnChange = (index: number) => {
        setSelectedItem(index)
    }
    return (
        <>
            <Nav selectedItem={selectedItem} onChange ={handleOnChange}/>
            <ReactCarousel
                infiniteLoop
                axis='vertical'
                className='react-carousel'
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                swipeable={true}
                emulateTouch={true}
                selectedItem={selectedItem}
                onChange={handleOnChange}
            >
                {slides.map((slide) => (
                    <div
                        style={{
                            background: slide.color
                        }}
                    >{slide.page}</div>
                ))}
            </ReactCarousel>
        </>
    );
}
