import express  from "express";
const app = express();
const port = 8087;

var sabores = [
    "4 queijos",
    "Frango com Catupiry",
    "Lombo com Cheedar",
    "Calabresa"
]

app.get("/", (req, res) => {
    res.send("Bem vindo a fábrica de pizzas")
})
app.post("/adicionarSabor", (req, res) => {
    console.log(req);
    let novo_sabor = req.sabor;
    sabores.push(novo_sabor);
    res.send("Sabor adicionado" + novo_sabor)
})


app.get("/sabores", (req, res) => {
    res.send(sabores)
})

app.listen(port, () => {
    console.log("O servidor está aberto na porta" + port)
})
