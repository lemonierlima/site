
import Card from "../component/Card";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import logo from "../images/Site01.svg";


function IndexPage(props) {
  return (
    <> 
      <div class="container-fluid">
      <div class="row">
          <div class="col-12 text-center align-items-start">
            <h1 className={styles.title}>
              Lemonier<span> Lima</span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center align-items-start">
            <Card src={logo} alt="logo"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage

