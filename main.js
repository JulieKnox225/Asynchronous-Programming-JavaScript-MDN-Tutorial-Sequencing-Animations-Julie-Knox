const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  
  
  //Problem One: "callback hell"
  /*
  Requirements:
  Each animation must start once the one before it has completed and must replicate "callback hell" which looks like nested loops.
  PseudoCode:
  1. attach a .then() handler to the Animation.finished promise
  2. create another .then() handler inside the function inside the handler
  3. create the final .then() handler inside the function inside the handler to animate the next one
  */
 
/*
const promise = alice1.animate(aliceTumbling, aliceTiming).finished;

promise.then((result) => {
    const promise2 = alice2.animate(aliceTumbling, aliceTiming).finished;
    return promise2.then((result) => {
        const promise3 = alice3.animate(aliceTumbling, aliceTiming).finished;
        return promise3.then((result) => {
            return result;
        });
    });
});
*/

//Problem Two: "Promise Chaining"
/*
Requirements:
Avoid nested function calls by utilizing the fact that .then() returns a promise
*/

alice1.animate(aliceTumbling, aliceTiming).finished
.then(() => {
    alice2.animate(aliceTumbling, aliceTiming).finished
.then(() => {
        alice3.animate(aliceTumbling, aliceTiming).finished;
    })
}).catch((error) => {
    console.error(`Error message: ${error}`)
});


//Problem Three: "async and await"
async function animationTime() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        await alice2.animate(aliceTumbling, aliceTiming).finished;
        await alice3.animate(aliceTumbling, aliceTiming).finished;

    } catch(error) {
        console.error(`Error message: ${error}`);
    }
}