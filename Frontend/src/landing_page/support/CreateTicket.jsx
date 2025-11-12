import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-5 mb-5">
          To create a ticket, select a relevant topic
        </h2>

        <div className="col-4 mt-5 mb-5">
          <h4>
            <i class="fa-solid fa-user-plus"></i> Account Opening
          </h4>
          <div
            className="mt-3 p-3"
            style={{ fontSize: "13px", lineHeight: "2em" }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              Online Account Opening
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Offline Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Company, Partnership and HUF Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              NRI Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Charges at Zerodha
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Getting Started
            </a>
            <br />
          </div>
        </div>
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i class="fa-solid fa-user"></i> Your Zerodha Account
          </h4>
          <div
            className="mt-5 p-3"
            style={{ fontSize: "13px", lineHeight: "2em" }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              Login Credentials
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Account Modification and Segment Addition
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              DP ID and bank details
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Your Profile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Transfer and Conversion of shares
            </a>
            <br />
          </div>
        </div>
        <div className="col-4 mt-5 mb-5">
          <h4>
            <i class="fa-solid fa-chart-simple"></i> Kite
          </h4>

          <div
            className="mt-5 p-3"
            style={{ fontSize: "13px", lineHeight: "2em" }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              Margin/lenveragrm Product and Order types
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Kite Web and Mobile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Trading FAQs
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Corporate Actions
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Sentinel
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Kite API
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Pi and other platforms
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Stockreports+
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              GTT
            </a>
            <br />
          </div>
        </div>
      </div>

      {/* // crete funds console coin */}

      <div className="row">
        <div className="col-4 mb-5">
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"></i> Funds
          </h4>
          <div
            className="mt-3 p-3"
            style={{ fontSize: "13px", lineHeight: "2em" }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              Adding Funds
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Withdrawal money
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Add bank Accounts
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              eMandates
            </a>
            <br />
          </div>
        </div>
        <div className="col-4 mb-5">
          <h4>
            <i class="fa-solid fa-spinner"></i> Console
          </h4>
          <div
            className="mt-3 p-3"
            style={{ fontSize: "13px", lineHeight: "2em" }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              Portfolio
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Coporates actions
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Funds statements
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Reports
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Profile
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Segments
            </a>
            <br />
          </div>
        </div>
        <div className="col-4 mb-5">
          <h4>
            <i class="fa-solid fa-coins"></i> coins
          </h4>

          <div
            className="mt-3 p-3"
            style={{ fontSize: "13px", lineHeight: "2em" }}
          >
            <a href="" style={{ textDecoration: "none" }}>
              Mutual Funds
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              National Pension Scheme (NPS)
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Fixed Deposit (FD)
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Features on coin
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Payments and Orders
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              General
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
