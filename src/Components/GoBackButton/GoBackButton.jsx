// import React from 'react'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function GoBackButton() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
  return (
    <button className="px-5 py-3 top-6 bg-stone-200 fixed left-0" onClick={handleGoBack}><Link><box-icon name='chevrons-left'></box-icon></Link></button>
  )
}

export default GoBackButton