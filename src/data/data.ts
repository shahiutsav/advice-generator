export async function getRandomAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return {
          slip: {
            id: response.status,
            advice: "Oops! something went wrong when fetching the advice",
          },
        };
      }
    })
    .then((data) => {
      return data.slip;
    });
}
