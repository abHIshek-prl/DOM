const btn=document.getElementById("qute")
const what=document.getElementById("says")
const who=document.getElementById("name")

const sayings=[
    {say:"don't want to be the best player in the world.I want to be the best player I can be for myself and for the people around me.",Name:"— Neymar Jr."},
    {say:"I have not failed. I've just found 10,000 ways that won't work. ",Name:"— Thomas Edison"},
    {say:"It does not matter how slowly you go as long as you do not stop",Name:"— Confucius"},
    {say:"Happiness is not something ready-made. It comes from your own actions.",Name:"— Dalai Lama"},
    {say:"Success is not final, failure is not fatal: It is the courage to continue that counts.",Name:"— Winston Churchill"},
    {say:"Your time is limited, don't waste it living someone else's life.",Name:" — Steve Jobs"},
    {say:"If you want to live a happy life, tie it to a goal, not to people or things.",Name:" — Albert Einstein"},
    {say:"The journey of a thousand miles begins with one step.",Name:" — Lao Tzu"},
    {say:"You are never too old to set another goal or to dream a new dream.",Name:" — C.S. Lewis"},
    {say:"Don't let the fear of losing be greater than the excitement of winning.",Name:"— Robert Kiyosaki"}
  ];

  let len=sayings.length;
  btn.addEventListener("click",function xyz(){
    let x = Math.floor(Math.random()*len);
    let y = sayings[x].say;
    what.innerHTML=y;
    let z = sayings[x].Name
    who.innerHTML=z
  });