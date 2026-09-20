// YKS-YDT Modals & Modal Perfects Master Data (with Clue Tagging & Learning Tools)
const YDT_DATA = {
  meta: {
    title: "YKS-YDT Modals & Modal Perfects Masterclass",
    targetScore: "Hedef: 75+ Net (ÖSYM Standartlarında)",
    subtitle: "Genişletilmiş Soru Bankası & İleri Düzey Çeldirici Analizleri",
    author: "Veteran YKS-YDT İngilizce Zümresi"
  },
  
  // Rapid 60-Second Trap Hunter Drill Question Bank
  rapidDrill: [
    {
      q: "The door is locked from the outside and lights are off. They ----- at home.",
      options: ["can't be", "mustn't be"],
      correct: "can't be",
      trapNote: "'mustn't' sadece yasak bildirir; olumsuz çıkarım 'can't be' ile yapılır."
    },
    {
      q: "I ----- bought that expensive suit; I discovered later that the gala was casual attire.",
      options: ["needn't have", "didn't need to"],
      correct: "needn't have",
      trapNote: "Takım elbiseyi aldı ama boşuna aldı (needn't have + V3)."
    },
    {
      q: "Because the meeting was postponed until Friday, we ----- prepare the presentation last night.",
      options: ["didn't need to", "needn't have"],
      correct: "didn't need to",
      trapNote: "Erteleme önceden bilindiği için sunumu hazırlamadık (didn't need to + V1)."
    },
    {
      q: "You ----- submit the final tax return before 5:00 PM today, or severe fines will be issued.",
      options: ["had better", "should have"],
      correct: "had better",
      trapNote: "Cezalı acil yaptırım içeren şimdiki zaman uyarısıdır (had better + V1)."
    },
    {
      q: "With his outstanding SAT scores, Mert ----- studied at MIT, but he chose to stay in Izmir.",
      options: ["could have", "might have"],
      correct: "could have",
      trapNote: "Okuma fırsatı/potansiyeli vardı ama okumadı (could have + V3)."
    },
    {
      q: "Historians still debate the mystery; the Mayan civilization ----- collapsed due to severe drought.",
      options: ["might have", "could"],
      correct: "might have",
      trapNote: "Geçmişe dair kesin olmayan olasılık/belirsizlik (might have + V3)."
    },
    {
      q: "The surgeon was in surgery all morning; he ----- stolen the laboratory samples.",
      options: ["couldn't have", "mustn't have"],
      correct: "couldn't have",
      trapNote: "'mustn't have V3' diye bir kalıp yoktur; geçmiş imkânsızlık 'couldn't have V3'tür."
    },
    {
      q: "The driver ----- checked his blind spot before overtaking; now both vehicles are totaled.",
      options: ["should have", "had better"],
      correct: "should have",
      trapNote: "Geçmişte yapılmayan göreve dönük eleştiri/pişmanlık (should have + V3)."
    }
  ],

  // Decision Tree Rule Matrix
  decisionTree: {
    time: [
      { id: "present", label: "Şimdiki / Genel Zaman (Present / Future)" },
      { id: "past", label: "Geçmiş Zaman (Past - have V3)" }
    ],
    categories: {
      present: [
        { id: "deduction_strong_pos", label: "Kuvvetli Olumlu Çıkarım (%95+ Kesinlik)", result: "must + V1", example: "He has 3 sports cars; he must be rich.", note: "İpucu: Look at..., Obviously, I'm sure" },
        { id: "deduction_strong_neg", label: "Kuvvetli Olumsuz Çıkarım (İmkânsızlık)", result: "can't / couldn't + V1", example: "He only arrived today; he can't know the city.", note: "🚨 TUZAK: 'mustn't' çıkarımda kullanılmaz!" },
        { id: "deduction_weak", label: "Zayıf İhtimal (%50 Olasılık)", result: "may / might / could + V1", example: "Take an umbrella; it might rain.", note: "İpucu: Perhaps, Maybe, Possibly" },
        { id: "prohibition", label: "Kesin Yasak / Kural", result: "mustn't + V1", example: "You mustn't use phones during exam.", note: "Strictly forbidden / Not allowed" },
        { id: "no_obligation", label: "Zorunluluğun Yokluğu (Muafiyet)", result: "don't have to / don't need to + V1", example: "Tomorrow is Sunday; we don't have to get up early.", note: "İsteğe bağlı, zorunlu değil" },
        { id: "urgent_warning", label: "Acil Tehdit / Yaptırımlı Tavsiye", result: "had better + V1", example: "You had better leave now or you will miss the train.", note: "🚨 TUZAK: 'had better' her zaman Şimdiki zamandır!" }
      ],
      past: [
        { id: "past_deduction_pos", label: "Geçmişe Dair Kesin Olumlu Çıkarım", result: "must have + V3", example: "The streets are wet; it must have rained overnight.", note: "Geçmişteki somut kanıta dayanır" },
        { id: "past_deduction_neg", label: "Geçmişe Dair İmkânsızlık", result: "can't / couldn't have + V3", example: "She was in Berlin; she couldn't have stolen the file.", note: "🚨 TUZAK: 'mustn't have V3' kural dışıdır!" },
        { id: "unnecessary_done", label: "Gereksizdi ama YAPILDI (Boşuna yapıldı)", result: "needn't have + V3", example: "I bought bread, but mom already had three loaves.", note: "Eylem yapıldı, zahmet boşa gitti" },
        { id: "unnecessary_not_done", label: "Gereksizdi ve bu yüzden YAPILMADI", result: "didn't need to + V1", example: "The class was cancelled, so I didn't need to study.", note: "Eylem yapılmadı" },
        { id: "unfulfilled_duty", label: "Yapılmalıydı ama YAPILMADI (Pişmanlık/Eleştiri)", result: "should / ought to have + V3", example: "You should have checked your passport before leaving.", note: "Unfulfilled obligation" },
        { id: "criticism_done", label: "Yapılmamalıydı ama YAPILDI (Hata Eleştirisi)", result: "shouldn't have + V3", example: "You shouldn't have disclosed our secrets.", note: "Yapılan hatanın eleştirisi" },
        { id: "missed_opportunity", label: "Yapabilirdi / İmkânı vardı ama YAPMADI", result: "could have + V3", example: "He could have studied at Harvard, but chose Istanbul.", note: "Unrealized potential / Kaçırılmış fırsat" },
        { id: "past_uncertainty", label: "Yapmış olabilir (Emin değiliz / Belirsiz)", result: "may / might have + V3", example: "The Maya might have collapsed due to drought.", note: "Geçmişe dair zayıf ihtimal" }
      ]
    }
  },

  modules: [
    {
      id: "module1",
      number: 1,
      title: "Deduction & Certainty (Çıkarım ve Kesinlik)",
      subtitle: "Present vs. Past Deduction: Kesinlik ve Mantıksal Çıkarım Yapıları",
      overview: "YDT'de en sık çıkan soru tiplerinden biridir. Bir durum karşısında eldeki kanıtlara (evidence) dayanarak mantıksal bir sonuca varırken zaman ayrımı (Present vs. Past) ve kesinlik derecesi hayati önem taşır.",
      theorySections: [
        {
          heading: "1. Present Deduction (Şimdiki / Genel Zamanda Mantıksal Çıkarım)",
          content: `
            <p>Eldeki somut kanıtlara dayanarak <strong>şu an</strong> veya <strong>genel geçer</strong> bir durum hakkında çıkarım yaparken kullanılır:</p>
            <ul>
              <li><strong class="badge-teal">must + V1 (Kuvvetli Olumlu Çıkarım - %95+):</strong> '... olmalı, ... olduğu kesin.'<br>
                <em>İpucu Kelimeler:</em> "I'm sure", "Obviously", "Look at...", "Clearly", "Without a doubt".<br>
                <em>Örnek:</em> The lights are on and classical music is playing; they <strong>must be</strong> in the living room. <em>(Işıklar yanıyor ve klasik müzik çalıyor; salonda olmalılar / oldukları kesin.)</em>
              </li>
              <li><strong class="badge-red">can't / couldn't + V1 (Kuvvetli Olumsuz Çıkarım - %95+ İmkânsızlık):</strong> '... olamaz, mümkün değil.'<br>
                <div class="alert-trap"><strong>🚨 ÖSYM TUZAĞI:</strong> "mustn't" ASLA mantıksal çıkarımda 'olamaz' anlamında kullanılamaz! 'Mustn't' sadece kural/yasak bildirir. Olumsuz çıkarım sadece <strong>can't / couldn't</strong> ile yapılır.</div>
                <em>Örnek:</em> He has lived in London for only two days; he <strong>can't know</strong> the entire subway map by heart. <em>(Londra'da sadece iki gündür yaşıyor; tüm metro haritasını ezbere biliyor olamaz.)</em>
              </li>
              <li><strong class="badge-orange">may / might / could + V1 (Zayıf Olasılık - %50):</strong> '... olabilir, ihtimal dahilinde.'<br>
                <em>Örnek:</em> Take an umbrella with you; the sky is slightly overcast and it <strong>might rain</strong> later. <em>(Yanına şemsiye al; hava biraz kapalı, daha sonra yağmur yağabilir.)</em>
              </li>
            </ul>
          `,
          clueBox: {
            title: "🎯 YDT Altın İpucu: Present Çıkarım Tetikleyicileri",
            items: [
              "Cümlede 'Look!', 'Listen!', 'Right now', 'At the moment' veya geniş zamanlı somut kanıt varsa ➔ <strong>must / can't + V1</strong>",
              "Seçeneklerde 'mustn't + V1' çıkarım gibi sunulduğunda <strong>derhal eleyiniz!</strong>"
            ]
          },
          inFlightCheck: {
            id: "ifc_1_1",
            type: "binary_choice",
            prompt: "1. Micro-Check: Cümledeki kanıta göre doğru modali seçiniz:",
            sentence: "Look at his brand new customized sports car and five-star luxury penthouse; he [ must / can't ] be earning a tremendous salary as a senior software architect.",
            sentenceTagged: "Look at his <span class='clue-highlight clue-evidence' title='Somut Zenginlik Kanıtı'>brand new customized sports car and five-star luxury penthouse</span>; he [ must / can't ] be earning a tremendous salary.",
            options: ["must", "can't"],
            correctOption: "must",
            clue: "Kanıt: 'customized sports car and five-star luxury penthouse' (özel yapım spor araba ve 5 yıldızlı çatı katı) yüksek gelire dair kesin kanıttır.",
            translation: "Özel yapım spor arabasına ve lüks çatı katına baksana; kıdemli yazılım mimarı olarak muazzam bir maaş kazanıyor olmalı."
          }
        },
        {
          heading: "2. Past Deduction (Geçmişe Yönelik Çıkarım - Modal + have V3)",
          content: `
            <p>Geçmişte yaşanmış bir olay veya durum hakkında <strong>geriye dönük mantıksal çıkarım</strong> yaparken Modal Perfect yapıları kullanılır:</p>
            <ul>
              <li><strong class="badge-teal">must have V3 (Geçmişe Dair Kesin Olumlu Çıkarım):</strong> '... yapmış / olmuş olmalı.'<br>
                <em>Formül:</em> Past Evidence + High Certainty.<br>
                <em>Örnek:</em> The streets were soaking wet this morning; it <strong>must have rained</strong> heavily overnight. <em>(Bu sabah sokaklar sırılsıklamdı; gece boyunca şiddetli yağmur yağmış olmalı.)</em>
              </li>
              <li><strong class="badge-red">can't have V3 / couldn't have V3 (Geçmişe Dair İmkânsızlık):</strong> '... yapmış / olmuş olamaz.'<br>
                <div class="alert-trap"><strong>🚨 ÖSYM TUZAĞI:</strong> "mustn't have V3" diye bir çıkarım kalıbı İngilizce dilbilgisinde YOKTUR ve YDT'de doğru cevap olamaz.</div>
                <em>Örnek:</em> Sarah was with me at the medical conference in Berlin all yesterday afternoon; she <strong>couldn't have stolen</strong> the confidential documents in Istanbul. <em>(Sarah dün tüm öğleden sonra Berlin'deki tıp konferansında benimleydi; İstanbul'daki gizli belgeleri çalmış olamaz.)</em>
              </li>
              <li><strong class="badge-orange">may / might / could have V3 (Geçmişe Dair Zayıf Olasılık / Belirsizlik):</strong> '... yapmış olabilir (bilmiyoruz/tahmin).'<br>
                <em>Örnek:</em> I can't find my car keys anywhere; I <strong>may have left</strong> them on the kitchen counter. <em>(Araba anahtarlarımı bulamıyorum; onları mutfak tezgahında unutmuş olabilirim.)</em>
              </li>
            </ul>
          `,
          clueBox: {
            title: "🎯 YDT Zaman Uyumu Kuralı (Past Evidence Clues)",
            items: [
              "Yan cümlecikte 'yesterday', 'in the 19th century', 'when he arrived', 'was/were' gibi <strong>Past</strong> bir ipucu varsa, ana cümlede çıkarım için mutlaka <strong>have + V3</strong> aranmalıdır.",
              "Kesinlik derecesi: <em>must have V3 (emin)</em> > <em>may/might have V3 (belirsiz)</em>."
            ]
          },
          inFlightCheck: {
            id: "ifc_1_2",
            type: "identification",
            prompt: "2. Micro-Check: Boşluğa gelecek en uygun Past Deduction yapısını belirleyiniz:",
            sentence: "The archeologists found intact bread loaves and fresh olives inside the volcanic ashes of Pompeii; the eruption ----- (happen) with unbelievable suddenness.",
            sentenceTagged: "The archeologists <span class='clue-highlight clue-evidence' title='Arkeolojik Geçmiş Kanıt'>found intact bread loaves and fresh olives inside the volcanic ashes</span>; the eruption ----- with unbelievable suddenness.",
            options: ["must have happened", "should happen", "can't have happened", "might happen"],
            correctOption: "must have happened",
            clue: "İpucu: Bozulmamış ekmek ve taze zeytin kalıntılarının bulunması, patlamanın inanılmaz bir anilikle 'gerçekleşmiş olması gerektiğine' (kesin geçmiş çıkarım) işaret eder.",
            translation: "Arkeologlar Pompeii'nin volkanik külleri içinde bozulmamış ekmek somunları ve taze zeytinler buldular; patlama inanılmaz bir anilikle gerçekleşmiş olmalı."
          }
        },
        {
          heading: "3. Negative Past Deduction: Impossibility Clues",
          content: `
            <p>Geçmişte bir olayın gerçekleşmiş olmasının <strong>fiziken veya mantıken imkânsız</strong> olduğunu ifade eden ipuçları:</p>
            <ul>
              <li>Kişinin aynı anda başka bir yerde olması (alibi), fiziksel engeller, kesin tarih çelişkileri doğrudan <strong>couldn't have V3 / can't have V3</strong> gerektirir.</li>
              <li><em>Örnek:</em> With all doors bolted from the inside and no windows broken, the burglar <strong>couldn't have entered</strong> through the main hall. <em>(Tüm kapılar içeriden sürgülüyken ve hiçbir cam kırılmamışken, hırsız ana salondan girmiş olamaz.)</em></li>
            </ul>
          `,
          clueBox: {
            title: "💡 Hızlı Formül",
            items: [
              "Evidence (Geçmiş Kanıt) + Impossibility (İmkânsızlık) ➔ <strong>couldn't have + V3</strong>",
              "Evidence (Geçmiş Kanıt) + Certainty (Kesinlik) ➔ <strong>must have + V3</strong>"
            ]
          },
          inFlightCheck: {
            id: "ifc_1_3",
            type: "binary_choice",
            prompt: "3. Micro-Check: Cümledeki imkânsızlık kanıtına göre doğru modali seçiniz:",
            sentence: "Since Dennis was in a deep coma in the intensive care unit all last week, he [ couldn't have written / must have written ] that malicious article.",
            sentenceTagged: "Since Dennis <span class='clue-highlight clue-evidence' title='Fiziksel İmkânsızlık / Alibi'>was in a deep coma in the intensive care unit all last week</span>, he [ couldn't have written / must have written ] that malicious article.",
            options: ["couldn't have written", "must have written"],
            correctOption: "couldn't have written",
            clue: "Yoğun bakımda komada olan birinin makale yazmış olması mantıken ve fiziken imkânsızdır.",
            translation: "Dennis geçen hafta boyunca yoğun bakımda derin bir komada olduğu için, o kötü niyetli makaleyi yazmış olamaz."
          }
        }
      ],
      checkpoints: [
        {
          id: "cp_1_1",
          questionNumber: 1,
          question: "Given that the suspects were captured on CCTV cameras miles away at the exact timestamp of the burglary, they ----- the museum's high-security vault.",
          questionTagged: "Given that the suspects <span class='clue-highlight clue-evidence' title='Kesin Alibi / Başka Yerde Olma'>were captured on CCTV cameras miles away at the exact timestamp</span> of the burglary, they ----- the museum's high-security vault.",
          options: [
            { key: "A", text: "mustn't have breached" },
            { key: "B", text: "couldn't have breached" },
            { key: "C", text: "should have breached" },
            { key: "D", text: "might breach" },
            { key: "E", text: "must breach" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (couldn't have breached)</strong><br><br><strong>İpucu Kelimeler:</strong> 'captured on CCTV cameras miles away at the exact timestamp' (soygun anında millerce uzakta kameralarda görünmeleri).<br><strong>Çözüm & Çeldirici Analizi:</strong> Şüphelilerin aynı anda soygunu gerçekleştirmesi imkânsızdır. Geçmişte imkânsız çıkarım <strong>couldn't have V3 / can't have V3</strong> ile ifade edilir.<br><strong>Neden Diğerleri Yanlış?</strong><br>• A seçeneğindeki 'mustn't have V3' kural dışıdır, çıkarımda kullanılmaz.<br>• C seçeneği 'girmeleri gerekirdi (ama girmediler)' pişmanlık/eleştiri verir, bağlama uymaz.<br>• D ve E Present yapılardır, geçmiş olaya uymaz."
        },
        {
          id: "cp_1_2",
          questionNumber: 2,
          question: "Look at the profound sadness and tears in Ayşe's eyes; the medical board ----- her grandmother's biopsy results as malignant.",
          questionTagged: "<span class='clue-highlight clue-evidence' title='Somut Duygusal / Fiziksel Kanıt'>Look at the profound sadness and tears in Ayşe's eyes</span>; the medical board ----- her grandmother's biopsy results as malignant.",
          options: [
            { key: "A", text: "must have confirmed" },
            { key: "B", text: "can't confirm" },
            { key: "C", text: "shouldn't have confirmed" },
            { key: "D", text: "needn't have confirmed" },
            { key: "E", text: "had better confirm" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (must have confirmed)</strong><br><br><strong>İpucu Kelimeler:</strong> 'Look at the profound sadness and tears in Ayşe's eyes' (Ayşe'nin gözlerindeki derin üzüntü ve gözyaşlarına baksana).<br><strong>Çözüm & Çeldirici Analizi:</strong> Şu andaki somut kanıt (gözyaşları ve üzüntü), kurulun biyopsi sonucunu kötü huylu olarak onaylamış <em>olması gerektiğine</em> kuvvetli bir geçmiş çıkarım yaptırır (must have V3).<br><strong>Neden Diğerleri Yanlış?</strong><br>• B seçeneği 'onaylayamaz' der, gözyaşı kanıtıyla çelişir.<br>• C seçeneği 'onaylamaması gerekirdi' (eleştiri) bağlama uymaz.<br>• D seçeneği 'boşuna onayladı' demektir, mantıksızdır."
        },
        {
          id: "cp_1_3",
          questionNumber: 3,
          question: "With no prior flight experience and zero navigation training, the teenager ----- landed the twin-engine aircraft safely in dense fog without expert radio guidance from the control tower.",
          questionTagged: "With <span class='clue-highlight clue-evidence' title='Fiziksel / Eğitsel Yetersizlik'>no prior flight experience and zero navigation training</span>, the teenager ----- landed the twin-engine aircraft safely in dense fog without expert radio guidance.",
          options: [
            { key: "A", text: "must have" },
            { key: "B", text: "might have" },
            { key: "C", text: "couldn't have" },
            { key: "D", text: "should have" },
            { key: "E", text: "needn't have" }
          ],
          correctKey: "C",
          explanation: "<strong>Doğru Cevap: C (couldn't have)</strong><br><br><strong>İpucu Kelimeler:</strong> 'With no prior flight experience', 'zero navigation training', 'without expert radio guidance' (hiçbir uçuş tecrübesi ve eğitimi olmadan, kule rehberliği de olmaksızın).<br><strong>Çözüm & Çeldirici Analizi:</strong> Hiçbir eğitimi ve desteği olmayan bir gencin yoğun siste uçağı tek başına güvenle indirmiş olması <em>imkânsız bir geçmiş durumdur</em> (couldn't have landed = indirmiş olamaz)."
        },
        {
          id: "cp_1_4",
          questionNumber: 4,
          question: "The forensic report shows that the victim's lungs contained large amounts of saltwater, which indicates that he ----- drowned in the ocean rather than being asphyxiated in the freshwater swimming pool.",
          questionTagged: "The forensic report shows that the victim's lungs <span class='clue-highlight clue-evidence' title='Adli Tıp Kanıtı'>contained large amounts of saltwater</span>, which indicates that he ----- drowned in the ocean.",
          options: [
            { key: "A", text: "must have" },
            { key: "B", text: "should have" },
            { key: "C", text: "can't have" },
            { key: "D", text: "needn't have" },
            { key: "E", text: "would rather have" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (must have)</strong><br><br><strong>İpucu Kelimeler:</strong> 'contained large amounts of saltwater' (akciğerlerinde yüksek miktarda tuzlu su bulunması).<br><strong>Çözüm & Çeldirici Analizi:</strong> Adli tıp raporundaki tuzlu su bulgusu, kurbanın tatlı su havuzunda değil okyanusta boğulmuş <em>olması gerektiğine</em> (must have drowned) kesin kanıt teşkil eder."
        },
        {
          id: "cp_1_5",
          questionNumber: 5,
          question: "Considering that Mark was severely incapacitated with a broken collarbone during the championship final, he ----- scored the winning goal in the last minute of extra time.",
          questionTagged: "Considering that Mark was <span class='clue-highlight clue-evidence' title='Fiziksel Sakatlık Kanıtı'>severely incapacitated with a broken collarbone</span> during the championship final, he ----- scored the winning goal.",
          options: [
            { key: "A", text: "must have" },
            { key: "B", text: "can't have" },
            { key: "C", text: "should have" },
            { key: "D", text: "might have" },
            { key: "E", text: "ought to have" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (can't have)</strong><br><br><strong>İpucu Kelimeler:</strong> 'severely incapacitated with a broken collarbone' (köprücük kemiği kırık halde ağır derecede yetersiz/oynayamaz durumda olması).<br><strong>Çözüm & Çeldirici Analizi:</strong> Köprücük kemiği kırık olan bir oyuncunun son dakikada galibiyet golünü atmış olması imkânsızdır (can't have scored / couldn't have scored = atmış olamaz)."
        }
      ]
    },
    {
      id: "module2",
      number: 2,
      title: "Obligation, Necessity & Absence of Obligation (Zorunluluk ve Muafiyet)",
      subtitle: "Must vs. Have To vs. Needn't Have V3 vs. Didn't Need To V1",
      overview: "YDT'nin en klasik soru kalıplarından biri olan 'geçmişte gereksizlik' ayrımı (needn't have V3 vs. didn't need to V1) ve zorunluluk/yasak ayrımları bu ünitede tam olarak çözümlenir.",
      theorySections: [
        {
          heading: "1. Present Obligation & Prohibition (Zorunluluk vs. Yasak vs. Muafiyet)",
          content: `
            <p>Şimdiki ve genel zamanda zorunluluk dereceleri şu şekilde ayrışır:</p>
            <ul>
              <li><strong class="badge-teal">Must vs. Have to:</strong><br>
                • <strong>must:</strong> Konuşanın kendi hissettiği içsel zorunluluk, aciliyet veya resmi kuralların doğrudan ifadesi.<br>
                • <strong>have to:</strong> Dışsal zorunluluk (kanunlar, okul yönetmeliği, patron veya dış şartlar dayatır).<br>
                <em>Örnek:</em> In the UK, drivers <strong>have to</strong> drive on the left side of the road.
              </li>
              <li><strong class="badge-red">Mustn't (Kesin Yasak - Prohibited):</strong><br>
                'Yapmamalısın, yasak!' (You are not allowed / strictly forbidden).<br>
                <em>Örnek:</em> You <strong>mustn't use</strong> smartwatches during the YDT examination.
              </li>
              <li><strong class="badge-orange">Don't have to / Don't need to / Needn't (Muafiyet):</strong><br>
                'Yapmak zorunda değilsin, gerek yok.' (It is optional, not mandatory).<br>
                <em>Örnek:</em> Tomorrow is a national holiday, so we <strong>don't have to wake up</strong> early.
              </li>
            </ul>
          `,
          clueBox: {
            title: "⚠️ Kritik YDT Uyarısı: Mustn't ile Don't have to Farkı",
            items: [
              "<strong>Mustn't:</strong> Eylemi yaparsan ceza/zarar görürsün (YASAK).",
              "<strong>Don't have to:</strong> Eylemi yapmak zorunda değilsin, ama istersen yapabilirsin (SERBESTLİK / GEREKSİZLİK)."
            ]
          },
          inFlightCheck: {
            id: "ifc_2_1",
            type: "binary_choice",
            prompt: "1. Micro-Check: Anlam farkına göre doğru seçeneği işaretleyiniz:",
            sentence: "According to laboratory safety protocols, researchers [ mustn't / don't have to ] handle volatile radioactive isotopes without protective lead gloves.",
            sentenceTagged: "<span class='clue-highlight clue-evidence' title='Katı Güvenlik Protokolü (Yasak)'>According to laboratory safety protocols</span>, researchers [ mustn't / don't have to ] handle volatile radioactive isotopes without lead gloves.",
            options: ["mustn't", "don't have to"],
            correctOption: "mustn't",
            clue: "Güvenlik protokolleri gereği eldivensiz dokunmak ölümcül/yasaktır (strict prohibition), isteğe bağlı bir durum değildir.",
            translation: "Laboratuvar güvenlik protokollerine göre, araştırmacılar koruyucu kurşun eldivenler olmadan uçucu radyoaktif izotopları ellememelidir (kesinlikle yasaktır)."
          }
        },
        {
          heading: "2. The Grand YDT Distinction Trap: Needn't have V3 vs. Didn't need to V1",
          content: `
            <p>Geçmişte bir işin gerekli olmaması durumunda YDT soru yazarlarının en sevdiği tuzak ikili şudur:</p>
            <table class="table-ydt">
              <thead>
                <tr>
                  <th>Modal Yapısı</th>
                  <th>Türkçe Anlamı</th>
                  <th>Eylem Gerçekleşti mi? (Action Done?)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:var(--red-600)">needn't have + V3</strong></td>
                  <td>Yapmasına gerek <em>yoktu</em> ama <strong>yaptı</strong> (Boşuna zahmet etti).</td>
                  <td><span class="status-badge yes">EVET (Yapıldı - Boşunaydı)</span></td>
                </tr>
                <tr>
                  <td><strong style="color:var(--teal-700)">didn't need to + V1</strong><br>(veya didn't have to V1)</td>
                  <td>Yapmasına gerek <em>yoktu</em> ve bu yüzden <strong>yapmadı</strong>.</td>
                  <td><span class="status-badge no">HAYIR (Yapılmadı)</span></td>
                </tr>
              </tbody>
            </table>
          `,
          clueBox: {
            title: "🎯 YDT Çözüm Anahtarı: Soru Kökündeki 'Sonuç' Cümlesine Bak!",
            items: [
              "Eğer cümlede '... fakat boşuna zaman/para harcadım' veya 'keşke yapmasaydım' hissi varsa ➔ <strong>needn't have V3</strong>",
              "Eğer cümlede '... bu sayede evde kaldık / gitmekten kurtulduk' gibi eylemin yapılmadığı belirtiliyorsa ➔ <strong>didn't need to V1</strong>"
            ]
          },
          inFlightCheck: {
            id: "ifc_2_2",
            type: "binary_choice",
            prompt: "2. Micro-Check: Eylemin gerçekleşip gerçekleşmediğini analiz edip doğru yapıyı seçiniz:",
            sentence: "We [ needn't have rented / didn't need to rent ] a car for our holiday because my uncle kindly lent us his spacious SUV throughout the trip.",
            sentenceTagged: "We [ needn't have rented / didn't need to rent ] a car because my uncle <span class='clue-highlight clue-evidence' title='Aracı Ödünç Verdi (Kiralamadık)'>kindly lent us his spacious SUV</span> throughout the trip.",
            options: ["didn't need to rent", "needn't have rented"],
            correctOption: "didn't need to rent",
            clue: "İpucu: Amcamız bize aracını ödünç verdiği için araba kiralamadık/kiralamaktan kurtulduk (action was not done). Dolayısıyla 'didn't need to rent' doğrudur.",
            translation: "Tatilimiz için araba kiralamamıza gerek kalmadı çünkü amcam seyahat boyunca bize geniş SUV aracını nezaketle ödünç verdi."
          }
        },
        {
          heading: "3. Negative Subject Trap: 'None of them / Nobody had to...'",
          content: `
            <p>YDT'de özne olumsuz bir kelime olduğunda (<em>Nobody, No one, None of the students</em>) yüklem olumlu çekimlenir:</p>
            <ul>
              <li><strong>None of them had to pay:</strong> Hiçbiri ödemek zorunda kalmadı (= Didn't have to pay).</li>
              <li><em>Örnek:</em> As the museum entry was completely free on Museum Day, <strong>nobody had to purchase</strong> a ticket.</li>
            </ul>
          `,
          clueBox: {
            title: "💡 Özne-Yüklem Uyumu",
            items: ["Cümle başında 'None of...' veya 'Nobody' varsa çift olumsuzluk yapılmaz; olumlu yüklem negatif anlam kazanır."]
          },
          inFlightCheck: {
            id: "ifc_2_3",
            type: "binary_choice",
            prompt: "3. Micro-Check: Cümledeki negatif özneye göre uygun yüklemi seçiniz:",
            sentence: "Because the storm subsided earlier than predicted, none of the evacuated villagers [ had to spend / needn't have spent ] the night in the temporary shelter.",
            sentenceTagged: "Because the storm subsided, <span class='clue-highlight clue-evidence' title='Negatif Anlam Veren Özne'>none of the evacuated villagers</span> [ had to spend / needn't have spent ] the night in the shelter.",
            options: ["had to spend", "needn't have spent"],
            correctOption: "had to spend",
            clue: "'none of the evacuated villagers' ifadesi olumsuzluk kattığı için 'had to spend' ile birleştiğinde 'köylülerin hiçbiri geceyi sığınakta geçirmek zorunda kalmadı' anlamını verir.",
            translation: "Fırtına tahmin edilenden erken dindiği için, tahliye edilen köylülerin hiçbiri geceyi geçici sığınakta geçirmek zorunda kalmadı."
          }
        }
      ],
      checkpoints: [
        {
          id: "cp_2_1",
          questionNumber: 1,
          question: "I ----- the entire 600-page historical treatise overnight because the professor announced at the beginning of the lecture that the final deadline had been postponed by two weeks.",
          questionTagged: "I ----- the entire 600-page historical treatise <span class='clue-highlight clue-evidence' title='Bütün Gece Okumuş'>overnight</span> because the professor announced at the lecture that the deadline <span class='clue-highlight clue-evidence' title='Ertelendiğini Sonradan Öğrendi'>had been postponed</span>.",
          options: [
            { key: "A", text: "didn't need to read" },
            { key: "B", text: "needn't have read" },
            { key: "C", text: "mustn't have read" },
            { key: "D", text: "had better not read" },
            { key: "E", text: "would rather not read" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (needn't have read)</strong><br><br><strong>İpucu Kelimeler:</strong> 'read overnight' (gece boyunca okumuş) + 'the professor announced ... that the deadline had been postponed' (profesör dersin başında sürenin ertelendiğini duyurdu).<br><strong>Çözüm & Çeldirici Analizi:</strong> Öğrenci kitabı gece boyunca okumuştur; ancak derste ertelemeyi öğrenince boşuna zahmet ettiğini anlamıştır (needn't have read = okumama gerek yokmuş)."
        },
        {
          id: "cp_2_2",
          questionNumber: 2,
          question: "Since all the delegates were given free digital access passes beforehand, none of them ----- any registration fees at the conference reception desk.",
          questionTagged: "Since all delegates were given <span class='clue-highlight clue-evidence' title='Ücretsiz Kart Verildi'>free digital access passes</span>, <span class='clue-highlight clue-evidence' title='Negatif Özne'>none of them</span> ----- any registration fees.",
          options: [
            { key: "A", text: "needn't have paid" },
            { key: "B", text: "had to pay" },
            { key: "C", text: "had better pay" },
            { key: "D", text: "must have paid" },
            { key: "E", text: "would pay" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (had to pay)</strong><br><br><strong>İpucu Kelimeler:</strong> Cümlenin öznesindeki <strong>'none of them'</strong> (hiçbiri) negatif yapıdır! 'none of them had to pay' = Hiçbiri ödemek zorunda kalmadı (didn't need to pay). Ücretsiz kart verildiği için ücret ödenmemiştir."
        },
        {
          id: "cp_2_3",
          questionNumber: 3,
          question: "In most European Union jurisdictions, citizens ----- carry their passports when traveling within the Schengen Area, but they ----- be in possession of a valid national ID card at all times.",
          questionTagged: "In EU, citizens ----- carry passports <span class='clue-highlight clue-evidence' title='Schengen İçi Serbestlik'>when traveling within Schengen</span>, but they ----- be in possession of a valid ID <span class='clue-highlight clue-evidence' title='Zorunlu Yasal Kural'>at all times</span>.",
          options: [
            { key: "A", text: "mustn't / might" },
            { key: "B", text: "don't have to / must" },
            { key: "C", text: "needn't / shouldn't" },
            { key: "D", text: "can't / had better" },
            { key: "E", text: "must / don't need to" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (don't have to / must)</strong><br><br><strong>İpucu Kelimeler:</strong> 'traveling within Schengen Area' (pasaport kontrolü yok ➔ pasaport taşımak zorunlu değil: <em>don't have to</em>) + 'valid national ID card at all times' (her zaman geçerli kimlik bulundurma yasal zorunluluğu: <em>must</em>)."
        },
        {
          id: "cp_2_4",
          questionNumber: 4,
          question: "You ----- so much food for the party; almost half of the guests had informed us in advance that they had dietary restrictions and could not attend.",
          questionTagged: "You ----- <span class='clue-highlight clue-evidence' title='Yemek Pişirildi'>so much food for the party</span>; almost half of the guests <span class='clue-highlight clue-evidence' title='Gelemediler (Yemekler Arttı)'>could not attend</span>.",
          options: [
            { key: "A", text: "didn't need to cook" },
            { key: "B", text: "needn't have cooked" },
            { key: "C", text: "mustn't cook" },
            { key: "D", text: "should cook" },
            { key: "E", text: "had better not cook" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (needn't have cooked)</strong><br><br><strong>İpucu Kelimeler:</strong> 'so much food for the party' (parti için o kadar çok yemek) + 'half of the guests... could not attend' (konukların yarısı katılamadı).<br><strong>Çözüm & Çeldirici Analizi:</strong> Yemek pişirilmiş ama konuklar gelmediği için yemekler elde kalmıştır. 'Bu kadar çok yemek pişirmene gerek yoktu (boşuna pişirdin)' anlamı <strong>needn't have cooked</strong> ile verilir."
        },
        {
          id: "cp_2_5",
          questionNumber: 5,
          question: "As the corporate training seminar was made entirely optional by the human resources department, junior employees ----- the weekend sessions unless they wished to earn bonus credits.",
          questionTagged: "As the seminar <span class='clue-highlight clue-evidence' title='Tamamen İsteğe Bağlı Kılındı'>was made entirely optional</span>, junior employees ----- the weekend sessions.",
          options: [
            { key: "A", text: "didn't have to attend" },
            { key: "B", text: "needn't have attended" },
            { key: "C", text: "mustn't attend" },
            { key: "D", text: "should have attended" },
            { key: "E", text: "had to attend" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (didn't have to attend)</strong><br><br><strong>İpucu Kelimeler:</strong> 'made entirely optional' (tamamen isteğe bağlı kılındığı için) + 'unless they wished...' (istemedikleri sürece).<br><strong>Çözüm & Çeldirici Analizi:</strong> Seminer zorunlu tutulmadığı için çalışanlar katılmak zorunda kalmamıştır (didn't have to attend / didn't need to attend)."
        }
      ]
    },
    {
      id: "module3",
      number: 3,
      title: "Advisability, Expectation & Past Regret (Tavsiye ve Geçmiş Pişmanlık)",
      subtitle: "Should / Ought to / Had better vs. Should have V3 / Shouldn't have V3",
      overview: "YDT'de sınav sorularının büyük kısmı 'geçmişte yapılması gerekip de yapılmayan eylemler' (unfulfilled past duties) veya 'yapılıp pişman olunan eylemler' üzerine kuruludur.",
      theorySections: [
        {
          heading: "1. Present Advisability & Urgent Warning (Tavsiye vs. Acil Tehdit/Uyarı)",
          content: `
            <p>Tavsiye ve öğüt verirken güç derecelerine dikkat edilmelidir:</p>
            <ul>
              <li><strong class="badge-teal">should / ought to + V1:</strong> '... yapmalısın, yapsan iyi olur.' (Genel ahlaki veya mantıksal tavsiye).<br>
                <em>Örnek:</em> You <strong>should / ought to consult</strong> an academic advisor before choosing your university major.
              </li>
              <li><strong class="badge-orange">had better + V1 (Kuvvetli Uyarı / Tehdit İçeren Tavsiye):</strong> '... yapsan çok iyi olur, yoksa kötü bir sonuç doğar!'<br>
                <div class="alert-trap"><strong>🚨 ÖSYM TUZAĞI:</strong> 'had' kelimesi sizi yanıltmasın! <strong>had better her zaman ŞİMDİKİ / GELECEK zamandır</strong>, asla Past değildir! Olumsuzu <strong>had better not + V1</strong>'dir.</div>
                <em>Örnek:</em> You <strong>had better submit</strong> your university application before 5 PM, or the system will lock you out.
              </li>
              <li><strong class="badge-teal">be supposed to + V1:</strong> '... yapması bekleniyor / yapması gerekiyor (kural/plan gereği).'<br>
                <em>Örnek:</em> Students <strong>are supposed to turn off</strong> their phones in the library.
              </li>
            </ul>
          `,
          clueBox: {
            title: "🎯 YDT Çeldirici Tuzağı: 'Had Better' Görünüşü",
            items: [
              "'Had better' geçmiş zaman DEĞİLDİR! Geçmiş zaman sorularında 'had better' seçeneğini derhal eleyebilirsiniz.",
              "Olumsuzu: <em>had better not</em> ('hadn't better' YANLIŞTIR)."
            ]
          },
          inFlightCheck: {
            id: "ifc_3_1",
            type: "transformation",
            prompt: "1. Micro-Check: Aşağıdaki cümlenin uyarısına en uygun modali belirleyiniz:",
            sentence: "The deadline is in 10 minutes. If you don't submit the test right now, you will automatically get a score of zero. You [ had better / should have ] click submit immediately.",
            sentenceTagged: "The deadline is in 10 minutes. <span class='clue-highlight clue-evidence' title='Acil Yaptırımlı Şimdiki Zaman Tehdidi'>If you don't submit right now, you will automatically get zero</span>. You [ had better / should have ] click submit.",
            options: ["had better", "should have"],
            correctOption: "had better",
            clue: "Cümlede 'If you don't..., you will automatically get zero' şeklinde doğrudan acil bir yaptırım/tehdit (warning with negative consequence) vardır ve zaman şimdiki zamandır.",
            translation: "Süre 10 dakika içinde bitiyor. Eğer testi hemen göndermezseniz otomatik olarak sıfır alacaksınız. Derhal 'gönder' butonuna tıklasanız çok iyi olur."
          }
        },
        {
          heading: "2. Past Regret & Criticism: Should have V3 / Shouldn't have V3",
          content: `
            <p>Geçmişte yapılması gerekip de <strong>yapılmayan</strong> veya yapılıp da <strong>pişmanlık/eleştiri</strong> doğuran durumlar:</p>
            <ul>
              <li><strong class="badge-teal">should have V3 / ought to have V3:</strong> 'Yapmalıydın / yapması gerekirdi (ama YAPMADI).'<br>
                <em>Anlamı:</em> Geçmişte yerine getirilmemiş görev (unfulfilled obligation) veya pişmanlık.<br>
                <em>Örnek:</em> The driver <strong>should have checked</strong> his blind spot before changing lanes; now both cars are heavily damaged. <em>(Sürücü şerit değiştirmeden önce kör noktasını kontrol etmeliydi; şimdi iki araba da ağır hasarlı. ➔ Kontrol etmedi.)</em>
              </li>
              <li><strong class="badge-red">shouldn't have V3 / ought not to have V3:</strong> 'Yapmamalıydın / yapmaması gerekirdi (ama YAPTI).'<br>
                <em>Anlamı:</em> Geçmişte yapılmış bir hatayı eleştirme (criticism of a past mistake).<br>
                <em>Örnek:</em> You <strong>shouldn't have disclosed</strong> our company's trade secrets to our competitors during the interview. <em>(Mülakat sırasında rakiplerimize şirketimizin ticari sırlarını ifşa etmemeliydin. ➔ İfşa etti.)</em>
              </li>
            </ul>
          `,
          clueBox: {
            title: "🎯 YDT 'Gerçek Durum' (Fact vs. Modal) Eşleştirmesi",
            items: [
              "<strong>Fact:</strong> He didn't study and failed. ➔ <strong>Modal:</strong> He <em>should have studied</em> harder.",
              "<strong>Fact:</strong> She drove too fast and crashed. ➔ <strong>Modal:</strong> She <em>shouldn't have driven</em> so fast."
            ]
          },
          inFlightCheck: {
            id: "ifc_3_2",
            type: "transformation",
            prompt: "2. Micro-Check: Gerçekleşmiş olan geçmiş hatayı eleştiren doğru modal perfect yapısını seçiniz:",
            sentence: "Transformation Drill: 'Mark spent all his scholarship money on unnecessary video games and could not pay his semester tuition.' ➔ Mark [ shouldn't have spent / should spend ] all his scholarship money on video games.",
            sentenceTagged: "'Mark <span class='clue-highlight clue-evidence' title='Parayı Harcadı (Geçmiş Hata)'>spent all his scholarship money</span> on video games and could not pay tuition.' ➔ Mark [ shouldn't have spent / should spend ] it.",
            options: ["shouldn't have spent", "should spend"],
            correctOption: "shouldn't have spent",
            clue: "Mark parayı harcadı (geçmiş eylem) ve harç parasını ödeyemedi. Yapılan hataya dönük geçmiş eleştiri 'shouldn't have V3' ile ifade edilir.",
            translation: "Mark tüm burs parasını video oyunlarına harcamamalıydı (ama harcadı)."
          }
        },
        {
          heading: "3. 'Ought to have V3' & 'Was supposed to V1' Distinctions",
          content: `
            <p><strong>Was / Were supposed to + V1:</strong> Geçmişte bir kural, plan veya beklenti vardı ancak gerçekleşmedi:</p>
            <ul>
              <li><em>Örnek:</em> The flight <strong>was supposed to take off</strong> at 09:00 AM, but it was delayed by four hours due to technical failure. <em>(Uçağın saat 09:00'da kalkması gerekiyordu/planlanmıştı ama rötar yaptı.)</em></li>
            </ul>
          `,
          clueBox: {
            title: "💡 YDT Eş Anlamlısı",
            items: ["should have V3 = ought to have V3 (Yapmalıydı ama yapmadı)"]
          },
          inFlightCheck: {
            id: "ifc_3_3",
            type: "binary_choice",
            prompt: "3. Micro-Check: Planlanan ancak gerçekleşmeyen geçmiş eylemi seçiniz:",
            sentence: "The courier [ was supposed to deliver / must deliver ] the legal contract yesterday morning, but the severe blizzard prevented any postal dispatch.",
            sentenceTagged: "The courier [ was supposed to deliver / must deliver ] the contract <span class='clue-highlight clue-evidence' title='Planlanan Geçmiş Zaman'>yesterday morning</span>, but blizzard prevented dispatch.",
            options: ["was supposed to deliver", "must deliver"],
            correctOption: "was supposed to deliver",
            clue: "Dün sabah ('yesterday morning') teslim etmesi bekleniyordu/planlanmıştı ama fırtına engelledi.",
            translation: "Kuryenin yasal sözleşmeyi dün sabah teslim etmesi gerekiyordu/bekleniyordu, fakat şiddetli tipi her türlü posta sevkiyatını engelledi."
          }
        }
      ],
      checkpoints: [
        {
          id: "cp_3_1",
          questionNumber: 1,
          question: "The civil engineer ----- the structural integrity of the suspension bridge prior to the heavy winter storms, as the severe vibrations have now forced the authorities to shut down traffic completely.",
          questionTagged: "The civil engineer ----- the integrity of the bridge <span class='clue-highlight clue-evidence' title='Fırtına Öncesi Yapılmalıydı'>prior to the heavy winter storms</span>, as vibrations <span class='clue-highlight clue-evidence' title='Şimdi Trafiği Kapatmak Zorunda Bıraktı (Yapılmadı)'>have now forced authorities to shut down</span>.",
          options: [
            { key: "A", text: "must reinforce" },
            { key: "B", text: "should have reinforced" },
            { key: "C", text: "needn't have reinforced" },
            { key: "D", text: "might reinforce" },
            { key: "E", text: "had better reinforce" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (should have reinforced)</strong><br><br><strong>İpucu Kelimeler:</strong> 'prior to the heavy winter storms' (fırtınalardan önce) + 'have now forced the authorities to shut down traffic' (şimdi trafiği kapatmak zorunda bıraktı).<br><strong>Çözüm & Çeldirici Analizi:</strong> Köprünün trafiğe kapatılması, mühendisin fırtına öncesinde gerekli güçlendirmeyi <em>yapmadığını</em> gösterir. Geçmişte yapılması gerekip de yapılmayan eylem için <strong>should have reinforced</strong> (güçlendirmeliydi) kullanılır."
        },
        {
          id: "cp_3_2",
          questionNumber: 2,
          question: "Considering the patient's severe allergy to penicillin documented in his medical chart, the resident doctor ----- that particular antibiotic without conducting a preliminary sensitivity test.",
          questionTagged: "Considering the patient's <span class='clue-highlight clue-evidence' title='Kayıtlı Alerji'>severe allergy to penicillin documented in his chart</span>, the resident doctor ----- that antibiotic without test.",
          options: [
            { key: "A", text: "shouldn't have administered" },
            { key: "B", text: "couldn't administer" },
            { key: "C", text: "didn't need to administer" },
            { key: "D", text: "had better not administer" },
            { key: "E", text: "mustn't administer" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (shouldn't have administered)</strong><br><br><strong>İpucu Kelimeler:</strong> 'documented allergy to penicillin' (belgelenmiş penisilin alerjisi) + 'without conducting a preliminary sensitivity test' (ön duyarlılık testi yapmaksızın).<br><strong>Çözüm & Çeldirici Analizi:</strong> Doktor bu ilacı hastaya vermiş ve büyük bir hata yapmıştır. Geçmişte yapılan hatalı bir eylemi eleştirirken <strong>shouldn't have administered</strong> (vermemesi gerekirdi / vermemeliydi) kullanılır."
        },
        {
          id: "cp_3_3",
          questionNumber: 3,
          question: "The expedition team ----- more emergency oxygen cylinders before ascending into the 'death zone' of Mount Everest; now they are stranded and struggling to survive.",
          questionTagged: "The expedition team ----- more emergency oxygen cylinders <span class='clue-highlight clue-evidence' title='Tırmanmadan Önce Alınmalıydı'>before ascending</span>; <span class='clue-highlight clue-evidence' title='Şimdi Mahsur Kaldılar (Almadılar)'>now they are stranded</span>.",
          options: [
            { key: "A", text: "must pack" },
            { key: "B", text: "ought to have packed" },
            { key: "C", text: "would rather pack" },
            { key: "D", text: "can't have packed" },
            { key: "E", text: "might pack" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (ought to have packed)</strong><br><br><strong>İpucu Kelimeler:</strong> 'before ascending' (tırmanmadan önce) + 'now they are stranded and struggling to survive' (şimdi mahsur kaldılar ve hayatta kalma mücadelesi veriyorlar).<br><strong>Çözüm & Çeldirici Analizi:</strong> Ekip daha fazla oksijen tüpü almamıştır. 'Oksijen tüpü almaları gerekirdi' anlamını <strong>ought to have packed (= should have packed)</strong> verir."
        },
        {
          id: "cp_3_4",
          questionNumber: 4,
          question: "The financial director ----- the auditors about the discrepancies in the quarterly earnings report before the stock market opened; withholding that information has now triggered a criminal investigation.",
          questionTagged: "The financial director ----- the auditors <span class='clue-highlight clue-evidence' title='Borsa Açılmadan Önce Bildirmeliydi'>before the stock market opened</span>; <span class='clue-highlight clue-evidence' title='Gizlediği İçin Soruşturma Açıldı (Bildirmedi)'>withholding that info triggered investigation</span>.",
          options: [
            { key: "A", text: "should have informed" },
            { key: "B", text: "must inform" },
            { key: "C", text: "needn't have informed" },
            { key: "D", text: "had better inform" },
            { key: "E", text: "can't have informed" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (should have informed)</strong><br><br><strong>İpucu Kelimeler:</strong> 'before the stock market opened' (borsa açılmadan önce) + 'withholding that information has now triggered a criminal investigation' (bu bilgiyi gizlemek şimdi cezai soruşturma başlattı).<br><strong>Çözüm & Çeldirici Analizi:</strong> Finans direktörü denetçileri zamanında bilgilendirmemiştir. 'Bilgilendirmesi gerekirdi / bilgilendirmeliydi' anlamı <strong>should have informed</strong> ile verilir."
        },
        {
          id: "cp_3_5",
          questionNumber: 5,
          question: "You ----- your confidential banking PIN code to an unverified caller over the phone; no legitimate banking institution ever requests such credentials via unsolicited voice calls.",
          questionTagged: "You ----- your confidential banking PIN code <span class='clue-highlight clue-evidence' title='Telefonda Verdi (Geçmiş Hata)'>to an unverified caller over the phone</span>; no legitimate bank requests credentials.",
          options: [
            { key: "A", text: "shouldn't have given" },
            { key: "B", text: "didn't need to give" },
            { key: "C", text: "mustn't give" },
            { key: "D", text: "had better give" },
            { key: "E", text: "could give" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (shouldn't have given)</strong><br><br><strong>İpucu Kelimeler:</strong> 'to an unverified caller' (doğrulanmamış bir arayana) + 'no legitimate banking institution ever requests...' (hiçbir meşru banka bu bilgileri istemez).<br><strong>Çözüm & Çeldirici Analizi:</strong> Kişi bankacılık şifresini dolandırıcıya vermiştir (eylem yapıldı). Yapılan bu vahim hataya dönük geçmiş eleştiri <strong>shouldn't have given</strong> (vermemeliydin) ile ifade edilir."
        }
      ]
    },
    {
      id: "module4",
      number: 4,
      title: "Possibility & Unrealized Past Ability (Olasılık ve Gerçekleşmemiş Yetenek)",
      subtitle: "Could have V3 (Gerçekleşmemiş Fırsat) vs. May / Might have V3 (Geçmiş Belirsizlik)",
      overview: "YDT öğrencilerinin en çok karıştırdığı iki kavram: 'Yapabilirdi ama yapmadı' (Unrealized capacity) ile 'Yapmış olabilir (bilmiyoruz)' (Past probability).",
      theorySections: [
        {
          heading: "1. Present vs. Past Possibility (Şimdiki Olasılık vs. Geçmiş Olasılık)",
          content: `
            <p>Bir eylemin gerçekleşme ihtimalini ifade ederken:</p>
            <ul>
              <li><strong class="badge-teal">may / might / could + V1 (Şimdiki / Gelecek Zamanda İhtimal):</strong> '... olabilir, yapabilir.'<br>
                <em>Örnek:</em> The central bank <strong>may / might / could raise</strong> interest rates next month to curb inflation.
              </li>
              <li><strong class="badge-orange">may / might have V3 (Geçmişe Dair İhtimal / Belirsizlik):</strong> '... yapmış olabilir (kesin değil, emin değiliz).'<br>
                <em>Örnek:</em> Archaeologists speculate that the ancient Mayan city <strong>might have collapsed</strong> due to prolonged severe droughts. <em>(Arkeologlar, antik Maya şehrinin şiddetli kuraklıklar nedeniyle çökmüş olabileceğini tahmin ediyorlar. ➔ Kesin bilinmiyor.)</em>
              </li>
            </ul>
          `,
          clueBox: {
            title: "🎯 YDT Olasılık İpucu",
            items: [
              "Cümlede 'Perhaps', 'Maybe', 'Possibly', 'It is not known whether...', 'Historians speculate' gibi ifadeler varsa ➔ <strong>may / might have V3</strong>"
            ]
          },
          inFlightCheck: {
            id: "ifc_4_1",
            type: "binary_choice",
            prompt: "1. Micro-Check: Cümledeki belirsizlik ipucuna göre doğru seçeneği bulunuz:",
            sentence: "Historians still do not know for sure why the ship vanished; it [ might have been attacked / must be attacked ] by pirates or struck by a rogue wave.",
            sentenceTagged: "<span class='clue-highlight clue-evidence' title='Kesin Olarak Bilinmiyor (Geçmiş İhtimal)'>Historians still do not know for sure</span> why the ship vanished; it [ might have been attacked / must be attacked ] by pirates.",
            options: ["might have been attacked", "must be attacked"],
            correctOption: "might have been attacked",
            clue: "Cümledeki 'Historians still do not know for sure' (tarihçiler hala kesin olarak bilmiyor) geçmişteki bir belirsizliğe işaret eder (might have been V3).",
            translation: "Tarihçiler geminin neden ortadan kaybolduğunu hala kesin olarak bilmiyorlar; korsanlar tarafından saldırıya uğramış veya devasa bir dalgaya çarpmış olabilir."
          }
        },
        {
          heading: "2. The Key Distinction: Could have V3 (Unrealized Ability / Potential)",
          content: `
            <p><strong>Could have V3</strong> yapısının YDT'de iki farklı kullanımı vardır:</p>
            <ol>
              <li><strong class="badge-teal">Unrealized Potential / Opportunity (Yapabilirdi ama yapmadı):</strong><br>
                Kişinin geçmişte bir şeyi yapmaya gücü, fırsatı veya yeteneği vardı; ancak bilinçli veya tesadüfen o eylemi <strong>YAPMADI</strong>.<br>
                <em>Örnek:</em> With his exceptional SAT scores, Kerem <strong>could have studied</strong> at Harvard, but he preferred to stay in Istanbul with his family. <em>(Mükemmel SAT puanıyla Kerem Harvard'da okuyabilirdi ama ailesiyle İstanbul'da kalmayı tercih etti. ➔ Okumadı.)</em>
              </li>
              <li><strong class="badge-red">Narrow Escape from Danger (Az kalsın oluyordu / Olabilirdi):</strong><br>
                <em>Örnek:</em> You were driving too fast in the rain; you <strong>could have crashed</strong> into the barrier! <em>(Yağmurda çok hızlı sürüyordun; bariyere çarpabilirdin! ➔ Çarpmadın ama büyük bir tehlike atlattın.)</em>
              </li>
            </ol>
            <div class="comparison-summary">
              <p><strong>Özet Ayrım:</strong></p>
              <p>• <strong>May / Might have V3:</strong> Eylemin olup olmadığını bilmiyoruz (Belirsizlik / İhtimal).</p>
              <p>• <strong>Could have V3:</strong> Eylemin <u>yapılmadığını</u> kesin olarak biliyoruz; sadece potansiyel vardı (Kaçırılmış Fırsat / Yapılmamış Eylem).</p>
            </div>
          `,
          clueBox: {
            title: "🎯 YDT 'But' & 'Prefer' İpuçları",
            items: [
              "Cümlede '..., but he chose not to / but he preferred...' gibi bir zıtlık bağlacı varsa ➔ <strong>could have V3</strong> kaçırılmış fırsatı anlatır."
            ]
          },
          inFlightCheck: {
            id: "ifc_4_2",
            type: "binary_choice",
            prompt: "2. Micro-Check: 'Yapabilirdi ama yapmadı' anlamını veren doğru modali seçiniz:",
            sentence: "With her fluency in four languages, Zeynep [ could have secured / might secure ] a prestigious position at the UN, but she decided to teach English in a rural village instead.",
            sentenceTagged: "With her fluency, Zeynep [ could have secured / might secure ] a UN post, <span class='clue-highlight clue-evidence' title='Fakat Başka Bir Şey Yapmayı Seçti (Yapmadı)'>but she decided to teach in a village instead</span>.",
            options: ["could have secured", "might secure"],
            correctOption: "could have secured",
            clue: "İpucu: Zeynep BM'de prestijli bir pozisyon elde edebilirdi ama köyde öğretmenlik yapmayı tercih etti ('but she decided to teach... instead'). Bu kaçırılmış bir fırsattır (could have V3).",
            translation: "Dört dildeki akıcılığıyla Zeynep BM'de prestijli bir pozisyon elde edebilirdi, fakat bunun yerine kırsal bir köyde İngilizce öğretmeye karar verdi."
          }
        },
        {
          heading: "3. 'Could have been V3' (Passive Unrealized Potential)",
          content: `
            <p>Pasif yapılarda da gerçekleşmemiş potansiyel sıkça sorulur:</p>
            <ul>
              <li><em>Örnek:</em> The catastrophic train collision <strong>could have been prevented</strong> if the computerized signaling system had been updated on schedule. <em>(Eğer sinyalizasyon zamanında güncellenseydi feci tren kazası engellenebilirdi ➔ Engellenemedi).</em></li>
            </ul>
          `,
          clueBox: {
            title: "💡 YDT Pasif Formülü",
            items: ["could have been + V3 = Engellenebilirdi / kurtarılabilirdi (ama kurtarılamadı)"]
          },
          inFlightCheck: {
            id: "ifc_4_3",
            type: "binary_choice",
            prompt: "3. Micro-Check: Pasif gerçekleşmemiş potansiyel cümlesini tamamlayınız:",
            sentence: "The historic wooden mansion [ could have been saved / must be saved ] from the fire if the fire brigade had arrived ten minutes earlier.",
            sentenceTagged: "The historic wooden mansion [ could have been saved / must be saved ] from the fire <span class='clue-highlight clue-evidence' title='10 Dakika Erken Gelseydi (Geç Geldi)'>if the fire brigade had arrived 10 min earlier</span>.",
            options: ["could have been saved", "must be saved"],
            correctOption: "could have been saved",
            clue: "İtfaiye 10 dakika önce gelseydi tarihi konak kurtarılabilirdi (ama kurtarılamadı, yandı).",
            translation: "Eğer itfaiye on dakika önce gelmiş olsaydı tarihi ahşap konak yangından kurtarılabilirdi."
          }
        }
      ],
      checkpoints: [
        {
          id: "cp_4_1",
          questionNumber: 1,
          question: "With his immense inherited fortune and extensive political connections, the young aristocrat ----- elected to the parliament easily, but he deliberately chose a reclusive life dedicated to philosophy.",
          questionTagged: "With his immense inherited fortune, the young aristocrat ----- elected to the parliament, <span class='clue-highlight clue-evidence' title='Fakat İnzivayı Seçti (Seçilmedi)'>but he deliberately chose a reclusive life</span>.",
          options: [
            { key: "A", text: "must have been" },
            { key: "B", text: "could have been" },
            { key: "C", text: "should be" },
            { key: "D", text: "needn't have been" },
            { key: "E", text: "might be" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (could have been)</strong><br><br><strong>İpucu Kelimeler:</strong> 'immense inherited fortune' (büyük miras kalan servet) + '..., but he deliberately chose a reclusive life...' (fakat o kasten inzivaya çekilmiş bir hayatı seçti).<br><strong>Çözüm & Çeldirici Analizi:</strong> Genç aristokratın parlamentoya seçilme gücü ve imkânı vardı ama o bunu yapmadı (could have been = seçilebilirdi ama seçilmedi)."
        },
        {
          id: "cp_4_2",
          questionNumber: 2,
          question: "The exact cause of the Bronze Age Collapse around 1200 BC remains an enigma; while some scholars point to climate change, others argue that marauding 'Sea Peoples' ----- the major coastal civilizations.",
          questionTagged: "The exact cause around 1200 BC <span class='clue-highlight clue-evidence' title='Hala Muamma (Tarihi Belirsizlik)'>remains an enigma</span>; scholars argue that 'Sea Peoples' ----- coastal civilizations.",
          options: [
            { key: "A", text: "may have devastated" },
            { key: "B", text: "should have devastated" },
            { key: "C", text: "had better devastate" },
            { key: "D", text: "didn't need to devastate" },
            { key: "E", text: "must devastate" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (may have devastated)</strong><br><br><strong>İpucu Kelimeler:</strong> 'remains an enigma' (hala bir sır/muamma olarak kalmaktadır) + 'while some scholars point to..., others argue that...' (farklı tezler).<br><strong>Çözüm & Çeldirici Analizi:</strong> Tarihi olayın sebebi kesin bilinmemektedir (belirsizlik / geçmiş olasılık). Deniz Kavimleri kıyı uygarlıklarını 'tahrip etmiş olabilir' anlamı <strong>may have devastated</strong> ile verilir."
        },
        {
          id: "cp_4_3",
          questionNumber: 3,
          question: "You were carelessly texting while driving at 120 km/h on that icy mountain pass; you ----- into the deep ravine and lost your life!",
          questionTagged: "You were <span class='clue-highlight clue-evidence' title='Buzlu Yolda 120 km Mesajlaşma (Tehlike)'>carelessly texting while driving at 120 km/h on that icy mountain pass</span>; you ----- into the deep ravine!",
          options: [
            { key: "A", text: "must plunge" },
            { key: "B", text: "could have plunged" },
            { key: "C", text: "should plunge" },
            { key: "D", text: "needn't have plunged" },
            { key: "E", text: "would plunge" }
          ],
          correctKey: "B",
          explanation: "<strong>Doğru Cevap: B (could have plunged)</strong><br><br><strong>İpucu Kelimeler:</strong> 'carelessly texting while driving at 120 km/h on that icy mountain pass' (buzlu dağ geçidinde 120 km ile mesajlaşırken).<br><strong>Çözüm & Çeldirici Analizi:</strong> Kişi uçuruma yuvarlanmamıştır ama büyük bir tehlike atlatmıştır. 'Az kalsın yuvarlanabilirdin' anlamı <strong>could have plunged</strong> ile verilir."
        },
        {
          id: "cp_4_4",
          questionNumber: 4,
          question: "The legendary football club ----- the league title with two matches to spare, but a string of shocking injuries to key players in the final month completely derailed their campaign.",
          questionTagged: "The club ----- the league title <span class='clue-highlight clue-evidence' title='İki Maç Kala Fırsat Vardı'>with two matches to spare</span>, <span class='clue-highlight clue-evidence' title='Fakat Sakatlıklar Yüzünden Kaçırdılar'>but injuries derailed their campaign</span>.",
          options: [
            { key: "A", text: "could have clinched" },
            { key: "B", text: "must clinch" },
            { key: "C", text: "needn't have clinched" },
            { key: "D", text: "should clinch" },
            { key: "E", text: "had better clinch" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (could have clinched)</strong><br><br><strong>İpucu Kelimeler:</strong> 'with two matches to spare' (iki maç kala şampiyonluğu garantileme fırsatı) + '..., but a string of shocking injuries... derailed their campaign' (fakat sakatlıklar şampiyonluğu raydan çıkardı).<br><strong>Çözüm & Çeldirici Analizi:</strong> Takımın şampiyonluğu erkenden ilan etme fırsatı vardı ama bunu başaramadılar (kaçırılmış fırsat ➔ <strong>could have clinched</strong>)."
        },
        {
          id: "cp_4_5",
          questionNumber: 5,
          question: "Astronomers suggest that water ----- across the surface of Mars billions of years ago when the planet possessed a much denser atmosphere and a protective magnetic field.",
          questionTagged: "<span class='clue-highlight clue-evidence' title='Gökbilimciler Öne Sürüyor (Bilimsel İhtimal)'>Astronomers suggest</span> that water ----- across Mars <span class='clue-highlight clue-evidence' title='Milyarlarca Yıl Önce'>billions of years ago</span>.",
          options: [
            { key: "A", text: "might have flowed" },
            { key: "B", text: "should flow" },
            { key: "C", text: "had better flow" },
            { key: "D", text: "must flow" },
            { key: "E", text: "couldn't flow" }
          ],
          correctKey: "A",
          explanation: "<strong>Doğru Cevap: A (might have flowed)</strong><br><br><strong>İpucu Kelimeler:</strong> 'Astronomers suggest' (gökbilimciler öne sürüyor) + 'billions of years ago' (milyarlarca yıl önce).<br><strong>Çözüm & Çeldirici Analizi:</strong> Milyarlarca yıl önceki bilimsel bir ihtimal ve geçmiş olasılık <strong>might have flowed (veya may have flowed)</strong> ile ifade edilir."
        }
      ]
    }
  ],
  mixedExam: {
    title: "YKS-YDT Authentic Mixed Practice Test (10 Soruluk Mega Deneme)",
    description: "ÖSYM YDT standartlarında hazırlanmış, bağlaçlar, zaman ipuçları ve çeldirici tuzaklar içeren 10 adet ileri düzey soru (Hedef: 10/10).",
    questions: [
      {
        id: "ydt_q1",
        number: 1,
        question: "Given that the patient's acute symptoms vanished completely within hours of administering the antiviral drug, the medical specialists concluded that the experimental therapy ----- the replication of the pathogen far more effectively than initially anticipated.",
        questionTagged: "Given that symptoms <span class='clue-highlight clue-evidence' title='Saatler İçinde Yok Oldu'>vanished completely within hours</span>, specialists concluded that therapy ----- the replication.",
        options: [
          { key: "A", text: "must have suppressed" },
          { key: "B", text: "should suppress" },
          { key: "C", text: "needn't have suppressed" },
          { key: "D", text: "would rather suppress" },
          { key: "E", text: "had better suppress" }
        ],
        correctKey: "A",
        explanation: "<strong>Doğru Cevap: A (must have suppressed)</strong><br><br><strong>İpucu Kelimeler:</strong> 'acute symptoms vanished completely within hours' (akut belirtilerin saatler içinde tamamen yok olması) + 'the medical specialists concluded that...' (uzmanların şu sonuca varması...).<br><strong>Çözüm & Çeldirici Analizi:</strong> Semptomların saatler içinde hızla yok olması somut bir geçmiş kanıttır. Uzmanlar da bu kanıta dayanarak ilacın patojenin çoğalmasını tahmin edilenden çok daha etkili bir şekilde 'baskılamış olması gerektiği' çıkarımını yapmıştır (Past Deduction ➔ <strong>must have V3</strong>)."
      },
      {
        id: "ydt_q2",
        number: 2,
        question: "The defense attorneys argued that their client ----- the financial fraud because all transaction authorization codes were generated from an IP address in Singapore while he was undeniably undergoing open-heart surgery in Chicago.",
        questionTagged: "Attorneys argued client ----- the fraud because codes were from Singapore <span class='clue-highlight clue-evidence' title='Açık Kalp Ameliyatındaydı (Kesin Alibi)'>while he was undeniably undergoing open-heart surgery in Chicago</span>.",
        options: [
          { key: "A", text: "should have orchestrated" },
          { key: "B", text: "couldn't have orchestrated" },
          { key: "C", text: "must orchestrate" },
          { key: "D", text: "might orchestrate" },
          { key: "E", text: "needn't have orchestrated" }
        ],
        correctKey: "B",
        explanation: "<strong>Doğru Cevap: B (couldn't have orchestrated)</strong><br><br><strong>İpucu Kelimeler:</strong> 'while he was undeniably undergoing open-heart surgery in Chicago' (o inkar edilemez şekilde Chicago'da açık kalp ameliyatı olurken) + 'IP address in Singapore' (Singapur'daki IP adresi).<br><strong>Çözüm & Çeldirici Analizi:</strong> Ameliyatta olan bir kişinin aynı anda Singapur'dan dolandırıcılığı organize etmesi mantıken imkânsızdır (Past Impossibility ➔ <strong>couldn't have V3</strong>)."
      },
      {
        id: "ydt_q3",
        number: 3,
        question: "Although the lead researcher had at his disposal cutting-edge electron microscopes and millions of dollars in federal grants, he ----- the project on time because of severe mismanagement within his laboratory staff.",
        questionTagged: "<span class='clue-highlight clue-evidence' title='Tüm İmkan ve Milyon Dolarlar Vardı'>Although he had cutting-edge microscopes and millions</span>, he ----- project on time <span class='clue-highlight clue-evidence' title='Kötü Yönetim Yüzünden Bitiremedi'>because of severe mismanagement</span>.",
        options: [
          { key: "A", text: "must have finalized" },
          { key: "B", text: "could have finalized" },
          { key: "C", text: "should finalize" },
          { key: "D", text: "had better finalize" },
          { key: "E", text: "needn't finalize" }
        ],
        correctKey: "B",
        explanation: "<strong>Doğru Cevap: B (could have finalized)</strong><br><br><strong>İpucu Kelimeler:</strong> 'Although the lead researcher had at his disposal cutting-edge microscopes and millions of dollars' (Elinde mikroskoplar ve milyonlarca dolar olmasına rağmen) + 'because of severe mismanagement' (kötü yönetim sebebiyle).<br><strong>Çözüm & Çeldirici Analizi:</strong> Araştırmacının projeyi zamanında bitirecek tüm imkânları ve gücü vardı (potansiyel mevcuttu), fakat kötü yönetim yüzünden bitiremedi (Unrealized Capacity ➔ <strong>could have finalized</strong>)."
      },
      {
        id: "ydt_q4",
        number: 4,
        question: "Because the meteorology department issued a severe red-alert storm warning 48 hours in advance, the shipping company ----- all its maritime vessels to sea, but they recklessly ignored the advisory, resulting in a tragic catastrophe.",
        questionTagged: "Because dept issued <span class='clue-highlight clue-evidence' title='Kırmızı Alarm Fırtına Uyarısı'>red-alert storm warning</span>, the company ----- vessels, <span class='clue-highlight clue-evidence' title='Görmezden Geldiler ve Felaket Oldu'>but recklessly ignored, resulting in catastrophe</span>.",
        options: [
          { key: "A", text: "didn't need to dispatch" },
          { key: "B", text: "shouldn't have dispatched" },
          { key: "C", text: "mustn't dispatch" },
          { key: "D", text: "might not dispatch" },
          { key: "E", text: "would rather dispatch" }
        ],
        correctKey: "B",
        explanation: "<strong>Doğru Cevap: B (shouldn't have dispatched)</strong><br><br><strong>İpucu Kelimeler:</strong> 'red-alert storm warning' (kırmızı alarm fırtına uyarısı) + 'they recklessly ignored the advisory, resulting in a tragic catastrophe' (uyarıyı pervasızca görmezden geldiler ve bu da felaketle sonuçlandı).<br><strong>Çözüm & Çeldirici Analizi:</strong> Şirket gemileri fırtınaya rağmen denize yollamış ve felakete sebep olmuştur. Geçmişteki vahim hatayı eleştirirken <strong>shouldn't have dispatched</strong> kullanılır."
      },
      {
        id: "ydt_q5",
        number: 5,
        question: "As the corporate headquarters provided fully catered gourmet lunches and complimentary refreshments throughout the international seminar, the participants ----- extra funds on outside dining.",
        questionTagged: "As company provided <span class='clue-highlight clue-evidence' title='Ücretsiz Gurme Yemek Sağlandı'>fully catered gourmet lunches and refreshments</span>, participants ----- extra funds on dining.",
        options: [
          { key: "A", text: "must have spent" },
          { key: "B", text: "had to spend" },
          { key: "C", text: "didn't need to spend" },
          { key: "D", text: "should spend" },
          { key: "E", text: "had better not spend" }
        ],
        correctKey: "C",
        explanation: "<strong>Doğru Cevap: C (didn't need to spend)</strong><br><br><strong>İpucu Kelimeler:</strong> 'corporate headquarters provided fully catered gourmet lunches' (şirket tamamen karşılanan gurme yemek ve ikramlar sağladığı için).<br><strong>Çözüm & Çeldirici Analizi:</strong> Yemekler ücretsiz sağlandığı için katılımcıların dışarıda para harcamalarına gerek kalmadı ve dolayısıyla para harcamadılar (eylem yapılmadı ➔ <strong>didn't need to spend</strong>)."
      },
      {
        id: "ydt_q6",
        number: 6,
        question: "Paleontologists excavating in the Gobi Desert suggest that the newly discovered feathered dinosaur species ----- flight capability, but it primarily utilized its plumage for thermo-regulation and mating displays.",
        questionTagged: "<span class='clue-highlight clue-evidence' title='Paleontologlar Öne Sürüyor (Bilimsel Tahmin)'>Paleontologists suggest</span> dinosaur species ----- flight capability, but utilized plumage for mating.",
        options: [
          { key: "A", text: "must have developed" },
          { key: "B", text: "might have developed" },
          { key: "C", text: "should develop" },
          { key: "D", text: "needn't have developed" },
          { key: "E", text: "had better develop" }
        ],
        correctKey: "B",
        explanation: "<strong>Doğru Cevap: B (might have developed)</strong><br><br><strong>İpucu Kelimeler:</strong> 'Paleontologists... suggest' (paleontologlar öne sürüyor) + 'billions/millions of years ago' bağlamı.<br><strong>Çözüm & Çeldirici Analizi:</strong> Milyonlarca yıl önceki tüylü dinozorun uçma yeteneğini geliştirmiş olabileceğine dair bilimsel bir hipotez/ihtimal anlatılmaktadır (Past Possibility ➔ <strong>might have developed / may have developed</strong>)."
      },
      {
        id: "ydt_q7",
        number: 7,
        question: "You ----- those confidential customer credit card records to an unencrypted public cloud server; doing so has directly violated strict GDPR data compliance laws and triggered severe financial penalties.",
        questionTagged: "You ----- customer records <span class='clue-highlight clue-evidence' title='Şifresiz Sunucuya Yükledi (Geçmiş Hata)'>to an unencrypted public cloud server</span>; doing so <span class='clue-highlight clue-evidence' title='Kanunu İhlal Etti'>violated strict GDPR laws</span>.",
        options: [
          { key: "A", text: "shouldn't have uploaded" },
          { key: "B", text: "couldn't upload" },
          { key: "C", text: "didn't need to upload" },
          { key: "D", text: "mustn't upload" },
          { key: "E", text: "had better not upload" }
        ],
        correctKey: "A",
        explanation: "<strong>Doğru Cevap: A (shouldn't have uploaded)</strong><br><br><strong>İpucu Kelimeler:</strong> 'to an unencrypted public cloud server' (şifrelenmemiş halka açık bulut sunucuya) + 'doing so has directly violated GDPR laws' (bunu yapmak veri kanunlarını doğrudan ihlal etti).<br><strong>Çözüm & Çeldirici Analizi:</strong> Veriler yüklenmiş ve kanun ihlal edilmiştir (eylem yapıldı). Geçmişteki bu kritik hatayı eleştirirken <strong>shouldn't have uploaded</strong> kullanılır."
      },
      {
        id: "ydt_q8",
        number: 8,
        question: "With his outstanding diplomatic acumen and fluency in five languages, Ambassador Arda ----- the fragile peace negotiations between the warring factions, but the prime minister unexpectedly recalled him back to Ankara.",
        questionTagged: "<span class='clue-highlight clue-evidence' title='Üstün Diplomatik Yetenek Vardı'>With his outstanding diplomatic acumen</span>, Arda ----- peace negotiations, <span class='clue-highlight clue-evidence' title='Fakat Başbakan Geri Çağırdı (Yapamadı)'>but the PM unexpectedly recalled him</span>.",
        options: [
          { key: "A", text: "could have mediated" },
          { key: "B", text: "must mediate" },
          { key: "C", text: "needn't have mediated" },
          { key: "D", text: "should mediate" },
          { key: "E", text: "had better mediate" }
        ],
        correctKey: "A",
        explanation: "<strong>Doğru Cevap: A (could have mediated)</strong><br><br><strong>İpucu Kelimeler:</strong> 'With his outstanding diplomatic acumen' (üstün diplomatik yeteneğiyle) + '..., but the prime minister unexpectedly recalled him' (fakat başbakan beklenmedik şekilde onu geri çağırdı).<br><strong>Çözüm & Çeldirici Analizi:</strong> Büyükelçinin müzakerelere arabuluculuk yapma potansiyeli ve gücü vardı; ancak geri çağrıldığı için bunu yapamadı (Unrealized Opportunity ➔ <strong>could have mediated</strong>)."
      },
      {
        id: "ydt_q9",
        number: 9,
        question: "Because all participants were required to submit certified negative test certificates before entering the tournament bubble, the organizers ----- daily rapid screenings at the stadium gates.",
        questionTagged: "Because participants <span class='clue-highlight clue-evidence' title='Girmeden Önce Negatif Test İstendi'>were required to submit certified test certificates</span>, organizers ----- daily rapid screenings.",
        options: [
          { key: "A", text: "didn't need to conduct" },
          { key: "B", text: "needn't have conducted" },
          { key: "C", text: "must have conducted" },
          { key: "D", text: "should conduct" },
          { key: "E", text: "had better conduct" }
        ],
        correctKey: "A",
        explanation: "<strong>Doğru Cevap: A (didn't need to conduct)</strong><br><br><strong>İpucu Kelimeler:</strong> 'Because all participants were required to submit test certificates before entering...' (tüm katılımcıların girmeden önce onaylı test sonucu sunmaları zorunlu olduğu için).<br><strong>Çözüm & Çeldirici Analizi:</strong> Önceden test sonuçları alındığı için organizatörlerin kapıda günlük tarama yapmasına gerek kalmadı ve yapmadılar (Absence of Obligation ➔ <strong>didn't need to conduct / didn't have to conduct</strong>)."
      },
      {
        id: "ydt_q10",
        number: 10,
        question: "The forensic chemistry team determined that the fire was started by a highly specialized military-grade accelerant, meaning that amateur arsonists ----- the facility without professional accomplice support.",
        questionTagged: "Team determined fire started by <span class='clue-highlight clue-evidence' title='Askeri Düzey Hızlandırıcı Kimyasal'>highly specialized military-grade accelerant</span>, meaning amateur arsonists ----- the facility without support.",
        options: [
          { key: "A", text: "couldn't have ignited" },
          { key: "B", text: "must have ignited" },
          { key: "C", text: "should have ignited" },
          { key: "D", text: "might ignite" },
          { key: "E", text: "needn't have ignited" }
        ],
        correctKey: "A",
        explanation: "<strong>Doğru Cevap: A (couldn't have ignited)</strong><br><br><strong>İpucu Kelimeler:</strong> 'military-grade accelerant' (askeri düzeyde hızlandırıcı kimyasal) + 'amateur arsonists... without professional support' (amatör kundakçılar profesyonel destek olmaksızın).<br><strong>Çözüm & Çeldirici Analizi:</strong> Askeri düzeydeki bir kimyasalı amatörlerin tek başına temin edip yangın çıkarmış olması mantıken imkânsızdır (Past Impossibility ➔ <strong>couldn't have ignited</strong> = ateşe vermiş olamazlar)."
      }
    ]
  },
  cheatSheet: [
    {
      modal: "must + V1",
      usage: "Present Strong Deduction (%95+)",
      turkish: "... olmalı / olduğu kesin",
      example: "He has 3 Rolex watches; he must be wealthy."
    },
    {
      modal: "can't / couldn't + V1",
      usage: "Present Impossibility (%95+ Neg. Deduction)",
      turkish: "... olamaz / mümkün değil",
      example: "It can't be John; he is in Tokyo right now."
    },
    {
      modal: "must have + V3",
      usage: "Past Strong Deduction",
      turkish: "... yapmış / olmuş olmalı",
      example: "The ground is soaked; it must have rained."
    },
    {
      modal: "can't / couldn't have + V3",
      usage: "Past Impossibility Deduction",
      turkish: "... yapmış / olmuş olamaz",
      example: "She couldn't have seen me; I was behind a tree."
    },
    {
      modal: "needn't have + V3",
      usage: "Unnecessary Past Action (Done in vain)",
      turkish: "Yapmasına gerek yoktu ama YAPTI (boşuna yaptı)",
      example: "I needn't have cooked; dad brought pizza."
    },
    {
      modal: "didn't need to + V1",
      usage: "Absence of Past Obligation (Not done)",
      turkish: "Gerek yoktu ve bu yüzden YAPMADI",
      example: "School was closed, so I didn't need to wake up early."
    },
    {
      modal: "should / ought to have + V3",
      usage: "Unfulfilled Past Duty / Regret",
      turkish: "Yapmalıydı / yapması gerekirdi (ama YAPMADI)",
      example: "You should have studied for the exam."
    },
    {
      modal: "shouldn't have + V3",
      usage: "Past Criticism of a Mistake",
      turkish: "Yapmamalıydı (ama YAPTI)",
      example: "You shouldn't have lied to your mother."
    },
    {
      modal: "could have + V3",
      usage: "Unrealized Past Capacity / Opportunity",
      turkish: "Yapabilirdi / imkânı vardı (ama YAPMADI)",
      example: "He could have won the race, but he tripped."
    },
    {
      modal: "may / might have + V3",
      usage: "Past Uncertainty / Possibility",
      turkish: "... yapmış olabilir (belirsiz, kesin değil)",
      example: "They might have missed the 8:00 AM train."
    },
    {
      modal: "had better + V1",
      usage: "Present / Future Urgent Warning",
      turkish: "Yapsan iyi olur (yoksa kötü bir sonuç doğar!)",
      example: "You had better leave now or you will miss the flight."
    }
  ]
};
