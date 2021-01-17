import React from 'react'

const imgArr = ["https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]

function App () {
  const[colors,setcolors] = React.useState([]);
  const[loading,setLoading] = React.useState(false);
  
  let r, g, b, a, mostlyOpac = (70*255)/100, tolerance = 50, lastI = 0, compare = 0, count = 0, colorDiff = 0, basePx={}, colorDiffArr= [];
   
  const fromInput = (event) => {
    const file = event.target.files[0],
          reader = new FileReader(),
          image = document.querySelector(".img");
      
    setLoading(true);
    reader.addEventListener("load", function () {
      image.onload = function () {
         getImageData(image);
      }
      image.src = reader.result;
    }, false);

    if (file) 
      reader.readAsDataURL(file);
    
  }
  const getImageData = (img) => {
    let canvas = document.getElementsByTagName("canvas")[0],
        ctx = canvas.getContext("2d"),
        w = img.height > img.width ? 0.2 * window.innerWidth : 0.3 * window.innerWidth,
        h = (img.height * w) / img.width;
    
    canvas.width = w;
    canvas.height = h;
    
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    let imgData = ctx.getImageData(0, 0, w, h);
        
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        r = imgData.data[i];
        g = imgData.data[i+1];
        b = imgData.data[i+2];
        a = imgData.data[i+3];
        basePx = count === 0 ? {r,g,b} : basePx;
      
        if (count> 0 && a > mostlyOpac) {
              // Euclidean Distance
              colorDiff = Math.pow(r - basePx.r,2) + Math.pow(g - basePx.g,2) + Math.pow(b - basePx.b,2);
              colorDiff = Math.sqrt(colorDiff);
              let newArr = new Array();
              newArr[0] = Math.floor(colorDiff);
              newArr[1] = {r,g,b};
              newArr[2] = 1;
              colorDiffArr.push(newArr);
        }
        count++;
    }
    colorDiffArr.sort((a,b) => {
      if (a[0] < b[0])
          return -1;
      if (a[0] > b[0])
          return 1
      return 0
    });
    colorDiffArr.map((color,i, colorDiffArr) => {
      let diff = Math.floor(color[0]),
          updateArr = new Array();
      if (i > 0) {
        if (diff < compare) {
            let lastArrEl = colorDiffArr[lastI],
                lastRGB = lastArrEl[1],
                currRGB = color[1],
                newRGB = {r: currRGB.r + lastRGB.r, g : currRGB.g + lastRGB.g, b : currRGB.b + lastRGB.b};
            
            updateArr[0] = lastArrEl[0];
            updateArr[1] = newRGB;
            updateArr[2] = lastArrEl[2] + 1;
            colorDiffArr[lastI] = updateArr;
        }
        else {
          lastI = i;
          compare = diff + tolerance;
        }
      }
    })
    compare = 0
    let newArr = colorDiffArr.filter((el,i,arr) => {
      let ocurr = el[2],
          imgArea = w * h,
          rel = (ocurr * 100) / imgArea;
      if (rel > 1) {
        let avRGB = `${Math.floor(el[1].r / ocurr)},${Math.floor(el[1].g / ocurr)},${Math.floor(el[1].b / ocurr)}`;
            
        if (i>0) {
            let diff = Math.floor(el[0]);
            if (!(diff < compare)) {
                el[1] = avRGB;
                compare = diff + tolerance; 
                return el
            }
          }
          else {
              el[1] = avRGB;
              return el
          } 
      }
    });
    newArr.sort((a,b) => {
      if (a[2] < b[2])
          return 1;
      if (a[2] > b[2])
          return -1
    });
    setcolors(newArr);
    setLoading(false);
  }
  
  return (
    <div>
      <nav>
        <p> Try one of these images</p>
        { 
          imgArr.map((src,i) => {
              return (
                <div>  
                    <img src={src} key={i} onClick={(event) => getImageData(event.target)} crossOrigin="anonymous"/>
                </div>
              )
          }) 
        }
      </nav>
      <div className={`main ${loading ? `loading` : ''} `}>
        <h1>Image color pallete</h1>
        <div className='range'>
        </div>
        <div className='loading'>
          <div></div>
          <div></div>
        </div>
        <div className="input">
          <p>... or upload your own</p>
          <img src="" className="img"/>
          <input type="file" id="file" accept="image/*" onChange={fromInput}/>
          <label htmlFor="file">Choose a file</label>
        </div> 
        <canvas></canvas>
        <div>
          {
            colors.map((img, i) => {
              return <div data-rgb={img[1]} key={i} style={{background : `rgb(${img[1]})`}}> </div>
            })
           }
        </div>
      </div>
     </div>
  );
}

export default App;
