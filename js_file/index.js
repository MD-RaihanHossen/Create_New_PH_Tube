// Load all the Catagory Button From API and Show them in a centered position


// getLoad catagory data 
const lodeCetagory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCetagory(data.categories))
        .catch(error => console.log(error))
};


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






const getVideos = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        const data = await res.json()
        showVideosOnDisplay(data.videos)
    } catch (error) {
        console.log(error);
    }
};




const showVideosOnDisplay = (videos) => {
    const videosContainer = document.getElementById('videos-container');

    videos.forEach(video => {
        // console.log(video.others.posted_date.length)
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
    
    
  </div>
        `
        videosContainer.appendChild(div)
    })
}



lodeCetagory()
getVideos()




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

