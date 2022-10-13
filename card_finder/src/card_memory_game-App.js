//import React,{useEffect} from 'react'
import image1 from './darlGrey.png'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import './App.css';

let targetPics = [image2,image3,image4,image5,image6,image7];
let gridPics = [image2,image3,image4,image5,image6,image7];
let size1 = targetPics.length;
let size2 = gridPics.length;
let r = Math.floor(Math.random() * size1);
let targetImage = document.getElementById('image1');

let count = 4;

const TargetGrid=()=>
{
  let changeImage1=()=>
  {
    let targetImage1 = document.getElementById('image1');
      targetImage1.src = targetPics[r]; 
  }
  return(
    <>
    <div id='targetGrid'>
      <img id='image1' src={image1} alt="1" onClick={changeImage1}></img>
      <p  id='para'></p>
    </div>
    </>
  )
}

const Grid=()=>
{
  let changeImage2=()=>
  {
    if(size2 !== 0)
    {
      let dispImage = document.getElementById('image2');
      let one = Math.floor(Math.random()* size2);
      dispImage.src = gridPics[one];
      gridPics.splice(one,1);
        size2 = size2 - 1;
      let dispImage1 = document.getElementById('image2');
      if(JSON.stringify(dispImage1) === JSON.stringify(targetImage))
      {
        document.getElementById('para').innerHTML="hurrah! you have made a correct guess.."
        setTimeout(()=>{window.location.reload();},2000);
      }
      else
      {
        if(count === 0)
        {
          document.getElementById('para').innerHTML="Sorry, game over!!"
          setTimeout(()=>{window.location.reload();},2000);
        }
        else
        {
          count--;
          document.getElementById('para').innerHTML="Wrong, you have only "+ count+" life left!!"
        }
      }
    }
  }
  let changeImage3=()=>
  {
    if(size2 !== 0)
    {
      let dispImage = document.getElementById('image3');
      let one = Math.floor(Math.random()* size2);
      dispImage.src = gridPics[one];
      gridPics.splice(one,1);
      if(size2 !== 0)
      size2 = size2 - 1;
      let dispImage2 = document.getElementById('image3');
      if(dispImage2.src === targetImage.src)
      {
        document.getElementById('para').innerHTML="hurrah! you have made a correct guess.."
        setTimeout(()=>{window.location.reload();},2000);
      }
      else
      {
        if(count === 0)
        {
          document.getElementById('para').innerHTML="Sorry, game over!!"
          setTimeout(()=>{window.location.reload();},2000);
        }
        else
        {
          count--;
          document.getElementById('para').innerHTML="Wrong, you have only "+ count+" life left!!"
        }
      }
    }
      
  }
  let changeImage4=()=>
  {
    if(size2 !== 0)
    {
      let dispImage = document.getElementById('image4');
      let one = Math.floor(Math.random()* size2);
      dispImage.src = gridPics[one];
      gridPics.splice(one,1);
      if(size2 !== 0)
      size2 = size2 - 1;
      let dispImage3 = document.getElementById('image4');
      if(dispImage3.src === targetImage.src) 
      {
        document.getElementById('para').innerHTML="hurrah! you have made a correct guess.."
        setTimeout(()=>{window.location.reload();},2000);
      }
      else
      {
        if(count === 0)
        {
          document.getElementById('para').innerHTML="Sorry, game over!!"
          setTimeout(()=>{window.location.reload();},2000);
        }
        else
        {
          count--;
          document.getElementById('para').innerHTML="Wrong, you have only "+ count+" life left!!"
        }
      }
    }
      
  }
  let changeImage5=()=>
  {
    if(size2 !== 0)
    {
      let dispImage = document.getElementById('image5');
      let one = Math.floor(Math.random()* size2);
      dispImage.src = gridPics[one];
      gridPics.splice(one,1);
      if(size2 !== 0)
      size2 = size2 - 1;
      let dispImage4 = document.getElementById('image5');
      if(dispImage4.src === targetImage.src)
      {
        document.getElementById('para').innerHTML="hurrah! you have made a correct guess.."
        setTimeout(()=>{window.location.reload();},2000);
      }
      else
      {
        if(count === 0)
        {
          document.getElementById('para').innerHTML="Sorry, game over!!"
          setTimeout(()=>{window.location.reload();},2000);
        }
        else
        {
          count--;
          document.getElementById('para').innerHTML="Wrong, you have only "+ count+" life left!!"
        }
      }
    } 
  }
  let changeImage6=()=>
  {
    if(size2 !== 0)
    {
      let dispImage = document.getElementById('image6');
      let one = Math.floor(Math.random()* size2);
      dispImage.src = gridPics[one];
      gridPics.splice(one,1);
      if(size2 !== 0)
      size2 = size2 - 1;
      let dispImage5 = document.getElementById('image6');
      if(dispImage5.src === targetImage.src)
      {
        document.getElementById('para').innerHTML="hurrah! you have made a correct guess.."
        setTimeout(()=>{window.location.reload();},2000);
      }
      else
      {
        if(count === 0)
        {
          document.getElementById('para').innerHTML="Sorry, game over!!"
          setTimeout(()=>{window.location.reload();},2000);
        }
        else
        {
          count--;
          document.getElementById('para').innerHTML="Wrong, you have only "+ count+" life left!!"
        }
      }
    } 
  }
  let changeImage7=()=>
  {
    if(size2 !== 0)
    {
      let dispImage = document.getElementById('image7');
      let one = Math.floor(Math.random()* size2);
      dispImage.src = gridPics[one];
      gridPics.splice(one,1);
      size2 = size2 - 1;
      let dispImage6 = document.getElementById('image7');
      if(dispImage6.src === targetImage.src)
      {
        document.getElementById('para').innerHTML="hurrah! you have made a correct guess.."
        setTimeout(()=>{window.location.reload();},2000);
      }
      else
      {
        if(count === 0)
        {
          document.getElementById('para').innerHTML="Sorry, game over!!"
          setTimeout(()=>{window.location.reload();},2000);
        }
        else
        {
          count--;
          document.getElementById('para').innerHTML="Wrong, you have only "+ count+" life left!!"
        }
      }
    }
  }
  return(
  <div id='tableGrid'>
    <table>
    <tr className='trow'>
      <td><img id='image2' src={image1} alt='1' onClick={changeImage2}></img></td>
      <td><img id='image3' src={image1} alt='1' onClick={changeImage3}></img></td>
      <td><img id='image4' src={image1} alt='1' onClick={changeImage4}></img></td>
    </tr>
    <tr className='trow'>
      <td><img id='image5' src={image1} alt='1' onClick={changeImage5}></img></td>
      <td><img id='image6' src={image1} alt='1' onClick={changeImage6}></img></td>
      <td><img id='image7' src={image1} alt='1' onClick={changeImage7}></img></td>
    </tr>
  </table>
  </div>
  
)}

function App() {
  return (
    <div className="App">
      <TargetGrid/>
      <Grid/>
    </div>
  );
}

export default App;
