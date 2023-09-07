const arr=[{
    image:'images/scroll/1.jpg',
    hashTag:'#SuperNote#SuperDesign',
    name:'Redmi Note 12',
    description:'The Sunrise Gold colour of #RedmiNote12 is definitely getting some attention.',
    buy:'Buy Now '
},
{   image:'images/scroll/2.jpg',
    hashTag:'',
    name:'Xiaomi India x United Way in India',
    description:'Xiaomi India and United Way India join hands to empower rural communities in the Palgar district with sustainable energy solutions',
    buy:' Know More '
},
{   image:'images/scroll/3.jpg',
    hashTag:'#smarterLiving',
    name:'Smarter, convenient, and More Connect Home.',
    description:'',
    buy:'Know More '
},
{   image:'images/scroll/4.jpg',
    hashTag:'#DheshKaSmartphone',
    name:'Redmi A2',
    description:'Get your hands on the all-new #DheshKaSmartphone',
    buy:'Know More '
},
{   image:'images/scroll/5.jpg',
    hashTag:'#BigonSpeed#BigonSpeed',
    name:'Redmi 12C',
    description:'Get ready to go #BigonSpeedBigonStyle NOW!',
    buy:'Buy Now '
}
]
let currentItem=-1;
const changeContent=(count)=>{
    const image=document.getElementById('image');
    const tag=document.getElementById('hashtag');
    const name=document.getElementById('name');
    const description=document.getElementById('description');
    const buy=document.getElementById('buy');
    currentItem+=count;

    if(currentItem>4){
        currentItem=0;
    }
    if(currentItem<0){
        currentItem=4;
    }
    image.setAttribute('src',arr[currentItem].image);
    tag.innerHTML=arr[currentItem].hashTag;
    name.innerHTML=arr[currentItem].name;
    description.innerHTML=arr[currentItem].description;
    buy.innerHTML=arr[currentItem].buy;
}
setInterval(()=>changeContent(1),10000);

document.getElementById('previous').addEventListener('click',()=>changeContent(-1));
document.getElementById('next').addEventListener('click',()=>changeContent(1));