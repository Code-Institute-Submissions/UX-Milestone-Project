function navmenu_display() {
            const navElement = document.getElementById("navmenu");
            if (navElement.style.display === "block") {
                navElement.style.display = "none";
            } else {
                navElement.style.display = "block";
            }
        }