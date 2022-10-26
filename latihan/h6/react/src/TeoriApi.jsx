function TeoriApi() {
  function promise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (1 + 1 === 2) {
          resolve("process");
        } else {
          reject("wrong process");
        }
      }, 2000);
    });
  }

  // console.log("tas");

  // promise()
  //   .then(() => {
  //     console.log("y");
  //   })
  //   .catch(() => {
  //     console.log("n");
  //   });

  // console.log("wah");

  async function useAsync() {
    try {
      console.log("tas");

      const result = await promise();
      console.log(result);

      console.log("wah");
    } catch (e) {
      console.log(e);
    }
  }
  console.log(useAsync());

  return <>tes</>;
}

export default TeoriApi;
