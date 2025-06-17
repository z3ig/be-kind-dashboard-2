import React from 'react';

export default function BeKindDashboard() {
  return (
    <div className="space-y-6">
      <section className="bg-ops-gray p-6 rounded-lg shadow">
        <h2 className="text-xl font-headline text-ops-orange mb-2">Tydzień 1 – Outlet pełen życzliwości</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>□ 30.06 – Montaż i otwarcie Strefy Życzliwości (selfie spot, tablica, mirror wall)</li>
          <li>□ 30.06 – Start kampanii – spot + posty i stories</li>
          <li>□ 30.06 – Rozpoczęcie dystrybucji kartek z wyzwaniami</li>
          <li>□ 30.06 – Start podstrony kampanii</li>
          <li>□ 06.07 – Rozdawanie pierwszych gadżetów w aplikacji OPS</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-headline text-ops-orange mb-2">Tydzień 2 – Influencerzy + najemcy</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>□ 07–11.07 – Publikacja filmików influencerów (gesty, stories, reels)</li>
          <li>□ Cały tydzień – Aktywacja hashtagu #BeKind</li>
          <li>□ Cały tydzień – Miłe słowa od pracowników najemców (publikacje)</li>
          <li>□ Weekend – Mini konkurs na „najżyczliwsze powitanie”</li>
        </ul>
      </section>

      <section className="bg-ops-orange/10 p-6 rounded-lg shadow">
        <h2 className="text-xl font-headline text-ops-orange mb-2">Tydzień 3 – Miasto mówi Be Kind</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li>□ 14–17.07 – Wizyta ekipy OPS w mieście + zbieranie cytatów i nagrań</li>
          <li>□ Cały tydzień – Backstage i relacje influencerów z działań terenowych</li>
          <li>□ Weekend – Rolkowy kolaż: „Szczecin mówi Be Kind”</li>
        </ul>
      </section>
    </div>
  );
}
