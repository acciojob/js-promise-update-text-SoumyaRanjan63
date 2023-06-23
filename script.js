//your JS code here. If required.
function delayMessage(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	})
}
delayMessage()
  .then((message) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = message;
  })
  .catch((error) => {
    console.error("Error:", error);
  });