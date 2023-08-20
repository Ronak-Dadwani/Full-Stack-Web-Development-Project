function createpromise() {
    return new Promise(function exec(resolve, reject) {
      setTimeout(function f() {
        console.log("timer done");
        resolve("10");
      }, 3000);
    });
  }

  async function consume() {
    console.log("inside function"); ;
    const response = await createpromise();
    console.log("response is " , response);
  }

  console.log("start");
  consume();

  console.log("end");