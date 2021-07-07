const Input = ({...props}) => {
    return (
        <div className="mt-10">
            <input {...props} className="focus:animate-bounce outline-none text-black border-b-2 focus:border-black w-full text-3xl p-2"/>
        </div>
    );
}

export default Input;
