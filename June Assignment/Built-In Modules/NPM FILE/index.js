// const fs = require("fs");

// const data = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet."

// fs.writeFileSync("nodejs_architecture.txt" , data);

// const readdata = fs.readFileSync("nodejs_architecture.txt");

// console.log(readdata.toString());

// fs.unlink("./nodejs_architecture.txt" , () => {
//     console.log("FS File DELETED SUCCESSFULLY");
// })

//----------------------------------------------------------------------------
//Answer 6 
// const os = require('os')
// console.log("OS Type:" + os.type);
// console.log("OS release:" + os.release);


//-------------------------------------------------------------------------------------

// answer 8 
// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// const subscribeMessage = (channelName) => {
//   console.log(`Thanks For Subscribing to ${channelName}`);
// };

// eventEmitter.addListener("subscribe", subscribeMessage);

// eventEmitter.emit("subscribe", "College Wallah");

// The above statement must print "Thanks For Subscribing to College Wallah"

//---------------------------------------------------------------------------------------

//-answer 9 

// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// const subscribeMessage = (channelName) => {
//   console.log(`Thanks For Subscribing to ${channelName}`);
// };

// eventEmitter.addListener("subscribe", subscribeMessage);

// console.log("Calling event listner before removing the event.");
// eventEmitter.emit("subscribe", "College Wallah");

// console.log("Calling event listner after removing the event.");
// eventEmitter.removeListener("subscribe", subscribeMessage);

// eventEmitter.emit("subscribe", "College Wallah");

//------------------------------------------------------------------------------------

// answer 10

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

