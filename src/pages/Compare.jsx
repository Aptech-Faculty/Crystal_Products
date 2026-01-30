import { useState } from 'react';
import { crystals } from '../data/crystals';
import { RotateCcw, Check, ChevronDown } from 'lucide-react';

const Compare = () => {
    const [selections, setSelections] = useState([null, null, null]);

    const handleSelect = (index, crystalId) => {
        const newSelections = [...selections];
        newSelections[index] = crystalId;
        setSelections(newSelections);
    };

    const resetComparison = () => {
        setSelections([null, null, null]);
    };

    const getCrystal = (id) => crystals.find(c => c.id === id);

    const fields = [
        { label: 'Type', key: 'type' },
        { label: 'Color', key: 'color' },
        { label: 'Chakra', key: 'chakra' },
        { label: 'Healing', key: 'healing' },
        { label: 'Origin', key: 'origin' },
        { label: 'Hardness', key: 'hardness' },
        { label: 'Meaning', key: 'meaning' },
        { label: 'Price', key: 'price' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-10">
            <div className="bg-dark text-white min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center mb-12 -mt-10" style={{ backgroundImage: "url('/assets/images/627900ad284c7.webp')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl font-serif text-brand-gold mb-4">Compare Crystals</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Select up to three crystals to compare their energetic properties, origins, and healing benefits side-by-side.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12 hidden">
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <h2 className="font-serif text-xl text-dark">Comparison Table</h2>
                        <button
                            onClick={resetComparison}
                            className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            <RotateCcw size={18} /> Reset All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr>
                                    <th className="w-[15%] p-6 text-left text-gray-400 font-normal uppercase text-sm tracking-wider">Attributes</th>
                                    {[0, 1, 2].map((colIndex) => (
                                        <th key={colIndex} className="w-[28%] p-6 align-top">
                                            <div className="relative">
                                                <select
                                                    className="w-full p-3 pl-4 pr-10 border border-gray-200 rounded-xl appearance-none bg-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-medium text-dark cursor-pointer shadow-sm hover:border-gray-300"
                                                    value={selections[colIndex] || ''}
                                                    onChange={(e) => handleSelect(colIndex, e.target.value)}
                                                >
                                                    <option value="">Select Crystal...</option>
                                                    {crystals.map((c) => (
                                                        <option key={c.id} value={c.id}>{c.name}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>

                                            {selections[colIndex] && (
                                                <div className="mt-6 text-center animate-fade-in">
                                                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-brand-gold/20 mb-4 shadow-lg">
                                                        <img
                                                            src={getCrystal(selections[colIndex]).image}
                                                            alt={getCrystal(selections[colIndex]).name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h3 className="font-serif text-lg font-bold text-dark leading-tight">
                                                        {getCrystal(selections[colIndex]).name}
                                                    </h3>
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {fields.map((field) => (
                                    <tr key={field.key} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="p-6 text-gray-500 font-medium bg-gray-50/30 group-hover:bg-gray-50/50 transition-colors">
                                            {field.label}
                                        </td>
                                        {[0, 1, 2].map((colIndex) => {
                                            const crystal = selections[colIndex] ? getCrystal(selections[colIndex]) : null;
                                            return (
                                                <td key={colIndex} className="p-6 text-center align-middle">
                                                    {crystal ? (
                                                        <span className="text-dark font-medium animate-fade-in block">
                                                            {crystal[field.key]}
                                                        </span>
                                                    ) : (
                                                        <span className="text-gray-300 text-3xl font-light">-</span>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;
