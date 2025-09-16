let sectionCount = 0;
const imageOptions = [
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_zona_wiz2.jpg",
        alt: "Lustro Multiline Zona - wizualizacja 2"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz4_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 4"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_zona_wiz1.jpg",
        alt: "Lustro Multiline Zona - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz2_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 2"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz3_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 3"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz1_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz4.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 4 alternatywna"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_sid_wiz3.jpg",
        alt: "Lustro Multiline Sid - wizualizacja 3"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_sid_wiz5_1_.jpg",
        alt: "Lustro Multiline Sid - wizualizacja 5"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_sid_wiz1_1_.jpg",
        alt: "Lustro Multiline Sid - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_orbita_lux_wiz7.jpg",
        alt: "Lustro Multiline Orbita Lux - wizualizacja 7"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_orbita_amb_wiz4.jpg",
        alt: "Lustro Multiline Orbita Ambient - wizualizacja 4"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_moon__wiz5.jpg",
        alt: "Lustro Multiline Moon - wizualizacja 5"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_moon__wiz3.jpg",
        alt: "Lustro Multiline Moon - wizualizacja 3"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_moon__wiz1.jpg",
        alt: "Lustro Multiline Moon - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_longer_sand_wiz1.jpg",
        alt: "Lustro Multiline Longer Sand - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_longer_wiz1.jpg",
        alt: "Lustro Multiline Longer - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_kinu_wiz1.jpg",
        alt: "Lustro Multiline Kinu - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_ceres_sand_wiz1.jpg",
        alt: "Lustro Multiline Ceres Sand - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_ceres_wiz1.jpg",
        alt: "Lustro Multiline Ceres - wizualizacja 1"
    }
];

const advantagesOptions = [
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/4_V_mikro_fuga.png",
        alt: "V-fuga",
        title: "V-fuga",
        desc: "Podkreśla naturalny rysunek deski; eleganckie wykończenie i lepsza optyka podłogi."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC3.png",
        alt: "Klasa ścieralności AC3",
        title: "Klasa ścieralności AC3",
        desc: "Panele laminowane do sypialni i gabinetów; umiarkowany ruch."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC4.png",
        alt: "Klasa ścieralności AC4",
        title: "Klasa ścieralności AC4",
        desc: "Trwałe panele do salonów i korytarzy; wysoka odporność na zużycie."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC5.png",
        alt: "Klasa ścieralności AC5",
        title: "Klasa ścieralności AC5",
        desc: "Bardzo wytrzymałe panele do biur i lokali; intensywny ruch."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC6.png",
        alt: "Klasa ścieralności AC6",
        title: "Klasa ścieralności AC6",
        desc: "Najwyższa odporność; podłogi do obiektów o bardzo dużym natężeniu ruchu."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r9.png",
        alt: "Antypoślizgowość R9",
        title: "Antypoślizgowość R9",
        desc: "Do suchych wnętrz; korytarze, sypialnie i kuchnie o lekkim ruchu."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r10.png",
        alt: "Antypoślizgowość R10",
        title: "Antypoślizgowość R10",
        desc: "Do kuchni i łazienek; bezpieczna przy codziennym użytkowaniu, umiarkowany ruch."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r11.png",
        alt: "Antypoślizgowość R11",
        title: "Antypoślizgowość R11",
        desc: "Dla stref mokrych; tarasy, wejścia i garaże z wysoką przyczepnością."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r12.png",
        alt: "Antypoślizgowość R12",
        title: "Antypoślizgowość R12",
        desc: "Do zapleczy, warsztatów i kuchni profi; bardzo wysoka trakcja na mokrym."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r13.png",
        alt: "Antypoślizgowość R13",
        title: "Antypoślizgowość R13",
        desc: "Do przemysłu i stref pochyłych; maksymalna przyczepność w trudnych warunkach."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_2.png",
        alt: "Gwarancja 2 lata",
        title: "Gwarancja 2 lata",
        desc: "Gwarancja 1 rok zapewnia podstawową ochronę; szybka naprawa lub wymiana przy usterce."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_3.png",
        alt: "Gwarancja 3 lata",
        title: "Gwarancja 3 lata",
        desc: "Gwarancja 3 lata zwiększa spokój użytkowania; serwis i wsparcie producenta bez problemu."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_5.png",
        alt: "Gwarancja 5 lat",
        title: "Gwarancja 5 lat",
        desc: "Gwarancja 5 lat to solidna ochrona inwestycji; pewna jakość i mniejsze ryzyko kosztów."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_20.png",
        alt: "Gwarancja 20 lat",
        title: "Gwarancja 20 lat",
        desc: "Gwarancja 20 lat podkreśla trwałość produktu; długoterminowe bezpieczeństwo zakupu."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_25.png",
        alt: "Gwarancja 25 lat",
        title: "Gwarancja 25 lat",
        desc: "Gwarancja 25 lat zapewnia długą ochronę; potwierdzona trwałość i spokój użytkowania na dekady."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_30.png",
        alt: "Gwarancja 30 lat",
        title: "Gwarancja 30 lat",
        desc: "Gwarancja 30 lat daje maksymalny spokój; wyjątkowa wytrzymałość potwierdzona producentem."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_dozywotnia.png",
        alt: "Gwarancja dożywotnia",
        title: "Gwarancja dożywotnia",
        desc: "Gwarancja dożywotnia zapewnia najdłuższą ochronę; pewność jakości na cały okres użytkowania."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_21.png",
        alt: "Klasa użyteczności 21",
        title: "Klasa użyteczności 21",
        desc: "Klasa użyteczności 21 do sypialni i gabinetów domowych; niski ruch, podstawowa odporność."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_22.png",
        alt: "Klasa użyteczności 22",
        title: "Klasa użyteczności 22",
        desc: "Klasa użyteczności 22 do salonów i jadalni; średni ruch, trwałość na co dzień."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_23.png",
        alt: "Klasa użyteczności 23",
        title: "Klasa użyteczności 23",
        desc: "Klasa użyteczności 23 do kuchni i korytarzy; wysoki ruch w domu, dobra odporność."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_31.png",
        alt: "Klasa użyteczności 31",
        title: "Klasa użyteczności 31",
        desc: "Klasa użyteczności 31 do biur i poczekalni; lekki ruch komercyjny, ekonomiczny wybór."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_32.png",
        alt: "Klasa użyteczności 32",
        title: "Klasa użyteczności 32",
        desc: "Klasa użyteczności 32 do sklepów i biur; średni ruch, wyższa trwałość w obiektach."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_33.png",
        alt: "Klasa użyteczności 33",
        title: "Klasa użyteczności 33",
        desc: "Klasa użyteczności 33 do galerii, restauracji; intensywny ruch, bardzo wysoka odporność."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_41.png",
        alt: "Klasa użyteczności 41",
        title: "Klasa użyteczności 41",
        desc: "Klasa użyteczności 41 do magazynów; lekki przemysł, odporność na obciążenia."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_42.png",
        alt: "Klasa użyteczności 42",
        title: "Klasa użyteczności 42",
        desc: "Klasa użyteczności 42 do hal produkcyjnych; średni przemysł, wysoka trwałość."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_43.png",
        alt: "Klasa użyteczności 43",
        title: "Klasa użyteczności 43",
        desc: "Klasa użyteczności 43 do ciężkiego przemysłu; ekstremalny ruch i obciążenia."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Latwe_czyszczenie.png",
        alt: "Łatwe czyszczenie",
        title: "Łatwe czyszczenie",
        desc: "Gwarantuje szybkie usuwanie plam i kurzu; idealne dla rodzin i pupili."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Ogrzewanie_podlogowe.png",
        alt: "Ogrzewanie podłogowe",
        title: "Ogrzewanie podłogowe",
        desc: "Świetnie przewodzą ciepło i są przyjemne w dotyku; komfort termiczny każdego dnia."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Recykling.png",
        alt: "100% Recyclable",
        title: "100% Recyclable",
        desc: "Oznacza pełną możliwość recyklingu; ekologiczny wybór bez kompromisów."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Redukcja_nadmiaru_halasu.png",
        alt: "Izolacja akustyczna",
        title: "Izolacja akustyczna",
        desc: "Redukuje hałas kroków; większy komfort w mieszkaniu i biurze."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/System_montazu.png",
        alt: "Łatwy montaż na klik",
        title: "Łatwy montaż na klik",
        desc: "Przyspiesza układanie podłogi; bez kleju, samodzielnie i czysto."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Wodoodporna.png",
        alt: "Wodoodporność",
        title: "Wodoodporność",
        desc: "Chroni przed zalaniami i plamami; idealna do kuchni, łazienek i przedpokojów."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Zintegrowany_podklad.png",
        alt: "Zintegrowany podkład",
        title: "Zintegrowany podkład",
        desc: "Poprawia akustykę i wyrównuje drobne nierówności; oszczędza czas i koszt."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/230c.png",
        alt: "Podłączenie 230 V",
        title: "Podłączenie 230 V",
        desc: "Standardowa instalacja domowa; szybki montaż, zgodność z gniazdami w Polsce i bezpieczeństwo."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/3000K.png",
        alt: "Barwa ciepła 3000 K",
        title: "Barwa ciepła 3000 K",
        desc: "Tworzy przytulny klimat; idealna do relaksu, makijażu i wieczornego oświetlenia."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/4000K.png",
        alt: "Barwa ciepła 4000 K",
        title: "Barwa ciepła 4000 K",
        desc: "Neutralne, naturalne światło; wierne kolory i komfort codziennego użytkowania."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Anti_fog.png",
        alt: "Mata antyparowa",
        title: "Mata antyparowa",
        desc: "Szyby nie zaparują po kąpieli; klarowny obraz i wygoda w łazience bez czekania."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Led_24v.png",
        alt: "24 V DC LED",
        title: "24 V DC LED",
        desc: "Bezpieczne, niskonapięciowe zasilanie; stabilna praca, także w strefach mokrych i wilgotnych."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Led_life.png",
        alt: "Żywotność LED 30000 h",
        title: "Żywotność LED 30000 h",
        desc: "Długie, bezobsługowe świecenie; mniej wymian i stały komfort użytkowania przez lata."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Moc.png",
        alt: "Moc 15–23,8 W ",
        title: "Moc 15–23,8 W ",
        desc: "Wydajne i oszczędne oświetlenie; dobra jasność przy niskim zużyciu energii elektrycznej."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Wlacznik.png",
        alt: "Włącznik",
        title: "Włącznik",
        desc: "Wygodne sterowanie podświetleniem lustra; szybkie włączanie i wyłączanie jednym kliknięciem."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Obrot.png",
        alt: "Montaż w dowolnym położeniu",
        title: "Montaż w dowolnym położeniu",
        desc: "Instalacja pionowo lub poziomo; dopasowanie do przestrzeni bez kompromisów."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_1.png",
        alt: "Klasa PEI 1",
        title: "Klasa PEI 1",
        desc: "Do ścian i stref bez obuwia; łazienki, sypialnie. Niewskazana na podłogi o ruchu pieszym."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_2.png",
        alt: "Klasa PEI 2",
        title: "Klasa PEI 2",
        desc: "Do podłóg w domach o lekkim ruchu; łazienki, sypialnie. Nie zalecana do kuchni i korytarzy."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_3.png",
        alt: "Klasa PEI 3",
        title: "Klasa PEI 3",
        desc: "Do mieszkań o średnim ruchu; kuchnie, korytarze, salony. Dobra odporność na ścieranie."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_4.png",
        alt: "Klasa PEI 4",
        title: "Klasa PEI 4",
        desc: "Uniwersalne do domów i lokali; korytarze, sklepy, biura. Wysoka odporność na ścieranie."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_5.png",
        alt: "Klasa PEI 5",
        title: "Klasa PEI 5",
        desc: "Do intensywnego ruchu; centra handlowe, wejścia, lokale usługowe. Maksymalna trwałość."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Mrozoodporne.png",
        alt: "Mrozoodporne",
        title: "Mrozoodporne",
        desc: "Bezpieczne na zewnątrz; tarasy, balkony, schody. Nie pękają przy spadkach temperatur."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Rektyfikacja.png",
        alt: "Rektyfikowane",
        title: "Rektyfikowane",
        desc: "Precyzyjnie docięte krawędzie; wąskie fugi, elegancki efekt i łatwiejsze utrzymanie czystości."
    }
];



function addTextSection() {
  const container = document.getElementById('sectionsContainer');
  const sectionId = `section-${sectionCount++}`;
  const textareaId = `textarea-${sectionId}`;

  const div = document.createElement('div');
  div.className = 'section-block';
  div.setAttribute('data-id', sectionId);
  div.innerHTML = `
    <div class="section-actions">
      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="moveUp(this)">⬆</button>
      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="moveDown(this)">⬇</button>
      <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeSection(this)">🗑️</button>
    </div>
    <h5>Sekcja tekstowa</h5>
    <div class="mb-2">
      <label class="form-label">Rodzaj tagu:</label>
      <select class="form-select" name="sections[${sectionId}][tag]" onchange="toggleListTitle(this)">
        <option value="p">p</option>
        <option value="strong">strong</option>
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="ul">Lista wypunktowana (ul)</option>
        <option value="ol">Lista numerowana (ol)</option>
      </select>
    </div>
    <div class="mb-2 list-title" style="display:none">
      <label class="form-label">Nagłówek listy:</label>
      <input type="text" class="form-control" name="sections[${sectionId}][list_heading]">
    </div>
    <div class="mb-2">
      <label class="form-label d-flex justify-content-between">
        <span>Treść:</span>
        <button type="button" class="btn btn-sm btn-outline-dark" onclick="wrapInBold('${textareaId}')"><strong>B</strong></button>
      </label>
      <textarea id="${textareaId}" class="form-control" name="sections[${sectionId}][content]" rows="4"></textarea>
    </div>
    <div class="mb-2">
      <label class="form-label">Klasa CSS:</label>
      <input type="text" class="form-control" name="sections[${sectionId}][class]">
    </div>
    <input type="hidden" name="sections[${sectionId}][type]" value="text">
  `;
  container.appendChild(div);
}

function addImageSection() {
  const container = document.getElementById('sectionsContainer');
  const sectionId = `section-${sectionCount++}`;

  const imageOptionsHtml = imageOptions.map((img, index) =>
      `<option value="${index}">${img.alt}</option>`
  ).join('');

  const div = document.createElement('div');
  div.className = 'section-block';
  div.setAttribute('data-id', sectionId);
  div.innerHTML = `
    <div class="section-actions">
      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="moveUp(this)">⬆</button>
      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="moveDown(this)">⬇</button>
      <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeSection(this)">🗑️</button>
    </div>
    <h5>Sekcja obrazkowa</h5>
    <div class="mb-3">
        <label class="form-label">Wybierz zdjęcie z listy:</label>
        <select class="form-select" onchange="updateImageDetails(this, '${sectionId}')">
            <option value="">-- Wybierz lub wypełnij ręcznie --</option>
            ${imageOptionsHtml}
        </select>
    </div>
    <div class="mb-2">
      <label class="form-label">URL obrazka:</label>
      <input type="text" class="form-control" name="sections[${sectionId}][url]" placeholder="https://example.com/image.jpg">
    </div>
    <div class="mb-2">
      <label class="form-label">Alt:</label>
      <input type="text" class="form-control" name="sections[${sectionId}][alt]" placeholder="Opis alternatywny">
    </div>
    <div class="row g-2">
      <div class="col-md-12">
        <label class="form-label">Szerokość (width):</label>
        <input type="number" class="form-control" name="sections[${sectionId}][width]" value="1080">
      </div>
    </div>
    <div class="mb-2 mt-2">
      <label class="form-label">Klasa CSS (dla sekcji image-item):</label>
      <input type="text" class="form-control" name="sections[${sectionId}][class]">
    </div>
    <div class="mt-3">
        <img src="" alt="Podgląd wybranego obrazka" style="max-width: 100%; display: none;" class="image-preview">
    </div>
    <input type="hidden" name="sections[${sectionId}][type]" value="image">
  `;
  container.appendChild(div);
}

function updateImageDetails(select, sectionId) {
    const section = select.closest('.section-block');
    const index = select.value;
    const preview = section.querySelector('.image-preview');

    if (index === '') {
        section.querySelector(`input[name="sections[${sectionId}][url]"]`).value = '';
        section.querySelector(`input[name="sections[${sectionId}][alt]"]`).value = '';
        preview.style.display = 'none';
        return;
    }

    const imageData = imageOptions[index];
    section.querySelector(`input[name="sections[${sectionId}][url]"]`).value = imageData.url;
    section.querySelector(`input[name="sections[${sectionId}][alt]"]`).value = imageData.alt;
    
    preview.src = imageData.url;
    preview.alt = imageData.alt;
    preview.style.display = 'block';
}

function addAdvantagesSection() {
  const container = document.getElementById('sectionsContainer');
  const sectionId = `section-${sectionCount++}`;

  const div = document.createElement('div');
  div.className = 'section-block';
  div.setAttribute('data-id', sectionId);
  div.innerHTML = `
    <div class="section-actions">
      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="moveUp(this)">⬆</button>
      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="moveDown(this)">⬇</button>
      <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeSection(this)">🗑️</button>
    </div>
    <h5>Sekcja zalet</h5>
    <div class="advantages-container mb-3"></div>
    <button type="button" class="btn btn-sm btn-outline-primary" onclick="addAdvantageItem(this, '${sectionId}')">➕ Dodaj zaletę</button>
    <input type="hidden" name="sections[${sectionId}][type]" value="advantages">
  `;
  container.appendChild(div);
}

function addAdvantageItem(button, sectionId) {
  const container = button.parentElement.querySelector('.advantages-container');
  const index = container.children.length;
  const selectId = `select-${sectionId}-${index}`;
  const hiddenId = `hidden-${sectionId}-${index}`;

  const optionElements = advantagesOptions.map((opt, i) => `<option value="${i}">${opt.title}</option>`).join('');

  const item = document.createElement('div');
  item.className = 'border rounded p-2 my-2 bg-white';
  item.innerHTML = `
    <div class="mb-2">
      <label class="form-label">Wybierz zaletę:</label>
      <select class="form-select" id="${selectId}" onchange="updateHiddenFields('${selectId}', '${hiddenId}', '${sectionId}', '${index}')">
        <option value="">-- Wybierz --</option>
        ${optionElements}
      </select>
    </div>
    <div id="${hiddenId}">
      <input type="hidden" name="sections[${sectionId}][items][${index}][src]">
      <input type="hidden" name="sections[${sectionId}][items][${index}][alt]">
      <input type="hidden" name="sections[${sectionId}][items][${index}][title]">
      <input type="hidden" name="sections[${sectionId}][items][${index}][desc]">
    </div>
  `;
  container.appendChild(item);
}

function updateHiddenFields(selectId, hiddenId, sectionId, index) {
  const selectedIndex = document.getElementById(selectId).value;
  if (selectedIndex === "") return;

  const option = advantagesOptions[selectedIndex];
  const wrapper = document.getElementById(hiddenId);

  wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][src]"]`).value = option.src;
  wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][alt]"]`).value = option.alt;
  wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][title]"]`).value = option.title;
  wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][desc]"]`).value = option.desc;
}



function toggleListTitle(select) {
  const wrapper = select.closest('.section-block');
  const listTitle = wrapper.querySelector('.list-title');
  if (select.value === 'ul' || select.value === 'ol') {
    listTitle.style.display = 'block';
  } else {
    listTitle.style.display = 'none';
  }
}

function moveUp(button) {
  const section = button.closest('.section-block');
  const prev = section.previousElementSibling;
  if (prev) section.parentNode.insertBefore(section, prev);
}

function moveDown(button) {
  const section = button.closest('.section-block');
  const next = section.nextElementSibling;
  if (next) section.parentNode.insertBefore(next, section);
}

function removeSection(button) {
  const section = button.closest('.section-block');
  section.remove();
}

function wrapInBold(textareaId) {
  const textarea = document.getElementById(textareaId);
  const start = textarea.selectionStart ?? 0;
  const end = textarea.selectionEnd ?? 0;
  const selected = textarea.value.substring(start, end);
  const before = textarea.value.substring(0, start);
  const after = textarea.value.substring(end);
  const wrapped = `[b]${selected}[/b]`;
  textarea.value = before + wrapped + after;
  textarea.selectionStart = textarea.selectionEnd = before.length + wrapped.length;
  textarea.focus();
}

// ======== Generator: składanie HTML ========

function escapeHtml(s = '') {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function bbcodeToHtml(raw = '') {
  let s = escapeHtml(raw);
  s = s.replaceAll('[b]', '<strong>').replaceAll('[/b]', '</strong>');
  return s;
}

function buildList(tag, textContent, listHeading, cssClass) {
  const items = textContent
    .split(/\r?\n/)
    .map(t => t.trim())
    .filter(Boolean)
    .map(li => `<li>${bbcodeToHtml(li)}</li>`)
    .join('');

  const heading = listHeading && listHeading.trim()
    ? `<h3>${escapeHtml(listHeading.trim())}</h3>`
    : '';

  const cls = cssClass && cssClass.trim()
    ? ` class="${escapeHtml(cssClass.trim())}"`
    : '';

  return `${heading}<${tag}${cls}>${items}</${tag}>`;
}

function wrapInTextLayout(innerHtml) {
  return (
`<section class="section">
  <div class="item item-6">
    <section class="text-item">
      ${innerHtml}
    </section>
  </div>
</section>`
  );
}

function generateHTML(event) {
  event?.preventDefault?.();

  const blocks = document.querySelectorAll('#sectionsContainer .section-block');
  const chunks = [];

  blocks.forEach(block => {
    const type = block.querySelector('input[type="hidden"][name*="[type]"]')?.value;

    if (type === 'text') {
      const tag = (block.querySelector('select[name*="[tag]"]')?.value || 'p').trim();
      const contentRaw = block.querySelector('textarea[name*="[content]"]')?.value || '';
      const cssClass = block.querySelector('input[name*="[class]"]')?.value || '';
      const listHeading = block.querySelector('input[name*="[list_heading]"]')?.value || '';

      let inner = '';
      if (tag === 'ul' || tag === 'ol') {
        inner = buildList(tag, contentRaw, listHeading, cssClass);
      } else {
        const cls = cssClass && cssClass.trim() ? ` class="${escapeHtml(cssClass.trim())}"` : '';
        inner = `<${tag}${cls}>${bbcodeToHtml(contentRaw)}</${tag}>`;
      }
      chunks.push(wrapInTextLayout(inner));
    }

    if (type === 'image') {
      const url = block.querySelector('input[name*="[url]"]')?.value?.trim() || '';
      const alt = block.querySelector('input[name*="[alt]"]')?.value || '';
      const w = block.querySelector('input[name*="[width]"]')?.value || '';
      const cssClass = block.querySelector('input[name*="[class]"]')?.value || '';

      if (url) {
        const dimW = w ? ` width="${Number(w)}"` : '';
        const imageItemClasses = ['image-item', cssClass.trim()].filter(Boolean).join(' ');
        
        const imageHtml = `
<section class="section">
    <div class="item item-6">
        <section class="${escapeHtml(imageItemClasses)}">
            <picture>
                <img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}"${dimW} loading="lazy">
            </picture>
        </section>
    </div>
</section>`;
        chunks.push(imageHtml);
      }
    }

    if (type === 'advantages') {
      const titles = block.querySelectorAll('[name*="[items]"][name$="[title]"]');
      const items = [];
      titles.forEach(inp => {
        const base = inp.name.replace(/\[title\]$/, '');
        const get = suf => block.querySelector(`[name='${base}${suf}']`)?.value || '';
        items.push({ src: get('[src]'), alt: get('[alt]'), title: get('[title]'), desc: get('[desc]') });
      });

      if (items.length) {
        const boxes = items.map(it => `
          <div class="advantages-box">
            <img src="${escapeHtml(it.src)}" alt="${escapeHtml(it.alt)}" />
            <div class="text">
              <h3>${escapeHtml(it.title)}</h3>
              <p>${escapeHtml(it.desc)}</p>
            </div>
          </div>
        `).join('');

        const inner = `<div class="advantages-grid">${boxes}</div>`;
        chunks.push(inner);
      }
    }
  });

  const html = chunks.join('\n\n');

  const result = document.getElementById('result');
  const preview = document.querySelector('#result .preview');
  const source = document.getElementById('sourceCode');

  if (result) result.style.display = 'block';
  if (preview) preview.innerHTML = html;
  if (source) source.value = html;
}

function updatePreview() {
  const preview = document.querySelector('#result .preview');
  const source = document.getElementById('sourceCode');
  if (preview && source) preview.innerHTML = source.value;
}

async function copyToClipboard() {
  const source = document.getElementById('sourceCode');
  if (!source) return;
  try {
    await navigator.clipboard.writeText(source.value);
    alert('Skopiowano do schowka!');
  } catch {
    source.select();
    document.execCommand('copy');
    alert('Skopiowano do schowka! (metoda awaryjna)');
  }
}
