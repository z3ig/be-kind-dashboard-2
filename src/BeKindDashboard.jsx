import React from 'react';

export default function BeKindDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Be Kind 2025 – Dashboard kampanii</h1>

      {/* Tydzień 1 */}
      <section className="rounded-2xl shadow p-4 border">
        <h2 className="text-xl font-semibold mb-2">Tydzień 1 – Outlet pełen życzliwości</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><input type="checkbox" className="mr-2" />30.06 – Montaż i otwarcie Strefy Życzliwości (selfie spot, tablica, mirror wall)</li>
          <li><input type="checkbox" className="mr-2" />30.06 – Start kampanii – spot + posty i stories</li>
          <li><input type="checkbox" className="mr-2" />30.06 – Rozpoczęcie dystrybucji kartek z wyzwaniami</li>
          <li><input type="checkbox" className="mr-2" />30.06 – Start podstrony kampanii</li>
          <li><input type="checkbox" className="mr-2" />06.07 – Rozdawanie pierwszych gadżetów w aplikacji OPS</li>
        </ul>
      </section>

      {/* Tydzień 2 */}
      <section className="rounded-2xl shadow p-4 border">
        <h2 className="text-xl font-semibold mb-2">Tydzień 2 – Influencerzy + najemcy</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><input type="checkbox" className="mr-2" />07–11.07 – Publikacja filmików influencerów (gesty, stories, reels)</li>
          <li><input type="checkbox" className="mr-2" />Cały tydzień – Aktywacja hashtagu #BeKind</li>
          <li><input type="checkbox" className="mr-2" />Cały tydzień – Miłe słowa od pracowników najemców (publikacje)</li>
          <li><input type="checkbox" className="mr-2" />Weekend – Mini konkurs na „najżyczliwsze powitanie”</li>
        </ul>
      </section>

      {/* Tydzień 3 */}
      <section className="rounded-2xl shadow p-4 border">
        <h2 className="text-xl font-semibold mb-2">Tydzień 3 – Miasto mówi Be Kind</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><input type="checkbox" className="mr-2" />14–17.07 – Wizyta ekipy OPS w mieście + zbieranie cytatów i nagrań</li>
          <li><input type="checkbox" className="mr-2" />Cały tydzień – Backstage i relacje influencerów z działań terenowych</li>
          <li><input type="checkbox" className="mr-2" />Weekend – Rolkowy kolaż: “Szczecin mówi Be Kind”</li>
        </ul>
      </section>

      {/* Tydzień 4 */}
      <section className="rounded-2xl shadow p-4 border">
        <h2 className="text-xl font-semibold mb-2">Tydzień 4 – Finał: Dobro się mnoży</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><input type="checkbox" className="mr-2" />21–25.07 – Współpraca z fundacją: zbiórka + wideo + foto</li>
          <li><input type="checkbox" className="mr-2" />Weekend – Publikacja recap rolki kampanii</li>
          <li><input type="checkbox" className="mr-2" />Weekend – Wyróżnienie najciekawszych postów z #BeKindOPS</li>
          <li><input type="checkbox" className="mr-2" />Weekend – Post z podziękowaniem i zapowiedź kontynuacji</li>
        </ul>
      </section>
    </div>
  );
}
