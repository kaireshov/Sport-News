function validateForm() {
    let email = document.forms["subscribeForm"]["email"].value;
    if (email == "") {
        alert("Email не может быть пустым");
        return false;
    }
}

const items = document.querySelectorAll('.accordion button');
    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');  
            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
                items[i].nextElementSibling.style.maxHeight = null;
            }

            if (itemToggle === 'false') {
                this.setAttribute('aria-expanded', 'true');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
            }
        }
items.forEach(item => item.addEventListener('click', toggleAccordion));




function openPopup() {
    document.getElementById("popupForm").style.display = "block";
}
function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}


function displayDateTime() {
    let now = new Date();
    let formatted = now.toLocaleString();
    document.getElementById("datetime").innerHTML = formatted;
}
setInterval(displayDateTime, 1000);
updateTime();
