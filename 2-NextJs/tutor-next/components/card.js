export default function Card({ isiTeks, isiDeskripsi }) {
    return (
        <>
            <div className="kartu2">
                <h1>{isiTeks}</h1>
                <p>{isiDeskripsi}</p>
            </div>
        </>
    );
}
