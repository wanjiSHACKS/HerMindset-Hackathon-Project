function showTime() {
                const timeNow = new Date().toLocateTimeString();
                document.getElementById('clock').textContent = timeNow;
            }

            setInterval(showTime, 1000);
