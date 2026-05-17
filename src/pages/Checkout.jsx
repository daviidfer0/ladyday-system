import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  ArrowLeft,
  Trash2,
  MessageCircle,
  Bike,
  Store,
  CreditCard,
  MapPin
} from "lucide-react"

import logo from "../assets/logo.png"

const WHATSAPP = "5566999784837"

export default function Checkout() {
  const navigate = useNavigate()

  const [carrinho, setCarrinho] = useState([])
  const [tipoPedido, setTipoPedido] = useState("Entrega")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [endereco, setEndereco] = useState("")
  const [bairro, setBairro] = useState("")
  const [km, setKm] = useState(2.4)
  const [pagamento, setPagamento] = useState("Pix por QR Code")
  const [observacao, setObservacao] = useState("")

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("carrinhoLadyDay")) || []
    setCarrinho(itens)
  }, [])

  const subtotal = carrinho.reduce((acc, item) => {
    const valor = Number(item.preco.replace("R$", "").replace(",", "."))
    return acc + valor
  }, 0)

  const taxaEntrega =
    tipoPedido === "Entrega"
      ? Math.max(8, 8 + Math.ceil(Math.max(0, Number(km || 0) - 2.4)))
      : 0

  const total = subtotal + taxaEntrega

  function remover(index) {
    const novo = carrinho.filter((_, i) => i !== index)
    setCarrinho(novo)
    localStorage.setItem("carrinhoLadyDay", JSON.stringify(novo))
  }

  function limparCarrinho() {
    localStorage.removeItem("carrinhoLadyDay")
    setCarrinho([])
  }

  function finalizarPedido() {
    if (!nome || !telefone) {
      alert("Preencha nome e telefone.")
      return
    }

    if (tipoPedido === "Entrega" && (!endereco || !bairro)) {
      alert("Preencha endereço e bairro.")
      return
    }

    const itensTexto = carrinho.map((item, index) => {
      const adicionais =
        item.adicionais && item.adicionais.length > 0
          ? `\n➕ Adicionais: ${item.adicionais.join(", ")}`
          : ""

      const molho = item.molho ? `\n🥫 Molho: ${item.molho}` : ""

      const obs = item.observacao ? `\n📝 Obs: ${item.observacao}` : ""

      return `${index + 1}. ${item.quantidade}x ${item.nome}
💰 ${item.preco}${molho}${adicionais}${obs}`
    }).join("\n\n")

    const mensagem = `
🛍️ *NOVO PEDIDO - LADY DAY*

━━━━━━━━━━━━━━

👤 *Cliente:* ${nome}
📞 *Telefone:* ${telefone}
🛵 *Tipo:* ${tipoPedido}
${tipoPedido === "Entrega" ? `📍 *Endereço:* ${endereco}\n🏘️ *Bairro:* ${bairro}\n📏 *KM:* ${km}` : "🏪 *Retirada na loja*"}
💳 *Pagamento:* ${pagamento}

━━━━━━━━━━━━━━

${itensTexto}

━━━━━━━━━━━━━━

💰 *Subtotal:* R$ ${subtotal.toFixed(2)}
🚚 *Entrega:* R$ ${taxaEntrega.toFixed(2)}
🧾 *TOTAL:* R$ ${total.toFixed(2)}

━━━━━━━━━━━━━━

📝 *Observações gerais:*
${observacao || "Nenhuma"}

❤️ Obrigado por pedir na Lady Day!
`

    const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`
    window.open(link, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#f4ead9] pb-44">
      <div className="bg-[#f4ead9]">
        <div className="p-5">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-5 font-black text-[#4a2b0b]"
          >
            <ArrowLeft />
            Voltar
          </button>

          <div className="flex items-center justify-between">
            <img src={logo} className="w-36" />

            <button
              onClick={limparCarrinho}
              className="bg-red-500 text-white p-3 rounded-2xl"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="bg-gradient-to-br from-[#d49d17] to-[#9b6400] rounded-[40px] p-7 text-white shadow-2xl mb-6">
          <h1 className="text-4xl font-black leading-none mb-3">
            Finalizar
            <br />
            Pedido
          </h1>

          <p className="opacity-95">
            Confira suas informações antes de enviar.
          </p>
        </div>

        <div className="bg-[#fffaf3] border border-[#ead7b6] rounded-[35px] p-5 shadow-md mb-5">
          <h2 className="text-2xl font-black text-[#2d1b08] mb-5">
            Como deseja receber?
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTipoPedido("Entrega")}
              className={`rounded-3xl p-5 border ${
                tipoPedido === "Entrega"
                  ? "bg-gradient-to-br from-[#d49d17] to-[#9b6400] text-white border-[#d49d17]"
                  : "bg-white border-[#ead7b6]"
              }`}
            >
              <Bike className="mx-auto mb-2" />
              <strong>Entrega</strong>
            </button>

            <button
              onClick={() => setTipoPedido("Retirada")}
              className={`rounded-3xl p-5 border ${
                tipoPedido === "Retirada"
                  ? "bg-gradient-to-br from-[#d49d17] to-[#9b6400] text-white border-[#d49d17]"
                  : "bg-white border-[#ead7b6]"
              }`}
            >
              <Store className="mx-auto mb-2" />
              <strong>Retirada</strong>
            </button>
          </div>
        </div>

        <div className="bg-[#fffaf3] border border-[#ead7b6] rounded-[35px] p-5 shadow-md mb-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-black text-[#2d1b08]">
              Seu pedido
            </h2>

            <span className="text-[#7a6040] font-bold">
              {carrinho.length} item(ns)
            </span>
          </div>

          <div className="grid gap-4">
            {carrinho.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-4 border border-[#ead7b6]"
              >
                <div className="flex justify-between gap-3">
                  <div>
                    <h3 className="font-black text-xl text-[#2d1b08]">
                      {item.quantidade}x {item.nome}
                    </h3>

                    <p className="text-[#7a6040] text-sm mt-2">
                      {item.desc}
                    </p>

                    {item.molho && (
                      <p className="text-sm mt-2">🥫 {item.molho}</p>
                    )}

                    {item.adicionais && item.adicionais.length > 0 && (
                      <p className="text-sm mt-2">
                        ➕ {item.adicionais.join(", ")}
                      </p>
                    )}

                    {item.observacao && (
                      <p className="text-sm mt-2">📝 {item.observacao}</p>
                    )}
                  </div>

                  <div className="text-right">
                    <strong className="text-[#c88708] text-lg">
                      {item.preco}
                    </strong>

                    <button
                      onClick={() => remover(i)}
                      className="block ml-auto mt-4 text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#ead7b6] mt-5 pt-5 grid gap-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <strong>R$ {subtotal.toFixed(2)}</strong>
            </div>

            <div className="flex justify-between">
              <span>Entrega</span>
              <strong>R$ {taxaEntrega.toFixed(2)}</strong>
            </div>

            <div className="flex justify-between text-2xl font-black text-[#c88708] pt-2">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#fffaf3] border border-[#ead7b6] rounded-[35px] p-5 shadow-md mb-5 grid gap-4">
          <h2 className="text-2xl font-black text-[#2d1b08]">
            Seus dados
          </h2>

          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="bg-white border border-[#ead7b6] rounded-2xl p-4 outline-none"
          />

          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
            className="bg-white border border-[#ead7b6] rounded-2xl p-4 outline-none"
          />

          {tipoPedido === "Entrega" && (
            <>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-[#a88755]" />

                <input
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  placeholder="Rua e número"
                  className="w-full bg-white border border-[#ead7b6] rounded-2xl py-4 pl-12 pr-4 outline-none"
                />
              </div>

              <input
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro"
                className="bg-white border border-[#ead7b6] rounded-2xl p-4 outline-none"
              />

              <input
                type="number"
                step="0.1"
                value={km}
                onChange={(e) => setKm(e.target.value)}
                placeholder="Distância em KM"
                className="bg-white border border-[#ead7b6] rounded-2xl p-4 outline-none"
              />
            </>
          )}

          <div className="relative">
            <CreditCard className="absolute left-4 top-4 text-[#a88755]" />

            <select
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
              className="w-full bg-white border border-[#ead7b6] rounded-2xl py-4 pl-12 pr-4 outline-none"
            >
              <option>Pix por QR Code</option>
              <option>Pix por CNPJ</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
              <option>Dinheiro</option>
            </select>
          </div>

          <textarea
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            placeholder="Observações gerais..."
            className="bg-white border border-[#ead7b6] rounded-2xl p-4 outline-none min-h-[120px]"
          />
        </div>
      </div>

      <button
        onClick={finalizarPedido}
        className="fixed bottom-5 left-5 right-5 bg-[#25D366] text-white rounded-[30px] py-5 font-black text-lg shadow-2xl flex items-center justify-center gap-3"
      >
        <MessageCircle />
        Enviar pedido no WhatsApp
      </button>
    </div>
  )
}