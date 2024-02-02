// Sketchfab Viewer API: add/remove/show/hide Annotations, annotations events
var version = '1.12.1';
var uid = '57dcd40ce86b44f58a6bfbed8484a909';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);

//////OBJECTS IDS//////
var hummingbird = 3;


var frontWheels = 4;
var backWheels = 1085;

var frontMobileWheels = 38;
var backMobileWheels = 1057;

//Direction
var frontDirection = 77;
var backDirection = 1126;

//suspension per class
var frontSuspensionClass5 = 78;
var frontSuspensionClass6 = 155;
var frontSuspensionClass7 = 208;
var backSuspensionClass5 = 1127;
var backSuspensionClass6 = 1216;
var backSuspensionClass7 = 1269;

//Separated Direction
var frontLeftDirection = 273;
var frontRightDirection = 310;
var backLeftDirection = 1334;
var backRightDirection = 1363;

//Offset Separated wheels
var frontRightWheel = 39;
var frontLeftWheel = 58;
var backRightWheel = 1088;
var backLeftWheel = 1107;

//Offset group in wheels
var infrontRightWheel = 40;
var infrontLeftWheel = 59;
var inbackRightWheel = 1089;
var inbackLeftWheel = 1108;

//Steer Arrows
var frontLSteerArrow = 274;
var frontRSteerArrow = 325;
var backLSteerArrow = 1335;
var backRSteerArrow = 1378;

//Drive Arrows
var frontLDriveArrow = 292;
var frontRDriveArrow = 311;
var backLDriveArrow = 1349;
var backRDriveArrow = 1364;


//Chassis Lenght options
// chassis 1
var chassis1 = 339;

var chassis1front = 340;
var chassis1back = 358; //
var chassis1middle = 372; //
// chassis 2
var chassis2 = 547;

var chassis2back = 589;
var chassis2middle = 563;
var chassis2front = 548;
// chassis 3
var chassis3 = 745;

var chassis3back = 789;
var chassis3middle = 761;
var chassis3front = 746;

//Batteries options
// chassis 1
var c1Batteries = 398;
//v1
var c1Battery0 = 399;
var c1Battery1 = 435;
var c1Battery2 = 463;
var c1Battery3 = 491;
var c1Battery4 = 519;

// chassis 2
var c2Batteries = 604;
//v1
var c2Battery0 = 605;
var c2Battery1 = 633;
var c2Battery2 = 661;
var c2Battery3 = 689;
var c2Battery4 = 717;

// chassis 3
var c3Batteries = 804;
//v1
var c3Battery0 = 805;
var c3Battery1 = 833;
var c3Battery2 = 861;
var c3Battery3 = 945;
var c3Battery4 = 973;
var c3Battery5 = 889;
var c3Battery6 = 917;
var c3Battery7 = 1001;
var c3Battery8 = 1029;


//Engines options
var frontEngines = 5;
var bakcEngines = 1058;
var Engine1 = 6; //FRONT LEFT MOTOR
var Engine2 = 24; //FRONT RIGHT MOTOR
var Engine3 = 1059; //BACK LEFT MOTOR
var Engine4 = 1073; // BACK RIGHT MOTOR


//////END OBJECTS IDS//////

var finalClassObj, finalChassisObj, finalBackChassisObj, finalMiddleChassisObj, finalFrontChassisObj, finalBatteryObj, finalSteerObj, finalDriveObj, finalEngineObj;

////Materials////
var  alluminiumM, driveArrowM, frontDirentionM, backDirectionM, frWheelM, frontSuspensionsM, outBatteriesM,  engineM,  steerArrowM,  
inBatteriesM, flWheelM, blWheelM, backSuspensionsM, ChasissesM, brWheelM, metalBlackM ;
  ;

var Mymaterials;

//////END Materials//////

/////Textures/////

var TnewBattery_BaseColor, Ttyre_BaseColor, Tchasis_normal, Tchasis_basecolor, Ttyre_Normal, Ttyre_Metalness, Tsuspension_front_normal,
  Ttyre_xRayEffect, TnewBattery_xRay_v01, Tsuspension_back_normal, Tchasis_xRay
  ;
var textures;
//////END Textures//////

//////MANAGE CONDITIONS//////
var currentClass = 1;
var currentChassis = 1;
var currentUnits = 0;
var currentBattery = 1;
var currentSteer = 0;
var currentDrive = 1;
var currentEngine = 1;
//////END MANAGE CONDITIONS//////

//////Final Configuration/////
var finalClass, finalChassis, finalBattery, finalSteer, finalDrive, finalEngine;
///End///

var doneRotateFL = true;
var speedRotateFL = Math.PI / 10;
var doneRotateFR = true;
var speedRotateFR = Math.PI / 10;
var doneRotateBL = true;
var speedRotateBL = Math.PI / 10;
var doneRotateBR = true;
var speedRotateBR = Math.PI / 10;

//Steer Rotation
var doneRotateSteerFL = true;
var speedRotatSteerFL = Math.PI / 10;
var doneRotateSteerFR = true;
var speedRotatSteerFR = Math.PI / 10;
var doneRotateSteerBL = true;
var speedRotatSteerBL = Math.PI / 10;
var doneRotateSteerBR = true;
var speedRotatSteerBR = Math.PI / 10;

//cOLORS
var blackColor = '#000000';
var whiteColor = '#ffffff';
var greenColor = '#9ebd04';
var greenColor2 = '#D0FE07';
var grayColor = '#B1B1B1';
var grayDepthColor = '#8A8A8A66';
var xRayBlueColor = [0, 0.17788841598362914, 0.37626212299090633];
var xRayGrayColor = [0.05, 0.05, 0.05];
var TextureGrayColor = [0.22, 0.22, 0.22];
var xRayBlackColor = [0.004, 0.004, 0.004];
var xRayRedColor = [0.37626212299090633, 0.17788841598362914, 0];

//BUTTONS
var bttnBgClass = [];
bttnBgClass.push(document.getElementById("class1"), document.getElementById("class2"), document.getElementById("class3"));

var bttnBgChassis = [];
bttnBgChassis.push(document.getElementById("chassis1"), document.getElementById("chassis2"), document.getElementById("chassis3"),
  document.getElementById("chassis1.2"), document.getElementById("chassis2.2"), document.getElementById("chassis3.2"));

var bttnBgBatteries = [];
bttnBgBatteries.push(document.getElementById("batteries1"), document.getElementById("batteries2"), document.getElementById("batteries3"), document.getElementById("batteries4"));

var bttnBgSteer = [];
bttnBgSteer.push(document.getElementById("steering1"), document.getElementById("steering2"));

var bttnBgDrive = [];
bttnBgDrive.push(document.getElementById("drive1"), document.getElementById("drive2"), document.getElementById("drive3"));

var bttnBgEngine = [];
bttnBgEngine.push(document.getElementById("engine1"), document.getElementById("engine2"), document.getElementById("engine3"), document.getElementById("engine4"));

//header buttons
var bttnColorHeader = [];
bttnColorHeader.push(document.getElementById("vehicle-class"), document.getElementById("chassis"), document.getElementById("batteries"),
  document.getElementById("steering"), document.getElementById("drive"), document.getElementById("engines"));

var linesColorHeader = [];
linesColorHeader.push(document.getElementById("line-class"), document.getElementById("line-chassis"), document.getElementById("line-battery"), document.getElementById("line-steer"),
  document.getElementById("line-drive"), document.getElementById("line-engine"), document.getElementById("line-finish"), document.getElementById("line-back"));


var error = function error() {
  console.error('Sketchfab API error');
};


var success = function success(api) {
  api.start(function () {
    api.addEventListener('viewerready', function () {
      api.getAnnotationList(function (p, list) {
        var l = list.length;
        var i = l;

      });

      api.getSceneGraph(function (err, result) {
        if (err) {
          console.log('Error getting nodes');
          return;
        }
        // get the id from that log
        console.log(result);
        initt3D();
        //Style
        BttnHeaderProgress(bttnColorHeader, 0, 1, 0);
        LineHeaderProgress(linesColorHeader, 0, 0, 1);
        BttnActiveOne(bttnBgClass, 0);

        //Enable Chassis Config
        EnableChassisConfig();
        BttnActiveOne(bttnBgClass, 0);
        LineChangeBG(1);
      });


      api.getTextureList(function (err, textures) {
        //Asign textures
        Ttyre_Normal = textures[0];
        Ttyre_BaseColor = textures[1];
        TnewBattery_BaseColor = textures[2];
        Tchasis_normal = textures[3];
        Ttyre_xRayEffect = textures[4];
        Tsuspension_back_normal = textures[5];
        TnewBattery_xRay_v01 = textures[6];
        Ttyre_Metalness = textures[7];
        Tsuspension_front_normal = textures[8];
        Tchasis_basecolor = textures[9];
        Tchasis_xRay = textures[11];

        if (!err) {
          window.console.log(textures);
        }

      });
      //////Initialize materials//////
      api.getMaterialList(function (err, materials) {
        Mymaterials = materials;
        //Asign materials to variables
        alluminiumM = materials[0];//
        metalBlackM = materials[1];//
        brWheelM = materials[2];//
        blWheelM = materials[3];//
        driveArrowM = materials[4];//
        flWheelM = materials[5];//
        steerArrowM = materials[6];//
        inBatteriesM = materials[7];//
        frWheelM = materials[8];//
        frontSuspensionsM = materials[9];//
        backDirectionM = materials[10];//
        backSuspensionsM = materials[11];//
        outBatteriesM = materials[12];//
        engineM = materials[13];//
        frontDirentionM = materials[14];//
        ChasissesM = materials[15];//

        Mymaterials.push(materials[0], materials[1], materials[2], materials[3], materials[4], materials[5], materials[6], materials[7], materials[8], materials[9], materials[10], materials[11], materials[12], materials[13], materials[14], materials[15],
        );

        if (!err) {
          window.console.log(materials);
        }

        XrayWhiteMatCicle();
        XrayBlueMat(flWheelM);
        XrayBlueMat(frWheelM);
        XrayBlueMat(blWheelM);
        XrayBlueMat(brWheelM);
        XrayBlueMat(frontDirentionM);
        XrayBlueMat(backDirectionM);

      });

      function XrayWhiteMatCicle() {
        for (let i = 0; i < Mymaterials.length; i++) {
          //opacity
          Mymaterials[i].channels.Opacity.enable = true;
          Mymaterials[i].channels.Opacity.factor = .8;
          //albedo
          Mymaterials[i].channels.AlbedoPBR.texture = false;
          Mymaterials[i].channels.AlbedoPBR.color = true;
          Mymaterials[i].channels.AlbedoPBR.color = xRayGrayColor;
          //emit
          Mymaterials[i].channels.EmitColor.enable = true;
          Mymaterials[i].channels.EmitColor.texture = false;
          Mymaterials[i].channels.EmitColor.color = true;
          Mymaterials[i].channels.EmitColor.factor = 0;
          //Metalness
          Mymaterials[i].channels.MetalnessPBR.factor = 0;
          //Specular
          Mymaterials[i].channels.SpecularF0.factor = 0;
          //set material
          api.setMaterial(Mymaterials[i]);

        }
      }
      function XrayWhiteMat(idMat) {
        //opacity
        idMat.channels.Opacity.enable = true;
        idMat.channels.Opacity.factor = .8;
        //albedo
        idMat.channels.AlbedoPBR.texture = false;
        idMat.channels.AlbedoPBR.color = true;
        idMat.channels.AlbedoPBR.color = xRayGrayColor;
        //emit
        idMat.channels.EmitColor.enable = true;
        idMat.channels.EmitColor.texture = false;
        idMat.channels.EmitColor.color = true;
        idMat.channels.EmitColor.factor = 0;
        //Metalness
        idMat.channels.MetalnessPBR.factor = 0;
        //Specular
        idMat.channels.SpecularF0.factor = 0;
        //set material
        api.setMaterial(idMat);
      }
      function XrayBlueMat(idMat) {
        //opacity
        idMat.channels.Opacity.enable = true;
        idMat.channels.Opacity.factor = .7;
        //albedo
        idMat.channels.AlbedoPBR.texture = false;
        idMat.channels.AlbedoPBR.color = true;
        idMat.channels.AlbedoPBR.color = xRayBlueColor;
        //emit
        idMat.channels.EmitColor.enable = true;
        idMat.channels.EmitColor.texture = false;
        idMat.channels.EmitColor.color = true;
        idMat.channels.EmitColor.color = xRayBlueColor;
        idMat.channels.EmitColor.factor = 2.5;
        //metalness
        idMat.channels.MetalnessPBR.factor = 0;
        //Specular
        idMat.channels.SpecularF0.factor = 0;
        //set material
        api.setMaterial(idMat);
      }

      function XrayRedMat(idMat) {
        //opacity
        idMat.channels.Opacity.enable = true;
        idMat.channels.Opacity.factor = .7;
        //albedo
        idMat.channels.AlbedoPBR.texture = false;
        idMat.channels.AlbedoPBR.color = true;
        idMat.channels.AlbedoPBR.color = xRayRedColor;
        //emit 
        idMat.channels.EmitColor.enable = true;
        idMat.channels.EmitColor.texture = false;
        idMat.channels.EmitColor.color = true;
        idMat.channels.EmitColor.color = xRayRedColor;
        idMat.channels.EmitColor.factor = 2.5;
        //metalness
        idMat.channels.MetalnessPBR.factor = 0;
        //Specular
        idMat.channels.SpecularF0.factor = 0;
        //set material
        api.setMaterial(idMat);
      }

      function XrayRedMat(idMat, opacityValue) {
        //opacity
        idMat.channels.Opacity.factor = opacityValue;
        //albedo
        idMat.channels.AlbedoPBR.color = [10, 120, 240];
        //emit 
        idMat.channels.EmitColor.factor = .3;
        idMat.channels.EmitColor.color = [10, 120, 240];
        //Metalness
        idMat.channels.MetalnessPBR.factor = 0;
        //Specular
        idMat.channels.SpecularF0.factor = 0;
        //set material
        api.setMaterial(idMat);
      }

      function XrayBlueMatBatteriesOut() {
          //opacity
          outBatteriesM.channels.Opacity.enable = true;
          outBatteriesM.channels.Opacity.factor = .15;
          //albedo
          outBatteriesM.channels.AlbedoPBR.texture = false;
          outBatteriesM.channels.AlbedoPBR.color = true;
          outBatteriesM.channels.AlbedoPBR.color = xRayBlueColor;

          outBatteriesM.channels.MetalnessPBR.factor = 0;
          outBatteriesM.channels.SpecularF0.factor = 0;
          //emission
          outBatteriesM.channels.EmitColor.enable = true;
          outBatteriesM.channels.EmitColor.factor = 3.47;
          outBatteriesM.channels.EmitColor.color = true;
          outBatteriesM.channels.EmitColor.color = xRayBlueColor
          api.setMaterial(outBatteriesM);
      }

      function XrayGrayMatBatteriesOut(opacityValue) {
          //opacity
          outBatteriesM.channels.Opacity.enable = true;
          outBatteriesM.channels.Opacity.factor = opacityValue;
          //albedo
          outBatteriesM.channels.AlbedoPBR.texture = false;
          outBatteriesM.channels.AlbedoPBR.color = true;
          outBatteriesM.channels.AlbedoPBR.color = xRayGrayColor;

          outBatteriesM.channels.MetalnessPBR.factor = 0;
          outBatteriesM.channels.SpecularF0.factor = 0;
          //emission
          outBatteriesM.channels.EmitColor.enable = false;
          api.setMaterial(outBatteriesM);
      }

      function XrayBlueMatBatteriesIn() {
          //opacity
          inBatteriesM.channels.Opacity.enable = false;
          inBatteriesM.channels.Opacity.factor = 1;
          // albedo
          inBatteriesM.channels.AlbedoPBR.color = false;
          inBatteriesM.channels.AlbedoPBR.texture = true;
          inBatteriesM.channels.AlbedoPBR.texture = TnewBattery_BaseColor;
          //emission
          inBatteriesM.channels.EmitColor.enable = true;
          inBatteriesM.channels.EmitColor.factor = 3.47;
          inBatteriesM.channels.EmitColor.color = true;
          inBatteriesM.channels.EmitColor.color = xRayBlueColor;
          //metalness
          inBatteriesM.channels.MetalnessPBR.factor = 0;
          //specular
          inBatteriesM.channels.SpecularF0.factor = 0;
          //set material
          api.setMaterial(inBatteriesM);
      }

      function SetTextureWheels() {
        //opacity
        flWheelM.channels.Opacity.enable = false;
        //emission
        flWheelM.channels.EmitColor.enable = true;
        flWheelM.channels.EmitColor.factor = .6;
        flWheelM.channels.EmitColor.color = false;
        flWheelM.channels.EmitColor.texture = true;
        flWheelM.channels.EmitColor.texture = Ttyre_BaseColor;
        // albedo
        flWheelM.channels.AlbedoPBR.color = false;
        flWheelM.channels.AlbedoPBR.texture = true;
        flWheelM.channels.AlbedoPBR.texture = Ttyre_BaseColor;
        //Metalness
        flWheelM.channels.MetalnessPBR.factor = 1;
        //Specular
        flWheelM.channels.SpecularF0.factor = 1;
        //set material
        api.setMaterial(flWheelM);

        //opacity
        frWheelM.channels.Opacity.enable = false;
        //emission
        frWheelM.channels.EmitColor.enable = true;
        frWheelM.channels.EmitColor.factor = .6;
        frWheelM.channels.EmitColor.color = false;
        frWheelM.channels.EmitColor.texture = true;
        frWheelM.channels.EmitColor.texture = Ttyre_BaseColor;
        frWheelM.channels.EmitColor.texture.texCoordUnit = 0;
        // albedo
        frWheelM.channels.AlbedoPBR.color = false;
        frWheelM.channels.AlbedoPBR.texture = true;
        frWheelM.channels.AlbedoPBR.texture = Ttyre_BaseColor;
        //Metalness
        frWheelM.channels.MetalnessPBR.factor = 1;
        //Specular
        frWheelM.channels.SpecularF0.factor = 1;
        //set material
        api.setMaterial(frWheelM);

        //opacity
        blWheelM.channels.Opacity.enable = false;
        //emission
        blWheelM.channels.EmitColor.enable = true;
        blWheelM.channels.EmitColor.factor = .6;
        blWheelM.channels.EmitColor.color = false;
        blWheelM.channels.EmitColor.texture = true;
        blWheelM.channels.EmitColor.texture = Ttyre_BaseColor;
        // albedo
        blWheelM.channels.AlbedoPBR.color = false;
        blWheelM.channels.AlbedoPBR.texture = true;
        blWheelM.channels.AlbedoPBR.texture = Ttyre_BaseColor;
        //Metalness
        blWheelM.channels.MetalnessPBR.factor = 1;
        //Specular
        blWheelM.channels.SpecularF0.factor = 1;
        //set material
        api.setMaterial(blWheelM);

        //opacity
        brWheelM.channels.Opacity.enable = false;
        //emission
        brWheelM.channels.EmitColor.enable = true;
        brWheelM.channels.EmitColor.factor = .6;
        brWheelM.channels.EmitColor.color = false;
        brWheelM.channels.EmitColor.texture = true;
        brWheelM.channels.EmitColor.texture = Ttyre_BaseColor;
        // albedo
        brWheelM.channels.AlbedoPBR.color = false;
        brWheelM.channels.AlbedoPBR.texture = true;
        brWheelM.channels.AlbedoPBR.texture = Ttyre_BaseColor;
        //Metalness
        brWheelM.channels.MetalnessPBR.factor = 1;
        //Specular
        brWheelM.channels.SpecularF0.factor = 1;
        //set material
        api.setMaterial(brWheelM);
      }

      function SetTextureChassis() {
        //opacity
        ChasissesM.channels.Opacity.enable = false;
        //emission
        ChasissesM.channels.EmitColor.factor = .35;
        ChasissesM.channels.EmitColor.color = false;
        ChasissesM.channels.EmitColor.texture = true;
        ChasissesM.channels.EmitColor.texture = Tchasis_basecolor;
        // albedo
        ChasissesM.channels.AlbedoPBR.color = false;
        ChasissesM.channels.AlbedoPBR.texture = true;
        ChasissesM.channels.AlbedoPBR.texture = Tchasis_basecolor;
        //Metalness
        ChasissesM.channels.MetalnessPBR.factor = 1;
        api.setMaterial(ChasissesM);
      }

      function SetTextureBatteriesIn( ) {
          //opacity
          inBatteriesM.channels.Opacity.enable = false;
          // albedo
          inBatteriesM.channels.AlbedoPBR.color = false;
          inBatteriesM.channels.AlbedoPBR.texture = true;
          inBatteriesM.channels.AlbedoPBR.texture = TnewBattery_BaseColor;
          //emission
          inBatteriesM.channels.EmitColor.enable = true;
          inBatteriesM.channels.EmitColor.factor = .47;
          inBatteriesM.channels.EmitColor.color = false;
          inBatteriesM.channels.EmitColor.texture = true;
          inBatteriesM.channels.EmitColor.texture = TnewBattery_BaseColor;
          //metalness
          inBatteriesM.channels.MetalnessPBR.factor = 1;
          //Specular
          inBatteriesM.channels.SpecularF0.factor = .5;
          //set material
          api.setMaterial(inBatteriesM);
      }
  
      function OpaqueMat(idMat, color) {
        idMat.channels.Opacity.enable = false;
        idMat.channels.EmitColor.enable = false;
        idMat.channels.AlbedoPBR.texture = false;
        idMat.channels.AlbedoPBR.color = true;
        idMat.channels.AlbedoPBR.color = color;
        idMat.channels.MetalnessPBR.enable = true;
        idMat.channels.MetalnessPBR.factor = 1;
        idMat.channels.SpecularF0.factor = .5;
        //set material
        api.setMaterial(idMat);
      }

      function DeactivateOpacity() {
        inBatteriesM.channels.Opacity.enable = false;
        flWheelM.channels.Opacity.enable = false;
        frWheelM.channels.Opacity.enable = false;
        blWheelM.channels.Opacity.enable = false;
        brWheelM.channels.Opacity.enable = false;

        api.setMaterial(inBatteriesM);
        api.setMaterial(flWheelM);
        api.setMaterial(frWheelM);
        api.setMaterial(blWheelM);
        api.setMaterial(brWheelM);

      }

      //button functions
      function BttnActiveOne(array, indexActive) {
        for (let index = 0; index < array.length; index++) {
          array[index].style.backgroundColor = blackColor;
        }
        array[indexActive].style.backgroundColor = greenColor;
      }
      function BttnActiveNone(array) {
        for (let index = 0; index < array.length; index++) {
          array[index].style.backgroundColor = blackColor;
        }
      }
      function BttnActiveTwo(array, indexActive, indexActive2) {
        for (let index = 0; index < array.length; index++) {
          array[index].style.backgroundColor = blackColor;
        }
        array[indexActive].style.backgroundColor = greenColor;
        array[indexActive2].style.backgroundColor = greenColor;
      }

      function BttnHeaderProgress(array, indexInit1, indexInit2, indexToActivate) {

        for (index = indexInit1; index >= 0; index--) {
          array[index].style.color = grayColor;
        }
        for (index = indexInit2; index < array.length; index++) {
          array[index].style.color = whiteColor;
        }
        array[indexToActivate].style.color = greenColor2;
      }
      function LineHeaderProgress(array, lineActive, indexLow, indexHigh) {
        //activados
        for (let index = indexLow; index >= 0; index--) {
          array[index].style.backgroundColor = grayColor;
        }
        //desactivados
        for (let index = indexHigh; index < array.length; index++) {
          array[index].style.backgroundColor = grayDepthColor;
        }

        //active
        array[lineActive].style.backgroundColor = greenColor;
      }
      function LineChangeBG(index) {
        linesColorHeader[index].style.backgroundColor = whiteColor;
      }

      ////////CLASS CONFIGURATION/////
      //Manage Class
      document.getElementById("vehicle-class").addEventListener('click', function () {
        classGui();
        ResetSteerRotation();
        Chassis1();
        //Style
        BttnHeaderProgress(bttnColorHeader, 0, 1, 0);
        LineHeaderProgress(linesColorHeader, 0, 0, 1);
        BttnActiveNone(bttnBgClass);

        switch (currentClass) {
          case 1:
            Class1();
            BttnActiveOne(bttnBgClass, 0);

            //Enable Chassis Config
            EnableChassisConfig();
            BttnActiveOne(bttnBgClass, 0);
            LineChangeBG(1);
            currentChassis = 1;

            break;
          case 2:
            Class2();
            BttnActiveOne(bttnBgClass, 1);

            //Enable Chassis Config
            EnableChassisConfig();
            BttnActiveOne(bttnBgClass, 1);
            LineChangeBG(1);
            currentChassis = 1;

            break;
          case 3:
            BttnActiveOne(bttnBgClass, 2);
            Class3();

            //Enable Chassis Config
            EnableChassisConfig();
            BttnActiveOne(bttnBgClass, 2);
            LineChangeBG(1);
            currentChassis = 2;

            break;
        }
        console.log(currentClass);


      });
      //Manage Class Options
      document.getElementById("class1").addEventListener('click', function () {
        currentClass = 1;
        Class1();
        currentChassis = 1;
        EnableChassisConfig();

        //Active Next Step of configuration
        BttnActiveOne(bttnBgClass, 0);
        LineChangeBG(1);


      });
      document.getElementById("class2").addEventListener('click', function () {
        currentClass = 2;
        Class2();
        currentChassis = 1;
        EnableChassisConfig();

        //Style
        BttnActiveOne(bttnBgClass, 1);
        LineChangeBG(1);

      });
      document.getElementById("class3").addEventListener('click', function () {
        currentClass = 3;
        Class3();
        currentChassis = 2;
        EnableChassisConfig();

        //Style
        BttnActiveOne(bttnBgClass, 2);
        LineChangeBG(1);

      });
      ////////END CLASS CONFIGURATION/////


      ////////WHEELBASE CONFIGURATION/////
      //Manage Units
      document.getElementById("fs").addEventListener("change", function (event) {
        if (event.target.checked) {
          console.log("Checked");
          document.getElementById("chassis-option2-id").style.display = "none";
          document.getElementById("chassis-option-id").style.display = "inline";
          currentUnits = 0;

          inchWhatClassIs();
        }
        else {
          console.log("Not Checked");
          document.getElementById("chassis-option-id").style.display = "none";
          document.getElementById("chassis-option2-id").style.display = "inline";
          currentUnits = 1;

          ftsWhatClassIs();
        }
      });

      //Manage Chassis
      document.getElementById("chassis").addEventListener('click', function () {

        //Only Show chassis configuration
        ResetSteerRotation();

        //Style
        BttnHeaderProgress(bttnColorHeader, 0, 2, 1);
        LineHeaderProgress(linesColorHeader, 1, 0, 2);

        switch (currentUnits) {
          case 0://inches
            document.getElementById("chassis-option-id").style.display = "inline";
            document.getElementById("chassis-option2-id").style.display = "none";

            inchWhatClassIs();
            document.getElementById("inches").style.backgroundColor = greenColor;
            document.getElementById("fts").style.backgroundColor = blackColor;
            break;

          case 1://fts
            document.getElementById("chassis-option2-id").style.display = "inline";
            document.getElementById("chassis-option-id").style.display = "none";

            ftsWhatClassIs();
            document.getElementById("fts").style.backgroundColor = greenColor;
            document.getElementById("inches").style.backgroundColor = blackColor;
            break;

        }

        chassisGUI();
        HideToConfigureChassis();

        //Style
        BttnActiveNone(bttnBgChassis);

        //what button is active
        switch (currentChassis) {
          case 1:
            Chassis1();

            //Enable Battery Configuration
            EnableBatteryConfig();
            BttnActiveTwo(bttnBgChassis, 0, 3);
            LineChangeBG(2);
            gotoCamera(1);

            break;
          case 2:
            Chassis2();

            //Enable Battery Configuration
            EnableBatteryConfig();
            BttnActiveTwo(bttnBgChassis, 1, 4);
            LineChangeBG(2);
            gotoCamera(2);
            break;
          case 3:
            Chasiss3();

            //Enable Battery Configuration
            EnableBatteryConfig();
            BttnActiveTwo(bttnBgChassis, 2, 5);
            LineChangeBG(2);
            gotoCamera(3);
            break;
        }
        console.log(currentClass);

      });

      //Manage bttns Chassis Inches
      document.getElementById("chassis1").addEventListener('click', function () {
        Chassis1();
        EnableBatteryConfig();
        //Style
        BttnActiveTwo(bttnBgChassis, 0, 3);
        LineChangeBG(2);
        gotoCamera(1);
      });

      document.getElementById("chassis2").addEventListener('click', function () {
        Chassis2();
        EnableBatteryConfig();
        //Style
        BttnActiveTwo(bttnBgChassis, 1, 4);
        LineChangeBG(2);
        gotoCamera(2);
      });

      document.getElementById("chassis3").addEventListener('click', function () {
        Chasiss3();
        EnableBatteryConfig();
        //Style
        BttnActiveTwo(bttnBgChassis, 2, 5);
        LineChangeBG(2);
        gotoCamera(3);

      });

      //Manage bttns Chassis fts
      document.getElementById("chassis1.2").addEventListener('click', function () {
        Chassis1();
        EnableBatteryConfig();
        //Style
        BttnActiveTwo(bttnBgChassis, 0, 3);
        LineChangeBG(2);
        gotoCamera(1);
      });

      document.getElementById("chassis2.2").addEventListener('click', function () {
        Chassis2();
        EnableBatteryConfig();
        //Style
        BttnActiveTwo(bttnBgChassis, 1, 4);
        LineChangeBG(2);
        gotoCamera(2);
      });

      document.getElementById("chassis3.2").addEventListener('click', function () {
        Chasiss3();
        EnableBatteryConfig();
        //Style
        BttnActiveTwo(bttnBgChassis, 2, 5);
        LineChangeBG(2);
        gotoCamera(3);
      });
      ////////END WHEELBASE CONFIGURATION/////

      ////////BATTERY CONFIGURATION/////
      //Manage batteries config dependant of chassis active
      document.getElementById("batteries").addEventListener('click', function () {

        //Only Show Battery configuration
        batteryGui();
        ResetSteerRotation();

        //Style
        BttnHeaderProgress(bttnColorHeader, 1, 3, 2);
        LineHeaderProgress(linesColorHeader, 2, 1, 3);


        BttnActiveNone(bttnBgBatteries);

        currentSteer = 1;


        switch (currentChassis) {
          case 1:
            document.getElementById("batteries1").style.display = "inline";
            document.getElementById("batteries2").style.display = "inline";
            document.getElementById("batteries3").style.display = "inline";
            document.getElementById("batteries4").style.display = "none";

            Chassis1();
            ///Default config///
            switch (currentBattery) {
              case 1:
                C1Battery1();
                currentBattery = 1;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 0);
                LineChangeBG(3);
                break;
              case 2:
                C1Battery2();
                currentBattery = 2;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 1);
                LineChangeBG(3);
                break;
              case 4:
                C1Battery4();
                currentBattery = 4;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 2);
                LineChangeBG(3)
                break;
            }

            document.getElementById("batteries1").addEventListener('click', function () {
              C1Battery1();
              currentBattery = 1;
              EnableSteerConfig();

              //Style
              BttnActiveOne(bttnBgBatteries, 0);
              LineChangeBG(3);

            });
            document.getElementById("batteries2").addEventListener('click', function () {
              C1Battery2();
              currentBattery = 2;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 1);
              LineChangeBG(3);
            });
            document.getElementById("batteries3").addEventListener('click', function () {
              C1Battery4();
              currentBattery = 4;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 2);
              LineChangeBG(3);
            });


            break;
          case 2:
            document.getElementById("batteries1").style.display = "inline";
            document.getElementById("batteries2").style.display = "inline";
            document.getElementById("batteries3").style.display = "inline";
            document.getElementById("batteries4").style.display = "none";

            Chassis2();

            ///Default config///
            ///Default config///
            switch (currentBattery) {
              case 1:
                C2Battery1();
                currentBattery = 1;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 0);
                LineChangeBG(3);
                break;
              case 2:
                C2Battery2();
                currentBattery = 2;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 1);
                LineChangeBG(3);
                break;
              case 4:
                C2Battery4();
                currentBattery = 4;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 2);
                LineChangeBG(3);
                break;
            }

            document.getElementById("batteries1").addEventListener('click', function () {
              C2Battery1();
              currentBattery = 1;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 0);
              LineChangeBG(3);
            });
            document.getElementById("batteries2").addEventListener('click', function () {
              C2Battery2();
              currentBattery = 2;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 1);
              LineChangeBG(3);
            });
            document.getElementById("batteries3").addEventListener('click', function () {
              C2Battery4();
              currentBattery = 4;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 2);
              LineChangeBG(3);
            });
            break;
          case 3:
            document.getElementById("batteries1").style.display = "inline";
            document.getElementById("batteries2").style.display = "inline";
            document.getElementById("batteries3").style.display = "inline";
            document.getElementById("batteries4").style.display = "inline";

            Chasiss3();
            ///Default config///
            switch (currentBattery) {
              case 1:
                C3Battery1();
                currentBattery = 1;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 0);
                LineChangeBG(3);
                break;
                break;
              case 2:
                C3Battery2();
                currentBattery = 2;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 1);
                LineChangeBG(3);
                break;
                break;
              case 4:
                C3Battery4();
                currentBattery = 4;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 2);
                LineChangeBG(3);
                break;
              case 8:
                C3Battery8();
                currentBattery = 8;

                //Enable Steer Configuration
                EnableSteerConfig();
                BttnActiveOne(bttnBgBatteries, 3);
                LineChangeBG(3);
                break;
            }

            document.getElementById("batteries1").addEventListener('click', function () {
              C3Battery1();
              currentBattery = 1;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 0);
              LineChangeBG(3);
            });
            document.getElementById("batteries2").addEventListener('click', function () {
              C3Battery2();
              currentBattery = 2;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 1);
              LineChangeBG(3);
            });
            document.getElementById("batteries3").addEventListener('click', function () {
              C3Battery4();
              currentBattery = 4;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 2);
              LineChangeBG(3);
            });
            document.getElementById("batteries4").addEventListener('click', function () {
              C3Battery8();
              currentBattery = 8;
              EnableSteerConfig();
              //Style
              BttnActiveOne(bttnBgBatteries, 3);
              LineChangeBG(3);
            });
            break;

        }

      });
      ////////END BATTERY CONFIGURATION/////

      ////////STEER CONFIGURATION/////
      document.getElementById("steering").addEventListener('click', function () {
        //Only show steer configuration
        steerGUI();
        //Anim
        ResetSteerRotation();
        //Style
        BttnHeaderProgress(bttnColorHeader, 2, 4, 3);
        LineHeaderProgress(linesColorHeader, 3, 2, 4);


        BttnActiveNone(bttnBgSteer);

        switch (currentSteer) {
          case 1:
            Steer1();
            currentSteer = 1;
            //Anim
            ResetSteerRotation();
            Steer1Anim();

            //Enable Drive Configuration
            EnableDriveConfig();
            BttnActiveOne(bttnBgSteer, 0);
            LineChangeBG(4);
            break;
          case 2:
            Steer2();
            currentSteer = 2;
            //Anim
            ResetSteerRotation();
            Steer2Anim();

            //Enable Drive Configuration
            EnableDriveConfig();
            BttnActiveOne(bttnBgSteer, 1);
            LineChangeBG(4);
            break;
        }

        HideToConfigureSteer();

      });


      document.getElementById("steering1").addEventListener('click', function () {
        Steer1();
        currentSteer = 1;
        EnableDriveConfig();
        //Anim
        ResetSteerRotation();
        Steer1Anim();
        //Style
        BttnActiveOne(bttnBgSteer, 0);
        LineChangeBG(4);
      });
      document.getElementById("steering2").addEventListener('click', function () {
        Steer2();
        currentSteer = 2;
        EnableDriveConfig();
        //Anim
        ResetSteerRotation();
        Steer2Anim();
        //Style
        BttnActiveOne(bttnBgSteer, 1);
        LineChangeBG(4);
      });

      ////////END STEER CONFIGURATION/////

      ////////DRIVE CONFIGURATION/////
      document.getElementById("drive").addEventListener('click', function () {

        //Only show drive configuration
        driveGUI();
        HideToConfigureDrive();
        //Anim
        ResetSteerRotation();
        //Style
        BttnHeaderProgress(bttnColorHeader, 3, 5, 4);
        LineHeaderProgress(linesColorHeader, 4, 3, 5);


        BttnActiveNone(bttnBgDrive);

        switch (currentDrive) {
          case 1:
            Drive1();
            //Anim
            ResetSteerRotation();
            Drive1Anim();

            //Enable Engine Configuration
            EnableEngineConfig();
            BttnActiveOne(bttnBgDrive, 0);
            LineChangeBG(5);

            break;
          case 2:
            Drive2();
            //Anim
            ResetSteerRotation();
            Drive2Anim();

            //Enable Engine Configuration
            EnableEngineConfig();
            BttnActiveOne(bttnBgDrive, 1);
            LineChangeBG(5);
            break;
          case 3:
            Drive3();
            //Anim
            ResetSteerRotation();
            Drive3Anim();
            //Enable Engine Configuration
            EnableEngineConfig();
            BttnActiveOne(bttnBgDrive, 2);
            LineChangeBG(5);
            currentEngine = 2;
            break;
        }


        document.getElementById("drive1").addEventListener('click', function () {
          Drive1();
          EnableEngineConfig();
          //Anim
          ResetSteerRotation();
          Drive1Anim();
          //Style
          BttnActiveOne(bttnBgDrive, 0);
          LineChangeBG(5);

          //UI
          document.getElementById("line-engine-1").style.display = "inline";
          document.getElementById("line-engine-2").style.display = "none";
          document.getElementById("line-engine-3").style.display = "none";

        });
        document.getElementById("drive2").addEventListener('click', function () {
          Drive2();
          EnableEngineConfig();
          //Anim
          ResetSteerRotation();
          Drive2Anim();
          //Style
          BttnActiveOne(bttnBgDrive, 1);
          LineChangeBG(5);

          //UI
          document.getElementById("line-engine-1").style.display = "inline";
          document.getElementById("line-engine-2").style.display = "none";
          document.getElementById("line-engine-3").style.display = "none";
        });
        document.getElementById("drive3").addEventListener('click', function () {
          Drive3();
          currentEngine = 2;
          EnableEngineConfig();
          //Anim
          ResetSteerRotation();
          Drive3Anim();
          //Style
          BttnActiveOne(bttnBgDrive, 2);
          LineChangeBG(5);

          //UI
          document.getElementById("line-engine-1").style.display = "none";
          document.getElementById("line-engine-2").style.display = "inline";
          document.getElementById("line-engine-3").style.display = "inline";
        });

      });
      ////////END DRIVE CONFIGURATION/////

      ////////ENGINE CONFIGURATION/////
      document.getElementById("engines").addEventListener('click', function () {
        //Only show engine configuration
        engineGUI();
        HideToConfigureEngine();
        //What Engine is active
        WhatEngineIs();
        //ANIMATIONS
        ResetSteerRotation();
        //Style
        BttnHeaderProgress(bttnColorHeader, 4, 5, 5);
        LineHeaderProgress(linesColorHeader, 5, 4, 5);
        LineChangeBG(6);

        ResetSteerRotation();



      });
      ////////END ENGINE CONFIGURATION/////

      ////////GET CONFIGURATION///////
      document.getElementById("finish").addEventListener('click', function () {
        finishGUI();
        ResetAllTextures();
        ConfigAnim();
        document.getElementById("send").style.color = whiteColor;
        document.getElementById("line-send").style.backgroundColor = whiteColor;

      });

      document.getElementById("back").addEventListener('click', function () {
        engineGUI();
        EnableLinesOptions();
        ResetSteerRotation();
        WhatEngineIs();



      });
      document.getElementById("send").addEventListener('click', function () {
        GetConfiguration();
        document.getElementById("send").style.color = greenColor2;
        document.getElementById("line-send").style.backgroundColor = greenColor;
      });
      ////////END GET CONFIGURATION///////


      //Functions
      function Class1() {
        translateObject(frontLeftWheel, 0.5, -379.33, 26.073, 102.538,);
        translateObject(frontRightWheel, 0.5, -379.33, 26.073, -102.538);
        translateObject(backLeftWheel, 0.5, -0.022, 26.073, 102.538);
        translateObject(backRightWheel, 0.5, -0.022, 26.073, -102.538);

        api.show(frontSuspensionClass5);
        api.show(backSuspensionClass5);
        api.hide(frontSuspensionClass6);
        api.hide(backSuspensionClass6);
        api.hide(frontSuspensionClass7);
        api.hide(backSuspensionClass7);

        /*
        translateObject(frontLeftDirection, 0.5, 0, 0, 0);
        translateObject(frontRightDirection, 0.5, 0, 0, 0);
        translateObject(backLeftDirection, 0.5, 0, 0, 0);
        translateObject(backRightDirection, 0.5, 0, 0, 0);
        */

        HideToConfigureClass();
        currentClass = 1;

        //UI
        document.getElementById("line-chassis-1").style.display = "inline";
        document.getElementById("line-chassis-2").style.display = "none";
        document.getElementById("line-chassis-1.2").style.display = "inline";
        document.getElementById("line-chassis-2.2").style.display = "none";

      }
      function Class2() {
        translateObject(frontLeftWheel, 0.5, -379.33, 26.073, 117.538,);
        translateObject(frontRightWheel, 0.5, -379.33, 26.073, -117.538);
        translateObject(backLeftWheel, 0.5, -0.022, 26.073, 117.538);
        translateObject(backRightWheel, 0.5, -0.022, 26.073, -117.538)

        api.show(frontSuspensionClass6);
        api.show(backSuspensionClass6);
        api.hide(frontSuspensionClass5);
        api.hide(backSuspensionClass5);
        api.hide(frontSuspensionClass7);
        api.hide(backSuspensionClass7);

        /*
        translateObject(frontLeftDirection, 0.5, 0, 0, 15);
        translateObject(frontRightDirection, 0.5, 0, 0, -15);
        translateObject(backLeftDirection, 0.5, 0, 0, 15);
        translateObject(backRightDirection, 0.5, 0, 0, -15);
        */

        HideToConfigureClass();
        currentClass = 2;

        //UI
        document.getElementById("line-chassis-1").style.display = "inline";
        document.getElementById("line-chassis-2").style.display = "inline";
        document.getElementById("line-chassis-1.2").style.display = "inline";
        document.getElementById("line-chassis-2.2").style.display = "inline";

      }
      function Class3() {
        translateObject(frontLeftWheel, 0.5, -379.33, 26.073, 132.538,);
        translateObject(frontRightWheel, 0.5, -379.33, 26.073, -132.538);
        translateObject(backLeftWheel, 0.5, -0.022, 26.073, 132.538);
        translateObject(backRightWheel, 0.5, -0.022, 26.073, -132.538)

        api.show(frontSuspensionClass7);
        api.show(backSuspensionClass7);
        api.hide(frontSuspensionClass5);
        api.hide(backSuspensionClass5);
        api.hide(frontSuspensionClass6);
        api.hide(backSuspensionClass6);

        /*
        translateObject(frontLeftDirection, 0.5, 0, 0, 30);
        translateObject(frontRightDirection, 0.5, 0, 0, -30);
        translateObject(backLeftDirection, 0.5, 0, 0, 30);
        translateObject(backRightDirection, 0.5, 0, 0, -30);
        */

        HideToConfigureClass();
        currentClass = 3;

        //UI
        document.getElementById("line-chassis-1").style.display = "none";
        document.getElementById("line-chassis-2").style.display = "inline";
        document.getElementById("line-chassis-1.2").style.display = "none";
        document.getElementById("line-chassis-2.2").style.display = "inline";
      }
      function inchWhatClassIs() {
        switch (currentClass) //inches
        {
          case 1:
            document.getElementById("chassis1").style.display = "inline";
            document.getElementById("chassis2").style.display = "inline";
            document.getElementById("chassis3").style.display = "none";
            switch (currentChassis) {
              case 1:
                Chassis1();
                break;
              case 2:
                Chassis2();
                break;
            }
            break;
          case 2:
            document.getElementById("chassis1").style.display = "inline";
            document.getElementById("chassis2").style.display = "inline";
            document.getElementById("chassis3").style.display = "inline";
            switch (currentChassis) {
              case 1:
                Chassis1();
                break;
              case 2:
                Chassis2();
                break;
              case 3:
                Chasiss3();
                break;
            }
            break;
          case 3:
            document.getElementById("chassis1").style.display = "none";
            document.getElementById("chassis2").style.display = "inline";
            document.getElementById("chassis3").style.display = "inline";
            switch (currentChassis) {
              case 2:
                Chassis2();
                break;
              case 3:
                Chasiss3();
                break;
            }

            break;
        }
      }
      function ftsWhatClassIs() {
        switch (currentClass) //fts
        {
          case 1:
            document.getElementById("chassis1.2").style.display = "inline";
            document.getElementById("chassis2.2").style.display = "inline";
            document.getElementById("chassis3.2").style.display = "none";
            switch (currentChassis) {
              case 1:
                Chassis1();
                break;
              case 2:
                Chassis2();
                break;
            }
            break;
          case 2:
            document.getElementById("chassis1.2").style.display = "inline";
            document.getElementById("chassis2.2").style.display = "inline";
            document.getElementById("chassis3.2").style.display = "inline";
            switch (currentChassis) {
              case 1:
                Chassis1();
                break;
              case 2:
                Chassis2();
                break;
              case 3:
                Chasiss3();
                break;
            }
            break;
          case 3:
            document.getElementById("chassis1.2").style.display = "none";
            document.getElementById("chassis2.2").style.display = "inline";
            document.getElementById("chassis3.2").style.display = "inline";
            switch (currentChassis) {
              case 2:
                Chassis2();
                break;
              case 3:
                Chasiss3();
                break;
            }
            break;
        }
      }

      function Chassis1() {
        //manage chassis geometries
        api.show(chassis1);
        currentChassis = 1;

        api.hide(chassis2);
        api.hide(chassis3);

        //after select a new chassis configuration process restarts
        //hide batteries
        hideAllBateries();
        //hide engines
        hideAllEngines();
        translateObject(frontWheels, 0.2, 0, 0, 0);


        //UI
        document.getElementById("line-battery-1").style.display = "inline";
        document.getElementById("line-battery-2").style.display = "inline";
        document.getElementById("line-battery-3").style.display = "none";

      }

      function Chassis2() {
        //manage chassis geometries
        api.show(chassis2);
        currentChassis = 2;

        api.hide(chassis1);
        api.hide(chassis3);

        //hide batteries
        hideAllBateries();
        //hide engines
        hideAllEngines();
        translateObject(frontWheels, 0.2, -101, 0, 0);

        //UI
        document.getElementById("line-battery-1").style.display = "inline";
        document.getElementById("line-battery-2").style.display = "inline";
        document.getElementById("line-battery-3").style.display = "none";

      }

      function Chasiss3() {
        //manage chassis geometries
        api.show(chassis3);
        currentChassis = 3;

        api.hide(chassis1);
        api.hide(chassis2);

        //hide batteries
        hideAllBateries();
        //hide engines
        hideAllEngines();
        translateObject(frontWheels, 0.2, -259, 0, 0);


        //UI
        document.getElementById("line-battery-1").style.display = "inline";
        document.getElementById("line-battery-2").style.display = "inline";
        document.getElementById("line-battery-3").style.display = "inline";

      }

      function C1Battery1() {
        hideAllBateries();
        ShowC1Batteries();
        //hideobjects
        ShowC1Battery1();
      }
      function ShowC1Battery1() {
        hideAllBateries();
        api.show(c1Battery0);
      }
      function C1Battery2() {
        hideAllBateries();
        ShowC1Batteries();
        //hideobjects
        ShowC1Battery2();
      }
      function ShowC1Battery2() {
        hideAllBateries();
        api.show(c1Battery1);
        api.show(c1Battery2);
      }
      function C1Battery4() {
        hideAllBateries();

        ShowC1Batteries();
        //hideobjects
        ShowC1Battery4();
      }
      function ShowC1Battery4() {
        hideAllBateries();
        api.show(c1Battery1);
        api.show(c1Battery2);
        api.show(c1Battery3);
        api.show(c1Battery4);
      }
      function C2Battery1() {
        hideAllBateries();

        ShowC2Batteries();
        //hideobjects
        ShowC2Battery1();
      }
      function ShowC2Battery1() {
        hideAllBateries();
        api.show(c2Battery0);
      }
      function C2Battery2() {
        hideAllBateries();

        ShowC2Batteries();
        //hideobjects
        ShowC2Battery2();
      }
      function ShowC2Battery2() {
        hideAllBateries();
        api.show(c2Battery1);
        api.show(c2Battery2);
      }
      function C2Battery4() {
        hideAllBateries();
        ShowC2Batteries();
        //hideobjects
        ShowC2Battery4();
      }
      function ShowC2Battery4() {
        hideAllBateries();
        api.show(c2Battery1);
        api.show(c2Battery2);
        api.show(c2Battery3);
        api.show(c2Battery4);
      }
      function C3Battery1() {
        hideAllBateries();
        ShowC3Batteries();
        //hideobjects
        ShowC3Battery1();
      }
      function ShowC3Battery1() {
        hideAllBateries();
        api.show(c3Battery0);
      }
      function C3Battery2() {
        hideAllBateries();
        ShowC3Batteries();
        //hideobjects
        ShowC3Battery2();
      }
      function ShowC3Battery2() {
        hideAllBateries();
        api.show(c3Battery1);
        api.show(c3Battery2);
      }
      function C3Battery4() {
        hideAllBateries();
        ShowC3Batteries();
        //hideobjects
        ShowC3Battery4();
      }
      function ShowC3Battery4() {
        hideAllBateries();
        api.show(c3Battery1);
        api.show(c3Battery2);
        api.show(c3Battery5);
        api.show(c3Battery6);
      }
      function C3Battery8() {
        hideAllBateries();
        ShowC3Batteries();
        //hideobjects
        ShowC3Battery8();
      }
      function ShowC3Battery8() {
        hideAllBateries();
        api.show(c3Battery1);
        api.show(c3Battery2);
        api.show(c3Battery3);
        api.show(c3Battery4);
        api.show(c3Battery5);
        api.show(c3Battery6);
        api.show(c3Battery7);
        api.show(c3Battery8);
      }

      function Steer1() {
        //rotation in x of front wheels
        hideAllSteer();
        api.show(frontLSteerArrow);
        api.show(frontRSteerArrow);
        //Mats
        XrayBlueMat(flWheelM);
        XrayBlueMat(frWheelM);
        XrayWhiteMat(blWheelM);
        XrayWhiteMat(brWheelM);
        currentSteer = 1;
      }
      function Steer1Anim() {
        //Rotation 
        speedRotatSteerFL = Math.PI / 8;
        speedRotatSteerFR = Math.PI / 8;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;
        loopRotationSteerFLWheel(0, frontLeftWheel, 1);
        loopRotationSteerFRWheel(0, frontRightWheel, 1);
      }

      function ResetSteerRotation() {
        doneRotateSteerFL = true;
        loopRotationSteerFLWheel(0, frontLeftWheel, 1);
        doneRotateSteerFR = true;
        loopRotationSteerFRWheel(0, frontRightWheel, 1);
        doneRotateSteerBL = true;
        loopRotationSteerBLWheel(0, backLeftWheel, 1);
        doneRotateSteerBR = true;
        loopRotationSteerBRWheel(0, backRightWheel, 1);
      }
      function Steer2() {
        //rotation in x of front wheels
        //rotation in -x of back wheels
        hideAllSteer();
        api.show(frontLSteerArrow);
        api.show(frontRSteerArrow);
        api.show(backLSteerArrow);
        api.show(backRSteerArrow);
        //Mats
        XrayBlueMat(flWheelM);
        XrayBlueMat(frWheelM);
        XrayBlueMat(blWheelM);
        XrayBlueMat(brWheelM);
        currentSteer = 2;
      }
      function Steer2Anim() {
        //Rotation 
        speedRotatSteerFL = Math.PI / 8;
        speedRotatSteerFR = Math.PI / 8;
        speedRotatSteerBL = Math.PI / 8;
        speedRotatSteerBR = Math.PI / 8;
        loopRotationSteerFLWheel(0, frontLeftWheel, 1);
        loopRotationSteerFRWheel(0, frontRightWheel, 1);
        loopRotationSteerBLWheel(0, backLeftWheel, 1);
        loopRotationSteerBRWheel(0, backRightWheel, 1);
      }
      function Drive1() { //fwd
        hideAllDrive();
        api.show(frontLDriveArrow);
        api.show(frontRDriveArrow);
        //Mats
        XrayBlueMat(flWheelM);
        XrayBlueMat(frWheelM);
        XrayWhiteMat(blWheelM);
        XrayWhiteMat(brWheelM);
        currentDrive = 1;
      }
      function Drive1Anim() {
        //Rotation Loop
        speedRotateFL = -Math.PI / 10;
        speedRotateFR = -Math.PI / 10;
        speedRotateBL = 0;
        speedRotateBR = 0;
        loopRotationFLWheel(0, infrontLeftWheel, 0.001);
        loopRotationFRWheel(0, infrontRightWheel, 0.001);
      }
      function Drive2() {//bwd 
        hideAllDrive();
        api.show(backLDriveArrow);
        api.show(backRDriveArrow);
        //Mats
        XrayBlueMat(blWheelM);
        XrayBlueMat(brWheelM);
        XrayWhiteMat(flWheelM);
        XrayWhiteMat(frWheelM);
        currentDrive = 2;
      }
      function Drive2Anim() {
        //Rotation Loop
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = -Math.PI / 10;
        speedRotateBR = -Math.PI / 10;
        loopRotationBLWheel(0, inbackLeftWheel, 0.001);
        loopRotationBRWheel(0, inbackRightWheel, 0.001);
      }
      function Drive3() {//awd
        //rotation in z of back wheels
        hideAllDrive();
        api.show(frontLDriveArrow);
        api.show(frontRDriveArrow);
        api.show(backLDriveArrow);
        api.show(backRDriveArrow);
        //Mats
        XrayBlueMat(flWheelM);
        XrayBlueMat(frWheelM);
        XrayBlueMat(blWheelM);
        XrayBlueMat(brWheelM);
        currentDrive = 3;
      }
      function Drive3Anim() {
        //Rotation Loop
        speedRotateFL = -Math.PI / 10;
        speedRotateFR = -Math.PI / 10;
        speedRotateBL = -Math.PI / 10;
        speedRotateBR = -Math.PI / 10;
        loopRotationFLWheel(0, infrontLeftWheel, 0.001);
        loopRotationFRWheel(0, infrontRightWheel, 0.001);
        loopRotationBLWheel(0, inbackLeftWheel, 0.001);
        loopRotationBRWheel(0, inbackRightWheel, 0.001);
      }

      function FrontEngine1() {
        api.show(Engine1);
        currentEngine = 1;
        XrayRedMat(flWheelM);
      }
      function FrontEngine2() {
        api.show(Engine1);
        api.show(Engine2);
        currentEngine = 2;
      }
      function BackEngine1() {
        api.show(Engine3);
        currentEngine = 1;
        XrayRedMat(blWheelM);
      }
      function BackEngine2() {
        api.show(Engine3);
        api.show(Engine4);
        currentEngine = 2;
      }
      function AllEngine3() {
        api.show(Engine1);
        api.show(Engine2);
        api.show(Engine3);
        currentEngine = 3;
      }
      function AllEngine4() {
        api.show(Engine1);
        api.show(Engine2);
        api.show(Engine3);
        api.show(Engine4);
        currentEngine = 4;
      }
      function WhatEngineIs() {
        switch (currentDrive) {
          case 1: //fwd
            document.getElementById("engine1").style.display = "inline";
            document.getElementById("engine2").style.display = "inline";
            document.getElementById("engine3").style.display = "none";
            document.getElementById("engine4").style.display = "none";

            switch (currentEngine) {
              case 1:
                FrontEngine1();
                XrayRedMat(flWheelM);
                XrayRedMat(frWheelM);
                XrayWhiteMat(blWheelM);
                XrayWhiteMat(brWheelM);


                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 0);

                //UI
                document.getElementById("line-engine-1").style.display = "inline";
                document.getElementById("line-engine-2").style.display = "none";
                document.getElementById("line-engine-3").style.display = "none";



                break;
              case 2:
                FrontEngine2();
                XrayRedMat(flWheelM);
                XrayRedMat(frWheelM);
                XrayWhiteMat(blWheelM);
                XrayWhiteMat(brWheelM);

                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 1);

                //UI
                document.getElementById("line-engine-1").style.display = "inline";
                document.getElementById("line-engine-2").style.display = "none";
                document.getElementById("line-engine-3").style.display = "none";

                break;
            }

            document.getElementById("engine1").addEventListener('click', function () {
              hideAllEngines();
              ResetSteerRotation();
              FrontEngine1();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 0);

              XrayRedMat(flWheelM);
              XrayRedMat(frWheelM);
              XrayWhiteMat(blWheelM);
              XrayWhiteMat(brWheelM);
              //XrayRedMat(frontDirentionM);


              //Anim
              speedRotateFL = -Math.PI / 10;
              speedRotateFR = -Math.PI / 10;
              speedRotateBL = 0;
              speedRotateBR = 0;
              loopRotationFLWheel(0, infrontLeftWheel, 0.001);
              loopRotationFRWheel(0, infrontRightWheel, 0.001);


            });
            document.getElementById("engine2").addEventListener('click', function () {
              hideAllEngines();
              ResetSteerRotation();
              FrontEngine2();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 1);

              XrayRedMat(flWheelM);
              XrayRedMat(frWheelM);
              XrayWhiteMat(blWheelM);
              XrayWhiteMat(brWheelM);

              //Anim
              speedRotateFL = -Math.PI / 10;
              speedRotateFR = -Math.PI / 10;
              speedRotateBL = 0;
              speedRotateBR = 0;
              loopRotationFRWheel(0, infrontRightWheel, 0.001);
              loopRotationFLWheel(0, infrontLeftWheel, 0.001);

            });
            break;
          case 2: // bdw
            document.getElementById("engine1").style.display = "inline";
            document.getElementById("engine2").style.display = "inline";
            document.getElementById("engine3").style.display = "none";
            document.getElementById("engine4").style.display = "none";

            switch (currentEngine) {
              case 1:
                BackEngine1();
                XrayRedMat(blWheelM);
                XrayRedMat(brWheelM);
                XrayWhiteMat(flWheelM);
                XrayWhiteMat(frWheelM);

                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 0);

                //UI
                document.getElementById("line-engine-1").style.display = "inline";
                document.getElementById("line-engine-2").style.display = "none";
                document.getElementById("line-engine-3").style.display = "none";
                break;
              case 2:
                BackEngine2();
                XrayRedMat(blWheelM);
                XrayRedMat(brWheelM);
                XrayWhiteMat(flWheelM);
                XrayWhiteMat(frWheelM);

                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 1);

                //UI
                document.getElementById("line-engine-1").style.display = "inline";
                document.getElementById("line-engine-2").style.display = "none";
                document.getElementById("line-engine-3").style.display = "none";
                break;
            }

            document.getElementById("engine1").addEventListener('click', function () {
              hideAllEngines();
              ResetSteerRotation();
              BackEngine1();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 0);

              XrayRedMat(blWheelM);
              XrayRedMat(brWheelM);
              XrayWhiteMat(flWheelM);
              XrayWhiteMat(frWheelM);

              //Anim
              speedRotateFL = 0;
              speedRotateFR = 0;
              speedRotateBL = -Math.PI / 10;
              speedRotateBR = -Math.PI / 10;
              loopRotationBLWheel(0, inbackLeftWheel, 0.001);
              loopRotationBRWheel(0, inbackRightWheel, 0.001);

            });
            document.getElementById("engine2").addEventListener('click', function () {
              hideAllEngines();
              BackEngine2();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 1);

              XrayRedMat(blWheelM);
              XrayRedMat(brWheelM);
              XrayWhiteMat(flWheelM);
              XrayWhiteMat(frWheelM);

              //Anim
              speedRotateFL = 0;
              speedRotateFR = 0;
              speedRotateBL = -Math.PI / 10;
              speedRotateBR = -Math.PI / 10;
              loopRotationBRWheel(0, inbackRightWheel, 0.001);
              loopRotationBLWheel(0, inbackLeftWheel, 0.001);
            });
            break;
          case 3: //awd
            document.getElementById("engine1").style.display = "none";
            document.getElementById("engine2").style.display = "inline";
            document.getElementById("engine3").style.display = "inline";
            document.getElementById("engine4").style.display = "inline";



            switch (currentEngine) {
              case 2:
                FrontEngine2();
                XrayRedMat(flWheelM);
                XrayRedMat(frWheelM);
                XrayWhiteMat(blWheelM);
                XrayWhiteMat(brWheelM);

                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 1);

                //UI
                document.getElementById("line-engine-1").style.display = "none";
                document.getElementById("line-engine-2").style.display = "inline";
                document.getElementById("line-engine-3").style.display = "inline";

                break;
              case 3:
                AllEngine3();
                XrayRedMat(flWheelM);
                XrayRedMat(frWheelM);
                XrayRedMat(blWheelM);
                XrayRedMat(brWheelM);

                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 2);

                //UI
                document.getElementById("line-engine-1").style.display = "none";
                document.getElementById("line-engine-2").style.display = "inline";
                document.getElementById("line-engine-3").style.display = "inline";
                break;
              case 4:
                AllEngine4();
                XrayRedMat(flWheelM);
                XrayRedMat(frWheelM);
                XrayRedMat(blWheelM);
                XrayRedMat(brWheelM);

                //Enable Final screen
                EnableFinish();
                BttnActiveOne(bttnBgEngine, 3);

                //UI
                document.getElementById("line-engine-1").style.display = "none";
                document.getElementById("line-engine-2").style.display = "inline";
                document.getElementById("line-engine-3").style.display = "inline";


                break;
            }


            document.getElementById("engine2").addEventListener('click', function () {
              hideAllEngines();
              ResetSteerRotation();
              FrontEngine2();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 1);

              XrayRedMat(flWheelM);
              XrayRedMat(frWheelM);
              XrayWhiteMat(blWheelM);
              XrayWhiteMat(brWheelM);

              //Anim
              speedRotateBL = 0;
              speedRotateBR = 0;
              speedRotateFL = -Math.PI / 10;
              loopRotationFLWheel(0, infrontLeftWheel, 0.001);
              speedRotateFR = -Math.PI / 10;
              loopRotationFRWheel(0, infrontRightWheel, 0.001);
            });
            document.getElementById("engine3").addEventListener('click', function () {
              hideAllEngines();
              ResetSteerRotation();
              AllEngine3();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 2);

              XrayRedMat(flWheelM);
              XrayRedMat(frWheelM);
              XrayRedMat(blWheelM);
              XrayRedMat(brWheelM);

              //Anim
              speedRotateBR = -Math.PI / 10;
              loopRotationBRWheel(0, inbackRightWheel, 0.001);
              speedRotateFL = -Math.PI / 10;
              loopRotationFLWheel(0, infrontLeftWheel, 0.001);
              speedRotateFR = -Math.PI / 10;
              loopRotationFRWheel(0, infrontRightWheel, 0.001);
              speedRotateBL = -Math.PI / 10;
              loopRotationBLWheel(0, inbackLeftWheel, 0.001);
            });
            document.getElementById("engine4").addEventListener('click', function () {
              hideAllEngines();
              ResetSteerRotation();
              AllEngine4();
              EnableFinish();
              //Style
              BttnActiveOne(bttnBgEngine, 3);

              XrayRedMat(flWheelM);
              XrayRedMat(frWheelM);
              XrayRedMat(blWheelM);
              XrayRedMat(brWheelM);

              //Anim
              speedRotateFL = -Math.PI / 10;
              loopRotationFLWheel(0, infrontLeftWheel, 0.001);
              speedRotateFR = -Math.PI / 10;
              loopRotationFRWheel(0, infrontRightWheel, 0.001);
              speedRotateBL = -Math.PI / 10;
              loopRotationBLWheel(0, inbackLeftWheel, 0.001);
              speedRotateBR = -Math.PI / 10;
              loopRotationBRWheel(0, inbackRightWheel, 0.001);
            });
            break;
        }
      }
      function HideToConfigureClass() {
        hideAllChassis();
        hideAllBateries();
        hideAllSteer();
        hideAllDrive();
        hideAllEngines();
        currentChassis = 1;
        currentBattery = 1;
        currentSteer = 1;
        currentDrive = 1;
        currentEngine = 1;
      }
      function HideToConfigureChassis() {
        hideAllSteer();
        hideAllDrive();
        hideAllEngines();

        currentBattery = 1;
        currentSteer = 1;
        currentDrive = 1;
        currentEngine = 1;
      }
      function HideToConfigureSteer() {
        hideAllDrive();
        hideAllEngines();

        currentDrive = 1;
        currentEngine = 1;
      }
      function HideToConfigureDrive() {
        hideAllEngines();
        hideAllSteer();
        currentEngine = 1;
      }
      function HideToConfigureEngine() {
        hideAllSteer();
        hideAllDrive();
      }



      function hideAllChassis() {
        api.hide(chassis1);
        api.hide(chassis2);
        api.hide(chassis3);
      }
      function hideAllBateries() {
        api.hide(c1Battery1);
        api.hide(c1Battery2);
        api.hide(c1Battery3);
        api.hide(c1Battery4);
        api.hide(c2Battery1);
        api.hide(c2Battery2);
        api.hide(c2Battery3);
        api.hide(c2Battery4);
        api.hide(c3Battery1);
        api.hide(c3Battery2);
        api.hide(c3Battery3);
        api.hide(c3Battery4);
        api.hide(c3Battery5);
        api.hide(c3Battery6);
        api.hide(c3Battery7);
        api.hide(c3Battery8);
        api.hide(c1Battery0);
        api.hide(c2Battery0);
        api.hide(c3Battery0);
      }
      function ShowC1Batteries() {
        api.show(c1Battery1);
        api.show(c1Battery2);
        api.show(c1Battery3);
        api.show(c1Battery4);
      }

      function ShowC2Batteries() {
        api.show(c2Battery1);
        api.show(c2Battery2);
        api.show(c2Battery3);
        api.show(c2Battery4);
      }
      function ShowC3Batteries() {
        api.show(c3Battery1);
        api.show(c3Battery2);
        api.show(c3Battery3);
        api.show(c3Battery4);
        api.show(c3Battery5);
        api.show(c3Battery6);
        api.show(c3Battery7);
        api.show(c3Battery8);
      }
      function hideAllSteer() {
        api.hide(frontLSteerArrow);
        api.hide(frontRSteerArrow);
        api.hide(backLSteerArrow);
        api.hide(backRSteerArrow);
      }
      function hideAllDrive() {
        api.hide(frontLDriveArrow);
        api.hide(frontRDriveArrow);
        api.hide(backLDriveArrow);
        api.hide(backRDriveArrow);
      }
      function hideAllEngines() {
        api.hide(Engine1);
        api.hide(Engine2);
        api.hide(Engine3);
        api.hide(Engine4);
      }

      function initt3D() {
        hideAllChassis();
        hideAllBateries();
        hideAllSteer();
        hideAllDrive();
        hideAllEngines();

        api.show(frontSuspensionClass5);
        api.show(backSuspensionClass5);
        api.hide(frontSuspensionClass6);
        api.hide(backSuspensionClass6);
        api.hide(frontSuspensionClass7);
        api.hide(backSuspensionClass7);

      }

      function classGui() {
        //Manage Desired Annotation
        gotoCamera(0);


        document.getElementById("class-option-id").style.display = "inline";
        document.getElementById("chassis-option-id").style.display = "none";
        document.getElementById("chassis-option2-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "none";
        document.getElementById("battery-option-id").style.display = "none";
        document.getElementById("steering-option-id").style.display = "none";
        document.getElementById("drive-option-id").style.display = "none";
        document.getElementById("engine-option-id").style.display = "none";
        document.getElementById("option-holder").style.display = "none";

        //mats
        XrayWhiteMatCicle();
        XrayBlueMat(flWheelM);
        XrayBlueMat(frWheelM);
        XrayBlueMat(blWheelM);
        XrayBlueMat(brWheelM);
        XrayBlueMat(frontDirentionM);
        XrayBlueMat(backDirectionM);

        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;

        EnableClassConfig();

      }
      function chassisGUI() {
        //Manage Desired Annotation
        CameraChasis(1, 2, 3);

        document.getElementById("class-option-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "inline";
        document.getElementById("battery-option-id").style.display = "none";
        document.getElementById("steering-option-id").style.display = "none";
        document.getElementById("drive-option-id").style.display = "none";
        document.getElementById("engine-option-id").style.display = "none";
        document.getElementById("option-holder").style.display = "none";

        //materials
        XrayWhiteMatCicle();
        XrayBlueMat(ChasissesM);

        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;

        EnableChassisConfig();
      }
      function batteryGui() {
        //Manage Desired Annotation
        CameraChasis(4, 5, 6);

        document.getElementById("class-option-id").style.display = "none";
        document.getElementById("chassis-option-id").style.display = "none";
        document.getElementById("chassis-option2-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "none";
        document.getElementById("battery-option-id").style.display = "inline";
        document.getElementById("steering-option-id").style.display = "none";
        document.getElementById("drive-option-id").style.display = "none";
        document.getElementById("engine-option-id").style.display = "none";
        document.getElementById("option-holder").style.display = "none";

        //materials
        XrayWhiteMatCicle();

        XrayBlueMatBatteriesOut();
        XrayBlueMatBatteriesIn();
        
        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;

        EnableBatteryConfig();
      }
      function steerGUI() {
        //Manage Desired Annotation
        CameraChasis(7, 8, 9);

        document.getElementById("class-option-id").style.display = "none";
        document.getElementById("chassis-option-id").style.display = "none";
        document.getElementById("chassis-option2-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "none";
        document.getElementById("battery-option-id").style.display = "none";
        document.getElementById("steering-option-id").style.display = "inline";
        document.getElementById("drive-option-id").style.display = "none";
        document.getElementById("engine-option-id").style.display = "none";
        document.getElementById("option-holder").style.display = "none";

        //materials
        XrayWhiteMatCicle();
        XrayRedMat(steerArrowM, 1);

        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;


        EnableSteerConfig();
      }
      function driveGUI() {
        //Manage Desired Annotation
        CameraChasis(7, 8, 9);

        document.getElementById("class-option-id").style.display = "none";
        document.getElementById("chassis-option-id").style.display = "none";
        document.getElementById("chassis-option2-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "none";
        document.getElementById("battery-option-id").style.display = "none";
        document.getElementById("steering-option-id").style.display = "none";
        document.getElementById("drive-option-id").style.display = "inline";
        document.getElementById("engine-option-id").style.display = "none";
        document.getElementById("option-holder").style.display = "none";

        XrayWhiteMatCicle();
        XrayRedMat(driveArrowM, 1);

        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;

        EnableDriveConfig();
      }
      function engineGUI() {
        //Manage Desired Annotation
        CameraChasis(10, 11, 12);

        document.getElementById("class-option-id").style.display = "none";
        document.getElementById("chassis-option-id").style.display = "none";
        document.getElementById("chassis-option2-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "none";
        document.getElementById("battery-option-id").style.display = "none";
        document.getElementById("steering-option-id").style.display = "none";
        document.getElementById("drive-option-id").style.display = "none";
        document.getElementById("engine-option-id").style.display = "inline";
        document.getElementById("option-holder").style.display = "none";

        //materials
        XrayWhiteMatCicle();
        XrayBlueMat(engineM);

        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;


        EnableEngineConfig();
      }
      function finishGUI() {
        //Manage Desired Annotation
        CameraChasis(13, 14, 15);

        //Stop Animations
        speedRotateFL = 0;
        speedRotateFR = 0;
        speedRotateBL = 0;
        speedRotateBR = 0;

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;

        //OPTION BUTTONS
        document.getElementById("class-option-id").style.display = "none";
        document.getElementById("chassis-option-id").style.display = "none";
        document.getElementById("chassis-option2-id").style.display = "none";
        document.getElementById("switch-units-id").style.display = "none";
        document.getElementById("flipswitch-id").style.display = "none";
        document.getElementById("battery-option-id").style.display = "none";
        document.getElementById("steering-option-id").style.display = "none";
        document.getElementById("drive-option-id").style.display = "none";
        document.getElementById("engine-option-id").style.display = "none";
        document.getElementById("option-holder").style.display = "inline";

        //false buttons
        document.getElementById("vehicle-class").style.display = "none";
        document.getElementById("chassis").style.display = "none";
        document.getElementById("batteries").style.display = "none";
        document.getElementById("steering").style.display = "none";
        document.getElementById("drive").style.display = "none";
        document.getElementById("engines").style.display = "none";

        document.getElementById("chassis-disabled").style.display = "none";
        document.getElementById("batteries-disabled").style.display = "none";
        document.getElementById("steering-disabled").style.display = "none";
        document.getElementById("drive-disabled").style.display = "none";
        document.getElementById("engines-disabled").style.display = "none";

        document.getElementById("line-class").style.display = "none";
        document.getElementById("line-chassis").style.display = "none";
        document.getElementById("line-battery").style.display = "none";
        document.getElementById("line-steer").style.display = "none";
        document.getElementById("line-drive").style.display = "none";
        document.getElementById("line-engine").style.display = "none";


        //finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("line-finish").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "inline";
        linesColorHeader[7].style.backgroundColor = grayDepthColor;

        document.getElementById("line-back").style.display = "inline";
        document.getElementById("send").style.display = "inline";
        document.getElementById("line-send").style.display = "inline";

      }

      function EnableLinesOptions() {
        document.getElementById("line-class").style.display = "inline";
        document.getElementById("line-chassis").style.display = "inline";
        document.getElementById("line-battery").style.display = "inline";
        document.getElementById("line-steer").style.display = "inline";
        document.getElementById("line-drive").style.display = "inline";
        document.getElementById("line-engine").style.display = "inline";
        document.getElementById("line-finish").style.display = "inline";

      }

      function EnableClassConfig() {
        //false buttons
        document.getElementById("vehicle-class").style.display = "inline";
        document.getElementById("chassis").style.display = "none";
        document.getElementById("batteries").style.display = "none";
        document.getElementById("steering").style.display = "none";
        document.getElementById("drive").style.display = "none";
        document.getElementById("engines").style.display = "none";

        document.getElementById("chassis-disabled").style.display = "inline";
        document.getElementById("batteries-disabled").style.display = "inline";
        document.getElementById("steering-disabled").style.display = "inline";
        document.getElementById("drive-disabled").style.display = "inline";
        document.getElementById("engines-disabled").style.display = "inline";

        ///finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("finish-disabled").style.display = "inline";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }
      function EnableChassisConfig() {
        //false buttons
        document.getElementById("vehicle-class").style.display = "inline";
        document.getElementById("chassis").style.display = "inline";
        document.getElementById("batteries").style.display = "none";
        document.getElementById("steering").style.display = "none";
        document.getElementById("drive").style.display = "none";
        document.getElementById("engines").style.display = "none";

        document.getElementById("chassis-disabled").style.display = "none";
        document.getElementById("batteries-disabled").style.display = "inline";
        document.getElementById("steering-disabled").style.display = "inline";
        document.getElementById("drive-disabled").style.display = "inline";
        document.getElementById("engines-disabled").style.display = "inline";

        //finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("finish-disabled").style.display = "inline";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }
      function EnableBatteryConfig() {
        //false buttons
        document.getElementById("vehicle-class").style.display = "inline";
        document.getElementById("chassis").style.display = "inline";
        document.getElementById("batteries").style.display = "inline";
        document.getElementById("steering").style.display = "none";
        document.getElementById("drive").style.display = "none";
        document.getElementById("engines").style.display = "none";

        document.getElementById("chassis-disabled").style.display = "none";
        document.getElementById("batteries-disabled").style.display = "none";
        document.getElementById("steering-disabled").style.display = "inline";
        document.getElementById("drive-disabled").style.display = "inline";
        document.getElementById("engines-disabled").style.display = "inline";

        //finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("finish-disabled").style.display = "inline";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }
      function EnableSteerConfig() {
        //false buttons
        document.getElementById("vehicle-class").style.display = "inline";
        document.getElementById("chassis").style.display = "inline";
        document.getElementById("batteries").style.display = "inline";
        document.getElementById("steering").style.display = "inline";
        document.getElementById("drive").style.display = "none";
        document.getElementById("engines").style.display = "none";

        document.getElementById("chassis-disabled").style.display = "none";
        document.getElementById("batteries-disabled").style.display = "none";
        document.getElementById("steering-disabled").style.display = "none";
        document.getElementById("drive-disabled").style.display = "inline";
        document.getElementById("engines-disabled").style.display = "inline";

        //finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("finish-disabled").style.display = "inline";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }
      function EnableDriveConfig() {
        //false buttons
        document.getElementById("vehicle-class").style.display = "inline";
        document.getElementById("chassis").style.display = "inline";
        document.getElementById("batteries").style.display = "inline";
        document.getElementById("steering").style.display = "inline";
        document.getElementById("drive").style.display = "inline";
        document.getElementById("engines").style.display = "none";

        document.getElementById("chassis-disabled").style.display = "none";
        document.getElementById("batteries-disabled").style.display = "none";
        document.getElementById("steering-disabled").style.display = "none";
        document.getElementById("drive-disabled").style.display = "none";
        document.getElementById("engines-disabled").style.display = "inline";

        //finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("finish-disabled").style.display = "inline";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }
      function EnableEngineConfig() {
        //false buttons
        document.getElementById("vehicle-class").style.display = "inline";
        document.getElementById("chassis").style.display = "inline";
        document.getElementById("batteries").style.display = "inline";
        document.getElementById("steering").style.display = "inline";
        document.getElementById("drive").style.display = "inline";
        document.getElementById("engines").style.display = "inline";

        document.getElementById("chassis-disabled").style.display = "none";
        document.getElementById("batteries-disabled").style.display = "none";
        document.getElementById("steering-disabled").style.display = "none";
        document.getElementById("drive-disabled").style.display = "none";
        document.getElementById("engines-disabled").style.display = "none";

        //finish buttons
        document.getElementById("finish").style.display = "none";
        document.getElementById("finish-disabled").style.display = "inline";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }
      function EnableFinish() {
        //finish buttons
        document.getElementById("finish").style.display = "inline";
        document.getElementById("finish-disabled").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("back-disabled").style.display = "none";
        document.getElementById("send").style.display = "none";
        document.getElementById("line-back").style.display = "none";
        document.getElementById("line-send").style.display = "none";
      }

      function GetConfiguration() {
        switch (currentClass) {
          case 1:
            finalClass = "Class 5 (GVWR - 16000lbs)";
            break;
          case 2:
            finalClass = "Class 6 (GVWR - 26000lbs)";
            break;
          case 3:
            finalClass = "Class 7 (GVWR - 33000lbs)";
            break;
        }
        switch (currentChassis) {
          case 1:
            finalChassis = "Wheelbase 150 inch";
            break;
          case 2:
            finalChassis = "Wheelbase 190 inch";
            break;
          case 3:
            finalChassis = "Wheelbase 252 inch";
            break;
        }
        switch (currentBattery) {
          case 1:
            finalBattery = "70 KWr Batteries ";
            break;
          case 2:
            finalBattery = "140 KWr Batteries ";
            break;
          case 4:
            finalBattery = "280 KWr Batteries ";
            break;
          case 5:
            finalBattery = "560 KWr Batteries ";
            break;
        }
        switch (currentSteer) {
          case 1:
            finalSteer = "Front Wheel Steer (FWS)";
            break;
          case 2:
            finalSteer = "All Wheel Steer (AWS)";
            break;
        }
        switch (currentDrive) {
          case 1:
            finalDrive = "Front Wheel Drive (FWD)";
            break;
          case 2:
            finalDrive = "Rear Wheel Drive (RWD)";
            break;
          case 3:
            finalDrive = "All Wheel Drive (AWD)";
            break;
        }
        switch (currentEngine) {
          case 1:
            finalEngine = "Single (245hp - 2964lb-ft)";
            break;
          case 2:
            finalEngine = "Dual (490hp - 5927lb-ft)";
            break;
          case 3:
            finalEngine = "Triple (735hp - 8892lb-ft)";
            break;
          case 4:
            finalEngine = "Quad (980hp - 11854lb-ft)";
            break;
        }

        console.log("Class: " + finalClass);
        console.log("Wheelbase: " + finalChassis);
        console.log("Batteries: " + finalBattery);
        console.log("Steer: " + finalSteer);
        console.log("Drive: " + finalDrive);
        console.log("Engine: " + finalEngine);
      }
      function ResetAllTextures() {
        SetTextureWheels();
        SetTextureChassis();
        SetTextureBatteriesIn();
        OpaqueMat(frontDirentionM, TextureGrayColor);
        OpaqueMat(metalBlackM, TextureGrayColor);
        OpaqueMat(alluminiumM, TextureGrayColor);
        OpaqueMat(backDirectionM, TextureGrayColor);
        OpaqueMat(engineM, TextureGrayColor);
        OpaqueMat(frontSuspensionsM, TextureGrayColor);
        OpaqueMat(backSuspensionsM, TextureGrayColor);
        XrayGrayMatBatteriesOut(.8); //opacicy valu of batteries out
        DeactivateOpacity();

        XrayRedMat(steerArrowM, 1);
        XrayBlueMat(driveArrowM, 1);

      }
      function ConfigAnim() {

        const enableBackBttnIDtimeout = setTimeout(EnableBackButton, 10000);
        const finalAnimationIDtimeout = setTimeout(FinalAnimation, 0);
        const steerAnimIDtimeout = setTimeout(WhatSteerAnimPlay, 10000);
        const driveAnimIDtimeout = setTimeout(WhatDriveAnimPlay, 15000);
        const steerdrivingAnimIDtimeout = setTimeout(SteerDrivingAnimation, 20000);

        document.getElementById("back").addEventListener('click', function () {

          clearTimeout(enableBackBttnIDtimeout);
          clearTimeout(finalAnimationIDtimeout);
          clearTimeout(steerAnimIDtimeout);
          clearTimeout(driveAnimIDtimeout);
          clearTimeout(steerdrivingAnimIDtimeout);
          // console.log('Final anim stop');
          //ResetAllObjects();
        });

      }
      function EnableBackButton() {
        document.getElementById("back").style.display = "inline";
        document.getElementById("back-disabled").style.display = "none";
        linesColorHeader[7].style.backgroundColor = whiteColor;
      }
      function FinalAnimation() {
        //What is the current class
        switch (currentClass) {
          case 1:
            //start position
            translateObject(frontLeftWheel, 0, -379.33, 1000, 102.538);
            translateObject(frontRightWheel, 0, -379.33, 1000, -102.538);
            translateObject(backLeftWheel, 0, -0.022, 1000, 102.538);
            translateObject(backRightWheel, 0, -0.022, 1000, -102.538);
            //final position
            translateObject(frontLeftWheel, 3, -379.33, 26.073, 102.538);
            translateObject(frontRightWheel, 3, -379.33, 26.073, -102.538);
            translateObject(backLeftWheel, 6, -0.022, 26.073, 102.538);
            translateObject(backRightWheel, 6, -0.022, 26.073, -102.538);

            break;
          case 2:
            //start position
            translateObject(frontLeftWheel, 0, -379.33, 1000, 117.538);
            translateObject(frontRightWheel, 0, -379.33, 1000, -117.538);
            translateObject(backLeftWheel, 0, -0.022, 1000, 117.538);
            translateObject(backRightWheel, 0, -0.022, 1000, -117.538);
            //final position
            translateObject(frontLeftWheel, 3, -379.33, 26.073, 117.538);
            translateObject(frontRightWheel, 3, -379.33, 26.073, -117.538);
            translateObject(backLeftWheel, 6, -0.022, 26.073, 117.538);
            translateObject(backRightWheel, 6, -0.022, 26.073, -117.538);

            break;
          case 3:
            //start position
            translateObject(frontLeftWheel, 0.5, -379.33, 1000, 132.538);
            translateObject(frontRightWheel, 0.5, -379.33, 1000, -132.538);
            translateObject(backLeftWheel, 0.5, -0.022, 1000, 132.538);
            translateObject(backRightWheel, 0.5, -0.022, 1000, -132.538);
            //final position
            translateObject(frontLeftWheel, 3, -379.33, 26.073, 132.538);
            translateObject(frontRightWheel, 3, -379.33, 26.073, -132.538);
            translateObject(backLeftWheel, 6, -0.022, 26.073, 132.538);
            translateObject(backRightWheel, 6, -0.022, 26.073, -132.538);

            break;

        }
        //What is teh current Chassis
        switch (currentChassis) {
          case 1:
            finalChassisObj = chassis1;
            finalBackChassisObj = chassis1back;
            finalMiddleChassisObj = chassis1middle;
            finalFrontChassisObj = chassis1front;
            finalBatteryObj = c1Batteries;
            switch (currentBattery) {
              case 1:
                ShowC1Battery1();
                break;
              case 2:
                ShowC1Battery2();
                break;
              case 4:
                ShowC1Battery4();
                break;
            }
            break;
          case 2:
            finalChassisObj = chassis2;
            finalBackChassisObj = chassis2back;
            finalMiddleChassisObj = chassis2middle;
            finalFrontChassisObj = chassis2front;
            finalBatteryObj = c2Batteries;
            switch (currentBattery) {
              case 1:
                ShowC2Battery1();
                break;
              case 2:
                ShowC2Battery2();
                break;
              case 4:
                ShowC2Battery4();
                break;
            }
            break;
          case 3:
            finalChassisObj = chassis3;
            finalBackChassisObj = chassis3back;
            finalMiddleChassisObj = chassis3middle;
            finalFrontChassisObj = chassis3front;
            finalBatteryObj = c3Batteries;
            switch (currentBattery) {
              case 1:
                ShowC3Battery1();
                break;
              case 2:
                ShowC3Battery2();
                break;
              case 4:
                ShowC3Battery4();
                break;
              case 8:
                ShowC3Battery8();
                break;
            }
            break;
        }
        
        //back chassis
        translateObject(finalBackChassisObj, 0, 0, 1000, 0);
        translateObject(finalBackChassisObj, 6, 0, 0, 0);
        //middle chassis
        translateObject(finalMiddleChassisObj, 0, 0, 1000, 0);
        translateObject(finalMiddleChassisObj, 9, 0, 0, 0);
        //front chassis
        translateObject(finalFrontChassisObj, 0, 0, 1000, 0);
        translateObject(finalFrontChassisObj, 3, 0, 0, 0);
        //batteries
        translateObject(finalBatteryObj, 0, 0, 1000, 0);
        translateObject(finalBatteryObj, 10, 0, 0, 0);
        //engines
        translateObject(frontEngines, 0, 0, 1000, 0);
        translateObject(bakcEngines, 0, 0, 1000, 0);
        translateObject(frontEngines, 3, 0, 0, 0);
        translateObject(bakcEngines, 6, 0, 0, 0);

        translateObject(frontLeftDirection, 0, 0, 1000, 0);
        translateObject(frontRightDirection, 0, 0, 1000, 0);
        translateObject(backLeftDirection, 0, 0, 1000, 0);
        translateObject(backRightDirection, 0, 0, 1000, 0);
        translateObject(frontLeftDirection, 3, 0, 0, 0);
        translateObject(frontRightDirection, 3, 0, 0, 0);
        translateObject(backLeftDirection, 6, 0, 0, 0);
        translateObject(backRightDirection, 6, 0, 0, 0);

        translateObject(frontSuspensionClass5, 0, 0, 1000, 0);
        translateObject(frontSuspensionClass6, 0, 0, 1000, 0);
        translateObject(frontSuspensionClass7, 0, 0, 1000, 0);
        translateObject(frontSuspensionClass5, 3, 0, 0, 0);
        translateObject(frontSuspensionClass6, 3, 0, 0, 0);
        translateObject(frontSuspensionClass7, 3, 0, 0, 0);

        translateObject(backSuspensionClass5, 0, 0, 1000, 0);
        translateObject(backSuspensionClass6, 0, 0, 1000, 0);
        translateObject(backSuspensionClass7, 0, 0, 1000, 0);
        translateObject(backSuspensionClass5, 6, 0, 0, 0);
        translateObject(backSuspensionClass6, 6, 0, 0, 0);
        translateObject(backSuspensionClass7, 6, 0, 0, 0);

        translateObject(frontLSteerArrow, 0, 0, 1000, 0);
        translateObject(frontRSteerArrow, 0, 0, 1000, 0);
        translateObject(frontLDriveArrow, 0, 0, 1000, 0);
        translateObject(frontRDriveArrow, 0, 0, 1000, 0);

        translateObject(backLSteerArrow, 0, 0, 1000, 0);
        translateObject(backRSteerArrow, 0, 0, 1000, 0);
        translateObject(backLDriveArrow, 0, 0, 1000, 0);
        translateObject(backRDriveArrow, 0, 0, 1000, 0);

        translateObject(frontLSteerArrow, 10, 0, 0, 0);
        translateObject(frontRSteerArrow, 10, 0, 0, 0);
        translateObject(frontLDriveArrow, 10, 0, 0, 0);
        translateObject(frontRDriveArrow, 10, 0, 0, 0);

        translateObject(backLSteerArrow, 10, 0, 0, 0);
        translateObject(backRSteerArrow, 10, 0, 0, 0);
        translateObject(backLDriveArrow, 10, 0, 0, 0);
        translateObject(backRDriveArrow, 10, 0, 0, 0);

      }
      function WhatSteerAnimPlay() {
        switch (currentSteer) {
          case 1:
            ResetSteerRotation();
            Steer1Anim();
            //console.log('steer 1 anim start');

            break;
          case 2:
            ResetSteerRotation();
            Steer2Anim();
            //console.log('steer 2 anim start');

            break;
        }
      }
      function ResetAllObjects() {
        switch (currentClass) {
          case 1:
            //default position
            translateObject(frontLeftWheel, 0, -379.33, 26.073, 102.538);
            translateObject(frontRightWheel, 0, -379.33, 26.073, -102.538);
            translateObject(backLeftWheel, 0, -0.022, 26.073, 102.538);
            translateObject(backRightWheel, 0, -0.022, 26.073, -102.538);

            break;
          case 2:
            //default position
            translateObject(frontLeftWheel, 0, -379.33, 26.073, 117.538);
            translateObject(frontRightWheel, 0, -379.33, 26.073, -117.538);
            translateObject(backLeftWheel, 0, -0.022, 26.073, 117.538);
            translateObject(backRightWheel, 0, -0.022, 26.073, -117.538);

            break;
          case 3:
            //default position
            translateObject(frontLeftWheel, 0, -379.33, 26.073, 132.538);
            translateObject(frontRightWheel, 0, -379.33, 26.073, -132.538);
            translateObject(backLeftWheel, 0, -0.022, 26.073, 132.538);
            translateObject(backRightWheel, 0, -0.022, 26.073, -132.538);

            break;

        }
        translateObject(finalBackChassisObj, 0, 0, 0, 0);

        translateObject(finalFrontChassisObj, 0, 0, 0, 0);

        translateObject(finalBatteryObj, 0, 0, 0, 0);

        translateObject(frontEngines, 0, 0, 0, 0);
        translateObject(bakcEngines, 0, 0, 0, 0);

        translateObject(frontLeftDirection, 0, 0, 0, 0);
        translateObject(frontRightDirection, 0, 0, 0, 0);
        translateObject(backLeftDirection, 0, 0, 0, 0);
        translateObject(backRightDirection, 0, 0, 0, 0);

        translateObject(frontLSteerArrow, 0, 0, 0, 0);
        translateObject(frontRSteerArrow, 0, 0, 0, 0);
        translateObject(frontLDriveArrow, 0, 0, 0, 0);
        translateObject(frontRDriveArrow, 0, 0, 0, 0);

        translateObject(backLSteerArrow, 0, 0, 0, 0);
        translateObject(backRSteerArrow, 0, 0, 0, 0);
        translateObject(backLDriveArrow, 0, 0, 0, 0);
        translateObject(backRDriveArrow, 0, 0, 0, 0);

        //console.log('All objects are in the default pos');

      }

      function WhatDriveAnimPlay() {

        speedRotatSteerFL = 0;
        speedRotatSteerFR = 0;
        speedRotatSteerBL = 0;
        speedRotatSteerBR = 0;

        switch (currentDrive) {
          case 1:
            ResetSteerRotation();
            Drive1Anim();
            //console.log('drive 1 anim start');

            break;
          case 2:
            ResetSteerRotation();
            Drive2Anim();
            //console.log('drive 2 anim start');

            break;

          case 3:
            ResetSteerRotation();
            Drive3Anim();
            //console.log('drive 3 anim start');

            break;
        }
      }
      function SteerDrivingAnimation() {
        switch (currentSteer) {
          case 1:
            ResetSteerRotation();
            Steer1Anim();
            break;
          case 2:
            ResetSteerRotation();
            Steer2Anim();
            break;
        }


        switch (currentDrive) {
          case 1:
            ResetSteerRotation();
            Drive1Anim();
            break;
          case 2:
            ResetSteerRotation();
            Drive2Anim();
            break;

          case 3:
            ResetSteerRotation();
            Drive3Anim();
            break;
        }
      }

      function translateObject(idObject, time, xworld, yworld, zworld) {
        api.translate(idObject, [xworld, yworld, zworld], {
          duration: time,
          easing: 'easeOutQuad'
        });
      }
      function rotateObject(idObjectToRotate, time, radAngle, xAxis, yAxis, zAxis) {
        api.rotate(idObjectToRotate, [radAngle, xAxis, yAxis, zAxis], {
          duration: time,
          easing: 'easeLinear'
        }, function (err, rotateTo) {
          if (!err) {
            window.console.log('Object has been rotated according to', rotateTo);
          }
        });
      }

      function CameraChasis(cameraC1, cameraC2, cameraC3) {
        switch (currentChassis) {
          case 1:
            gotoCamera(cameraC1);
            break;
          case 2:
            gotoCamera(cameraC2);
            break;
          case 3:
            gotoCamera(cameraC3);
            break;
        }
      }
      function gotoCamera(numCam) {
        api.gotoAnnotation(numCam, { preventCameraAnimation: true, preventCameraMove: false }, function (err, index) {
        });
      }

      //rotation

      var pi2 = 2.0 * Math.PI; //full circle rot

      var speed = 0.01;


      function loopRotationFLWheel(addValue, objectToRotate, time) {


        if (!doneRotateFL) return;
        doneRotateFL = false;

        // make sure values doesn't go beyond full circle
        if (addValue >= pi2) {
          addValue = addValue - pi2;
        }

        api.rotate(objectToRotate, [addValue, 0, 0, 1], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateFL = true;
          loopRotationFLWheel(addValue + speedRotateFL, objectToRotate, time);
        });

      };


      function loopRotationFRWheel(addValue, objectToRotate, time) {


        if (!doneRotateFR) return;
        doneRotateFR = false;

        // make sure values doesn't go beyond full circle
        if (addValue >= pi2) {
          addValue = addValue - pi2;
        }

        api.rotate(objectToRotate, [addValue, 0, 0, 1], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateFR = true;
          loopRotationFRWheel(addValue + speedRotateFR, objectToRotate, time);
        });

      };


      function loopRotationBLWheel(addValue, objectToRotate, time) {

        if (!doneRotateBL) return;
        doneRotateBL = false;

        // make sure values doesn't go beyond full circle
        if (addValue >= pi2) {
          addValue = addValue - pi2;
        }

        api.rotate(objectToRotate, [addValue, 0, 0, 1], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateBL = true;
          loopRotationBLWheel(addValue + speedRotateBL, objectToRotate, time);
        });

      };


      function loopRotationBRWheel(addValue, objectToRotate, time) {


        if (!doneRotateBR) return;
        doneRotateBR = false;

        // make sure values doesn't go beyond full circle
        if (addValue >= pi2) {
          addValue = addValue - pi2;
        }

        api.rotate(objectToRotate, [addValue, 0, 0, 1], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateBR = true;
          loopRotationBRWheel(addValue + speedRotateBR, objectToRotate, time);
        });

      };

      function loopRotationSteerFLWheel(addValue, objectToRotate, time) {

        if (!doneRotateSteerFL) return;
        doneRotateSteerFL = false;

        api.rotate(objectToRotate, [addValue, 0, -1, 0], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateSteerFL = true;

          if (addValue < Math.PI / 8) {
            loopRotationSteerFLWheel(addValue + speedRotatSteerFL, objectToRotate, 1);
            //window.console.log('left', addValue);
          }
          else {
            loopRotationSteerFLWheel(-addValue, objectToRotate, 2);
            //window.console.log('right', addValue);
          }

        });

      };

      function loopRotationSteerFRWheel(addValue, objectToRotate, time) {

        if (!doneRotateSteerFR) return;
        doneRotateSteerFR = false;

        api.rotate(objectToRotate, [addValue, 0, -1, 0], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateSteerFR = true;

          if (addValue < Math.PI / 8) {
            loopRotationSteerFRWheel(addValue + speedRotatSteerFR, objectToRotate, 1);
            //window.console.log('left', addValue);
          }
          else {
            loopRotationSteerFRWheel(-addValue, objectToRotate, 2);
            //window.console.log('right', addValue);
          }

        });


      };

      function loopRotationSteerBLWheel(addValue, objectToRotate, time) {

        if (!doneRotateSteerBL) return;
        doneRotateSteerBL = false;

        api.rotate(objectToRotate, [addValue, 0, 1, 0], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateSteerBL = true;

          if (addValue < Math.PI / 8) {
            loopRotationSteerBLWheel(addValue + speedRotatSteerBL, objectToRotate, 1);
            //window.console.log('left', addValue);
          }
          else {
            loopRotationSteerBLWheel(-addValue, objectToRotate, 2);
            //window.console.log('right', addValue);
          }

        });

      };

      function loopRotationSteerBRWheel(addValue, objectToRotate, time) {

        if (!doneRotateSteerBR) return;
        doneRotateSteerBR = false;

        api.rotate(objectToRotate, [addValue, 0, 1, 0], {
          duration: time,
          easing: 'easeLinear'
        }, function () {
          doneRotateSteerBR = true;

          if (addValue < Math.PI / 8) {
            loopRotationSteerBRWheel(addValue + speedRotatSteerBR, objectToRotate, 1);
            //window.console.log('left', addValue);
          }
          else {
            loopRotationSteerBRWheel(-addValue, objectToRotate, 2);
            //window.console.log('right', addValue);
          }
        });

      };

      api.addEventListener('viewerready', function () {

        api.getSceneGraph(function (err, result) {
          if (err) {
            console.log('Error getting nodes');
            return;
          }
          console.log(result);

        });
        api.getCameraLookAt(function (err, camera) {
          api.createAnnotation([-0.16144215216577174, -3.867954799445659, 0.8214845269137563], [0.1229991557663267, -3.5779795878788656, -0.5151466147866559], camera.position, camera.target, 'mytitle1', 'mytext1 (https://image)[image]', function (index) {
            console.log('added hotspot: ' + index);
          });
          api.createAnnotation([-0.16144215216577174, -3.867954799445659, 0.8214845269137563], [0.1229991557663267, -3.5779795878788656, -0.5151466147866559], camera.position, camera.target, 'mytitle2', 'mytext2 (https://image)[image]', function (indexCreated) {
            console.log('added hotspot: ' + indexCreated);
            api.removeAnnotation(indexCreated);
          });
          api.updateAnnotation(1, {
            title: 'updatedTitle',
            content: 'updatedContent'
          }, function (err, annotation) {
            console.log(annotation);
          });
          api.getAnnotation(1, function (err, annotation) {
            console.log(annotation);
          });
        });
      });
    });
  });
};

client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1,
  ui_ar: 0,
  ui_watermark: 0,
  ui_infos: 0,
  ui_stop: 0,
  ui_fullscreen: 0,
  ui_inspector: 0,
  ui_settings: 0,
  ui_annotations: 0,
  ui_help: 0,
  ui_vr: 0


});

// GUI Code
function initGui() {
  //Start condition of buttons
  document.getElementById("class-option-id").style.display = "inline";
  document.getElementById("chassis-option-id").style.display = "none";
  document.getElementById("chassis-option2-id").style.display = "none";
  document.getElementById("switch-units-id").style.display = "none";
  document.getElementById("flipswitch-id").style.display = "none";
  document.getElementById("battery-option-id").style.display = "none";
  document.getElementById("steering-option-id").style.display = "none";
  document.getElementById("drive-option-id").style.display = "none";
  document.getElementById("engine-option-id").style.display = "none";
  document.getElementById("option-holder").style.display = "none";

  document.getElementById("vehicle-class").style.display = "inline";
  document.getElementById("chassis").style.display = "none";
  document.getElementById("batteries").style.display = "none";
  document.getElementById("steering").style.display = "none";
  document.getElementById("drive").style.display = "none";
  document.getElementById("engines").style.display = "none";


  document.getElementById("chassis-disabled").style.display = "inline";
  document.getElementById("batteries-disabled").style.display = "inline";
  document.getElementById("steering-disabled").style.display = "inline";
  document.getElementById("drive-disabled").style.display = "inline";
  document.getElementById("engines-disabled").style.display = "inline";
  document.getElementById("finish-disabled").style.display = "inline";

  //finish buttons
  document.getElementById("finish").style.display = "none";
  document.getElementById("back").style.display = "none";
  document.getElementById("back-disabled").style.display = "none";
  document.getElementById("send").style.display = "none";
  document.getElementById("line-back").style.display = "none";
  document.getElementById("line-send").style.display = "none";

}
initGui();




