
let sectionCount = 0;
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
        <div class="mb-2">
            <label class="form-label">URL obrazka:</label>
            <input type="text" class="form-control" name="sections[${sectionId}][url]" placeholder="https://example.com/image.jpg">
        </div>
        <div class="mb-2">
            <label class="form-label">Alt:</label>
            <input type="text" class="form-control" name="sections[${sectionId}][alt]" placeholder="Opis alternatywny">
        </div>
        <div class="row g-2">
            <div class="col-md-6">
                <label class="form-label">Szerokość (width):</label>
                <input type="number" class="form-control" name="sections[${sectionId}][width]" value="1080">
            </div>
            <div class="col-md-6">
                <label class="form-label">Wysokość (height):</label>
                <input type="number" class="form-control" name="sections[${sectionId}][height]" placeholder="np. 720">
            </div>
        </div>
        <div class="mb-2 mt-2">
            <label class="form-label">Klasa CSS:</label>
            <input type="text" class="form-control" name="sections[${sectionId}][class]">
        </div>
        <input type="hidden" name="sections[${sectionId}][type]" value="image">
    `;
    container.appendChild(div);
}

function toggleListTitle(select) {
    const wrapper = select.closest('.section-block');
    const listTitle = wrapper.querySelector('.list-title');
    if (!listTitle) return;
    listTitle.style.display = (select.value === 'ul' || select.value === 'ol') ? 'block' : 'none';
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
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selected = textarea.value.substring(start, end);
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);

    const wrapped = `<strong>${selected}</strong>`;
    textarea.value = before + wrapped + after;

    textarea.selectionStart = textarea.selectionEnd = before.length + wrapped.length;
    textarea.focus();
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

    const optionElements = advantagesOptions.map((opt, i) => {
        return `<option value="${i}">${opt.title}</option>`;
    }).join('');

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
            <!-- ukryte pola na dane -->
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

/* === ANTY-PUSTE <h2> ===
   Przed wysyłką formularza usuwamy atrybut "name" z pustych pól list_heading.
   Dzięki temu backend nie dostanie list_heading => nie wygeneruje pustego <h2>.
*/
function scrubEmptyListHeadings(root = document) {
    root.querySelectorAll('.section-block').forEach(block => {
        const tagSelect = block.querySelector('select[name^="sections"][name$="[tag]"]');
        const titleInput = block.querySelector('input[name^="sections"][name$="[list_heading]"], input[data-name-was][data-name-was$="[list_heading]"]');
        if (!tagSelect || !titleInput) return;

        const isList = (tagSelect.value === 'ul' || tagSelect.value === 'ol');
        const isEmpty = !titleInput.value || titleInput.value.trim() === '';

        if (isList && isEmpty && titleInput.hasAttribute('name')) {
            titleInput.setAttribute('data-name-was', titleInput.getAttribute('name'));
            titleInput.removeAttribute('name');
        }

        if (!isEmpty && !titleInput.hasAttribute('name')) {
            const prev = titleInput.getAttribute('data-name-was');
            if (prev) titleInput.setAttribute('name', prev);
        }
    });
}

// Automatyczne podpięcie pod pierwszy <form>. Jeśli masz konkretny ID (np. #builderForm), podmień selektor.
function generateHTML(event) {
    event.preventDefault();
    scrubEmptyListHeadings();
    
    // Zbierz wszystkie sekcje
    const sections = document.querySelectorAll('.section-block');
    let generatedHtml = '';
    
    sections.forEach(section => {
        const sectionId = section.getAttribute('data-id');
        const type = section.querySelector(`input[name="sections[${sectionId}][type]"]`).value;
        
        switch(type) {
            case 'text':
                generatedHtml += generateTextSection(sectionId, section) + '\n\n';
                break;
            case 'image':
                generatedHtml += generateImageSection(sectionId, section) + '\n\n';
                break;
            case 'advantages':
                generatedHtml += generateAdvantagesSection(sectionId, section) + '\n\n';
                break;
        }
    });
    
    // Pokaż wynik
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    
    // Pokaż podgląd
    const preview = resultDiv.querySelector('.preview');
    preview.innerHTML = generatedHtml;
    
    // Pokaż kod źródłowy
    const code = resultDiv.querySelector('code');
    code.textContent = generatedHtml;
}

function generateTextSection(sectionId, section) {
    const tag = section.querySelector(`select[name="sections[${sectionId}][tag]"]`).value;
    const content = section.querySelector(`textarea[name="sections[${sectionId}][content]"]`).value;
    const className = section.querySelector(`input[name="sections[${sectionId}][class]"]`).value;
    const classAttr = className ? ` class="${escapeHtml(className)}"` : '';
    
    if (tag === 'ul' || tag === 'ol') {
        const listHeadingInput = section.querySelector(`input[name="sections[${sectionId}][list_heading]"]`);
        const listHeading = listHeadingInput && listHeadingInput.value ? 
            `<h2>${escapeHtml(listHeadingInput.value)}</h2>\n` : '';
            
        const items = content.split('\n')
            .filter(item => item.trim())
            .map(item => `    <li>${item}</li>`)
            .join('\n');
            
        return `${listHeading}<${tag}${classAttr}>\n${items}\n</${tag}>`;
    }
    
    const processedContent = content;
    return `<${tag}${classAttr}>${processedContent}</${tag}>`;
}

function generateImageSection(sectionId, section) {
    const url = section.querySelector(`input[name="sections[${sectionId}][url]"]`).value;
    const alt = section.querySelector(`input[name="sections[${sectionId}][alt]"]`).value;
    const width = section.querySelector(`input[name="sections[${sectionId}][width]"]`).value;
    const height = section.querySelector(`input[name="sections[${sectionId}][height]"]`).value;
    const className = section.querySelector(`input[name="sections[${sectionId}][class]"]`).value;
    
    const attrs = [
        `src="${escapeHtml(url)}"`,
        `alt="${escapeHtml(alt)}"`,
        width && `width="${width}"`,
        height && `height="${height}"`,
        className && `class="${escapeHtml(className)}"`
    ].filter(Boolean).join(' ');
    
    return `<img ${attrs}>`;
}

function generateAdvantagesSection(sectionId, section) {
    const advantagesContainer = section.querySelector('.advantages-container');
    const items = Array.from(advantagesContainer.children).map(item => {
        const index = Array.from(advantagesContainer.children).indexOf(item);
        const hidden = item.querySelector(`div[id^="hidden-${sectionId}"]`);
        
        if (!hidden) return '';
        
        const src = hidden.querySelector(`input[name$="[src]"]`).value;
        const alt = hidden.querySelector(`input[name$="[alt]"]`).value;
        const title = hidden.querySelector(`input[name$="[title]"]`).value;
        const desc = hidden.querySelector(`input[name$="[desc]"]`).value;
        
        return `    <div class="advantage-item">
        <div class="advantage-icon">
            <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="50" height="50">
        </div>
        <div class="advantage-content">
            <h4>${escapeHtml(title)}</h4>
            <p>${escapeHtml(desc)}</p>
        </div>
    </div>`;
    }).filter(Boolean).join('\n');
    
    if (!items) return '';
    
    return `<div class="advantages-grid">\n${items}\n</div>`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyToClipboard() {
    const code = document.querySelector('#result code');
    navigator.clipboard.writeText(code.textContent).then(() => {
        alert('Kod został skopiowany do schowka!');
    }).catch(err => {
        console.error('Błąd podczas kopiowania:', err);
        alert('Nie udało się skopiować kodu. Spróbuj zaznaczyć go ręcznie.');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return;

    // Na bieżąco pilnujemy przy wpisywaniu/usuwaniu tytułu
    form.addEventListener('input', (e) => {
        if (e.target && (e.target.matches('input[name$="[list_heading]"]') || e.target.matches('input[data-name-was$="[list_heading]"]'))) {
            scrubEmptyListHeadings(form);
        }
    });
});

