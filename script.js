window.addEventListener("load", () => {
    const searchinput = document.getElementById("search-value");
    const queryForSearch = '.';    
    searchinput.addEventListener("keyup", (e) => {
        var valueQuery = searchinput.value;
        if (valueQuery.includes(queryForSearch)) {
            valueQuery = valueQuery.replace(queryForSearch, "");

            //const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(valueQuery)}`;
            const searchUrl= `https://www.bing.com/search?q=${encodeURIComponent(valueQuery)}`;
            window.open(searchUrl, "_blank");
        }
    })
    function updateTime() {
        const span = document.getElementById('time-time');
        const currentDate = new Date();
        const options = {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        };
        const formattedTime = currentDate.toLocaleString('en-IN', options);
        span.textContent = formattedTime;
    }

    // Call the function once to update the time immediately
    updateTime();

    // Update the time every second
    setInterval(updateTime, 1000);

})
