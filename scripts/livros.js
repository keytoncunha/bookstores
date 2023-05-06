const section_livros=document.querySelector("section.section_livros")
const livros = [

    {nome:"Controlando a ansiedade",img:"./imgs/img_lvr01.jpg", preco:79.90, url:"https://go.hotmart.com/V81979249K"},
    {nome:"A Ansiedade e Eu", img:"./imgs/img_lvr02.jpg", preco:37.00, url:"https://go.hotmart.com/X81978790Q?dp=1"},
    {nome:"A Luta no Luto", img:"./imgs/img_lvr03.jpg", preco:39.99, url:"https://go.hotmart.com/F82093824V?dp=1"},
    {nome:"Ansiedade", img:"./imgs/img_lvr04.jpg", preco:80.00, url:"https://go.hotmart.com/X81978654V?dp=1"},
    {nome:"Ansidade ao limite", img:"./imgs/img_lvr05.jpg", preco:19.90, url:"https://go.hotmart.com/G81978772I?dp=1"},
    {nome:"Ansiedade e a Bíblia - O que as escrituras nos ensinam sobre a ansiedade", img:"./imgs/img_lvr06.jpg", preco:24.90, url:"https://go.hotmart.com/S81978950U"},
    {nome:"Ansiedade e depressão", img:"./imgs/img_lvr07.jpg", preco:14.50, url:"https://go.hotmart.com/T81979193X?dp=1"},
    {nome:"Ansiedade Infantil", img:"./imgs/img_lvr08.jpg", preco:24.90, url: "https://go.hotmart.com/T81978371M?dp=1"},
    {nome:"Ansiedade Infantil - A caixa da Preocupação", img:"./imgs/img_lvr09.jpg", preco:39.90, url:"https://go.hotmart.com/G81978528O?dp=1"},
    {nome:"Ansiedade sem Crises", img:"./imgs/img_lvr10.jpg", preco:29.90, url:"https://go.hotmart.com/P81979176H?dp=1"},
    {nome:"Clínica Ansiedade", img:"./imgs/img_lvr11.jpg", preco:35.00, url:"https://go.hotmart.com/F81979157M?dp=1"},
    {nome:"Como lidar com ansiedade", img:"./imgs/img_lvr12.jpg", preco:59.90, url:"https://go.hotmart.com/J81978742G?dp=1"},
    {nome:"Curso: Depressão e Ansiedade Infantil", img:"./imgs/img_lvr13.jpg", preco:149.00, url:"https://go.hotmart.com/F81978539E?dp=1"},
    {nome:"Depressão e Ansiedade", img:"./imgs/img_lvr14.jpg", preco:30.69, url:"https://go.hotmart.com/I81978756L?dp=1"},
    {nome:"Derrotando a Ansiedade", img:"./imgs/img_lvr15.jpg", preco:20.00, url:"https://go.hotmart.com/D81978697T?dp=1"},
    {nome:"Desvendando a Ansiedade", img:"./imgs/img_lvr16.jpg", preco:14.90, url:"https://go.hotmart.com/U81978303E?dp=1"},
    {nome:"E-book Conhecendo a Ansiedade", img:"./imgs/img_lvr17.jpg", preco:10.00, url:"https://go.hotmart.com/Q81978411F?dp=1"},
    {nome:"E-Book Ansiedade na Prática", img:"./imgs/img_lvr18.jpg", preco:24.00, url:"https://go.hotmart.com/V81978391S?dp=1"},
    {nome:"E-Book Oficina das Emoções", img:"./imgs/img_lvr19.jpg", preco:130.00, url:"https://go.hotmart.com/J81978584J?dp=1"},
    {nome:"Forjados no Fogo", img:"./imgs/img_lvr20.jpg", preco:47.00, url:"https://go.hotmart.com/N81979112D?dp=1"},
    {nome:"Introdução aos Transtornos de Ansiedade pela perspectiva da TCC", img:"./imgs/img_lvr21.jpg", preco:60.00, url:"https://go.hotmart.com/P81978474F?dp=1"},
    {nome:"Liberte-se da ansiedade e depressão", img:"./imgs/img_lvr22.jpg", preco:29.90, url:"https://go.hotmart.com/M81979019C?dp=1"},
    {nome:"Mimi e a Ansiedade", img:"./imgs/img_lvr23.jpg", preco:14.00, url:"https://go.hotmart.com/Y81978402C?dp=1"},
    {nome:"O porquê da Ansiedade?", img:"./imgs/img_lvr24.jpg", preco:17.00, url:"https://go.hotmart.com/G81978322L?dp=1"},
    {nome:"Repro&shy;gra&shy;mação cerebral para acabar com ansiedade", img:"./imgs/img_lvr25.jpg", preco:97.00, url:"https://go.hotmart.com/L81979044R?dp=1"},
    {nome:"SaiAnsi Livre-se da ansiedade", img:"./imgs/img_lvr26.jpg", preco:47.00, url:"https://go.hotmart.com/K82093845W?dp=1"},
    {nome:"Superando a Ansiedade e Depressão", img:"./imgs/img_lvr27.jpg", preco:29.90, url:"https://go.hotmart.com/I82094020X?ap=5a9b"},
    {nome:"Vencendo a Ansiedade", img:"./imgs/img_lvr28.jpg", preco:37.90, url:"https://go.hotmart.com/D81978834F?dp=1"}
]

livros.map((livro)=>{
    let figure=document.createElement("figure")
    let img=document.createElement('img')
    img.setAttribute('src',livro.img)
    img.setAttribute('title',livro.nome)

    let h4=document.createElement('h4')
    h4.innerHTML=livro.nome
    let h3=document.createElement("h3")
    h3.innerText=livro.preco.toLocaleString('pt-BR',{style:"currency", currency:'BRL'})

    let ancora=document.createElement("a")
    ancora.setAttribute('href',livro.url)
    ancora.setAttribute('alt',livro.nome)
    ancora.setAttribute('target','_self')
    ancora.appendChild(h4)
    ancora.appendChild(h3)
    let figcaption=document.createElement("figcaption")
    figcaption.appendChild(ancora)


    figure.appendChild(img)
    figure.appendChild(figcaption)
    
    section_livros.appendChild(figure)
})

//  DARK MODE

const html=window.document.querySelector("html")
const check=window.document.getElementById("check")

const toggleMode=()=>{
    html.classList.toggle('dark_mode')
}
const loadTheme=()=>{
    let darkMode=localStorage.getItem("dark_mode")
    if(darkMode==1 || darkMode){
        toggleMode()
    }
}
loadTheme()

check.addEventListener("change",()=>{
    toggleMode()
    
    localStorage.removeItem('dark_mode',1)
    if(html.classList.contains('dark_mode')){
        localStorage.setItem("dark_mode",1)
    }
})
