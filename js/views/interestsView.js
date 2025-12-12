export default function interestsView() {
  return `

    <section class="page interests">
        <h2>Places I've Been</h2>
        <div id="map" style="height: 400px; width: 100%; border-radius: 10px;"></div>
    </section>

    <section class="page interests">

      <div class="interest-section" id="opera-section">
        <h2>Favorite Opera Singers</h2>
        <div id="opera-list" class="cards-container"></div>
      </div>

      <div class="interest-section" id="sports-section">
        <h2>Favorite Footballers</h2>
        <div id="sports-list" class="cards-container"></div>
      </div>
    </section>
  `;
}
