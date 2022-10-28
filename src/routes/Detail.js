import { useParams } from 'react-router-dom';

function Detail(props) {
  const { id } = useParams();
  const targetId = props.item.find((x) => x.id == id);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={`/${targetId.imgPath}`} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{targetId.title}</h4>
          <p>{targetId.description}</p>
          <p>{`$${targetId.price}`}</p>
          <button className='btn btn-danger'>Order</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
