const programming_lang=[
    "python",
    "java",
    "c",
]


 function randomWord (){
    return programming_lang[Math.floor(Math.random() * programming_lang.length)]
}



export { randomWord } 