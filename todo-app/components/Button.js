import clsx from "clsx";

export default function Button({ type = "Add", className, onClick = () => {} }) {
    const btnType = (type) => {
        if (type == "Add")
            return "bg-blue-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-blue-500 active:bg-blue-600 px-[14px] py-[5px]";
        if (type == "Edit")
            return "bg-green-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-green-500 active:bg-green-600 px-[14px] py-[5px]";
        if (type == "Delete")
            return "bg-red-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-red-500 active:bg-red-600 px-[14px] py-[5px]";
        if (type == "Delete All")
            return "bg-red-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-red-500 active:bg-red-600 px-[14px] py-[5px] mt-[15px]";
    };

    return (
        <>
            <button className={clsx(btnType(type), className)} onClick={onClick}>
                {type}
            </button>
        </>
    );
}
