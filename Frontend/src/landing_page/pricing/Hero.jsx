import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5">
          Free equity investments flat{" "}
          <i class="fa-solid fa-indian-rupee-sign"></i>20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" />
          <h3>Free equity delivery</h3>
          <h6 className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h6>
        </div>

        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h3>Intraday and F&O trades</h3>
          <h6 className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </h6>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingMF.svg" />
          <h3>Free direct MF</h3>
          <h6 className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Hero;
