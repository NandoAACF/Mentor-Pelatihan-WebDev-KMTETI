import { useState, useEffect, useRef } from "react";
import router from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function ReactHooks() {
    const pemberitahuan = () => {
        alert("Halooo");
    };

    const [status, setStatus] = useState();

    const [angka, setAngka] = useState(0);

    const [teks, setTeks] = useState("");

    useEffect(() => {
        console.log("useEffect pertama");
    });

    useEffect(() => {
        console.log("useEffect kedua");
        refInput.current.value = "tes";
    }, [angka]);

    const refInput = useRef();

    return (
        <>
            <Head>
                <title>Pelatihan WebDev | Hari ketiga</title>
            </Head>
            <div className="flex flex-col items-center justify-center gap-[10px]">
                <button onClick={pemberitahuan}>Klik saya1</button>
                <button onClick={() => alert("Halo")}>Klik saya2</button>

                <button onClick={() => setStatus("Libur")}>Set status jadi libur</button>
                <button onClick={() => setStatus("Online")}>Set status jadi online</button>

                <p>Status: {status}</p>

                <button onClick={() => setAngka(angka + 1)}>Tambah satu</button>

                <p>Angka: {angka}</p>

                <input
                    type="text"
                    onChange={(e) => setTeks(e.target.value)}
                    className="ring-[3px] ring-inset ring-red-400 p-[5px]"
                    ref={refInput}
                />

                <p>{teks}</p>

                <button
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Tombol ke beranda
                </button>

                <button
                    onClick={() => {
                        router.push("/modal");
                    }}
                >
                    Tombol ke halaman modal
                </button>

                <Link href="/modal">
                    <button>Tombol ke modal pakai tag Link</button>
                </Link>

                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                    <button>Tombol ke Youtube</button>
                </a>
            </div>
        </>
    );
}
