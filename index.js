const lt = document.querySelector('.lt');
const rt = document.querySelector('.rt');
const sup = document.querySelector('.sup');

const arr = [
    {image:"Naruto.jpg", name: "Naruto Uzumaki", role: "Nine-Tails Jinchuuriki", quote: "When People Are Protecting Something Truly Special To Them, They Truly Can Become...As Strong As They Can Be"},
    {image:"Gojo.jpg", name: "Satoru Gojou", role: "The Strongest Jujutsu Sorcerer", quote: "Above & Below, Only I Dominate"},
    {image:"Gintoki.jpg", name: "Gintoki Sakata", role: "Yorozuya", quote: "Then and now, what I protect has never changed"},
    {image:"Levi.jpg", name: "Levi", role: "Humanity's Most Powerful Soldier", quote: "This Is Just My Opinion, But When It Comes To Teaching Somebody Discipline... I Believe Pain Is The Most Effective Way"},
    {image:"Ichigo.jpg", name: "Ichigo Kurosaki", role: "Substitute Soul Reaper", quote: "If Miracles Only Happen Once What Are They Called The Second Time?"},
    {image:"Light.jpg", name: "Light Yagami", role: "Kira, God of the New World", quote: "I Am Righteous! I'm The Hero Who's Liberating People From Fear. I'm The Savior Who's Going To Be Like A God Of This Perfect New World!"},
    {image:"Zero.jpg", name: "Lelouch Lamperouge", role: "Zero", quote: "A life that lives without doing anything is the same as a slow death"},
    {image:"Edward.jpg", name: "Edward Elric", role: "State Alchemist", quote: "A Lesson Without Pain Is Meaningless. That's Because No One Can Gain Without Sacrificing Something. But By Enduring That Pain And Overcoming It, He Shall Obtain A Powerful, Unmatched Heart... A Fullmetal Heart"},
    {image:"Hinata.jpg", name: "Shouyou Hinata", role: "Strongest Decoy", quote: "There's a big, tall wall in front of me blocking my way. I wonder what's waiting on the other side. What's the view like over there? It's something I will never be able to see on my own. It's the view from the summit"},
    {image:"Anya.jpg", name: "Anya Forger", role: "Psychic", quote: "She Has Boobies! I Can See 'Em!"}
]

let ind = 0;
const img = document.querySelector('.image');
const nm = document.querySelector('.name');
const rl = document.querySelector('.role');
const review = document.querySelector('.rv');
img.setAttribute('src', arr[ind].image);
nm.textContent = arr[ind].name;
rl.textContent = arr[ind].role;
review.textContent = arr[ind].quote;

function left(){
    if(ind === 0){
        ind = arr.length-1;
    }
    else{
        ind--;
    }
    img.setAttribute('src', arr[ind].image);
    nm.textContent = arr[ind].name;
    rl.textContent = arr[ind].role;
    review.textContent = arr[ind].quote;
}

function right(){
    if(ind === arr.length-1){
        ind = 0;
    }
    else{
        ind++;
    }
    img.setAttribute('src', arr[ind].image);
    nm.textContent = arr[ind].name;
    rl.textContent = arr[ind].role;
    review.textContent = arr[ind].quote;
}

function random(){
    ind = Math.floor(Math.random() * arr.length);
    img.setAttribute('src', arr[ind].image);
    nm.textContent = arr[ind].name;
    rl.textContent = arr[ind].role;
    review.textContent = arr[ind].quote;
}

lt.onclick = left;
rt.onclick = right;
sup.onclick = random;