export interface KnowledgeItem {
  id: string;
  type: "blog" | "case-study";
  title: {
    en: string;
    nl: string;
  };
  excerpt: {
    en: string;
    nl: string;
  };
  category: {
    en: string;
    nl: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: {
    en: string;
    nl: string;
  };
  heroCaption?: {
    en: string;
    nl: string;
  };
  metrics?: Array<{
    value: string;
    label: {
      en: string;
      nl: string;
    };
  }>;
  lead: {
    en: string;
    nl: string;
  };
  quote: {
    en: string;
    nl: string;
  };
  secondImage?: string;
  secondImageAlt?: {
    en: string;
    nl: string;
  };
  secondImageCaption?: {
    en: string;
    nl: string;
  };
  tipTitle: {
    en: string;
    nl: string;
  };
  tipContent: {
    en: string;
    nl: string;
  };
}

export const knowledgeData: KnowledgeItem[] = [
  {
    id: "1",
    type: "blog",
    title: {
      en: "Substances of Very High Concern (SVHC): the silent route of indirect discharges",
      nl: "Zeer Zorgwekkende Stoffen (ZZS): de stille route van indirecte lozingen",
    },
    // Excerpt shown FIRST by page; keep it here (not duplicated in content)
    excerpt: {
      en: "“Substances of Very High Concern (SVHCs) often find their way into our water system via invisible routes, posing major risks to health, the environment and policy.”",
      nl: "“Zeer Zorgwekkende Stoffen (ZZS) vinden vaak via onzichtbare routes hun weg naar ons watersysteem, met grote risico’s voor gezondheid, milieu én beleid.”",
    },
    category: { en: "Water Management", nl: "Waterbeheer" },
    date: "2025-08-26",
    readTime: "10 min",
    image: "", // hero disabled; images are inline
    featured: true,
    content: {
      en: `
        <!-- INTRODUCTION -->
        <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Introduction</h2>
        <p class="mb-6 text-muted-foreground">In recent years, Substances of Very High Concern (SVHCs) have received a lot of attention. Their presence in the living environment is worrying because they hardly degrade, accumulate in ecosystems and pose direct risks to health and nature. Within this broad group fall, among others, PFAS and heavy metals; substances that often make the news because of their persistence and harmfulness.</p>
        <p class="mb-6 text-muted-foreground">Attention usually goes to companies that discharge directly into surface water. Less visible, but at least as important, are the indirect discharges: substances that enter municipal sewers or industrial systems, end up in wastewater treatment and from there still reach the water system. Precisely this route is often a blind spot in policy and supervision.</p>

        <!-- IMAGE 1: directly after intro -->
        <figure class="my-6">
          <img src="/rwzi-zwolle-2.jpg" alt="RWZI Zwolle" alt="Outlet pipe discharging wastewater into surface water" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Source: Shutterstock — Caption: Outlet pipe discharging wastewater into surface water: an example of the diffuse routes by which ZZS can reach our water system.</figcaption>
        </figure>

        <!-- SECTION: ZZS -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Substances of Very High Concern (SVHCs)</h2>
        <p class="mb-6 text-muted-foreground">In the Netherlands, the term Substances of Very High Concern (SVHCs) is used for substances that are persistent, bioaccumulative and toxic, or that have similarly serious effects such as carcinogenicity or hormone disruption. These substances are high on the policy agenda because they hardly degrade, accumulate in the environment and therefore pose major risks to health and ecology.</p>
        <p class="mb-2 text-muted-foreground">Two well-known examples are:</p>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>PFAS (poly- and perfluoroalkyl substances)</strong> – a family of thousands of substances widely applied since the 1950s, including in firefighting foam, textiles and food packaging. Because of their extreme stability they are also called “forever chemicals”. Several PFAS are known to be carcinogenic or hormone-disrupting.</li>
          <li><strong>Heavy metals</strong> such as lead, cadmium, copper and mercury – naturally present in soil, but often elevated in the environment due to human activity. At higher doses they damage the nervous system, kidneys and ecosystems.</li>
        </ul>
        <p class="mb-6 text-muted-foreground">These are only a few examples. The full ZZS list contains many other categories of substances that likewise threaten water quality and ecology. Because of their persistence and toxicity, every discharge – direct or indirect – poses a risk to achieving the WFD (KRW) goals.</p>

        <!-- SECTION: Indirect discharges -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Indirect discharges</h2>
        <p class="mb-6 text-muted-foreground">When people think of discharges, they often picture a factory pipe that ends directly in a river. Yet a significant share of chemical emissions reaches water via another route: indirect discharges.</p>
        <p class="mb-2 text-muted-foreground">This process proceeds in three steps:</p>
        <ol class="mb-6 list-decimal pl-6 text-muted-foreground">
          <li><strong>Wastewater from companies</strong> – Many companies have no direct discharge permit, but drain their wastewater via the municipal or industrial sewer. Examples include metalworkers with rinse water, or textile companies using PFAS.</li>
          <li><strong>Wastewater treatment (RWZI)</strong> – In a WWTP, nutrients and organic matter are largely removed. For ZZS this hardly works: persistent substances pass almost unhindered, while heavy metals are only partially captured in sludge.</li>
          <li><strong>Back to surface water</strong> – The effluent of the WWTP is discharged into rivers, ditches or canals. As a result, indirectly discharged substances still reach the water system.</li>
        </ol>
        <p class="mb-6 text-muted-foreground">Indirect discharges are often fragmented and diffuse, but collectively of great significance.</p>

        <!-- IMAGE 2: inside flow after 'Indirect discharges' -->
        <figure class="my-6">
          <img src="/shutterstock_1056782819-1-watervergunning-lozing-gevaarlijke-stoffen.jpg.avif" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Source: Waterschap Drents Overijsselse Delta / RWZI Zwolle — Caption: A WWTP like here in Zwolle: essential in processing wastewater, but often not designed for persistent substances such as ZZS.</figcaption>
        </figure>

        <!-- SECTION: Risks & Conclusion -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Risks and consequences</h2>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>Persistence and accumulation</strong> – Many ZZS hardly degrade and accumulate in soil, sediment and food chains. Even low emissions can cause major problems over time.</li>
          <li><strong>Insufficient removal</strong> – WWTPs are designed to reduce nutrients and organic load, not to remove micropollutants or persistent substances. For ZZS they often function mainly as a transit station.</li>
          <li><strong>Hard to trace</strong> – Because indirect discharges run via combined streams, it is difficult to determine exactly which companies are responsible. This complicates supervision and source control.</li>
          <li><strong>Threat to policy goals</strong> – The European Water Framework Directive requires all water bodies to meet strict standards by 2027. Indirect discharges of ZZS directly threaten achieving those goals; failure has consequences for nature, public health and can lead to legal sanctions and fines.</li>
        </ul>

        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusion</h2>
        <p class="mb-6 text-muted-foreground">Substances of Very High Concern (SVHCs) are a persistent challenge to water quality. They reach surface waters not only through direct discharges, but also via the silent route of indirect discharges. Precisely this diffuse and less visible route makes it extra difficult to get a grip on emissions. As long as indirect discharges are insufficiently visible, the task of achieving cleaner water and the KRW goals remains an illusion. The urgency is clear: without attention to the hidden route of indirect discharges, ZZS will continue to burden our water system, with consequences for environment, health, policy and possible sanctions.</p>
      `,
      nl: `
        <!-- INLEIDING -->
        <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Inleiding</h2>
        <p class="mb-6 text-muted-foreground">Zeer Zorgwekkende Stoffen (ZZS) staan de laatste jaren volop in de belangstelling. Hun aanwezigheid in de leefomgeving baart zorgen omdat ze nauwelijks afbreken, zich ophopen in ecosystemen en directe risico’s vormen voor gezondheid en natuur. Binnen deze brede groep vallen onder andere PFAS en zware metalen; stoffen die vaak in het nieuws komen vanwege hun hardnekkigheid en schadelijkheid.</p>
        <p class="mb-6 text-muted-foreground">De aandacht gaat meestal naar bedrijven die rechtstreeks lozen op het oppervlaktewater. Minder zichtbaar, maar minstens zo belangrijk, zijn de indirecte lozingen: stoffen die via gemeentelijke riolen of industriële stelsels in de rioolwaterzuivering terechtkomen en van daaruit alsnog het watersysteem bereiken. Juist deze route is vaak een blinde vlek in beleid en toezicht.</p>

        <!-- AFBEELDING 1 -->
        <figure class="my-6">
          <img src="/rwzi-zwolle-2.jpg" alt="RWZI Zwolle" alt="Afvoerleiding afvalwater" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Bron: Shutterstock — Bijschrift: Afvoerleiding die afvalwater in oppervlaktewater loost: een voorbeeld van de diffuse routes waarlangs ZZS ons watersysteem kunnen bereiken.</figcaption>
        </figure>

        <!-- SECTIE: ZZS -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Zeer Zorgwekkende Stoffen (ZZS)</h2>
        <p class="mb-6 text-muted-foreground">In Nederland wordt de term Zeer Zorgwekkende Stoffen (ZZS) gebruikt voor stoffen die persistent, bio-accumulerend en toxisch zijn, of die vergelijkbare ernstige effecten hebben zoals kankerverwekkendheid of hormoonverstoring. Deze stoffen staan hoog op de beleidsagenda, omdat ze nauwelijks afbreken, zich ophopen in het milieu en daardoor grote risico’s vormen voor gezondheid en ecologie.</p>
        <p class="mb-2 text-muted-foreground">Binnen deze groep vallen verschillende categorieën stoffen. Twee bekende voorbeelden zijn:</p>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>PFAS (poly- en perfluoralkylstoffen)</strong> – een familie van duizenden stoffen die sinds de jaren ’50 breed zijn toegepast, onder meer in brandblusschuim, textiel en voedselverpakkingen. Door hun extreme stabiliteit worden ze ook wel “forever chemicals” genoemd. Diverse PFAS staan inmiddels bekend als kankerverwekkend of hormoonverstorend.</li>
          <li><strong>Zware metalen</strong> zoals lood, cadmium, koper en kwik – van nature aanwezig in de bodem, maar door menselijke activiteit vaak in verhoogde concentraties aanwezig in het milieu. In hogere doseringen veroorzaken ze schade aan zenuwstelsel, nieren en ecosystemen.</li>
        </ul>
        <p class="mb-6 text-muted-foreground">Dit zijn slechts enkele voorbeelden. De volledige ZZS-lijst omvat nog vele andere categorieën stoffen die eveneens een bedreiging vormen voor waterkwaliteit en ecologie. Door hun persistentie en toxiciteit vormt elke lozing – direct of indirect – een risico voor het behalen van de KRW-doelen.</p>

        <!-- SECTIE: Indirecte lozingen -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Indirecte lozingen</h2>
        <p class="mb-6 text-muted-foreground">Bij lozingen denkt men vaak aan een fabriekspijp die direct uitkomt op een rivier. Toch komt een aanzienlijk deel van de chemische emissies via een andere weg in het water terecht: de indirecte lozingen.</p>
        <p class="mb-2 text-muted-foreground">Dat proces verloopt in drie stappen:</p>
        <ol class="mb-6 list-decimal pl-6 text-muted-foreground">
          <li><strong>Afvalwater van bedrijven</strong> – Veel bedrijven hebben geen directe lozingsvergunning, maar voeren hun afvalwater af via het gemeentelijk of industrieel riool. Denk aan metaalbewerkers met spoelwater, of textielbedrijven die PFAS gebruiken.</li>
          <li><strong>Rioolwaterzuivering (RWZI)</strong> – In een RWZI worden nutriënten en organische stoffen grotendeels verwijderd. Voor ZZS werkt dat nauwelijks: persistente stoffen passeren vrijwel ongehinderd, terwijl zware metalen slechts deels in het slib worden afgevangen.</li>
          <li><strong>Terug in het oppervlaktewater</strong> – Het effluent van de RWZI wordt geloosd op rivieren, sloten of kanalen. Daarmee bereiken stoffen die indirect zijn geloosd alsnog het watersysteem.</li>
        </ol>
        <p class="mb-6 text-muted-foreground">Indirecte lozingen zijn vaak versnipperd en diffuus, maar gezamenlijk van grote betekenis.</p>

        <!-- AFBEELDING 2 -->
        <figure class="my-6">
          <img src="/shutterstock_1056782819-1-watervergunning-lozing-gevaarlijke-stoffen.jpg.avif" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Bron: Waterschap Drents Overijsselse Delta / RWZI Zwolle — Bijschrift: Een RWZI zoals hier in Zwolle: essentieel in het verwerken van afvalwater, maar vaak niet berekend op persistente stoffen zoals ZZS.</figcaption>
        </figure>

        <!-- SECTIE: Risico’s & Conclusie -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Risico’s en gevolgen</h2>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>Persistentie en accumulatie</strong> – Veel ZZS breken nauwelijks af en hopen zich op in bodem, sediment en voedselketens. Zelfs lage emissies kunnen op termijn grote problemen veroorzaken.</li>
          <li><strong>Onvoldoende verwijdering</strong> – RWZI’s zijn ontworpen om nutriënten en organische belasting te reduceren, niet om micropolluenten of persistente stoffen te verwijderen. Voor ZZS functioneren ze vaak vooral als doorvoerstation.</li>
          <li><strong>Moeilijk herleidbaar</strong> – Omdat indirecte lozingen via verzamelstromen lopen, is het lastig om precies te achterhalen welke bedrijven verantwoordelijk zijn. Dit bemoeilijkt toezicht en maakt bronaanpak ingewikkeld.</li>
          <li><strong>Bedreiging voor beleidsdoelen</strong> – De Europese Kaderrichtlijn Water schrijft voor dat alle waterlichamen uiterlijk in 2027 moeten voldoen aan strenge normen voor chemische en ecologische kwaliteit. Indirecte lozingen van ZZS vormen een directe bedreiging voor het halen van die doelen. Het niet behalen ervan heeft niet alleen gevolgen voor natuur en volksgezondheid, maar kan ook leiden tot juridische sancties en boetes.</li>
        </ul>

        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusie</h2>
        <p class="mb-6 text-muted-foreground">Zeer Zorgwekkende Stoffen (ZZS) vormen een hardnekkige uitdaging voor de waterkwaliteit. Ze komen niet alleen via directe lozingen in het oppervlaktewater terecht, maar ook via de stille route van indirecte lozingen. Juist deze diffuse en minder zichtbare route maakt het extra lastig om grip te krijgen op emissies. Toch is dit cruciaal: zolang indirecte lozingen onvoldoende in beeld zijn, blijft de opgave om schoner water te realiseren en de KRW-doelen te halen een illusie. De urgentie is helder: zonder aandacht voor de verborgen route van indirecte lozingen zullen ZZS ons watersysteem blijven belasten; met gevolgen voor milieu, gezondheid, beleid én mogelijke sancties.</p>
      `,
    },
    heroCaption: { en: "", nl: "" },
    lead: { en: "", nl: "" },
    quote: { en: "", nl: "" },
    tipTitle: { en: "", nl: "" },
    tipContent: { en: "", nl: "" },
  },

  {
    id: "2",
    type: "blog",
    title: {
      en: "Indirect discharges: from blind spot to clear picture",
      nl: "Indirecte lozingen: van blinde vlek naar helder beeld",
    },
    excerpt: {
      en: "“Indirect industrial discharges are often less visible, but by cooperation and smart data linking, authorities can gain more control and work more strongly towards the WFD goals.”",
      nl: "“Indirecte industriële lozingen zijn vaak minder zichtbaar, maar door samenwerking en slimme dataverbinding kunnen overheden meer grip krijgen en sterker toewerken naar de KRW-doelen.”",
    },
    category: { en: "Water Management", nl: "Waterbeheer" },
    date: "2025-08-20",
    readTime: "9 min",
    image: "", // hero disabled; images inline
    featured: false,
    content: {
      en: `
        <!-- INTRODUCTION -->
        <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Introduction</h2>
        <p class="mb-6 text-muted-foreground">When thinking of industrial discharges, people often see the classic image of a factory pipe that discharges directly into a river. In reality, that is only part of the story. A significant share of industrial emissions takes place via indirect routes: wastewater that goes via municipal sewers or industrial systems to wastewater treatment plants (WWTPs) and from there still ends up in surface water.</p>
        <p class="mb-6 text-muted-foreground">These indirect discharges are often less visible. They run via many different companies and come together in complex networks of pipes and installations. That makes it harder to get a complete overview. The result: a route that greatly influences water quality, but which requires extra attention to properly visualize.</p>

        <!-- IMAGE 1: end of introduction -->
        <figure class="my-6">
          <img src="/shutterstock_1926382847-1.jpg" alt="Discharge of wastewater into a river" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Source: www.drinkwaterplatform.nl — Caption: Discharge of wastewater into a river</figcaption>
        </figure>

        <!-- SECTION: Why ... -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Why indirect discharges are difficult to see</h2>
        <p class="mb-2 text-muted-foreground">There are several reasons why indirect industrial discharges are less visible:</p>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>Historical focus on direct dischargers</strong> — For decades the emphasis in permits and monitoring was on large companies that discharge directly. Indirect routes were more fragmented and therefore less systematically visible.</li>
          <li><strong>Dispersed information</strong> — Data are spread across parties: municipalities, water boards, provinces and environmental agencies, each managing valuable pieces. Bringing that information together is complex, but offers opportunities for new insights.</li>
          <li><strong>Permits needing updating</strong> — Some indirect discharges still fall under older or generic permits, where new substances such as PFAS or other ZZS are less explicitly included.</li>
          <li><strong>Complex streams</strong> — Wastewater from dozens of smaller companies often comes together in one pipe, making it difficult to trace exactly where a particular substance comes from.</li>
        </ul>
        <p class="mb-6 text-muted-foreground">These factors make indirect discharges challenging to make fully visible. But precisely here there are great opportunities to develop more control through smart analyses and cooperation.</p>

        <!-- SECTION: Role of WWTPs... -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">The role of WWTPs and industrial estates</h2>
        <p class="mb-6 text-muted-foreground">WWTPs play a central role. They are designed to reduce nutrients and organic load, but not to completely break down persistent substances or heavy metals. For ZZS they therefore often act as a transfer station: the substances pass the treatment and end up in the effluent.</p>
        <p class="mb-6 text-muted-foreground">Industrial estates require extra attention. Hundreds of small companies discharge collectively via one industrial sewer system. Individually the emissions seem limited, but together they form a considerable load. A WWTP mainly sees the sum, without it being directly visible which companies contribute the most.</p>

        <!-- IMAGE 2: in this section -->
        <figure class="my-6">
          <img src="/49552108256_73fa5f3085_b.jpg" alt="RWZI Geestmerambacht (HHNK)" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Source: Hoogheemraadschap Hollands Noorderkwartier (HHNK) — Caption: RWZI Geestmerambacht of HHNK – a central link in processing wastewater flows and protecting water quality.</figcaption>
        </figure>

        <!-- SECTION: Governance -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">The governance puzzle</h2>
        <p class="mb-6 text-muted-foreground">Beyond the technical challenges, there is governance complexity. Different parties each have an important role, holding crucial information and expertise. The challenge is to bring that knowledge together and create an integrated picture. Through cooperation and data sharing, blind spots can be reduced and supervision made even more effective.</p>

        <!-- SECTION: Consequences -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Consequences and urgency</h2>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>Environmental risks</strong> — ZZS accumulate in sediment, soil and food chains. Even low emissions can have major effects in the long term.</li>
          <li><strong>Health impact</strong> — Many ZZS are carcinogenic, hormone-disrupting or neurotoxic. Invisible emissions increase the chance that risks are recognized too late.</li>
          <li><strong>Strengthening cooperation and trust</strong> — Achieving the WFD goals in 2027 is a joint task. By smartly linking information and intensifying cooperation, authorities can further strengthen their role as reliable stewards of water quality—improving policy and supervision effectiveness and building trust among citizens and companies.</li>
        </ul>

        <!-- SECTION: Conclusion -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusion</h2>
        <p class="mb-6 text-muted-foreground">Indirect industrial discharges are one of the greatest challenges in today’s water management. They are fragmented, diffuse and embedded in complex technical and governance structures, making them less visible. That is precisely why attention to this route is so important. By connecting data, sharing information and working together, authorities can gain more grip on these discharges. This not only creates better insight into ZZS and other harmful substances, but also a stronger foundation for future-proof water management. The urgency is clear: by jointly working on insight and transparency, authorities can act more effectively and work with confidence towards achieving the WFD goals.</p>
      `,
      nl: `
        <!-- INLEIDING -->
        <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Inleiding</h2>
        <p class="mb-6 text-muted-foreground">Wie aan industriële lozingen denkt, ziet vaak het klassieke beeld van een fabriekspijp die direct uitkomt op een rivier. In werkelijkheid is dat maar een deel van het verhaal. Een aanzienlijk deel van de industriële emissies vindt plaats via indirecte routes: afvalwater dat via gemeentelijke riolen of industriële stelsels naar rioolwaterzuiveringsinstallaties (RWZI’s) gaat, en van daaruit alsnog in het oppervlaktewater terechtkomt.</p>
        <p class="mb-6 text-muted-foreground">Deze indirecte lozingen zijn vaak minder zichtbaar. Ze lopen via veel verschillende bedrijven en komen samen in ingewikkelde netwerken van leidingen en installaties. Dat maakt het moeilijker om een volledig overzicht te krijgen. Het gevolg: een route die van grote invloed is op de waterkwaliteit, maar die extra aandacht vraagt om goed in beeld te brengen.</p>

        <!-- AFBEELDING 1 -->
        <figure class="my-6">
          <img src="/shutterstock_1926382847-1.jpg" alt="Lozing van afvalwater in een rivier" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Bron: www.drinkwaterplatform.nl — Bijschrift: Lozing van afvalwater in een rivier</figcaption>
        </figure>

        <!-- SECTIE: Waarom ... -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Waarom indirecte lozingen moeilijk zichtbaar zijn</h2>
        <p class="mb-2 text-muted-foreground">Dat indirecte industriële lozingen minder goed zichtbaar zijn, heeft meerdere oorzaken:</p>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>Historische focus op directe lozers</strong> — Decennialang lag de nadruk bij vergunningen en monitoring op grote bedrijven die direct lozen. Indirecte routes waren meer versnipperd en daardoor minder systematisch in beeld.</li>
          <li><strong>Verspreide informatie</strong> — Gegevens zijn verdeeld over verschillende partijen, gemeenten, waterschappen, provincies en omgevingsdiensten, die elk waardevolle puzzelstukjes beheren. Het samenbrengen van die informatie is complex, maar biedt juist kansen voor nieuwe inzichten.</li>
          <li><strong>Vergunningen die actualisatie vragen</strong> — Sommige indirecte lozingen vallen nog onder oudere of generieke vergunningen, waarin nieuwe stoffen zoals PFAS of andere ZZS minder expliciet zijn opgenomen.</li>
          <li><strong>Complexe stromen</strong> — Afvalwater van tientallen kleinere bedrijven komt vaak samen in één leiding. Dat maakt het lastig om precies te herleiden waar een bepaalde stof vandaan komt.</li>
        </ul>
        <p class="mb-6 text-muted-foreground">Deze factoren maken indirecte lozingen uitdagend om volledig zichtbaar te krijgen. Maar juist hier liggen ook grote mogelijkheden om met slimme analyses en samenwerking meer grip te ontwikkelen.</p>

        <!-- SECTIE: Rol RWZI’s... -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">De rol van RWZI’s en bedrijventerreinen</h2>
        <p class="mb-6 text-muted-foreground">RWZI’s spelen een centrale rol in dit vraagstuk. Ze zijn ontworpen om nutriënten en organische belasting te reduceren, maar niet om persistente stoffen of zware metalen volledig af te breken. Voor ZZS functioneren ze daardoor vaak als een doorvoerstation: de stoffen passeren de zuivering en komen in het effluent terecht.</p>
        <p class="mb-6 text-muted-foreground">Vooral bedrijventerreinen vragen hierbij extra aandacht. Honderden kleine bedrijven lozen gezamenlijk via één industrieel rioolstelsel. Individueel lijken de emissies beperkt, maar bij elkaar vormen ze een aanzienlijke belasting. Een RWZI ziet vooral de optelsom, zonder dat direct zichtbaar is welke bedrijven de grootste bijdrage leveren.</p>

        <!-- AFBEELDING 2 -->
        <figure class="my-6">
          <img src="/49552108256_73fa5f3085_b.jpg" alt="RWZI Geestmerambacht (HHNK)" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-sm text-muted-foreground">Bron: Hoogheemraadschap Hollands Noorderkwartier (HHNK) — Bijschrift: RWZI Geestmerambacht van HHNK – een centrale schakel in het verwerken van afvalwaterstromen en het beschermen van de waterkwaliteit.</figcaption>
        </figure>

        <!-- SECTIE: Bestuurlijke puzzel -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">De bestuurlijke puzzel</h2>
        <p class="mb-6 text-muted-foreground">Naast de technische uitdagingen is er ook de bestuurlijke complexiteit. Verschillende partijen hebben ieder een belangrijke rol. Iedere partij beschikt dus over cruciale informatie en expertise. De uitdaging ligt in het samenbrengen van die kennis en het creëren van een integraal beeld. Juist door samenwerking en datadeling kunnen blinde vlekken worden verkleind en kan toezicht nóg effectiever worden ingericht.</p>

        <!-- SECTIE: Gevolgen -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Gevolgen en urgentie</h2>
        <ul class="mb-6 list-disc pl-6 text-muted-foreground">
          <li><strong>Milieurisico’s</strong> — ZZS hopen zich op in sediment, bodem en voedselketens. Zelfs lage emissies kunnen op termijn grote effecten hebben.</li>
          <li><strong>Gezondheidsimpact</strong> — Veel ZZS zijn kankerverwekkend, hormoonverstorend of neurotoxisch. Onzichtbare emissies vergroten de kans dat risico’s pas laat worden herkend.</li>
          <li><strong>Versterken van samenwerking en vertrouwen</strong> — Het behalen van de KRW-doelen in 2027 is een gezamenlijke opgave. Door informatie slim te koppelen en samenwerking te intensiveren, kunnen overheden hun rol als betrouwbare regisseur van waterkwaliteit verder versterken. Dat vergroot niet alleen de effectiviteit van beleid en toezicht, maar ook het vertrouwen van burgers en bedrijven in een toekomstbestendig waterbeheer.</li>
        </ul>

        <!-- SECTIE: Conclusie -->
        <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusie</h2>
        <p class="mb-6 text-muted-foreground">Indirecte industriële lozingen vormen één van de grootste uitdagingen in het waterbeheer van vandaag. Ze zijn versnipperd, diffuus en ingebed in complexe technische en bestuurlijke structuren, waardoor ze minder zichtbaar zijn. Juist daarom is aandacht voor deze route zo belangrijk. Door data te verbinden, informatie te delen en samen te werken, kunnen overheden meer grip krijgen op deze lozingen. Daarmee ontstaat niet alleen beter zicht op ZZS en andere schadelijke stoffen, maar ook een sterker fundament voor toekomstbestendig waterbeheer. De urgentie is helder: door gezamenlijk te werken aan inzicht en transparantie, kunnen overheden effectiever handelen en met vertrouwen toewerken naar het behalen van de KRW-doelen.</p>
      `,
    },
    heroCaption: { en: "", nl: "" },
    lead: { en: "", nl: "" },
    quote: { en: "", nl: "" },
    tipTitle: { en: "", nl: "" },
    tipContent: { en: "", nl: "" },
  },
  {
  id: "3",
  type: "blog",
  title: {
    en: "Data as the foundation for future-proof water management",
    nl: "Data als fundament voor toekomstbestendig waterbeheer",
  },
  excerpt: {
    en: "“A data-driven foundation helps governments to deploy resources more effectively, prioritize risks better, and work confidently towards the WFD objectives.”",
    nl: "“Een datagedreven basis helpt overheden om middelen effectiever in te zetten, risico’s beter te prioriteren en met vertrouwen te werken aan de KRW-doelen”",
  },
  category: { en: "Water Management", nl: "Waterbeheer" },
  date: "2025-08-27",
  readTime: "8 min",
  image: "", // keep empty; images will be extracted inline
  featured: false,
  content: {
    en: `
      <!-- INTRODUCTION -->
      <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Introduction</h2>
      <p class="mb-6 text-muted-foreground">
        Effective water management starts with insight. Authorities have the crucial task of determining
        where supervision and measures are most needed: which companies pose the greatest risk,
        which substances require priority, and where the biggest chance of exceeding standards lies.
      </p>
      <p class="mb-6 text-muted-foreground">
        A lot of valuable information is available, but it is often fragmented across different organizations and systems.
        This makes it difficult to get a complete and up-to-date picture. As a result, prioritization and decision-making
        often become complex and time-consuming, while there is a strong need for clear and targeted choices.
      </p>

      <!-- IMAGE 1 -->
      <figure class="my-6">
        <img src="/martensmultimedia-20220710-1495.jpg.webp" alt="Aerial photo of industrial and port area along the river" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          Source: Port of Moerdijk — Aerial photo of a large industrial and port area along the river,
          where many indirect discharges converge and insight is crucial for effective management.
        </figcaption>
      </figure>

      <!-- SECTION: Fragmented data -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Fragmented data: valuable puzzle pieces</h2>
      <p class="mb-6 text-muted-foreground">
        Valuable information is collected in many different places about companies, substances, discharges,
        permits, and water quality. Each source contains part of the story, but as long as they are viewed separately,
        the picture remains incomplete. Some substances or companies fall out of view, and the link between
        discharges and water quality is insufficiently visible.
      </p>
      <p class="mb-6 text-muted-foreground">
        By combining this data and analyzing it in context, a more complete and powerful overview emerges.
        This enables risks to be identified earlier, priorities to be set more sharply, and decisions to be better substantiated.
        The available data thus becomes not just loose puzzle pieces, but a complete picture that truly supports policy and supervision.
      </p>

      <!-- SECTION: The importance of a data-driven foundation -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">The importance of a data-driven foundation</h2>
      <p class="mb-6 text-muted-foreground">
        Without a central, data-driven approach, it takes a lot of effort to make well-founded choices. This leads to several challenges:
      </p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Limited visibility of discharge flows</strong> — Supervision often focuses on larger, well-known companies. Without an integrated picture, other relevant flows remain easily overlooked.</li>
        <li><strong>Difficult prioritization of risks</strong> — Fragmented data makes it hard to identify hotspots and sectors that deserve extra attention.</li>
        <li><strong>Inefficiency in decision-making</strong> — When data is not directly available or comparable, it takes a lot of time to substantiate and coordinate decisions.</li>
        <li><strong>Insufficient use of capacity</strong> — Due to lack of overview, capacity is not always used optimally. A data-driven foundation helps allocate resources more effectively, making supervision and enforcement more impactful without extra organizational pressure.</li>
      </ul>

      <!-- IMAGE 2 -->
      <figure class="my-6">
        <img src="/waterkwaliteit_1140.png" alt="Underwater plants in clear freshwater" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          Source: STOWA — Underwater photo of aquatic plants in clear freshwater: good water quality forms the basis for a resilient ecosystem.
        </figcaption>
      </figure>

      <!-- CONCLUSION -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusion</h2>
      <p class="mb-6 text-muted-foreground">
        Connecting data is not a goal in itself, but a way to support the work of authorities more intelligently and effectively.
        Without a data-driven foundation and with fragmented data, prioritization and decision-making in water management remain unnecessarily complex.
      </p>
      <p class="mb-6 text-muted-foreground">
        The urgency is clear: by linking existing information and translating it into actionable insights,
        a solid foundation is created for future-proof water management. This not only gives authorities
        more control over discharges and water quality but also enables them to work with confidence towards
        achieving the WFD goals.
      </p>
    `,
    nl: `
      <!-- INLEIDING -->
      <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Inleiding</h2>
      <p class="mb-6 text-muted-foreground">
        Effectief waterbeheer begint bij inzicht. Overheden hebben de belangrijke taak om te bepalen
        waar toezicht en maatregelen het hardst nodig zijn: welke bedrijven vormen het grootste risico,
        welke stoffen vragen prioriteit, en waar zit de grootste kans op overschrijding van de normen?
      </p>
      <p class="mb-6 text-muted-foreground">
        Daarbij is veel waardevolle informatie beschikbaar, maar deze is vaak verspreid over verschillende organisaties en systemen.
        Dat maakt het niet altijd eenvoudig om een volledig en actueel overzicht te krijgen. Dit maakt prioritering en besluitvorming
        vaak complex en tijdrovend, terwijl er juist behoefte is aan heldere en doelgerichte keuzes.
      </p>

      <!-- AFBEELDING 1 -->
      <figure class="my-6">
        <img src="/martensmultimedia-20220710-1495.jpg.webp" alt="Luchtfoto van industrie- en havengebied langs de rivier" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          Bron: Port of Moerdijk — Luchtfoto van een groot industrie- en havengebied langs de rivier,
          locaties waar veel indirecte lozingen samenkomen en inzicht cruciaal is voor effectief beheer.
        </figcaption>
      </figure>

      <!-- SECTIE: Versnipperde data -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Versnipperde data: waardevolle puzzelstukjes</h2>
      <p class="mb-6 text-muted-foreground">
        Er wordt op veel verschillende plekken waardevolle informatie verzameld over bedrijven, stoffen, lozingen, vergunningen en waterkwaliteit.
        Elk van deze bronnen bevat een deel van het verhaal, maar zolang ze afzonderlijk worden bekeken, blijft het beeld onvolledig.
        Sommige stoffen of bedrijven vallen daardoor buiten beeld, en de samenhang tussen lozingen en waterkwaliteit wordt onvoldoende zichtbaar.
      </p>
      <p class="mb-6 text-muted-foreground">
        Juist door deze gegevens te combineren en in samenhang te analyseren, ontstaat een vollediger en krachtiger overzicht.
        Daarmee kunnen risico’s eerder worden herkend, prioriteiten scherper worden gesteld en besluiten beter worden onderbouwd.
        Zo wordt de beschikbare data niet alleen een verzameling losse puzzelstukjes, maar een compleet plaatje dat beleid en toezicht daadwerkelijk ondersteunt.
      </p>

      <!-- SECTIE: Het belang van een datagedreven basis -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Het belang van een datagedreven basis</h2>
      <p class="mb-6 text-muted-foreground">
        Zonder een centrale, datagedreven aanpak kost het veel inspanning om tot onderbouwde keuzes te komen. Dit leidt tot verschillende uitdagingen:
      </p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Beperkt zicht op lozingsstromen</strong> — Toezicht richt zich vaak op de grotere, bekende bedrijven. Zonder integraal beeld blijven andere relevante lozingsstromen gemakkelijker buiten beeld.</li>
        <li><strong>Moeilijke prioritering van risico’s</strong> — Verspreide data maakt het lastig om hotspots en sectoren te identificeren die extra aandacht verdienen.</li>
        <li><strong>Inefficiëntie in besluitvorming</strong> — Wanneer gegevens niet direct beschikbaar of vergelijkbaar zijn, vraagt het veel tijd om keuzes goed te onderbouwen en af te stemmen.</li>
        <li><strong>Onvoldoende benutting van capaciteit</strong> — Door gebrek aan overzicht wordt capaciteit niet altijd optimaal ingezet. Een datagedreven basis helpt middelen doelgerichter te gebruiken, waardoor toezicht en handhaving meer effect hebben zonder extra druk op organisaties.</li>
      </ul>

      <!-- AFBEELDING 2 -->
      <figure class="my-6">
        <img src="/waterkwaliteit_1140.png" alt="Onderwateropname van waterplanten in helder zoet water" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          Bron: STOWA — Onderwateropname van waterplanten in helder zoet water: een gezonde waterkwaliteit vormt de basis voor een veerkrachtig ecosysteem.
        </figcaption>
      </figure>

      <!-- CONCLUSIE -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusie</h2>
      <p class="mb-6 text-muted-foreground">
        Het verbinden van data is geen doel op zich, maar een manier om het werk van overheden slimmer en krachtiger te ondersteunen.
        Zonder datagedreven basis en met versnipperde data blijft prioritering en besluitvorming in het waterbeheer onnodig complex.
      </p>
      <p class="mb-6 text-muted-foreground">
        De urgentie is duidelijk: door bestaande informatie te koppelen en te vertalen naar bruikbare inzichten ontstaat een stevig fundament
        voor toekomstbestendig waterbeheer. Daarmee krijgen overheden niet alleen meer grip op lozingen en waterkwaliteit, maar kunnen zij ook
        met vertrouwen toewerken naar het behalen van de KRW-doelen.
      </p>
    `,
  },
  heroCaption: { en: "", nl: "" },
  lead: { en: "", nl: "" },
  quote: { en: "", nl: "" },
  tipTitle: { en: "", nl: "" },
  tipContent: { en: "", nl: "" },
},
{
  id: "4",
  type: "blog",
  title: {
    en: "Discharge permits are often outdated or incomplete",
    nl: "Lozingsvergunningen zijn vaak verouderd of incompleet",
  },
  // Exact excerpt from the PDF
  excerpt: {
    en: "“Outdated permits complicate enforcement – updating them provides control and clarity.”",
    nl: "“Verouderde vergunningen bemoeilijken toezicht – actualisatie geeft grip en duidelijkheid.”",
  },
  category: { en: "Water Management", nl: "Waterbeheer" },
  date: "2025-08-24",
  readTime: "8 min",
  image: "", // hero disabled; images are inline in the content as in the PDF
  featured: false,
  content: {
    en: `
      <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Introduction</h2>
      <p class="mb-6 text-muted-foreground">
        Discharge permits form the legal basis for regulating the release of substances into water. 
        They determine which substances may be discharged, in what quantities, and under which conditions. 
        As such, they are an essential instrument for governments to protect water quality and provide clarity to businesses.
      </p>
      <p class="mb-6 text-muted-foreground">
        Yet many permits no longer fully align with today’s reality. Some are outdated and insufficiently account for new substances or processes, 
        while others are incomplete and lack provisions needed for effective oversight. 
        The result: businesses operate within the rules, but harmful substances still enter the water system via legal routes.
      </p>

      <figure class="my-6">
        <img src="/Handhaving.jpg" alt="Inspector with measuring equipment" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Source:</strong> Union of Water Boards – “Water boards raise questions about strengthening the permit system.” 
          Caption: Permitting is a key instrument for protecting water quality – updating and strengthening are needed to keep up with new challenges.
        </figcaption>
      </figure>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Permits that lag behind</h2>
      <p class="mb-4 text-muted-foreground">
        Many discharge permits date back to a time when knowledge of certain substances or attention to diffuse discharges was more limited than today.
      </p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>New substances out of scope</strong> – Substances such as PFAS or other Zeer Zorgwekkende Stoffen (ZZS, “very concerning substances”) are often not included in older permits, as they were not yet recognized.</li>
        <li><strong>General conditions</strong> – Some permits contain generic norms that don’t specifically match the type of company or substances released.</li>
        <li><strong>Little dynamism</strong> – Permits are not always revised when processes or substances change, which can cause them to no longer reflect the current situation.</li>
      </ul>
      <p class="mb-6 text-muted-foreground">
        This creates a gap between the paper reality and ecological reality.
      </p>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Incompleteness: not everything is included</h2>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Limited lists of substances</strong> – Many permits still focus on classic pollutants such as nutrients or heavy metals, while countless other compounds are barely covered.</li>
        <li><strong>Indirect routes underexposed</strong> – Permits often focus mainly on direct discharges. Indirect emissions via sewers and WWTPs (wastewater treatment plants) are less explicitly included, even though they represent a major part of the load.</li>
        <li><strong>Missing basic data</strong> – Information about quantities or concentrations is not always fully available, making oversight more difficult.</li>
      </ul>
      <p class="mb-6 text-muted-foreground">
        This means inspectors don’t always have the full toolkit to steer effectively.
      </p>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Consequences for water quality and policy</h2>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Discharges within the rules</strong> – Companies discharge legally under their permits, but harmful substances still end up in the environment.</li>
        <li><strong>Gaps in enforcement</strong> – Without a complete picture, inspectors lack the levers to identify risks in time.</li>
        <li><strong>Missed opportunities for WFD goals</strong> – If permits are not up to date, meeting the 2027 chemical and ecological water quality targets of the Water Framework Directive becomes more difficult.</li>
        <li><strong>Trust and transparency</strong> – Clear and current permits strengthen trust among companies and citizens that discharges are managed responsibly.</li>
      </ul>

      <figure class="my-6">
        <img src="/d0577b45-3ded-40fa-bbea-3b70468273d9_thumb1920.jpg" alt="Rural waterway" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Source:</strong> Het Kontakt – “Water quality in the region under pressure due to non-natural substances.” 
          Caption: Water quality in many regions is under pressure from non-natural substances – a growing challenge for management and oversight.
        </figcaption>
      </figure>

      

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusion</h2>
      <p class="mb-6 text-muted-foreground">
        Discharge permits are a powerful instrument, but only when they are current and complete. 
        In practice, many permits are outdated or incomplete, making oversight and water protection more complex than necessary. 
        The urgency is clear: by updating permits to reflect today’s knowledge and substances, governments gain more control over discharges and businesses can operate with clearer rules. 
        This provides a solid foundation for future-proof water management and increases the chances of meeting WFD goals on time.
      </p>
    `,
    nl: `
      <!-- INLEIDING -->
      <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Inleiding</h2>
      <p class="mb-6 text-muted-foreground">
        Lozingsvergunningen vormen de juridische basis om de uitstoot van stoffen naar water te reguleren. 
        Ze bepalen welke stoffen geloosd mogen worden, in welke hoeveelheden en onder welke voorwaarden. 
        Daarmee zijn ze een onmisbaar instrument voor overheden om waterkwaliteit te beschermen en bedrijven duidelijkheid te bieden.
      </p>
      <p class="mb-6 text-muted-foreground">
        Toch sluiten veel vergunningen niet altijd goed aan op de huidige werkelijkheid. Sommige zijn verouderd en houden onvoldoende rekening met nieuwe stoffen of processen, 
        andere zijn incompleet en missen bepalingen die nodig zijn voor effectief toezicht. 
        Het gevolg: bedrijven werken volgens de regels, maar toch komen schadelijke stoffen via legale routes in het watersysteem terecht.
      </p>

      <!-- AFBEELDING 1 -->
      <figure class="my-6">
        <img src="/Handhaving.jpg" alt="Toezichthouder met meetapparatuur" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Bron:</strong> Unie van Waterschappen – “Waterschappen hebben vragen over versterking vergunningstelsel”. 
          Bijschrift: Vergunningverlening is een belangrijk instrument om waterkwaliteit te beschermen – actualisatie en versterking zijn nodig om mee te bewegen met nieuwe uitdagingen.
        </figcaption>
      </figure>

      <!-- VERGUNNINGEN DIE ACHTERBLIJVEN -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Vergunningen die achterblijven</h2>
      <p class="mb-4 text-muted-foreground">
        Veel lozingsvergunningen stammen nog uit een tijd dat de kennis over bepaalde stoffen of de aandacht voor diffuse lozingen beperkter was dan nu.
      </p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Nieuwe stoffen buiten beeld</strong> – Stoffen zoals PFAS of andere Zeer Zorgwekkende Stoffen (ZZS) zijn in oudere vergunningen vaak niet opgenomen, omdat ze destijds nog niet in beeld waren.</li>
        <li><strong>Algemene voorschriften</strong> – Soms bevatten vergunningen generieke normen die niet specifiek aansluiten bij het type bedrijf of de stoffen die daar vrijkomen.</li>
        <li><strong>Weinig dynamiek</strong> – Vergunningen worden niet altijd tijdig herzien wanneer processen of stoffen veranderen. Dat kan ertoe leiden dat de vergunning niet meer aansluit op de actuele situatie.</li>
      </ul>
      <p class="mb-6 text-muted-foreground">
        Hierdoor ontstaat een kloof tussen de papieren werkelijkheid en de ecologische realiteit.
      </p>

      <!-- INCOMPLEETHEID -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Incompleetheid: niet alles staat erin</h2>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Beperkte stoffenlijsten</strong> – Veel vergunningen focussen nog op klassieke stoffen zoals nutriënten of zware metalen, terwijl talloze andere verbindingen nauwelijks zijn opgenomen.</li>
        <li><strong>Indirecte routes onderbelicht</strong> – Vergunningen richten zich vaak vooral op directe lozingen. Indirecte emissies via riolen en RWZI’s worden minder expliciet meegenomen, terwijl ze een groot deel van de belasting vormen.</li>
        <li><strong>Ontbrekende basisgegevens</strong> – Niet altijd zijn gegevens over hoeveelheden of concentraties volledig beschikbaar, waardoor toezicht bemoeilijkt wordt.</li>
      </ul>
      <p class="mb-6 text-muted-foreground">
        Dit betekent dat toezichthouders niet altijd het volledige instrumentarium hebben om goed te sturen.
      </p>

      <!-- GEVOLGEN -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Gevolgen voor waterkwaliteit en beleid</h2>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Lozingen binnen de regels</strong> – Bedrijven lozen formeel volgens vergunning, maar toch komen schadelijke stoffen in het milieu terecht.</li>
        <li><strong>Toezicht met gaten</strong> – Zonder volledig beeld missen toezichthouders aanknopingspunten om risico’s tijdig te signaleren.</li>
        <li><strong>Kansen gemist voor KRW-doelen</strong> – Wanneer vergunningen niet actueel zijn, wordt het moeilijker om de doelen voor chemische en ecologische waterkwaliteit in 2027 te halen.</li>
        <li><strong>Vertrouwen en transparantie</strong> – Duidelijke en actuele vergunningen versterken het vertrouwen van bedrijven en burgers dat lozingen op een verantwoorde manier plaatsvinden.</li>
      </ul>

      <!-- AFBEELDING 2 -->
      <figure class="my-6">
        <img src="/d0577b45-3ded-40fa-bbea-3b70468273d9_thumb1920.jpg" alt="Watergang in het landelijk gebied" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Bron:</strong> Het Kontakt – “Waterkwaliteit in regio onder druk door niet-natuurlijke stof”. 
          Bijschrift: Waterkwaliteit staat in veel regio’s onder druk door de aanwezigheid van niet-natuurlijke stoffen – een groeiende uitdaging voor beheer en toezicht.
        </figcaption>
      </figure>


      <!-- CONCLUSIE -->
      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusie</h2>
      <p class="mb-6 text-muted-foreground">
        Lozingsvergunningen zijn een krachtig instrument, maar alleen wanneer ze actueel en volledig zijn. 
        In de praktijk blijken veel vergunningen verouderd of incompleet, waardoor toezicht en waterbescherming complexer worden dan nodig. 
        De urgentie is helder: door vergunningen te actualiseren en beter te laten aansluiten op de kennis en stoffen van vandaag, krijgen overheden meer grip op lozingen en kunnen bedrijven duidelijker werken binnen de kaders. 
        Daarmee ontstaat een stevig fundament voor toekomstbestendig waterbeheer en wordt de kans groter dat de KRW-doelen tijdig worden gehaald.
      </p>
    `,
  },
  heroCaption: { en: "", nl: "" },
  lead: { en: "", nl: "" },
  quote: { en: "", nl: "" },
  tipTitle: { en: "", nl: "" },
  tipContent: { en: "", nl: "" },
},
{
  id: "5",
  type: "blog",
  title: {
    en: "PFAS and discharge permits: a current issue",
    nl: "PFAS en lozingsvergunningen: een actueel vraagstuk",
  },
  excerpt: {
    en: "“The discussion about PFAS discharges highlights the importance of up-to-date data, cooperation, and transparency in water management.”",
    nl: "“De discussie over PFAS-lozingen benadrukt de waarde van actuele data, samenwerking en transparantie in het waterbeheer.”",
  },
  category: {
    en: "Water Management",
    nl: "Waterbeheer",
  },
  date: "2025-08-25",
  readTime: "8 min",
  image: "", // no hero; images are placed inline exactly like the PDF
  featured: false,
  content: {
    // EXACT PDF ORDER & CONTENTS (Dutch kept as-is in both locales)
    en:`
      <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Introduction</h2>
      <p class="mb-6 text-muted-foreground">
        Recently, H2O Actueel published an article about a permit application that would allow a certain amount of PFAS to be discharged annually via the sewer (source: H2O Waternetwerk, 25 August 2025). 
        This sparked much debate, as WWTPs (wastewater treatment plants) are not designed to remove PFAS from wastewater. 
        This raises the broader question: how should we handle permits for substances that hardly degrade and pose risks to the environment and health?
      </p>

      <figure class="my-6">
        <img src="/de-zuid-willemsvaart-vervuild-afvalwater-dreigt-via-de-rioolwaterzuivering-van-weert-in-dit-kanaal-te-belanden.webp" alt="The Zuid-Willemsvaart at Weert" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Source:</strong> Sem Wijnhoven / DCI Media – via <em>de Limburger</em><br/>
          <em>Caption:</em> The Zuid-Willemsvaart at Weert – an important waterway where discharges and water quality must be closely monitored.
        </figcaption>
      </figure>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Why this draws so much attention</h2>
      <p class="mb-2 text-muted-foreground">PFAS is now high on the agenda of water managers and policymakers. This is because:</p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Technical limitations</strong><br/>WWTPs are designed for nutrients and organic matter, but persistent substances like PFAS pass through largely unhindered.</li>
        <li><strong>Uncertainty about composition</strong><br/>It is not always clear exactly which substances are present in industrial wastewater, making careful assessment difficult.</li>
        <li><strong>Future applications</strong><br/>One permit also raises questions for the future: how do we handle similar situations with other companies or sectors?</li>
      </ul>

      <figure class="my-6">
        <img src="/ad09d958633e334321c7ebfaa2f7e1a14014256466d0f8a47593fdf398e7ecb4.jpg" alt="Warning sign: contaminated water (PFAS)" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Source:</strong> STOWA – PFAS pollution and discharge detection is improving, but removal still seems a mission impossible<br/>
          <em>Caption:</em> Warning sign: water contaminated with PFAS – use and consumption strongly discouraged.
        </figcaption>
      </figure>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">The role of permits</h2>
      <p class="mb-6 text-muted-foreground">
        Discharge permits are an essential tool to regulate discharges and provide clarity for both companies and governments. At the same time, they face challenges:
      </p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li>Some permits were issued when substances like PFAS were not yet recognized.</li>
        <li>Many permits focus on traditional discharge streams, while indirect routes via sewers and WWTPs play an increasing role.</li>
        <li>The pace of technological and chemical developments means permits need updating more often.</li>
      </ul>
      <p class="mb-6 text-muted-foreground">
        This means permits may be formally correct but still not fully aligned with today’s environmental challenges.
      </p>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">From rules to cooperation</h2>
      <p class="mb-6 text-muted-foreground">
        The PFAS debate shows how important it is to view policy, enforcement, and practice together. Provinces, water boards, municipalities, and environmental services each have their own roles and responsibilities. By sharing knowledge and data more effectively, a more complete picture emerges and the permitting system can better respond to current challenges.
      </p>
      <p class="mb-6 text-muted-foreground">
        A shared focus on source prevention – preventing substances from entering the sewer or surface water in the first place – also fits within the European ambitions of the Water Framework Directive and the goal of a cleaner, safer water system.
      </p>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusion</h2>
      <p class="mb-6 text-muted-foreground">
        The current PFAS case makes clear that discharge permits are increasingly under pressure from new insights and substances. This is a broader challenge that requires ongoing cooperation, updates, and data-driven decisions.
      </p>
      <p class="mb-6 text-muted-foreground">
        By revising permits in time, linking information better, and working together on transparency, governments can strengthen their role and confidently move towards achieving the WFD goals.
      </p>
    `,
    nl: `
      <h2 class="mt-6 mb-4 text-foreground text-2xl font-bold">Inleiding</h2>
      <p class="mb-6 text-muted-foreground">
        Recent verscheen in H2O Actueel een artikel over een vergunningaanvraag waarbij jaarlijks een
        hoeveelheid PFAS via het riool geloosd zou mogen worden (bron: H2O Waternetwerk, 25 augustus
        2025). Dit leidde tot veel discussie, omdat RWZI’s niet zijn ontworpen om PFAS uit afvalwater te
        verwijderen. Daarmee komt de bredere vraag op tafel: hoe gaan we om met vergunningen voor
        stoffen die nauwelijks afbreekbaar zijn en risico’s vormen voor milieu en gezondheid?
      </p>

      <figure class="my-6">
        <img src="/de-zuid-willemsvaart-vervuild-afvalwater-dreigt-via-de-rioolwaterzuivering-van-weert-in-dit-kanaal-te-belanden.webp" alt="De Zuid-Willemsvaart bij Weert" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Bron:</strong> Sem Wijnhoven / DCI Media – via <em>de Limburger</em><br/>
          <em>Bijschrift:</em> De Zuid-Willemsvaart bij Weert – een belangrijke waterloop waar lozingen en
          waterkwaliteit nauwlettend gevolgd moeten worden.
        </figcaption>
      </figure>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Waarom dit zoveel aandacht trekt</h2>
      <p class="mb-2 text-muted-foreground">PFAS staat inmiddels hoog op de agenda van waterbeheerders en beleidsmakers. Dit komt doordat:</p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li><strong>Technische beperkingen</strong><br/>
          RWZI’s zijn gericht op nutriënten en organische stoffen, maar persistente zoals PFAS
          passeren grotendeels ongehinderd.</li>
        <li><strong>Onzekerheid over samenstelling</strong><br/>
          Niet altijd is exact bekend welke stoffen in industrieel afvalwater aanwezig zijn, wat een
          zorgvuldige beoordeling bemoeilijkt.</li>
        <li><strong>Toekomstige aanvragen</strong><br/>
          Eén vergunning roept ook vragen op voor de toekomst: hoe gaan we om met vergelijkbare
          situaties bij andere bedrijven of sectoren?</li>
      </ul>

      <figure class="my-6">
        <img src="/ad09d958633e334321c7ebfaa2f7e1a14014256466d0f8a47593fdf398e7ecb4.jpg" alt="Waarschuwingsbord: verontreinigd water (PFAS)" class="w-full h-auto rounded-xl shadow-md" />
        <figcaption class="mt-2 text-sm text-muted-foreground">
          <strong>Bron:</strong> STOWA – PFAS-vervuiling en lozing opsporen gaat steeds beter, verwijdering lijkt nog
          een mission impossible<br/>
          <em>Bijschrift:</em> Waarschuwingsbord: water verontreinigd met PFAS – gebruik en consumptie wordt sterk
          afgeraden.
        </figcaption>
      </figure>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">De rol van vergunningen</h2>
      <p class="mb-6 text-muted-foreground">
        Lozingsvergunningen zijn een essentieel instrument om lozingen te reguleren en duidelijkheid te
        scheppen voor bedrijven én overheden. Tegelijkertijd staan ze voor een uitdaging:
      </p>
      <ul class="mb-6 list-disc pl-6 text-muted-foreground">
        <li>Sommige vergunningen zijn opgesteld toen stoffen als PFAS nog niet in beeld waren.</li>
        <li>Veel vergunningen richten zich op klassieke lozingsstromen, terwijl indirecte routes via
            riolen en RWZI’s een steeds grotere rol spelen.</li>
        <li>Het tempo van technologische en chemische ontwikkelingen maakt dat vergunningen sneller
            actualisatie vragen.</li>
      </ul>
      <p class="mb-6 text-muted-foreground">
        Dit betekent dat vergunningen soms formeel in orde zijn, maar toch niet volledig aansluiten op de
        milieuvraagstukken van nu.
      </p>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Van regels naar samenwerking</h2>
      <p class="mb-6 text-muted-foreground">
        Het spanningsveld rond PFAS laat vooral zien hoe belangrijk het is om beleid, toezicht en praktijk
        in samenhang te bekijken. Provincies, waterschappen, gemeenten en omgevingsdiensten hebben
        ieder hun eigen rol en verantwoordelijkheid. Door kennis en data beter te delen, ontstaat een
        vollediger beeld en kan het vergunningstelsel sterker inspelen op actuele uitdagingen.
      </p>
      <p class="mb-6 text-muted-foreground">
        Een gezamenlijke focus op bronaanpak, het voorkomen dat stoffen überhaupt in het riool of
        oppervlaktewater terechtkomen, past bovendien binnen de Europese ambities van de Kaderrichtlijn
        Water en het streven naar een schoner en veiliger watersysteem.
      </p>

      <h2 class="mt-10 mb-4 text-foreground text-2xl font-bold">Conclusie</h2>
      <p class="mb-6 text-muted-foreground">
        Het actuele voorbeeld rond PFAS maakt duidelijk dat lozingsvergunningen steeds vaker onder druk
        komen te staan door nieuwe inzichten en stoffen. Het is een bredere uitdaging die niet op zichzelf
        staat, maar die vraagt om voortdurende samenwerking, actualisatie en datagedreven keuzes.
      </p>
      <p class="mb-6 text-muted-foreground">
        Door vergunningen tijdig te herzien, informatie beter te koppelen en gezamenlijk te werken aan
        transparantie, kunnen overheden hun rol versterken en met vertrouwen toewerken naar het behalen
        van de KRW-doelen.
      </p>
    `,
  },
  heroCaption: { en: "", nl: "" },
  secondImage: "",
  secondImageAlt: { en: "", nl: "" },
  secondImageCaption: { en: "", nl: "" },
  lead: { en: "", nl: "" },
  quote: { en: "", nl: "" },
  tipTitle: { en: "", nl: "" },
  tipContent: { en: "", nl: "" },
}



  
];
