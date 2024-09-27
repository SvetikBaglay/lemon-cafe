

import '../App.css'
import './AboutPage.css'


function AboutPage() {
  return (
    <div className='about-container'>
      <div className='about-item'>
        <h1>Little Lemon</h1>
        <h5>Chicago</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non, nisi ut odit ex neque
           reprehenderit accusantium optio ratione eius temporibus veritatis maiores, architecto fugiat saepe 
           suscipit totam cupiditate ullam beatae accusamus soluta libero quas! Itaque vel aut laborum aliquid 
           ullam iste omnis beatae, incidunt quis! Nihil nobis eaque officia minus iure soluta eum, voluptate odio 
           tenetur ratione molestias illo quasi harum blanditiis, vero, autem excepturi totam unde perferendis odit 
           optio neque. Eligendi nam aliquid quos vitae eveniet aliquam accusantium.
        </p>
      </div>
      <div className='image-container'>
        <img alt='photo man' src='../images/chef.jpg' className='img-avatar lower-image'></img>
        <img alt='photo man' src='../images/restaurant.jpg' className='img-avatar upper-image'></img>
      </div>
    </div>
  );
}


export default AboutPage;
