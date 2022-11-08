import { useState } from 'react';
import { FaBook } from 'react-icons/fa';

function Books() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(current => !current);
    };
    return(
        <>
            <button className="btn btn-outline-light m-1" onClick={handleClick}>
                <FaBook className='me-2'/>
                Books
            </button>
            {show && (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-white fs-5'>ID</th>
                            <th scope="col" className='text-white fs-5'>Username</th>
                            <th scope="col" className='text-white fs-5'>FirstName</th>
                            <th scope="col" className='text-white fs-5'>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className='text-white fs-5'>1</th>
                            <td className='text-white fs-6'>Mark</td>
                            <td className='text-white fs-6'>Otto</td>
                            <td className='text-white fs-6'>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row" className='text-white fs-5'>2</th>
                            <td className='text-white fs-6'>Jacob</td>
                            <td className='text-white fs-6'>Thornton</td>
                            <td className='text-white fs-6'>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row" className='text-white fs-5'>3</th>
                            <td className='text-white fs-6'>Otto</td>
                            <td className='text-white fs-6'>@mdo</td>
                            <td className='text-white fs-6'>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Books;