var ReactSlickDemo = React.createClass({
    render: function() {
        var settings = {
          dots: true
      }
      return (
          <div className='root'>
            <Slider {...settings}>
              <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
          </Slider>
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <ReactSlickDemo />,
    document.getElementById('root')
  );
  