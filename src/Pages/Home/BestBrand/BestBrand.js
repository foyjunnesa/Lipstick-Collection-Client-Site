import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';


const BestBrand = () => {
  return (
    <div>
      <Container>
        <p className="text-center text-success mt-5 "><hr /></p>
        <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: 'cursive' }}><i class="far fa-hand-point-right"></i> Best Brand </span></h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">

          <Fade left>
            <div className="col">
              <div className="card h-100">
                <img src="https://www.gemmaetc.com/wp-content/uploads/2020/08/LOreal-Color-Riche-Ultra-Matte-Lipstick-2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-dark">L'Oreal</h5>
                  <p className="card-text text-muted">L'Oreal Paris offers lipstick in every format: liquids, bullets, and melty balms for maximum color impact. With shade offerings from bold reds to.</p>
                  <button className="btn btn-danger">READ MORE</button>
                </div>
              </div>
            </div>
          </Fade>
          <div className="col">
            <div className="card h-100">
              <img src="https://static.cilory.com/496169-large_default/lakme-cushion-matte-lipstick.jpg.webp" style={{ height: '238px' }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="text-dark">Lakmé</h5>
                <p className="card-text text-muted">Lakmé Paris offers lipstick in every format: liquids, bullets, and melty balms for maximum color impact. With shade offerings from bold reds to.</p>
                <button className="btn btn-danger">READ MORE</button>
              </div>
            </div>
          </div>


          <Fade right>
            <div className="col">
              <div className="card h-100">
                <img src="https://marvel-b1-cdn.bc0a.com/f00000000236182/hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwe1c0a571/images/sfra/HB00779M/LiquidLip1.jpg?sw=1242&sh=1242&sm=fit" style={{ height: '238px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="text-dark">Huda Beauty</h5>
                  <p className="card-text text-muted">Huda Beauty Paris offers lipstick in every format: liquids, bullets, and melty balms for maximum color impact. With shade offerings from bold reds to.</p>
                  <button className="btn btn-danger">READ MORE</button>
                </div>
              </div>
            </div>
          </Fade>
        </div>

      </Container>
    </div>
  );
};

export default BestBrand;