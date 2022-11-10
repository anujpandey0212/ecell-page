import React from "react";
import style from "./footer.module.css";
import Grid from "@mui/material/Grid";

export default function Fifth() {
  return (
    <footer>
      <div className={style.QC}>
        <Grid container sx={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
          <Grid item sm={1}></Grid>
          <Grid item sm={3} justifyContent="center" className={style.QL}>
            <ul className={style.ql}>Quick Links</ul>
            <ul>
              <li className={style.list}>
                <a
                  href="https://tanmayshah07.github.io/E-CELL-IITH-Startup/"
                  className={style.links}
                >
                  Notable Start-Ups
                </a>
              </li>
              <li className={style.list}>
                <a href="/Team" className={style.links}>
                  Team
                </a>
              </li>
              <li className={style.list}>
                <a
                  href="http://caprogram-ecell-iith.netlify.app/"
                  className={style.links}
                >
                  CA Programme
                </a>
              </li>
              <li className={style.list}>
                <a
                  href="http://esummit-ecell-iith.netlify.app/"
                  className={style.links}
                >
                  E-Summit
                </a>
              </li>
              {/* <li className={style.list}>Our Partners</li> */}
            </ul>
          </Grid>
          <Grid item md={0.4}></Grid>
          <Grid item xs={12} sm={12} md={3} sx={{ mt: "-1rem" }}>
            <div className={style.final}>
              <div className={style.image}>
                <img
                  className={style.ecell}
                  src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/ecell_v6xqu3.png"
                  alt="Ecell IITH"
                  width={190}
                  height={70}
                />
              </div>
              <br />
              <div className={style.think}>THINK | BUILD | INSPIRE</div>
              <br />
              <div className={style.images}>
                <div className={style.icon}>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/ecell_iith/?hl=en"
                  >
                    <img
                      src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696045/ecell/instagram1_zt22es.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Instagram"
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://in.linkedin.com/company/entrepreneurship-cell-iit-hyderabad"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/linkedin1_cdvqk7.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Linkedin"
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://twitter.com/ecell_iith"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/twitter1_gtx5gu.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Twitter"
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://www.facebook.com/ecell.iithyd/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/facebook1_w5seu6.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Facebook"
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://www.youtube.com/user/ecelliithyderabad"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696047/ecell/youtube1_a7c8bc.png"
                      width="20"
                      height="20"
                      alt="Ecell IITH Youtube"
                      layout="responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}></Grid>
          <Grid item xs={6.4} sm={6.4} md={3} className={style.QL2}>
            <ul className={style.ql} id={style.q1}>
              Contact us
            </ul>
            <div className={style.log}>
              <div className={style.loc}>
                <img
                  src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/location_tgobmr.png"
                  width="20"
                  height="20"
                  alt="location"
                />
              </div>
              <div className={style.list1} id={style.list1}>
                E-Cell Office C-714, Academic block C, IIT Hyderabad
              </div>
            </div>
            <div className={style.log}>
              <div className={style.logo}>
                <img
                  src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696046/ecell/msg_mqpkbk.png"
                  width="60"
                  height="60"
                  alt="dot"
                />
              </div>
              <div className={style.list1} id={style.list2}>
                ecell@iith.ac.in
              </div>
            </div>
            <div className={style.log}>
              <div className={style.logo}>
                <img
                  src="https://res.cloudinary.com/dwsverefw/image/upload/v1665696044/ecell/call_bcfebi.png"
                  width="60"
                  height="60"
                  alt="dial"
                />
              </div>
              <div className={style.list1} id={style.list3}>
                (+91)8979471587
              </div>
            </div>
          </Grid>
          <Grid item xs={0.5}></Grid>
        </Grid>
      </div>
    </footer>
  );
}
