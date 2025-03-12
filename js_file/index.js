// Load all the Catagory Button From API and Show them in a centered position


// getLoad catagory data 
    const lodeCetagory = () => {
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCetagory(data.categories))
        .catch(error => console.log(error))
    };
    lodeCetagory()

// show the display cennter
const displayCetagory = data => {
    const getButtonContainer = document.getElementById('button-containers')
   data.forEach(item => {
     const button = document.createElement('button')
     button.classList = 'btn p-4 m-5 '
     button.innerText = item.category
     getButtonContainer.appendChild(button)
   })
  
};

