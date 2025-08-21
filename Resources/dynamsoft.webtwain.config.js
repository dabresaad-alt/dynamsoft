//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2018, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 13.3
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = true;

///
Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:270, Height:350}];

/// If you need to use multiple keys on the same server, you can combine keys and write like this 
/// Dynamsoft.WebTwainEnv.ProductKey = 'key1;key2;key3';
Dynamsoft.WebTwainEnv.ProductKey = 'f0068NQAAAEIkufBgqKZUQvIF/a+opOO5dRUI5I5FQKvO0X+OIN/6Exo7TeW6dI8ulGTkj+l/UA5QWUmOD9CdtsEaJfAL3xA=;4C8875829647900175F307CF3F468691D5BCF9352124A14285AFF4155EA4130C29DE8EE41A7729C285A565D3A4D8740A003DBC5AABA8F5A76E56EC2B305C55A5FEB1728F1C1EF94C8C379144EA50A5D23E88F41DE957E7DF7AC56B53569E35ABCB16E18897048AA5D5392E585198CF163E';

///
Dynamsoft.WebTwainEnv.Trial = false;

///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;

///
Dynamsoft.WebTwainEnv.IfUpdateService = false;

///
// Dynamsoft.WebTwainEnv.ResourcesPath = 'Resources';

/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.
// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });


