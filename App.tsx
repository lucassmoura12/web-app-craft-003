import React, { useState, useMemo } from 'react';
import { 
  RECIPES, 
  INGREDIENT_DB, 
  CITY_COLORS 
} from './data';
import { 
  CartItem, 
  CityLogistics, 
  LogisticsItem,
  Recipe 
} from './types';
import { Icons } from './components/Icon';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(RECIPES[0].id);
  const [quantity, setQuantity] = useState<number>(100);

  // --- Logic ---

  const handleAddToCart = () => {
    if (quantity <= 0) return;
    
    setCart(prev => {
      const existing = prev.find(item => item.recipeId === selectedRecipeId);
      if (existing) {
        return prev.map(item => 
          item.recipeId === selectedRecipeId 
            ? { ...item, amount: item.amount + quantity } 
            : item
        );
      }
      return [...prev, { recipeId: selectedRecipeId, amount: quantity }];
    });
  };

  const handleRemoveFromCart = (recipeId: string) => {
    setCart(prev => prev.filter(item => item.recipeId !== recipeId));
  };

  const clearCart = () => setCart([]);

  // --- Logistics Calculation Core ---
  const logisticsData = useMemo(() => {
    const rawTotals: { [key: string]: number } = {};

    // 1. Calculate Raw Totals based on Cart
    cart.forEach(item => {
      const recipe = RECIPES.find(r => r.id === item.recipeId);
      if (!recipe) return;

      // Formula: (Desired Amount / Yield per Craft) = Number of Crafts
      // Crafts * Ingredient per Craft = Raw Needed
      const numberOfCrafts = Math.ceil(item.amount / recipe.yield);

      Object.entries(recipe.ingredients).forEach(([ingName, ingQty]) => {
        const totalRaw = numberOfCrafts * ingQty;
        rawTotals[ingName] = (rawTotals[ingName] || 0) + totalRaw;
      });
    });

    // 2. Apply RRR (25%) and Group by City
    const cityMap: CityLogistics = {};

    Object.entries(rawTotals).forEach(([ingName, rawTotal]) => {
      // RRR Logic: 25% Return Rate.
      // If I need 100 items, and I get 25 back, I really need to buy 75.
      // Formula: Buy = Ceil(Raw * (1 - 0.25)) = Ceil(Raw * 0.75)
      const buyTotal = Math.ceil(rawTotal * 0.75);

      const dbInfo = INGREDIENT_DB[ingName] || { 
        category: 'Outros', 
        city: 'Mercado', 
        note: 'Sem dados' 
      };

      const logItem: LogisticsItem = {
        name: ingName,
        rawTotal,
        buyTotal,
        category: dbInfo.category,
        note: dbInfo.note
      };

      if (!cityMap[dbInfo.city]) {
        cityMap[dbInfo.city] = [];
      }
      cityMap[dbInfo.city].push(logItem);
    });

    return cityMap;
  }, [cart]);

  // Order cities for display consistency
  const sortedCities = Object.keys(logisticsData).sort();

  return (
    <div className="min-h-screen bg-notag-dark text-slate-200 font-sans selection:bg-notag-gold selection:text-notag-dark pb-20">
      {/* Header */}
      <header className="bg-notag-card border-b border-slate-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-notag-gold rounded-lg text-notag-dark">
              <Icons.Calculator size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-wide">NOTAG <span className="text-notag-gold">CRAFT</span></h1>
              <p className="text-xs text-slate-400">Albion Online Logistics • 25% RRR</p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-xs font-mono text-notag-accent">HO SEM FOCO</div>
            <div className="text-xs text-slate-500">Guild Infrastructure</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Input & Cart */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Selector Card */}
          <div className="bg-notag-card rounded-xl shadow-xl border border-slate-700 p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Icons.Plus className="w-5 h-5 mr-2 text-notag-gold" />
              Adicionar Receita
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Selecione o Item</label>
                <select 
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-notag-gold focus:border-transparent outline-none transition-all"
                  value={selectedRecipeId}
                  onChange={(e) => setSelectedRecipeId(e.target.value)}
                >
                  <optgroup label="Poções">
                    {RECIPES.filter(r => r.type === 'Potion').map(r => (
                      <option key={r.id} value={r.id}>T{r.tier} - {r.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Comidas">
                    {RECIPES.filter(r => r.type === 'Food').map(r => (
                      <option key={r.id} value={r.id}>T{r.tier} - {r.name}</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Quantidade Desejada (Final)</label>
                <input 
                  type="number" 
                  min="1"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-notag-gold focus:border-transparent outline-none transition-all"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-notag-gold hover:bg-yellow-500 text-notag-dark font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-yellow-900/20"
              >
                <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                Adicionar ao Planejamento
              </button>
            </div>
          </div>

          {/* Cart Card */}
          <div className="bg-notag-card rounded-xl shadow-xl border border-slate-700 p-6">
             <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center">
                <Icons.Package className="w-5 h-5 mr-2 text-notag-accent" />
                Fila de Produção
              </h2>
              {cart.length > 0 && (
                <button 
                  onClick={clearCart}
                  className="text-xs text-red-400 hover:text-red-300 underline"
                >
                  Limpar
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-slate-500 border-2 border-dashed border-slate-700 rounded-lg">
                <p>Nenhum item adicionado.</p>
              </div>
            ) : (
              <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item, idx) => {
                  const recipe = RECIPES.find(r => r.id === item.recipeId);
                  return (
                    <li key={`${item.recipeId}-${idx}`} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 flex justify-between items-center group">
                      <div>
                        <div className="font-medium text-slate-200">{recipe?.name}</div>
                        <div className="text-sm text-slate-400">Qtd: <span className="text-notag-gold font-mono">{item.amount}</span></div>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.recipeId)}
                        className="p-2 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Icons.Trash2 size={18} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {/* Right Column: Logistics Output */}
        <div className="lg:col-span-8">
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Icons.MapPin className="w-7 h-7 mr-3 text-notag-accent" />
                Logística de Compra
              </h2>
              <div className="bg-slate-800 px-3 py-1 rounded border border-slate-600 text-xs text-slate-400 flex items-center">
                <Icons.TrendingDown size={14} className="mr-1 text-green-400" />
                RRR Aplicado: 25% (Compra 75%)
              </div>
           </div>

           {sortedCities.length === 0 ? (
             <div className="bg-notag-card rounded-xl border border-slate-700 p-12 text-center">
               <div className="inline-block p-4 bg-slate-800 rounded-full mb-4">
                 <Icons.MapPin size={48} className="text-slate-600" />
               </div>
               <h3 className="text-xl font-medium text-slate-300">Aguardando dados</h3>
               <p className="text-slate-500 mt-2">Adicione receitas à fila para calcular a logística de transporte.</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {sortedCities.map(city => {
                 const items = logisticsData[city];
                 const borderColor = CITY_COLORS[city] || 'border-slate-500';
                 const textColor = borderColor.replace('border-', 'text-');
                 
                 // Sort items by category for cleaner display
                 const sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));

                 return (
                   <div key={city} className={`bg-notag-card rounded-xl shadow-lg border-t-4 ${borderColor} p-0 overflow-hidden`}>
                     <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
                       <h3 className={`text-lg font-bold ${textColor} uppercase tracking-wider`}>{city}</h3>
                       <span className="text-xs bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-700">
                         {items.length} itens
                       </span>
                     </div>
                     <div className="p-4">
                       <table className="w-full text-sm">
                         <thead>
                           <tr className="text-left text-slate-500 border-b border-slate-700/50">
                             <th className="pb-2 font-medium">Ingrediente</th>
                             <th className="pb-2 font-medium text-right">Qtd. Compra</th>
                           </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-700/30">
                           {sortedItems.map((item, idx) => (
                             <tr key={idx} className="group hover:bg-slate-800/30 transition-colors">
                               <td className="py-3 pr-2">
                                 <div className="font-medium text-slate-200">{item.name}</div>
                                 <div className="text-xs text-slate-500 flex items-center mt-0.5">
                                    <span className="opacity-75">{item.category}</span>
                                    {item.note && (
                                      <>
                                        <span className="mx-1.5">•</span>
                                        <span className="text-notag-accent opacity-80">{item.note}</span>
                                      </>
                                    )}
                                 </div>
                               </td>
                               <td className="py-3 text-right">
                                 <div className="font-mono text-lg font-bold text-notag-gold">
                                   {item.buyTotal.toLocaleString()}
                                 </div>
                                 <div className="text-[10px] text-slate-600">
                                   Bruto: {item.rawTotal.toLocaleString()}
                                 </div>
                               </td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   </div>
                 );
               })}
             </div>
           )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-notag-dark/90 backdrop-blur border-t border-slate-800 py-3 px-6 text-center text-xs text-slate-500">
         <p>Desenvolvido para <span className="text-notag-gold font-bold">NOTAG</span> • Albion Online Utility Tool</p>
      </footer>
    </div>
  );
};

export default App;