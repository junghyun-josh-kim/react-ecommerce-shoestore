function Detail() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src='/img/shoe-001.jpg' width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>Title</h4>
          <p>Description</p>
          <p>125.95</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
