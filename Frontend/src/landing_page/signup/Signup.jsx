import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="Container mt-5 mb-5 text-center">
        <h2>Open a free demat and trading account online</h2>
        <p>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      {/* Part-1 */}
      <div className="container  ">
        <div className="row">
          <div className="col-5 mt-5 mb-5">
            <img src="media/images/signup.png" alt="" />
          </div>
          <div className="col-2"></div>
          <div className="col-5 mt-5 mb-5">
            <div className="signup mt-5">
              <h2>Signup now</h2>
              <p className="text-muted">Or track your existing application</p>
              <div className="input-group">
                <span className="input-group-text">
                  <img src="https://flagcdn.com/w20/in.png" alt="IN" />
                  +91
                </span>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="Enter your mobile number"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg mt-4 w-50 "
              >
                Get OTP
              </button>
              <div className="mt-4 text-muted">
                <p>
                  By proceeding, you agree to the Zerodha terms & privacy policy
                </p>
                <hr />
                <p>Looking to open NRI account? Click here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5 mb-5 text-center">
        Investment options with Zerodha demat account
      </h2>

      {/* Part-2 */}

      <div className="row">
        <div className="col-6">
          <div className="d-flex align-items-start mb-3">
            <img src="media/images/stocks-acop.svg" className="me-3" />
            <div>
              <h4>Stocks</h4>
              <p>Invest in all exchange-listed securities</p>
            </div>
          </div>

          <div className="d-flex align-items-start mb-3">
            <img src="media/images/ipo-acop.svg" className="me-3" />
            <div>
              <h4>IPO</h4>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex align-items-start mb-3">
            <img src="media/images/mf-acop.svg" className="me-3" />
            <div>
              <h4>Mutual funds</h4>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
          </div>

          <div className="d-flex align-items-start mb-3">
            <img src="media/images/fo-acop.svg" className="me-3" />
            <div>
              <h4>Futures & options</h4>
              <p>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg mt-5 mb-5 w-15 d-block mx-auto"
      >
        Explorement Investment
      </button>

      {/* Part-3 */}
      <div className="row mt-5">
        <div className="col-6">
          <img
            src="media/images/acop-benefits.svg"
            className="w-50 d-block mx-auto"
          />
          <h3>Benefits of opening a Zerodha demat account</h3>
        </div>
        <div className="col-6">
          <h4 className="mb-3">Unbeatable pricing</h4>
          <p>
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
          <h4 className="mb-3">Best investing experience</h4>
          <p>
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          <h4 className="mb-3">No spam or gimmicks</h4>
          <p>
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
          <h4 className="mb-3">The Zerodha universe</h4>
          <p>
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>

      {/* Part-4 */}
      <div className="container mt-5 mb-5">
        <h2 className="mb-4 ">FAQs</h2>
        <hr />

        <div
          className="accordion accordion-flush shadow-sm rounded bg-white"
          id="faqAccordion"
        >
          <div className="accordion-item fs-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q1"
              >
                <h4 className="text-muted">What is a Zerodha account?</h4>
              </button>
            </h2>
            <div
              id="q1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                A Zerodha account is a combined demat and trading account that
                lets you buy, sell, and hold securities digitally.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q2"
              >
                <h4 className="text-muted">
                  What documents are required to open a demat account?
                </h4>
              </button>
            </h2>
            <div
              id="q2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  The following documents are required to open a Zerodha account
                  online:
                </p>
                <ul>
                  <li>PAN Card</li>
                  <li>Aadhaar (linked with mobile number)</li>
                  <li>Cancelled cheque or bank statement</li>
                  <li>Income proof (for F&O trading)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q3"
              >
                <h4 className="text-muted">Is Zerodha account opening free?</h4>
              </button>
            </h2>
            <div
              id="q3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">Yes, it is completely free.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q4"
              >
                <h4 className="text-muted">
                  Are there any maintenance charges for a demat account?
                </h4>
              </button>
            </h2>
            <div
              id="q4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The account maintaince charges is appliacable based on the
                account type. For Basic Services Demat Account: Zero charges if
                the holding value is less than ₹4,00,000. For non-Basic Services
                Demat Account demat accounts: ₹300 per year + GST. To learn more
                about BSDA, Click here.
                <a href="#" className="text-decoration-none">
                  Click here.
                </a>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q5"
              >
                <h4 className="text-muted">
                  Can I open a demat account without a bank account?
                </h4>
              </button>
            </h2>
            <div
              id="q5"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p>
                  To open a demat account, you must have a bank account in your
                  name. If UPI verification is completed successfully, no proof
                  of bank is needed. However, if bank verification fails, you'll
                  need to provide either a cancelled cheque or a bank statement
                  to link your bank account to Zerodha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part-5 */}
      <div className="text-center mt-5 mb-5">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="text-muted">
          Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Signup;
