import { useState, useEffect } from "react";
const programData = [
    {
        id: 1,
        imageUrl: "https://lucdn.letsupgrade.net/assets/new_python_programming_1_658bf94c1ffe8_d8eddbd730.webp",
        title: "LINKEDIN ESSENTIALS",
        videoUrl: "https://www.youtube.com/embed/PToxdZVDgyk",
    },
    {
        id: 2,
        imageUrl: "https://lucdn.letsupgrade.net/assets/appshit_in_3_days_65f9780d6f3e0_b47f9ed736.webp",
        title: "LINKEDIN ESSENTIALS",
        videoUrl: "https://www.youtube.com/embed/PToxdZVDgyk",
    },
    {
        id: 1,
        imageUrl: "https://lucdn.letsupgrade.net/assets/new_python_programming_1_658bf94c1ffe8_d8eddbd730.webp",
        title: "LINKEDIN ESSENTIALS",
        videoUrl: "https://www.youtube.com/embed/PToxdZVDgyk",
    },
    {
        id: 2,
        imageUrl: "https://lucdn.letsupgrade.net/assets/appshit_in_3_days_65f9780d6f3e0_b47f9ed736.webp",
        title: "LINKEDIN ESSENTIALS",
        videoUrl: "https://www.youtube.com/embed/PToxdZVDgyk",
    },
];

const LifeAtLU = () => {
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");


    useEffect(() => {
        const closeModalOnOutsideClick = (event) => {
            if (event.target.classList.contains("modal-overlay")) {
                closeModal();
            }
        };

        if (showModal) {
            document.addEventListener("click", closeModalOnOutsideClick);
        }

        return () => {
            document.removeEventListener("click", closeModalOnOutsideClick);
        };
    }, [showModal]);

    const openModal = (url) => {
        setVideoUrl(url);
        setShowModal(true);
    };

    const closeModal = () => {
        setVideoUrl("");
        setShowModal(false);
    };
    return (
        <div> <div className="flex flex-col md:mt-16 z-20 w-full py-5 px-5 gap-5 lg:gap-7 xl:gap-10 max-w-7xl mx-auto">
            <div className="p-2 flex items-center justify-center ">
                <h1 className={`text-4xl md:text-6xl text-center text-white`}>
                    Life @ LU
                </h1>
            </div>
            <div className="flex w-full overflow-x-scroll pb-3 card-scroll">
                <div className="flex w-auto gap-3 md:gap-8">
                    {programData.map((program) => (
                        <div
                            key={program.id}
                            className="flex flex-col divide-y divide-brand-red max-w-xs w-80 md:max-w-2xl md:w-[602px] bg-white shadow-lg border border-black rounded-lg"
                        >
                            <div className="flex w-full flex-col">
                                <div className="flex">
                                    <img
                                        className="rounded-lg cursor-pointer"
                                        src={program.imageUrl}
                                        alt="Certificate"
                                        width={788}
                                        height={526}
                                        onClick={() => openModal(program.videoUrl)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Button /> */}
        </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 modal-overlay">
                    <div className="bg-white border border-black rounded-xl">
                        <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
                            &times;
                        </button>
                        <iframe
                            title="YouTube Video"
                            width="820"
                            height="515"
                            src={videoUrl}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}</div>
    )
}

export default LifeAtLU