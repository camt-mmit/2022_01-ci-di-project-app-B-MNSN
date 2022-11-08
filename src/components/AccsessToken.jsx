import { ImKey } from 'react-icons/im';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function AccessToken() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(current => !current);
    };
    return(
        <>
            <button className="btn btn-outline-light m-1" onClick={handleClick}>
                <ImKey className='me-2'/>
                Access Token
            </button>
            {show && (
                <InputGroup className="mb-3 mt-2">
                    <InputGroup.Text id="basic-addon1"><ImKey/></InputGroup.Text>
                    <Form.Control placeholder="Accsess Token"/>
              </InputGroup>
            )}
        </>
    )
}
export default AccessToken;