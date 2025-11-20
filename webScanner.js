let enableText = "Enable";


const button = document.getElementById('coolButton');

function handleClick() {
    //alert('Button was clicked!');
    if(enableText === "Enable") {
        button.innerText = 'Enable';
        enableText = "Disable";
    } else {
        button.innerText = 'Disable';
        enableText = "Enable";
    }
}

var aipatterns = ["ai","ai overview"];

// Attach the click event listener to the button
button.addEventListener('click', handleClick);
if(enableText === "Enable") {
    console.log("Enabled");
    const observer = new MutationObserver(mutations => {
        let matches = [...text.matchAll(aipatterns)];
    });
    document.querySelectorAll("*").forEach( (element)=>{
        if (element.innerHTML.includes(aipatterns)) {
            element.style.display = 'none';
        }
    });
}

// mutations.forEach(mutation => {
        //     if (mutation.type === 'childList' || mutation.type === 'attributes' || mutation.type === 'characterData') {
        //         console.log('DOM change detected:', mutation);
        //         // Perform actions based on the detected change
        //     }
        // });      