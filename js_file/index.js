// Load all the Catagory Button From API and Show them in a centered position


// getLoad catagory data for button 
const lodeCetagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCetagory(data.categories))
        .catch(error => console.log(error))
};


     // function for button active color 
     const activeBtnColor = () =>{
        const getBtn = document.getElementsByClassName('btn-ceragoris');
        for(let btn of getBtn){
            btn.classList.remove('active')
        }  
    };

    

    // there have a cetagory function here for id
    const getButtonId = (id) => {
        fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            //remove all btn active color class 
            activeBtnColor()
            
            const cetagorybtn = document.getElementById(`btn${id}`)
            cetagorybtn.classList.add('active')
            showVideosOnDisplay(data.category)
        })
        .catch(error => console.log(error))
    }


   
    

// show the display cennter
const displayCetagory = data => {   
    const getButtonContainer = document.getElementById('button-containers')
    data.forEach(item => {
        const buttonDiv = document.createElement('div')
        buttonDiv.innerHTML = `
            <button id="btn${item.category_id}" onclick="getButtonId(${item.category_id})" class="mx-4 btn my-5 btn-ceragoris"> ${item.category}
            </button>
        `
        getButtonContainer.appendChild(buttonDiv)
    })

};




// get videos thammall api here

const loadVideos = async (searchId = '') => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchId}`)
        const data = await res.json()
        showVideosOnDisplay(data.videos)
    } catch (error) {
        console.log(error);
    }
};


// click ditails here 
const clickDitails = async(videoid) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoid}`;
    const res = await fetch(url)
    const data = await res.json()
    displayDitails(data)
    
};

// displayLoad data details on display 
    const displayDitails = (data) =>{
        const getContaint = document.getElementById('context-container')
        getContaint.innerHTML = `
         <img  src="${data.video?.thumbnail}"/>
         <p>${data.video?.description}</p>
        `

        // first way to show Modal 
        // document.getElementById('modalsNotis').click()

        // second way to show modal 
        document.getElementById('modalsNoti').showModal()
    };


// show display from here that function 

const showVideosOnDisplay = (videos) => {
    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = "";
    if(videos.length == 0){
        videosContainer.innerHTML = `
            <div class="flex justify-center items-center h-lvh flex-col gap-4">
                <p class="bolder text-3xl">There Have No Any Contant</p>
                <img class="w-[200px] h-[200px]" src="assets/icon.png" />
            </div>
        `
        videosContainer.classList.remove('grid')
        return ;
    }else{
        videosContainer.classList.add('grid')
    }

    videos.forEach(video => {
        // console.log(video.video_id)
        const div = document.createElement('div')
        div.classList = 'card '
        div.innerHTML = `
         <figure class="relative">
            <img class="h-[200px] w-auto object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            ${video.others.posted_date?.length !== 0 ? `<span class="absolute right-2 bottom-2 bg-black text-white p-2 rounded text-sm">${getConvertTime(video.others.posted_date)}</span>` : ''}
            
      </figure>
  <div class="py-2 flex gap-4 justify-center ">
        <div class="">
            <img class="w-10 h-10 object-cover rounded-full" src="${video.authors[0].profile_picture}" />
        </div>
        <div class="flex-1">
            <h2 class="card-title">${video.title}</h2>
             <div class="flex gap-2">
             <p>${video.authors[0].profile_name}</p>
            
             ${video.authors[0]?.verified == true ? `<img class="w-5 h-5 "  src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" /> ` : ''}
             </div>
        </div>
        <div>
        <button id ="ditails-btn" onclick="clickDitails('${video.video_id}')" class="btn bg-red-500 px-2">Ditails</button> 
        </div>
    
  </div>
        `
        videosContainer.appendChild(div)
    })
}

document.getElementById('input-value').addEventListener('keyup', (event)=>{
    
    loadVideos(event.target.value)

});

lodeCetagory()
loadVideos()





// const demo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// const  i   = JSON.stringify(demo)
// console.log(i)
// const a = JSON.parse(i)
// console.log(a)

// const student = {
//     names : 'raihan', 
//     old : 33, 
//     subject: {
//         bangla : '22', 
//         english : '44', 
//         math: ['90', {raihan : 'true', rols : '1'}]
//     }, 
// };

// console.log(student.subjec?.english )

