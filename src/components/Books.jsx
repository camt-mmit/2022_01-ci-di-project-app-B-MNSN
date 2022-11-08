import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function Users() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(current => !current);
    };
    return(
        <>
            <button className="btn btn-outline-light m-1" onClick={handleClick}>
                <FaUser className='me-2'/>
                Users
            </button>
            {show && (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-white fs-5'>ISBN</th>
                            <th scope="col" className='text-white fs-5'>Title</th>
                            <th scope="col" className='text-white fs-5'>Author</th>
                            <th scope="col" className='text-white fs-5'>Price</th>
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
export default Users;