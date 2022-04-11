import Link from "next/link";

import logo from "../images/Site01.svg";

import Card from "../component/Card";

function IndexPage() {
  return (
    <> 
        <div className="Img">
            <Card src={logo} alt="logo"/>
        </div>
        <div className="container">
            <div>By: Lemonier Lima</div>
        </div>
    </>
  );
}

export default IndexPage