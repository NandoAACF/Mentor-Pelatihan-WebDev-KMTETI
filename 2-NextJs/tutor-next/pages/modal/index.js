import Head from "next/head";
import { useState } from "react";

export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Pelatihan WebDev | Hari keempat</title>
            </Head>

            <div className="flex flex-col items-center justify-center relative">
                <button
                    className="bg-green-300 rounded-xl py-[10px] px-[20px] mt-[20px]"
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    Buka Modal
                </button>

                {isModalOpen ? (
                    <div className="flex flex-row items-center justify-center gap-[30px] w-[300px] h-[300px] rounded-xl bg-gray-400 mt-[50px] relative">
                        <h4 className="text-[20px] text-center">Ini Modal</h4>
                        <button
                            className="bg-red-600 rounded-xl py-[10px] px-[20px] text-white absolute right-[10px] top-[10px]"
                            onClick={() => {
                                setIsModalOpen(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
