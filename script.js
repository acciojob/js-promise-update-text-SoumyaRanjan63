//your JS code here. If required.
funtion delayMessage(){
	return new promise((resolve,reject)=>{
		setTimeout(()=>{
			reselove("Hello,world!");
		},1000);
	})
}