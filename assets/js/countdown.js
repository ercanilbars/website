(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Jul 20, 2021 16:00:00 GMT",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

            var formattedDays = ("0" + Math.floor(distance / (day))).slice(-2);
            var formattedHours = ("0" + Math.floor((distance % (day)) / (hour))).slice(-2);
            var formattedMins = ("0" + Math.floor((distance % (hour)) / (minute))).slice(-2);
            var formattedSecs = ("0" + Math.floor((distance % (minute)) / second)).slice(-2);

        document.getElementById("days").innerText = formattedDays,
          document.getElementById("hours").innerText = formattedHours,
          document.getElementById("minutes").innerText = formattedMins,
          document.getElementById("seconds").innerText = formattedSecs;

        //do something later when date is reached
        if (distance < 0) {
          let counter = document.getElementById("counter")
              //liquidity = document.getElementById("liquidity");

          counter.style.display = "none";
          //liquidity.style.display = "flex";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
