body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  background-size: cover;

  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  font-family: Open Sans, sans-serif;
}

.title{
  display: flex; 
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  //justify-content: center; 
  padding: 0, 24px;
  //margin: 16px;
  box-sizing: border-box;
}
.bold{
  font-family: Roboto;
  font-weight: 2000;
  font-size: 25px;
  color: #fff;
  //text-transform: uppercase; 
  word-wrap: break-word;
  margin-right:  8px;
  margin-left:  56px;
}
.light{
  font-family: Roboto;
  font-weight: 100;
  font-size: 25px;
  color: #fff;
  //text-transform: uppercase; 
  word-wrap: break-word;
  margin-right:  24px;
  margin-left:  0px;
}


/*
.info-container{
   display: grid;
   grid-template-columns: 1fr 1fr;
   place-items: center;
}
*/
.container{


}
.header-buttons
{
  width: 100%;
  height: 8%;
  display: flex;
  align-items:start;
  justify-content: center; 
  padding: 0, 24px;
  box-sizing: border-box;
}



.config-buttons
{
  width: 100%;
  height: 8%;
  display: flex; 
  align-items: center;
  justify-content: center;
  padding: 0, 24px;
  box-sizing: border-box;
}


.iframe-container {
  width: 100%;
  height: 76%;
  flex: 1;
  display:flex;
  flex-wrap: wrap;
  padding: 0, 24px;
  box-sizing: border-box;
  position: relative;
  
}

.iframe-container > iframe {
  border: 0;
  width: 100%;
  
  flex: 1;
}

.button-container{
  display: flex;
  flex-direction: row;
}
.clase-elemento{
 display: grid;
}
.chassis-elemento{
 display: grid;
}
.battery-elemento{
 display: grid;
}
.steer-elemento{
 display: grid;
}
.drive-elemento{
 display: grid;
}
.motor-elemento{
 display: grid;
}
.finish-elemento{
 display: grid;
}
.back-elemento{
 display: grid;
}
.send-elemento{
 display: grid;
}

.btnn-option{
    width:224px;
  height: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  background-color: #000000;
  border: solid #D0FE07 3px;
  border-radius: 50px;
  transition : 1500 ms;
  cursor: pointer;
  margin-right:  0px;
  margin-left:  0px;
}

.bttn-option-holder{
    font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 1fr;
  color: #000000;
  background-color: #000000;
  //padding: 10px 40px;
  border: solid #000000 2px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition : 1500 ms;
  cursor: pointer;
  //margin: 24px;
  margin-right:  0px;
  margin-left:  0px;
}

.btnn-option:hover{
  transition : 1500 ms;
  width:224px;
  height: 40px;
 // padding: 10px 40px;
  //transform : translateY(-3px);
  background-color: #000000;
  color: #ffffff;
  border: solid 2px #ffffff;
}

.button-line{
  width:128px;
  height: 10px;
  background-color: #fff;
  margin-right:  16px;
  margin-left:  16px;
  border: 0px;
  border-radius: 100px 0px 100px 0px;
}
.button-line-final{
  width:256px;
  height: 10px;
  background-color: #fff;
  margin-right:  16px;
  margin-left:  16px;
  border: 0px;
  border-radius: 100px 0px 100px 0px;
}

.button-line-options{
  width:40px;
  height: 4px;
  background-color: #D0FE07;
  margin-right:0px;
  margin-left:0px;
  border: 0px;
   border-radius: 100px 0px 100px 0px;
}
.button-sphere-options{
  width:5px;
  height: 10px;
  background-color: #D0FE07;
  margin-right:0px;
  margin-left:0px;
  border: 0px;
  border-radius: 50px;
}
.btnn-elemento{
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  background-color: #000000;
  width:128px;
  height: 40px;
  //padding: 10px 40px;
  border: solid #D0FE07 0px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition : 1500 ms;
  cursor: pointer;
  //margin: 24px;
  margin-right:  16px;
  margin-left:  16px;
}

.btnn-elemento-final{
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  background-color: #000000;
  width:256px;
  height: 40px;
  //padding: 10px 40px;
  border: solid #D0FE07 0px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition : 1500 ms;
  cursor: pointer;
  //margin: 24px;
  margin-right:  16px;
  margin-left:  16px;
}

.btnn-elemento-disabled{
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #8A8A8A66;
  background-color: #000000;
  width:128px;
  height: 40px;
  //padding: 10px 40px;
  border: solid #D0FE07 0px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition : 1500 ms;
  cursor: pointer;
   margin-right:  16px;
  margin-left:  16px;
}

.btnn-elemento-disabled-final{
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #8A8A8A66;
  background-color: #000000;
  width:256px;
  height: 40px;
  //padding: 10px 40px;
  border: solid #D0FE07 0px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition : 1500 ms;
  cursor: pointer;
   margin-right:  16px;
  margin-left:  16px;
}

.switchIn{
 font-family: Roboto, sans-serif;
font-weight: 0;
font-size: 14px;
color: #fff;
background-color: #000000;
padding: 10px 15px;
border: 2px solid #D0FE07;
box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
border-radius: 50px 0px 0px 50px;
transition : 1000ms;
transform: translateX(110);
cursor: pointer;
}
.switchFts{
font-family: Roboto, sans-serif;
font-weight: 0;
font-size: 14px;
color: #fff;
background-color: #000000;
padding: 10px 24px;
border: 2px solid #D0FE07;
box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
border-radius: 0px 50px 50px 0px;
transition : 1000ms;
transform: translateX(110);
cursor: pointer;
}

.chassis-options{
   display: grid;
   grid-template-columns: 11fr 2fr;
   place-items: center;
}
.chassis-option-container{
  margin-left: 128px;
}


.flipswitch {
  position: relative;
  width: 96px;
}
.flipswitch input[type=checkbox] {
  display: none;
}
.flipswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #D0FE07;
  border-radius: 100px;
}
.flipswitch-inner {
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}
.flipswitch-inner:before, .flipswitch-inner:after {
  float: left;
  width: 50%;
  height: 40px;
  padding: 0;
  line-height: 40px;
  font-size: 14px;
  color: white;
  font-family: Roboto, sans-serif;
 font-weight: 0;
font-size: 14px;
  box-sizing: border-box;
}
.flipswitch-inner:before {
  content: "inch";
  padding-left: 12px;
  background-color: #9ebd04;
  color: #FFFFFF;
}
.flipswitch-inner:after {
  content: "ft";
  padding-right: 12px;
  background-color: #9ebd04;
  color: #FFFFFF;
  text-align: right;
}
.flipswitch-switch {
  width: 27px;
  margin: 6.5px;
  background: #fff;
  border: 1px solid #D0FE07;
  border-radius: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 55px;
  transition: all 0.3s ease-in 0s;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {
  margin-left: 0;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {
  right: 0;
}

.config-units{
  display: flex;
  align-items:start;
  justify-content: center; 
}

@media (max-width: 1200px){
  .button-container
  {
    flex: wrap;
  }
  .header-buttons{
    height: 8%;
  }
  .config-buttons{
    height: 8%;
  }
  .iframe-container{
    height: 76%;
  }
  .btnn-elemento{
    width:104px;
    font-size: 14px;
  }
  .btnn-elemento-final{
    width:208px;
    font-size: 14px;
  }
  .btnn-elemento-disabled{
    width:104px;
    font-size: 14px;
  }
  .btnn-elemento-disabled-final{
    width:208px;
    font-size: 14px;
  }
  
  .button-line{
     width:104px;
  height: 10px;
  }
  .button-line-final{
     width:208px;
  height: 10px;
  }


  .btnn-option{
    width:186px;
    font-size: 12px;

  }
  
  .btnn-option:hover{
    width:186px;
    height: 40px;
    border: solid 2px #ffffff;
  }
  .button-line-options{
    width:32px;
  }

  .flipswitch-inner:before, .flipswitch-inner:after {
    font-size: 12px;
  }

  .flipswitch {
  width: 80px;
  }
  .flipswitch-switch {
    width: 24px;
    right: 43px;
  }

}

@media  (max-width: 992px){
   .bold{
  font-size: 24px;
  }
  .light{
    font-size: 24px;
  }
   .button-container
  {
    flex: wrap;
  }
  .header-buttons{
    height: 8%;
    padding: 0, 16px;
  }
  .config-buttons{
    height: 8%;
  }
  .iframe-container{
    height: 76%;
  }
  .btnn-elemento{
    width:88px;
    height: 32px;
    font-size: 10px;
    margin-right:  8px;
    margin-left:  8px;
  }
  .btnn-elemento-disabled{
    width:88px;
    height: 32px;
    font-size: 10px;
    margin-right:  8px;
    margin-left:  8px;
  }
   .button-line{
     width:88px;
     height: 8px;
     margin-right:  8px;
    margin-left:  8px;
  }
  .btnn-elemento-final{
    width:172px;
    height: 32px;
    font-size: 10px;
    margin-right:  8px;
    margin-left:  8px;
  }
  .btnn-elemento-disabled-final{
    width:172px;
    height: 32px;
    font-size: 10px;
    margin-right:  8px;
    margin-left:  8px;
  }
   .button-line-final{
     width:172px;
     height: 8px;
     margin-right:  8px;
    margin-left:  8px;
  }

  
  .btnn-option{
    width:144px;
     height: 39px;
    font-size: 10px;

  }
  
  .btnn-option:hover{
    width:144px;
    height: 39px;
    border: solid 2px #ffffff;
  }
  .button-line-options{
    width:16px;
  }

  .flipswitch-inner:before, .flipswitch-inner:after {
    font-size: 10px;
  }

  .flipswitch {
  width: 64px;
  }
  .flipswitch-switch {
    width: 15px;
    right: 32px;
  }
  .flipswitch-inner:before, .flipswitch-inner:after {
    height: 39px;
  }
}

@media (max-width: 768px){
   .bold{
  font-size: 22px;
  }
  .light{
    font-size: 22px;
  }
  .button-container
  {
    flex: wrap;
  }
  .header-buttons{
    height: 8%;
  }
  .config-buttons{
    height: 8%;
  }
  .iframe-container{
    height: 76%;
  }
  .btnn-elemento{
    width:72px;
    height: 24px;
    font-size: 8px;
    margin-right:  4px;
  margin-left:  4px;
  }
  .btnn-elemento-disabled{
    width:72px;
    height: 24px;
    font-size: 8px;
    margin-right:  4px;
  margin-left:  4px;
 
  }
   .button-line{
     width:72px;
  height: 6px;
  margin-right:  4px;
  margin-left:  4px;
  }
  .btnn-elemento-final{
    width:144px;
    height: 24px;
    font-size: 8px;
    margin-right:  4px;
  margin-left:  4px;
  }
  .btnn-elemento-disabled-final{
    width:144px;
    height: 24px;
    font-size: 8px;
    margin-right:  4px;
  margin-left:  4px;
 
  }
   .button-line-final{
     width:144px;
  height: 6px;
  margin-right:  4px;
  margin-left:  4px;
  }


 .btnn-option{
    width:120px;
     height: 35px;
    font-size: 8px;

  }
  
  .btnn-option:hover{
    width:120px;
    height: 35px;
    border: solid 2px #ffffff;
  }
  .button-line-options{
    width:0px;
  }

  .flipswitch-inner:before, .flipswitch-inner:after {
    font-size: 0px;
  }

  .flipswitch {
  width: 40px;
  }
  .flipswitch-switch {
    width: 15px;
    right: 12px;
  }
  .flipswitch-inner:before, .flipswitch-inner:after {
    height: 35px;
  }
  .chassis-options{
   grid-template-columns: 12fr 2fr;
   }
   .chassis-option-container{
  margin-left: 40px;
  } 
}
@media  (max-width: 576px ){
  .bold{
    font-size: 12px;
  }
  .light{
    font-size: 12px;
  }
  .button-container
  {
    flex: wrap;
  }
  .header-buttons{
    height: 8%;
  }
  .config-buttons{
    height: 8%;
  }
  .iframe-container{
    height: 76%;
  }
  .btnn-elemento{
    width:48px;
    height: 24px;
    font-size: 8px;
    margin-right:  1px;
  margin-left:  1px;
  }
  .btnn-elemento-disabled{
    width:48px;
    height: 24px;
    font-size: 8px;
    margin-right:  1px;
  margin-left:  1px;
  }
   .button-line{
     width:48px;
  height: 4px;
  margin-right:  1px;
  margin-left:  1px;
  }
  .btnn-elemento-final{
    width:96px;
    height: 24px;
    font-size: 8px;
    margin-right:  1px;
  margin-left:  1px;
  }
  .btnn-elemento-disabled-final{
    width:48px;
    height: 96px;
    font-size: 8px;
    margin-right:  1px;
  margin-left:  1px;
  }
   .button-line-final{
     width:96px;
  height: 4px;
  margin-right:  1px;
  margin-left:  1px;
  }


  
 .btnn-option{
    width:72px;
     height: 35px;
    font-size: 8px;

  }
  .btnn-option:hover{
    width:72px;
    height: 35px;
    border: solid 2px #ffffff;
  }
  .button-line-options{
    width:0px;
  }

  .flipswitch-inner:before, .flipswitch-inner:after {
    font-size: 0px;
  }

  .flipswitch {
  width: 40px;
  }
  .flipswitch-switch {
    width: 10px;
    right: 15px;
  }
  .flipswitch-inner:before, .flipswitch-inner:after {
    height: 20px;
  }
  .chassis-options{
   grid-template-columns: 12fr 2fr;
   }
   .chassis-option-container{
  margin-left: 10px;
  } 
}

@media (max-width: 360px){
   .bold{
  font-size: 10px;
  }
  .light{
    font-size: 10px;
  }
  .button-container
  {
    flex: wrap;
  }
  .header-buttons{
    height: 12%;
  }
  .config-buttons{
    height: 24%;
  }
  .iframe-container{
    height: 56%;
  }
  .btnn-elemento{
    width:40px;
    height: 30px;
    font-size: 6px;
    margin-right:  2px;
  margin-left:  2px;
  }
  .btnn-elemento-disabled{
    width:40px;
    height: 30px;
    font-size: 6px;
    margin-right:  2px;
  margin-left: 2px;
  }
   .button-line{
     width:40px;
  height: 4px;
  margin-right:  2px;
  margin-left:  2px;
  }
  .btnn-elemento-final{
    width:80px;
    height: 24px;
    font-size: 6px;
    margin-right:  2px;
  margin-left:  2px;
  }
  .btnn-elemento-disabled-final{
    width:80px;
    height: 24px;
    font-size: 6px;
    margin-right:  2px;
  margin-left:  2px;
  }
   .button-line-final{
     width:80px;
  height: 4px;
  margin-right:  2px;
  margin-left:  2px;
  }


  .btnn-option{
    width:56px;
     height: 40px;
    font-size: 6px;

  }
  .btnn-option:hover{
    width:56px;
    height: 40px;
    border: solid 2px #ffffff;
  }
  .button-line-options{
    width:0px;
  }

  .flipswitch-inner:before, .flipswitch-inner:after {
    font-size: 0px;
     
  }

  

  .flipswitch {
  width: 40px;
  }
  .flipswitch-switch {
    width: 10px;
    right: 15px;
  }
  .flipswitch-inner:before, .flipswitch-inner:after {
    height: 20px;
  }
  .chassis-options{
   grid-template-columns: 12fr 2fr;
   }
   .chassis-option-container{
  margin-left: 0px;
  } 
}


