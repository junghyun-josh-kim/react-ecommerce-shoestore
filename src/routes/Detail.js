import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const { id } = useParams();
  const targetId = props.item.find((x) => x.id == id);
  const [alertDiv, setAlertDiv] = useState(true);

  useEffect(() => {
    const a = setTimeout(() => {
      setAlertDiv(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className='container'>
      {alertDiv == true ? (
        <div className='alert alert-warning'>will not be visible in 2 sec</div>
      ) : null}
      <div className='row'>
        <div className='col-md-6'>
          <img src={`/${targetId.imgPath}`} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{targetId.title}</h4>
          <p>{targetId.description}</p>
          <p>{`$${targetId.price}`}</p>
          <button className='btn btn-danger'>Order</button>
          <input type='number' className='inputInt' />
        </div>
      </div>
    </div>
  );
}

export default Detail;
