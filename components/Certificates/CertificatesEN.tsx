import React from "react";
import style from "./Certificates.module.css";
import img1 from "../../assets/certificate_1.jpg";
import img2 from "../../assets/certificate_2.jpg";
import img3 from "../../assets/certificate_3.jpg";
import img4 from "../../assets/certificate_4.jpg";
import img5 from "../../assets/certificate_5.jpg";
import Image from "next/image";

function CertificatesEN() {
  return (
    <div id="certificate">
      <div className={style.container}>
        <h2>Certificates</h2>

        <div className={style.gridContainer}>
          <Image src={img1} alt="membership certificate" />
          <Image
            src={img2}
            alt="international professional coach certificate"
          />
          <Image
            src={img3}
            alt="Genos emotional intelligence program certificate"
          />
          <Image src={img4} alt="Associate Certified Coach certificate" />
          <Image src={img5} alt="crisis coaching certificate" />
        </div>
      </div>
    </div>
  );
}

export default CertificatesEN;
