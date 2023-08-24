import './FoodList.css'
import React, { useState } from 'react';


function FoodList(){
  const [showImage, setShowImage] = useState(false);
  const toggleImage = () => {
    setShowImage(!showImage);
  };
  return(

    <div className='imgfoodlist'>
    <figure>
        <img className='imga01' src='/img/a01.png' alt=''/>
        <figcaption className='texta1'>ข้าวหมูทอดทงคัตสึ</figcaption>
        <figcaption className='texta01'>ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน
        </figcaption>
        <button className='howto1' /*onClick={toggleImage} */>ดูวิธีทำ ⇢</button>
        {/* <div>
          <img src="/img/a01.png" alt="" />
          <p>ข้อความของคุณ</p>
        </div> */}
    </figure>

    <figure>
        <img className='imga02' src='/img/a02.jpg' alt=''/>
        <figcaption className='texta2'>ราเมนหมูชาชู</figcaption>
        <figcaption className='texta02'>ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน ไม่ต้องไปกินที่ร้าน ชามละ 200-300 บาท แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า อร่อยไม่แพ้กัน
        </figcaption>
        <button className='howto2' /*onClick={toggleImage} */>ดูวิธีทำ ⇢ </button>
        {/* <div>
          <img src="/img/a02.jpg" alt="" />
          <p>ข้อความของคุณ</p>
        </div> */}
    </figure>

    <figure>
        <img className='imga03' src='/img/a03.png' alt=''/>
        <figcaption className='texta3'>ซูชิหน้าปลาแซลม่อน</figcaption>
        <figcaption className='texta03'>ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู  โดยเฉพาะ ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว
        </figcaption>
        <button className='howto3' /* onClick={toggleImage} */ >ดูวิธีทำ ⇢ </button>
        {/* {showImage && (
          <div>
          <img src="/img/a03.png" alt="" />
          <p>ข้อความของคุณ</p>
        </div> */}
{/* )} */}
    </figure>
    
      </div>
  )}
export default FoodList;
