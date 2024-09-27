import './App.css'

function SpecialsSection() {
  return (
    <section className="flex-container">
      <div className='highlights-container'>
        <div className='online-menu'>
          <h2>This weeks specials!</h2>
          <button className='button btn-secondary'>Online Menu</button>
        </div>
        <div className='cards'>
          <div className='card'>
            <img alt='Greek salad' src='/images/greek_salad.jpg' className='image-food'></img>
            <div className='card-container'>
              <div className='flex-content'>
                <h4>Greek salad</h4>
                <label>$12.99</label>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
              </p>
              <div>
                <span>Order a delivery</span>
                <img alt='delivery icon' src='/images/delivery_icon.png' className='icon-delivery'></img>
              </div>
            </div>
          </div>
          <div className='card'>
            <img alt='Bruchetta' src='/images/bruchetta.png' className='image-food'></img>
            <div className='card-container'>
              <div className='flex-content'>
                <h4>Bruchetta</h4>
                <label>$10.00</label>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <div>
                <span>Order a delivery</span>
                <img alt='delivery icon' src='/images/delivery_icon.png' className='icon-delivery'></img>
              </div>
            </div>
          </div>
          <div className='card'>
            <img alt='Lemon Dessert' src='/images/lemon_dessert.jpg' className='image-food'></img>
            <div className='card-container'>
              <div className='flex-content'>
                <h4>Lemon Dessert</h4>
                <label>$5.00</label>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <div className='delivery-content'>
                <span>Order a delivery</span>
                <img alt='delivery icon' src='/images/delivery_icon.png' className='icon-delivery'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialsSection;
