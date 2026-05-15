export default function LadyDaySistema() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="bg-red-600 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Lady Day Pastéis e Panquecas
          </h1>

          <p className="mt-2 text-lg opacity-90">
            Sistema completo estilo Anota.ai
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Painel Administrativo
            </h2>

            <div className="space-y-4">
              <div className="border rounded-2xl p-4">
                <h3 className="font-semibold text-lg">
                  Adicionar Produto
                </h3>

                <div className="grid gap-3 mt-3">
                  <input
                    className="border p-3 rounded-xl"
                    placeholder="Nome do pastel"
                  />

                  <textarea
                    className="border p-3 rounded-xl"
                    placeholder="Ingredientes"
                  />

                  <input
                    className="border p-3 rounded-xl"
                    placeholder="Preço"
                  />

                  <input
                    className="border p-3 rounded-xl"
                    placeholder="URL da foto"
                  />

                  <button className="bg-red-600 text-white rounded-xl py-3 font-semibold">
                    Salvar Produto
                  </button>
                </div>
              </div>

              <div className="border rounded-2xl p-4">
                <h3 className="font-semibold text-lg">
                  Pedidos Recebidos
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="bg-zinc-100 rounded-2xl p-4">
                    <p className="font-semibold">
                      Pedido #1024
                    </p>

                    <p>1x Pastel de Carne</p>

                    <p>+ Queijo Extra</p>

                    <p>Total: R$ 32,00</p>

                    <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl">
                      Finalizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Área do Cliente
            </h2>

            <div className="space-y-4">
              <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-4">
                <h3 className="font-bold text-xl">
                  Promoção do Dia
                </h3>

                <p>
                  2 Pastéis + Refrigerante por R$ 39,90
                </p>
              </div>

              <div className="grid gap-4">
                <div className="border rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">
                      Pastel de Carne
                    </h3>

                    <p className="text-sm text-zinc-600">
                      Carne, queijo e temperos
                    </p>

                    <p className="font-semibold mt-1">
                      R$ 18,00
                    </p>
                  </div>

                  <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
                    Adicionar
                  </button>
                </div>

                <div className="border rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">
                      Pastel de Frango
                    </h3>

                    <p className="text-sm text-zinc-600">
                      Frango, catupiry e milho
                    </p>

                    <p className="font-semibold mt-1">
                      R$ 20,00
                    </p>
                  </div>

                  <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="border rounded-2xl p-4 bg-zinc-50">
                <h3 className="font-bold text-lg">
                  Carrinho
                </h3>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>1x Pastel de Carne</span>

                    <span>R$ 18,00</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Taxa de entrega</span>

                    <span>R$ 5,00</span>
                  </div>
                </div>

                <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>

                  <span>R$ 23,00</span>
                </div>

                <a
                  href="https://wa.me/5566999784837"
                  target="_blank"
                  className="block text-center mt-4 bg-green-600 text-white py-3 rounded-2xl font-bold"
                >
                  Finalizar no WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
