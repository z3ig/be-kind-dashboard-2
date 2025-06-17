import React, { useEffect, useState } from 'react';

const tasks = [
  {
    title: 'Tydzień 1 – Outlet pełen życzliwości',
    color: 'bg-ops-orange text-white',
    items: [
      '30.06 – Montaż i otwarcie Strefy Życzliwości',
      '30.06 – Start kampanii – spot + posty i stories',
      '30.06 – Dystrybucja kartek z wyzwaniami',
      '30.06 – Start podstrony kampanii',
      '06.07 – Rozdawanie gadżetów w aplikacji OPS'
    ]
  },
  {
    title: 'Tydzień 2 – Influencerzy + najemcy',
    color: 'bg-white text-gray-900',
    items: [
      '07–11.07 – Publikacja filmików influencerów',
      'Cały tydzień – Aktywacja hashtagu #BeKind',
      'Miłe słowa od pracowników najemców',
      'Mini konkurs na „najżyczliwsze powitanie”'
    ]
  },
  {
    title: 'Tydzień 3 – Miasto mówi Be Kind',
    color: 'bg-ops-gray text-gray-900',
    items: [
      '14–17.07 – Ekipa OPS w mieście + cytaty i nagrania',
      'Backstage i relacje influencerów',
      'Rolkowy kolaż: „Szczecin mówi Be Kind”'
    ]
  },
  {
    title: 'Tydzień 4 – Finał: Dobro się mnoży',
    color: 'bg-ops-orange/20 text-gray-900',
    items: [
      '21–25.07 – Współpraca z fundacją: zbiórka + wideo + foto',
      'Weekend – Publicacja recap rolki kampanii'
    ]
  }
];

export default function BeKindDashboard() {
  const [checked, setChecked] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bekind-checks') || '{}');
    setChecked(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('bekind-checks', JSON.stringify(checked));
  }, [checked]);

  const toggleCheck = (key) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`${dark ? 'dark' : ''} font-sans`}>
      <div className="p-4 flex justify-between items-center sticky top-0 z-10 bg-white dark:bg-gray-900 border-b">
        <h1 className="text-xl font-bold text-ops-orange">Be Kind 2025 – Dashboard</h1>
        <div className="space-x-2">
          <button onClick={() => setDark(d => !d)} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
            {dark ? '☀ Jasny' : '🌙 Ciemny'}
          </button>
          <button onClick={() => window.print()} className="px-3 py-1 bg-ops-orange text-white rounded">
            📄 Eksportuj do PDF
          </button>
        </div>
      </div>

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {tasks.map((week, idx) => (
          <section key={idx} className={`snap-start min-h-screen flex flex-col justify-center px-8 py-16 ${week.color} dark:bg-gray-800 dark:text-white`}>
            <h2 className="text-3xl font-headline mb-4">{week.title}</h2>
            <ul className="space-y-3 text-lg">
              {week.items.map((item, i) => {
                const key = `${idx}_${i}`;
                return (
                  <li key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 w-5 h-5 accent-[#ff6600] form-checkbox rounded border-white"
                      checked={checked[key] || false}
                      onChange={() => toggleCheck(key)}
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}