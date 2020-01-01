import React from "react";

import Hero from "../components/Hero";

function Home(props) {
    return ( 
    <Hero title={props.title} subTitle={props.subTitle} someText={props.someText}/>
    )
  }

  export default Home;