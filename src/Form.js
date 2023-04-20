
import Carousal from './Carousal'
import Circle from './Circle'
import './Form.scss'

const Form = ()=>{

    return(
        <div className='ug-cvr'>
        <div className='ug-topbar bg-success align-items-center  text-light d-inline-flex container-fluid justify-content-evenly'>
          <span className='ug-topbar-start'>Spring Summer Sale | Up to 50% off</span>
          <span className='ug-topbar-mid text-center'>Free Shipping above <i class="bi bi-currency-rupee"></i>499 &nbsp;All India Delivery</span>
          <span className='ug-topbar-end'>Call us: +91-9129-9129-91</span>
        </div>

        <div className='ug-navbar py-2  d-inline-flex container-fluid justify-content-between py-2 align-items-center'>
        <div class="navbar d-block d-xs-block d-sm-block d-md-block d-lg-none">
  <div class="container-fluid">
 

      <span class="navbar-toggler-icon navbar-toggler h6"data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></span>
  
    <div class="offcanvas w-50 offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</div>
         <div>
           <img className='ug-navbar-logo img-fluid ms-1' src='https://cdn.shopify.com/s/files/1/0579/7924/0580/files/greenlogo.png?height=400&v=1660383580'></img>
         </div>
          
          <div className='d-inline-flex align-items-center d-none d-lg-flex'>
          <div className='ug-navbar-options ps-4 pe-4 d-inline-flex'>
            <span className='ug-navbar-opt'>PLANTS</span>
            <span className='ug-navbar-opt'>SEEDS</span>
            <span className='ug-navbar-opt'>POTS & PLANTERS</span>
            <span className='ug-navbar-opt'>PLANT CARE</span>
            <span className='ug-navbar-opt'>GIFTING</span>
            <span className='ug-navbar-opt'>BLOG</span>
            <span className='ug-navbar-opt'>OFFERS</span>
          </div>
          <div className='ug-navbar-search'>
         
    <form class="d-inline-flex container-fluid align-items-center" role="search">
      <input class="form-control rounded-pill" type="search" placeholder='Search for plant seeds and planters' aria-label="Search"/>
      <i class="bi bi-search ps-2" type='submit'></i>
    </form>

          </div>
          </div>
          <div className='cart-cnt d-flex align-items-center justify-content-between'>
          <i class="bi bi-person h5"></i>
          <i class="bi bi-cart h5"></i>
          </div>
        

        {/* offcanvas */}

       

        </div>
      <Carousal/>
      <div className='all-offer-section py-3 d-flex flex-column  align-items-center  justify-content-center'>
        <p className='lead text-center'><strong>
        Our very new shades of green.<br/>
        Check out our latest sales and offers.</strong></p>
        <button className='offer-btn btn btn-success'>VIEW ALL OFFERS</button>
      </div>

      {/* <Circle/> */}
      </div>
    )
}

export default Form