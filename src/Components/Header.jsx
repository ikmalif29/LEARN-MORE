/* eslint-disable react/prop-types */
function Header({ handleInput }) {
    return (
        <div className="flex justify-center m-10 ">
            <input type="text" className="text-center h-10 p-10" onChange={(e) => handleInput(e.target.value)} />
        </div>
    )
}

export default Header;