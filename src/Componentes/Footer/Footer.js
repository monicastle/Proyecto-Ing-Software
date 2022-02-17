import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import faceicon from "../icons/facebook.png"
import instaicon from "../icons/instagram.png"
import twittericon from "../icons/twitter.png"
import linkedinicon from "../icons/linkedin.png"
import youtubeicon from "../icons/youtube1.png";
//import "mdb-react-ui-kit/dist/css/mdb.min.css";

import './Footer.css'

export default function App() {
  return (
    <MDBFooter
      className="text-center fixed-bottom"
      color="white"
      bgColor="dark"
    >
      <MDBContainer className="p-4">
        <section className="mb-4">
          <a className="btn btn-floating" href="#!" role="button">
            {/*<MDBIcon fab icon="facebook-f"/>*/}
            <img id="faceicon" src={faceicon} />
          </a>

          <a className="btn btn-floating" href="#!" role="button">
            {/*<MDBIcon fab icon="twitter" />*/}
            <img src={twittericon} />
          </a>

          <a className="btn btn-floating" href="#!" role="button">
            {/*<MDBIcon fab icon="instagram" />*/}
            <img src={instaicon} />
          </a>

          <a className="btn btn-floating" href="#!" role="button">
            {/*<MDBIcon fab icon="linkedin-in" />*/}
            <img src={linkedinicon} />
          </a>

          <a className="btn btn-floating" href="#!" role="button">
            {/*<MDBIcon fab icon="linkedin-in" />*/}
            <img src={youtubeicon} />
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <div className="col-auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="0" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="0" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <MDBBtn
                    color="light"
                    type=""
                    style={{ backgroundColor: "#aa182c", color: "white" }}
                    className="mb-2"
                  >
                    Donar
                  </MDBBtn>
                </li>
                <li>
                  <MDBBtn
                    color="light"
                    type=""
                    style={{ backgroundColor: "#00abc8", color: "white" }}
                    className="mb-2"
                  >
                    Voluntariado
                  </MDBBtn>
                </li>
                <li>
                  <MDBBtn
                    color="light"
                    type=""
                    style={{ backgroundColor: "#a2d45e", color: "white" }}
                    className="mb-2"
                  >
                    Por una sonrisa
                  </MDBBtn>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="#">
          Operacion Sonrisa
        </a>
      </div>
    </MDBFooter>
  );
}
