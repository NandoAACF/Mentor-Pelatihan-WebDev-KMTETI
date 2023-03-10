export default function Beranda() {
    return (
        <>
            <h1 className="text-[30px] text-red-500">Ini halaman beranda</h1>
            <p>Ini adalah kalimat</p>
            <div className="kartu"></div>
            <div className="w-[100px] h-[100px] bg-red-500 mt-[50px]"></div>
            <img src="/assets/images/mobil.jpg" className="mobil" />
            <div className="mt-[10px] w-[100px] h-[100px] bg-red-500 md:bg-green-500 lg:bg-blue-500"></div>
        </>
    );
}
