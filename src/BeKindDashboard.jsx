import React from 'react';

export default function BeKindDashboard() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start min-h-screen flex flex-col justify-center px-8 bg-ops-orange text-white">
        <h2 className="text-3xl font-headline mb-4">Tydzień 1 – Outlet pełen życzliwości</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>□ 30.06 – Montaż i otwarcie Strefy Życzliwości</li>
          <li>□ 30.06 – Start kampanii – spot + posty i stories</li>
          <li>□ 30.06 – Dystrybucja kartek z wyzwaniami</li>
          <li>□ 30.06 – Start podstrony kampanii</li>
          <li>□ 06.07 – Rozdawanie gadżetów w aplikacji OPS</li>
        </ul>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center px-8 bg-white text-gray-900">
        <h2 className="text-3xl font-headline mb-4 text-ops-orange">Tydzień 2 – Influencerzy + najemcy</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>□ 07–11.07 – Publikacja filmików influencerów</li>
          <li>□ Cały tydzień – Aktywacja hashtagu #BeKind</li>
          <li>□ Miłe słowa od pracowników najemców</li>
          <li>□ Mini konkurs na „najżyczliwsze powitanie”</li>
        </ul>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center px-8 bg-ops-gray text-gray-900">
        <h2 className="text-3xl font-headline mb-4 text-ops-orange">Tydzień 3 – Miasto mówi Be Kind</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>□ 14–17.07 – Ekipa OPS w mieście + cytaty i nagrania</li>
          <li>□ Backstage i relacje influencerów</li>
          <li>□ Rolkowy kolaż: „Szczecin mówi Be Kind”</li>
        </ul>
      </section>
    </div>
  );
}
