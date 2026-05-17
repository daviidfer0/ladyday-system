import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Plus, ShoppingBag, Minus, X } from "lucide-react"

import logo from "../assets/logo.png"
import pastelImg from "../assets/images/pastel.jpg"
import panquecaImg from "../assets/images/panqueca.jpg"
import crepeImg from "../assets/images/crepe.jpg"
import lancheImg from "../assets/images/lanche.jpg"

const categorias = ["Pastéis", "Panquecas", "Lanches", "Crepes", "Bebidas", "Cervejas"]

const imagensCategorias = {
  Pastéis: pastelImg,
  Panquecas: panquecaImg,
  Lanches: lancheImg,
  Crepes: crepeImg,
  Bebidas: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1000&auto=format&fit=crop",
  Cervejas: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
}

const produtos = [
  { categoria: "Pastéis", nome: "Carne", desc: "Carne + vinagrete", preco: 19 },
  { categoria: "Pastéis", nome: "Queijo", desc: "Queijo + vinagrete", preco: 20 },
  { categoria: "Pastéis", nome: "Frango", desc: "Frango + vinagrete", preco: 19 },
  { categoria: "Pastéis", nome: "Carne Queijo", desc: "Carne + queijo + vinagrete", preco: 22 },
  { categoria: "Pastéis", nome: "Carne Palmito", desc: "Carne + palmito + vinagrete", preco: 22 },
  { categoria: "Pastéis", nome: "Carne Catupiry", desc: "Carne + catupiry + vinagrete", preco: 22 },
  { categoria: "Pastéis", nome: "Frango Queijo", desc: "Frango + queijo + vinagrete", preco: 22 },
  { categoria: "Pastéis", nome: "Frango Palmito", desc: "Frango + palmito + vinagrete", preco: 22 },
  { categoria: "Pastéis", nome: "Frango Catupiry", desc: "Frango + catupiry + vinagrete", preco: 22 },
  { categoria: "Pastéis", nome: "Tradicional", desc: "Carne, queijo, bacon, calabresa, ovo, milho, palmito, azeitona e vinagrete", preco: 35 },
  { categoria: "Pastéis", nome: "Pizza", desc: "Queijo, presunto, catupiry, ovo e milho", preco: 25 },
  { categoria: "Pastéis", nome: "Moda da Casa", desc: "Queijo, palmito, frango, catupiry, milho, azeitona e vinagrete", preco: 28 },
  { categoria: "Pastéis", nome: "Lady Day", desc: "Carne, queijo, bacon, calabresa, catupiry, ovo e vinagrete", preco: 28 },
  { categoria: "Pastéis", nome: "Tradição", desc: "Carne, queijo, frango, bacon, calabresa, milho, azeitona e vinagrete", preco: 28 },
  { categoria: "Pastéis", nome: "Vegetariano", desc: "Queijo, palmito, ovo, catupiry, milho, azeitona e vinagrete", preco: 25 },
  { categoria: "Pastéis", nome: "Romeu e Julieta", desc: "Queijo + goiabada", preco: 22 },
  { categoria: "Pastéis", nome: "Nutella", desc: "Creme de avelã", preco: 22 },
  { categoria: "Pastéis", nome: "Banana", desc: "Banana + queijo + canela", preco: 22 },
  { categoria: "Pastéis", nome: "Doce de Leite", desc: "Doce de leite + queijo", preco: 22 },

  { categoria: "Panquecas", nome: "Carne", desc: "Panqueca gratinada • escolha o molho", preco: 19 },
  { categoria: "Panquecas", nome: "Queijo", desc: "Panqueca gratinada • escolha o molho", preco: 20 },
  { categoria: "Panquecas", nome: "Frango", desc: "Panqueca gratinada • escolha o molho", preco: 19 },
  { categoria: "Panquecas", nome: "Carne Queijo", desc: "Panqueca gratinada • escolha o molho", preco: 22 },
  { categoria: "Panquecas", nome: "Carne Palmito", desc: "Panqueca gratinada • escolha o molho", preco: 22 },
  { categoria: "Panquecas", nome: "Carne Catupiry", desc: "Panqueca gratinada • escolha o molho", preco: 22 },
  { categoria: "Panquecas", nome: "Frango Queijo", desc: "Panqueca gratinada • escolha o molho", preco: 22 },
  { categoria: "Panquecas", nome: "Frango Palmito", desc: "Panqueca gratinada • escolha o molho", preco: 22 },
  { categoria: "Panquecas", nome: "Frango Catupiry", desc: "Panqueca gratinada • escolha o molho", preco: 22 },
  { categoria: "Panquecas", nome: "Tradicional", desc: "Carne, queijo, frango, catupiry, calabresa, ovo, bacon, palmito, milho, azeitona e vinagrete", preco: 35 },
  { categoria: "Panquecas", nome: "Pizza", desc: "Queijo, presunto, catupiry, ovo, milho, orégano e vinagrete", preco: 25 },
  { categoria: "Panquecas", nome: "Moda da Casa", desc: "Queijo, palmito, frango, catupiry, milho, azeitona e vinagrete", preco: 28 },
  { categoria: "Panquecas", nome: "Lady Day", desc: "Carne, queijo, bacon, calabresa, catupiry, ovo e vinagrete", preco: 28 },
  { categoria: "Panquecas", nome: "Tradição", desc: "Carne, queijo, frango, bacon, calabresa, milho, azeitona e vinagrete", preco: 28 },
  { categoria: "Panquecas", nome: "Vegetariano", desc: "Queijo, palmito, ovo, catupiry, milho, azeitona e vinagrete", preco: 25 },

  { categoria: "Lanches", nome: "X-Tudo", desc: "Pão, hambúrguer, calabresa, bacon, ovo, filé de frango, mussarela, salsicha, catupiry, alface, tomate e milho", preco: 30 },
  { categoria: "Lanches", nome: "X-Bagunça", desc: "Pão, hambúrguer, salsicha, calabresa, bacon, ovo, mussarela, alface e tomate", preco: 28 },
  { categoria: "Lanches", nome: "X-Calabresa", desc: "Pão, calabresa, ovo, bacon, presunto, mussarela, alface, tomate e salsicha", preco: 27 },
  { categoria: "Lanches", nome: "X-Bacon", desc: "Pão, hambúrguer, bacon, ovo, mussarela, presunto, alface, tomate, milho e salsicha", preco: 25 },
  { categoria: "Lanches", nome: "X-Frango", desc: "Pão, ovo, filé de frango, salsicha, presunto, tomate, mussarela e catupiry", preco: 25 },
  { categoria: "Lanches", nome: "FranBacon", desc: "Pão, filé de frango, bacon, ovo, presunto, mussarela, tomate, alface e milho", preco: 25 },
  { categoria: "Lanches", nome: "X-Salada", desc: "Pão, hambúrguer, presunto, salsicha, mussarela, tomate e alface", preco: 17 },
  { categoria: "Lanches", nome: "Misto Quente", desc: "Pão, presunto, mussarela, tomate e catupiry", preco: 12 },

  { categoria: "Crepes", nome: "Carne", desc: "Crepe simples", preco: 12.5 },
  { categoria: "Crepes", nome: "Queijo", desc: "Crepe simples", preco: 12.5 },
  { categoria: "Crepes", nome: "Frango", desc: "Crepe simples", preco: 12.5 },
  { categoria: "Crepes", nome: "Carne Seca", desc: "Crepe simples", preco: 12.5 },
  { categoria: "Crepes", nome: "Calabresa", desc: "Crepe simples", preco: 12.5 },
  { categoria: "Crepes", nome: "Presunto", desc: "Crepe simples", preco: 12.5 },
  { categoria: "Crepes", nome: "Carne Seca e Queijo", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Carne Seca e Cheddar", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Carne Seca e Catupiry", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Carne Seca e Banana", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Frango e Bacon", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Frango e Cheddar", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Frango e Catupiry", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Frango e Palmito", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Presunto e Queijo", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Palmito e Queijo", desc: "Crepe especial", preco: 15 },
  { categoria: "Crepes", nome: "Romeu e Julieta", desc: "Queijo + goiabada", preco: 12 },
  { categoria: "Crepes", nome: "Chocolate", desc: "Crepe doce", preco: 15 },
  { categoria: "Crepes", nome: "Prestígio", desc: "Chocolate + coco", preco: 15 },
  { categoria: "Crepes", nome: "Nutella Queijo e Morango", desc: "Nutella + queijo + morango", preco: 15 },

  { categoria: "Bebidas", nome: "Água sem gás", desc: "Unidade", preco: 5 },
  { categoria: "Bebidas", nome: "Água com gás", desc: "Unidade", preco: 5 },
  { categoria: "Bebidas", nome: "Coca-Cola 1L", desc: "Refrigerante", preco: 10 },
  { categoria: "Bebidas", nome: "Coca-Cola Zero 1,5L", desc: "Refrigerante", preco: 14 },
  { categoria: "Bebidas", nome: "Coca-Cola 1,5L", desc: "Refrigerante", preco: 14 },
  { categoria: "Bebidas", nome: "Fanta 1L", desc: "Refrigerante", preco: 10 },
  { categoria: "Bebidas", nome: "Kitubaina 1L", desc: "Refrigerante", preco: 8 },
  { categoria: "Bebidas", nome: "Kitubaina 2L", desc: "Refrigerante", preco: 12 },
  { categoria: "Bebidas", nome: "Coca-Cola KS", desc: "Normal", preco: 4 },
  { categoria: "Bebidas", nome: "Coca-Cola KS Zero", desc: "Zero", preco: 4 },
  { categoria: "Bebidas", nome: "Fanta KS", desc: "Unidade", preco: 4 },
  { categoria: "Bebidas", nome: "Sprite KS", desc: "Unidade", preco: 4 },
  { categoria: "Bebidas", nome: "Monster", desc: "Lata", preco: 12 },
  { categoria: "Bebidas", nome: "Sprite Zero", desc: "Lata", preco: 6 },
  { categoria: "Bebidas", nome: "Coca-Cola Lata", desc: "Lata", preco: 6 },
  { categoria: "Bebidas", nome: "Coca-Cola Zero Lata", desc: "Lata", preco: 6 },
  { categoria: "Bebidas", nome: "Fanta Lata", desc: "Lata", preco: 6 },
  { categoria: "Bebidas", nome: "Powerade", desc: "Unidade", preco: 6 },
  { categoria: "Bebidas", nome: "Kapo Uva", desc: "Unidade", preco: 3 },

  { categoria: "Cervejas", nome: "Original Lata", desc: "Cerveja lata", preco: 7 },
  { categoria: "Cervejas", nome: "Brahma Lata", desc: "Cerveja lata", preco: 5 },
  { categoria: "Cervejas", nome: "Skol Lata", desc: "Cerveja lata", preco: 5 },
  { categoria: "Cervejas", nome: "Heineken Long Neck", desc: "Cerveja long neck", preco: 12 },
]

const adicionais = ["Queijo", "Bacon", "Catupiry", "Calabresa", "Ovo", "Milho", "Palmito", "Frango", "Carne", "Azeitona"]

export default function Home() {
  const navigate = useNavigate()
  const [categoria, setCategoria] = useState("Pastéis")
  const [busca, setBusca] = useState("")
  const [modal, setModal] = useState(null)
  const [quantidade, setQuantidade] = useState(1)
  const [observacao, setObservacao] = useState("")
  const [molho, setMolho] = useState("Meio a meio")
  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState([])
  const [contador, setContador] = useState(0)

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinhoLadyDay")) || []
    setContador(carrinho.length)
  }, [])

  const produtosFiltrados = produtos.filter(
    (p) => p.categoria === categoria && `${p.nome} ${p.desc}`.toLowerCase().includes(busca.toLowerCase())
  )

  function abrirModal(item) {
    setModal(item)
    setQuantidade(1)
    setObservacao("")
    setMolho("Meio a meio")
    setAdicionaisSelecionados([])
  }

  function toggleAdicional(adicional) {
    if (adicionaisSelecionados.includes(adicional)) {
      setAdicionaisSelecionados(adicionaisSelecionados.filter((item) => item !== adicional))
    } else {
      setAdicionaisSelecionados([...adicionaisSelecionados, adicional])
    }
  }

  function adicionarAoCarrinho() {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinhoLadyDay")) || []
    const valorAdicionais = adicionaisSelecionados.length * 3
    const totalItem = (modal.preco + valorAdicionais) * quantidade

    const novoItem = {
      nome: modal.nome,
      categoria: modal.categoria,
      desc: modal.desc,
      quantidade,
      molho: modal.categoria === "Panquecas" ? molho : "",
      adicionais: adicionaisSelecionados,
      observacao,
      preco: `R$ ${totalItem.toFixed(2)}`
    }

    localStorage.setItem("carrinhoLadyDay", JSON.stringify([...carrinhoAtual, novoItem]))
    setContador(carrinhoAtual.length + 1)
    setModal(null)
    alert("Produto adicionado ao pedido!")
  }

  return (
    <div className="min-h-screen bg-[#f4ead9] pb-40">
      <div className="p-5 bg-[#f4ead9]">
        <div className="flex items-center justify-between mb-5">
          <img src={logo} className="w-32" />

          <div className="bg-white border border-[#ead7b6] text-[#4a2b0b] px-4 py-2 rounded-full text-sm font-black shadow-sm">
            Aberto • 18h às 23h
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-[#d49d17] to-[#9b6400] rounded-[40px] p-7 text-white shadow-2xl">
          <h1 className="text-4xl font-black leading-none mb-3">
            Lady Day
            <br />
            Pastéis & Panquecas
          </h1>
          <p className="opacity-95 max-w-xs">
            Os melhores pastéis, panquecas, lanches e crepes da cidade.
          </p>
        </div>
      </div>

      <div className="px-5">
        <div className="relative mb-5">
          <Search className="absolute left-4 top-4 text-[#a88755]" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar no cardápio"
            className="w-full bg-[#fffaf3] border border-[#ead7b6] rounded-2xl py-4 pl-12 pr-4 outline-none shadow-sm"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto mb-6 pb-1">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`min-w-[112px] rounded-3xl p-4 border transition ${
                categoria === c
                  ? "bg-gradient-to-br from-[#d49d17] to-[#9b6400] text-white border-[#d49d17]"
                  : "bg-[#fffaf3] text-[#4a2b0b] border-[#ead7b6]"
              }`}
            >
              <div className="font-black text-sm">{c}</div>
            </button>
          ))}
        </div>

        <h2 className="text-3xl font-black text-[#4a2b0b] mb-4">{categoria}</h2>

        <div className="grid gap-5">
          {produtosFiltrados.map((item, i) => (
            <div key={i} className="bg-[#fffaf3] border border-[#ead7b6] rounded-[35px] overflow-hidden shadow-md">
              <img src={imagensCategorias[item.categoria]} className="w-full h-52 object-cover" />

              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h2 className="text-2xl font-black text-[#2d1b08] mb-2">{item.nome}</h2>
                  <p className="text-[#7a6040] text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <strong className="text-[#c88708] text-2xl">R$ {item.preco.toFixed(2)}</strong>
                </div>

                <button
                  onClick={() => abrirModal(item)}
                  className="bg-gradient-to-br from-[#d49d17] to-[#9b6400] text-white w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg"
                >
                  <Plus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="fixed bottom-5 left-5 right-5 bg-gradient-to-r from-[#d49d17] to-[#9b6400] text-white rounded-[30px] py-5 px-6 flex items-center justify-between shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <ShoppingBag />
          <div className="text-left">
            <p className="font-black text-lg">Ver meu pedido</p>
            <span className="text-sm opacity-90">{contador} item(ns)</span>
          </div>
        </div>
      </button>

      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-[#f4ead9] rounded-t-[40px] w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl font-black text-[#2d1b08]">{modal.nome}</h2>
              <button onClick={() => setModal(null)}>
                <X />
              </button>
            </div>

            <img src={imagensCategorias[modal.categoria]} className="w-full h-52 object-cover rounded-[30px] mb-5" />
            <p className="text-[#7a6040] mb-5">{modal.desc}</p>

            <div className="flex items-center justify-between mb-6">
              <strong className="text-3xl text-[#c88708]">R$ {modal.preco.toFixed(2)}</strong>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                  className="bg-white w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  <Minus />
                </button>
                <strong>{quantidade}</strong>
                <button
                  onClick={() => setQuantidade(quantidade + 1)}
                  className="bg-[#d49d17] text-white w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  <Plus />
                </button>
              </div>
            </div>

            {modal.categoria === "Panquecas" && (
              <div className="mb-6">
                <h3 className="font-black mb-3 text-[#2d1b08]">Escolha o molho</h3>
                <div className="grid gap-3">
                  {["Molho vermelho", "Molho branco", "Meio a meio"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMolho(m)}
                      className={`rounded-2xl p-4 text-left ${
                        molho === m ? "bg-[#d49d17] text-white" : "bg-white"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {(modal.categoria === "Pastéis" || modal.categoria === "Panquecas") && (
              <div className="mb-6">
                <h3 className="font-black mb-3 text-[#2d1b08]">Adicionais • R$ 3,00 cada</h3>
                <div className="grid grid-cols-2 gap-3">
                  {adicionais.map((a) => (
                    <button
                      key={a}
                      onClick={() => toggleAdicional(a)}
                      className={`rounded-2xl p-3 ${
                        adicionaisSelecionados.includes(a) ? "bg-[#d49d17] text-white" : "bg-white"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <textarea
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
              placeholder="Observações do item..."
              className="w-full bg-white rounded-2xl p-4 outline-none min-h-[120px] mb-6"
            />

            <button
              onClick={adicionarAoCarrinho}
              className="w-full bg-gradient-to-r from-[#d49d17] to-[#9b6400] text-white rounded-[28px] py-5 font-black text-lg"
            >
              Adicionar ao pedido
            </button>
          </div>
        </div>
      )}
    </div>
  )
}