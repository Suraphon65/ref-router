import React from "react";
import "./Contact.css"
import { Layout } from "../App";
import Footer from "./Footer";


function Contact() {
  return (
    <>
      <Layout />
      <img  className="imgme" src="/img/Imgme.jpg"  alt=""></img>
      <h3 className="textme" >สุรพล เทพจันดา </h3>
      <div className="textme1">
        <br />
        นํกศึกษาปีที่ 2 สาขาเทคโนโลยีสารสนเทศ คณะ วิทยาศาสตร์
        ชื่นชอบในการออกแบบ ถ่ายรุป ไม่ถนัดเขียนโค้ดเป็นอย่างมาก
        <br />
        สอบแก้รอบ 2 ส่งไม่เกินวันศุกร์ครับ 🙏🙏🙏
      </div>
      <div> 
        <Footer/>
     </div>
    </>
     
  );
}

export default Contact;