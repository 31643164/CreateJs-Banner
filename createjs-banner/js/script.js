// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var skyLogo;
	var background;
	var reward;
	var text;
	var samsung;
	var voucher;
	var lineRent;
	var bbSale;
	var joinSky;
	var callAction;
	var deezer;
	var text2;
	var offer;
	var sheene;
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}

	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "reward", src:"images/reward.png"},
		{id: "skyLogo", src:"images/skyLogo.png"},
		{id: "samsung", src:"images/samsung.png"},
		{id: "voucher", src:"images/voucher.png"},
		{id: "joinSky", src:"images/frame2/joinSky.png"},
		{id: "bbSale", src:"images/frame2/bbSale.png"},
		{id: "callAction", src:"images/frame3/callAction.png"},
		{id: "deezer", src:"images/frame3/deezer.png"},
		{id: "offer", src:"images/frame3/offer.png"},
		{id: "sheene", src:"images/frame3/sheene.png"}
		
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		
		// set the background bitmap alpha to zero.
		background.alpha = 0;
		
		// add background to the display list.
		stage.addChild( background );
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );
		
		// Sky Logo
		skyLogo = new createjs.Bitmap( loader.getResult( "skyLogo" ) );
		skyLogo.x = 20;
		skyLogo.y = 205;
		skyLogo.alpha = 0;
		stage.addChild( skyLogo );
		createjs.Tween.get( skyLogo ).to( {alpha:1}, 1000 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.
		
		// gradient text
		reward = new createjs.Bitmap( loader.getResult( "reward" ) );
		reward.x = 56;
		reward.y = 20;
		reward.alpha = 0;
		stage.addChild( reward );
		createjs.Tween.get( reward ).to( {alpha:1}, 1500 );
		createjs.Tween.get(reward, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		
		// blue text
		var text = new createjs.Text("when you switch to 12 months\nfree Sky Broadband Unlimited", "15px myFont", "#284698");
		text.alpha = 0;
        text.x = 151;
		text.y = 56;
		text.textAlign = "center";
		text.lineHeight = 18;
		text.textBaseline = "alphabetic";
		stage.addChild( text );
		createjs.Tween.get( text ).wait(500).to( {alpha:1}, 500 );
		createjs.Tween.get(text, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		
		// static images
		samsung = new createjs.Bitmap( loader.getResult( "samsung" ) );
		samsung.x = 56;
		samsung.y = 114;
		samsung.alpha = 1;
		stage.addChild( samsung );
		createjs.Tween.get(samsung, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		
		voucher = new createjs.Bitmap( loader.getResult( "voucher" ) );
		voucher.x = 163;
		voucher.y = 114;
		voucher.alpha = 1;
		stage.addChild( voucher );
		createjs.Tween.get(voucher, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		
		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 3000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");

		// refer to the creative brief, frame 2 for guidance.
		
		joinSky = new createjs.Bitmap( loader.getResult( "joinSky" ) );
		joinSky.x = 42;
		joinSky.y = 28;
		joinSky.alpha = 0;
		stage.addChild( joinSky );
		createjs.Tween.get( joinSky ).to( {alpha:1}, 1000 );
		createjs.Tween.get(joinSky, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		
		var lineRent = new createjs.Text("Sky Line Rental at £16.40pm applies", "11px myFont", "#000000");
		lineRent.alpha = 0;
        lineRent.x = 200;
		lineRent.y = 226;
		lineRent.textAlign = "center";
		lineRent.textBaseline = "alphabetic";
		stage.addChild( lineRent );
		createjs.Tween.get( lineRent ).wait(500).to( {alpha:1}, 800 );
		createjs.Tween.get(lineRent, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		
		bbSale = new createjs.Bitmap( loader.getResult( "bbSale" ) );
		bbSale.x = 68;
		bbSale.y = -140;
		bbSale.alpha = 1;
		stage.addChild( bbSale );
		createjs.Tween.get( bbSale ).wait(200).to( {y:65}, 800, createjs.Ease.bounceOut );
		createjs.Tween.get(bbSale, false, null, false).wait(3000).set({ alpha:0}).call(handleTick);
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 3000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.
		
		callAction = new createjs.Bitmap( loader.getResult( "callAction" ) );
		callAction.x = 142;
		callAction.y = 196;
		callAction.alpha = 0;
		stage.addChild( callAction );
		createjs.Tween.get( callAction ).to( {alpha:1}, 100 );
		
		deezer = new createjs.Bitmap( loader.getResult( "deezer" ) );
		deezer.x = 12;
		deezer.y = 32;
		deezer.alpha = 0;
		stage.addChild( deezer );
		createjs.Tween.get( deezer ).wait(300).to( {alpha:1}, 1000 );
		
		var text2 = new createjs.Text("when you join online with 12 months\nfree Sky Broadband Unlimited", "15px myFont", "#284698");
		text2.alpha = 0;
        text2.x = 143;
		text2.y = 100;
		text2.textAlign = "center";
		text2.lineHeight = 18;
		text2.textBaseline = "alphabetic";
		stage.addChild( text2 );
		createjs.Tween.get( text2 ).wait(500).to( {alpha:1}, 500 );
		
		offer = new createjs.Bitmap( loader.getResult( "offer" ) );
		offer.x = 66;
		offer.y = 140;
		offer.alpha = 0;
		stage.addChild( offer );
		createjs.Tween.get( offer ).wait(1200).to( {alpha:1}, 300 );
		
		sheene = new createjs.Bitmap( loader.getResult( "sheene" ) );
		sheene.x = 120;
		sheene.y = 200;
		sheene.alpha = 0;
		stage.addChild( sheene );
		createjs.Tween.get( sheene ).wait(1200).to( {alpha:1}, 300 );
		createjs.Tween.get(sheene)
          .to({x: 300}, 1500, createjs.Ease.shineOut)
          .to({x: 120}, 200, createjs.Ease.shineOut)
		.to({x: 300}, 1500, createjs.Ease.shineOut)
          .to({x: 120}, 200, createjs.Ease.shineOut)
		
	}
};