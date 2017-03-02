function initWilddog() {
    var appID = "qrcheckin"
    var config = {
        authDomain: appID + '.wilddog.com',
        syncURL: "https://" + appID + ".wilddogio.com"
    };
    wilddog.initializeApp(config);
}

function checkin(qr_content, from_who){
    var qr_temp = qr_content;
    var from_temp = "from_who";  // from the same person currently
    var ref = wilddog.sync().ref("checkin");
    ref.push({
        qr: qr_temp, 
        time: wilddog.sync().ServerValue.TIMESTAMP,
        from: from_temp
    }).then(()=>{
        // leave empty for callback handler
    })
}