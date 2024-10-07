	var updateData = {"visitorLoginState":"No","visitorId":"g357ggapbsps6o75mf7g19no77","visitorSessionID":"g357ggapbsps6o75mf7g19no77","visitorType":"new customer","visitorLifetimeValue":0};

window.onload = function() {
	var eventObj = {
	"event": "tray.updateGTM"
	};
	updateData = jQuery.extend(updateData, {
		"siteSearchFrom": document.referrer
	});
	dataLayer.push(jQuery.extend(eventObj, updateData));

	console.info('[DataLayer] UpdateGTM executed.')
};
