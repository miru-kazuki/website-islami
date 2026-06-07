import { useState, useEffect } from "react";

const C = {
  gold: "#c9a84c",
  goldLight: "#e4c86a",
  goldDim: "rgba(201,168,76,0.22)",
  bg: "#07111a",
  text: "#ede3cf",
  muted: "#8a7558",
};

const cinzel = "'Cinzel Decorative', 'Times New Roman', serif";
const garamond = "'EB Garamond', Georgia, serif";

const TABS = [
  { id: "history", label: "History", sub: "Islamic Civilizations" },
  { id: "hadith",  label: "Hadith",  sub: "Prophetic Traditions" },
  { id: "stories", label: "Stories", sub: "Abu Nawas & Nu'aiman" },
];

const DATA = {
  history: [
    {
      id: 1, sym: "✦", meta: "8th – 13th Century",
      title: "The Islamic Golden Age",
      summary: "Baghdad's House of Wisdom became the world's center of science, philosophy, and learning.",
      full: `During the Abbasid Caliphate, Baghdad became home to the legendary House of Wisdom (Bayt al-Hikmah) — a great library and translation center where scholars from Greece, Persia, India, and the Arab world gathered to advance human knowledge.\n\nFigures like Al-Khwarizmi (inventor of algebra), Ibn Sina (Avicenna), Al-Biruni, and Ibn al-Haytham made breakthroughs in mathematics, astronomy, medicine, and optics that shaped world civilization for centuries.\n\nWhile much of medieval Europe was in an intellectual slumber, Baghdad shone as the brightest city in the world — a testament to Islam's injunction: "Seek knowledge, even unto China."`
    },
    {
      id: 2, sym: "◈", meta: "12th Century",
      title: "Saladin & the Crusades",
      summary: "The Kurdish Muslim leader recaptured Jerusalem — not with massacre, but with remarkable mercy.",
      full: `Salah ad-Din Yusuf ibn Ayyub — known to the West as Saladin — was the first Sultan of Egypt and Syria, and one of history's most revered military and moral leaders.\n\nIn 1187, he recaptured Jerusalem from the Crusaders. Unlike the Crusader conquest of 1099, which was marked by terrible bloodshed, Saladin's victory was marked by extraordinary mercy. Civilians were spared, holy sites protected, and Christians allowed to ransom their freedom.\n\nHis chivalry was so renowned that even Richard the Lionheart, his great adversary in the Third Crusade, exchanged gifts with him. Saladin remains a living symbol of how power can be wielded with justice and compassion.`
    },
    {
      id: 3, sym: "◎", meta: "750 – 1258 CE",
      title: "The Abbasid Caliphate",
      summary: "The dynasty that built Baghdad and presided over Islam's greatest intellectual flowering.",
      full: `The Abbasid Caliphate overthrew the Umayyads in 750 CE and built a new capital: the circular, planned city of Baghdad — a wonder of urban design that became the world's largest city within a generation.\n\nUnder caliphs Harun al-Rashid and Al-Ma'mun, the House of Wisdom translated texts from Greek, Sanskrit, Syriac, and Persian into Arabic, creating an unprecedented synthesis of world knowledge.\n\nThe era produced foundational works in algebra, trigonometry, optics, pharmacology, and philosophy. In 1258, the Mongols sacked Baghdad. The Tigris reportedly ran black with the ink of destroyed books — ending an era that had illuminated the world.`
    },
    {
      id: 4, sym: "❖", meta: "1299 – 1922",
      title: "The Ottoman Empire",
      summary: "Six centuries of Islamic civilization spanning three continents and shaping the modern world.",
      full: `Founded by Osman I, the Ottoman Empire grew to become one of history's most enduring states — spanning Europe, Asia, and Africa at its height, and lasting over six centuries.\n\nUnder Suleiman the Magnificent (1520–1566), the empire was a superpower of law, art, and architecture. The millet system allowed diverse communities — Muslim, Christian, and Jewish — to govern their own religious affairs, a model of pluralism unusual for its era.\n\nOttoman monuments still stand as testaments: the Süleymaniye Mosque, the Blue Mosque, Topkapi Palace. The empire's dissolution after World War I reshaped the Muslim world and its echoes continue in our geopolitics today.`
    },
  ],
  hadith: [
    {
      id: 1, sym: "☽",
      meta: "Sahih Bukhari & Muslim · Narrated by Umar ibn al-Khattab (RA)",
      title: "On Intentions",
      arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
      summary: "Actions are but by intentions — every person shall have only what they intended.",
      full: `"Actions are but by intentions, and every man shall have only that which he intended. Whoever's migration was for Allah and His Messenger, his migration was for Allah and His Messenger; and whoever's migration was for worldly gain or to marry a woman, his migration was for that which he migrated."\n\n— Narrated by Umar ibn al-Khattab (RA) · Sahih Bukhari & Muslim\n\nThis is among the most foundational hadith in Islam. Scholars say it represents one-third of religious knowledge. Its teaching is profound in its simplicity: it is not the appearance of an act that gives it worth, but the sincerity of the heart behind it.\n\nA deed done for show is hollow. A deed done with pure intention — however small — becomes an act of worship.`
    },
    {
      id: 2, sym: "✿",
      meta: "Sahih Bukhari · Narrated by Abdullah ibn Amr (RA)",
      title: "On Good Character",
      arabic: "خَيْرُكُمْ أَحْسَنُكُمْ خُلُقًا",
      summary: "The best among you are those with the finest manners and character.",
      full: `"The best among you are those who have the best manners and character."\n\n— Narrated by Abdullah ibn Amr (RA) · Sahih Bukhari\n\nThe Prophet Muhammad ﷺ taught consistently that the measure of a person is their character — their akhlaq. Not wealth, lineage, title, or position. Kindness, patience, honesty, and generosity are the marks of true human excellence.\n\nThis hadith has shaped Islamic ethics for fourteen centuries. It is the foundation of the understanding that worship is not confined to the mosque — every act of genuine human goodness is a form of devotion. The Prophet ﷺ himself was described as embodying the Quran in his character.`
    },
    {
      id: 3, sym: "❋",
      meta: "Sahih Bukhari & Muslim · Narrated by Anas ibn Malik (RA)",
      title: "On Brotherhood",
      arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      summary: "None of you truly believes until you love for your brother what you love for yourself.",
      full: `"None of you truly believes until he loves for his brother what he loves for himself."\n\n— Narrated by Anas ibn Malik (RA) · Sahih Bukhari & Muslim\n\nThis is Islam's expression of the universal Golden Rule — found in nearly every great ethical tradition in history — framed here as a matter of faith itself. True belief is not verbal declaration alone; it manifests as genuine goodwill toward others.\n\nMany scholars extend "brother" (akh) to all of humanity, not just fellow Muslims. This hadith calls us to transcend selfishness as an act of iman — and to measure the depth of our faith by the generosity of our hearts toward others.`
    },
    {
      id: 4, sym: "◌",
      meta: "Jami at-Tirmidhi · Narrated by Abu Dharr al-Ghifari (RA)",
      title: "On Smiling",
      arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ",
      summary: "Your smile in the face of your brother is an act of charity.",
      full: `"Your smile in the face of your brother is charity (sadaqah)."\n\n— Narrated by Abu Dharr al-Ghifari (RA) · Jami at-Tirmidhi\n\nPerhaps the most beloved hadith for its disarming simplicity. A smile costs nothing — and yet it is sadaqah, a charitable act with spiritual weight and reward before God.\n\nThis teaching captures something essential about how Islam understands worship: it is not confined to formal ritual. Every moment of warmth, every gesture of kindness, every simple act that brightens another person's day is a form of service to God.\n\nThe Prophet ﷺ himself was described by companions as always meeting people with an open, warm, and smiling face. This hadith is his standing invitation for all of us to do the same.`
    },
  ],
  stories: [
    {
      id: 1, sym: "☆",
      meta: "Abu Nawas · Abbasid Era, ~762–815 CE",
      title: "The Thousand Dirhams",
      summary: "A boastful man offers a reward — and a poet delivers an unanswerable truth.",
      full: `Abu Nawas (Abū Nuwās al-Ḥasan ibn Hānī al-Ḥakamī) was the greatest comic poet of the Abbasid era, a wit who could outwit kings, and a beloved figure in One Thousand and One Nights.\n\nOne day, a wealthy man stood in the marketplace and declared: "I will give a thousand dirhams to anyone who says something true — that I will still refuse to believe!"\n\nAbu Nawas stepped forward without hesitation. He studied the man for a long moment, then said calmly:\n\n"Your father was a better man than you."\n\nThe man's face darkened. The crowd leaned in.\n\nIf he agreed, it was true — and he owed the money. If he disagreed, he was publicly announcing he was better than his own father — which said something even worse about him.\n\nHe paid the thousand dirhams. The laughter has echoed through the ages ever since.`
    },
    {
      id: 2, sym: "◇",
      meta: "Nu'aiman ibn Amr · 1st Century AH · Companion of the Prophet ﷺ",
      title: "The Honey Seller's Surprise",
      summary: "The mischievous Companion helps himself to honey — then leads the seller straight to the Prophet ﷺ.",
      full: `Nu'aiman ibn Amr al-Ansari was among the earliest Muslims, a veteran of the Battle of Badr, and a man of sincere faith. He was also famously mischievous — and the Prophet Muhammad ﷺ would smile at his antics.\n\nOne day Nu'aiman passed a honey seller in the Madinah market. The honey was irresistible, but Nu'aiman had no money. So he helped himself generously.\n\nWhen the seller protested, Nu'aiman said with great seriousness: "Don't worry. Come with me — I know exactly who will pay."\n\nHe led the bewildered merchant straight to the door of the Prophet Muhammad ﷺ.\n\n"O Messenger of Allah," Nu'aiman announced with a wide grin, "this man has brought a gift for you! Please settle the account."\n\nThe Prophet understood immediately. He laughed until his back teeth showed — then paid the honey seller from his own household.\n\nNu'aiman's stories remind us that joy and laughter have always had a home in Islamic life.`
    },
    {
      id: 3, sym: "◆",
      meta: "Abu Nawas · Abbasid Era · Baghdad",
      title: "Writing with the Eyes",
      summary: "Accused before a stern judge, the poet escapes with a question no one can answer.",
      full: `Abu Nawas's sharp verse sometimes landed him in trouble with those in power. But his mind was always sharper than their charges.\n\nOne afternoon he was brought before a stern judge accused of writing satirical verses mocking the powerful.\n\n"I never wrote those verses," said Abu Nawas, perfectly calm.\n\n"Impossible," snapped the judge. "There are witnesses — they saw you write them with their own eyes!"\n\nAbu Nawas paused. He tilted his head. Then, in tones of genuine curiosity:\n\n"I am sorry, Your Honor — but has Your Honor ever seen a man write with his eyes?"\n\nThe courtroom fell silent. Then erupted. The testimony was technically absurd — no man writes with his eyes.\n\nThe case was dismissed. Abu Nawas strolled out into the Baghdad sunshine.\n\nThis story has been told for over a thousand years as a reminder that true intelligence lives in precision — and that a single question, placed just right, can unlock any door.`
    },
    {
      id: 4, sym: "✧",
      meta: "Nu'aiman ibn Amr · 1st Century AH · Madinah",
      title: "The Gift of Dates",
      summary: "A basket of fine dates, a generous companion, and the Prophet's laughter at a perfect prank.",
      full: `A merchant arrived in Madinah carrying a basket of dates so fine they made people stop in the street. Nu'aiman admired them greatly — but had no money.\n\nHe approached the merchant with a confidential air. "I know a man of legendary generosity," he said, "who will buy every single one of these dates on the spot."\n\nThe merchant's eyes lit up. He followed Nu'aiman eagerly through the streets — until Nu'aiman stopped at the door of Abu Bakr al-Siddiq, the Prophet's closest companion and one of the most generous souls in all of Arabia.\n\nNu'aiman knocked and announced with great cheer: "A gift for you, Abu Bakr!"\n\nAbu Bakr opened his door to find a merchant, a basket of dates, and Nu'aiman wearing his most innocent expression.\n\nBy the time Abu Bakr understood what had happened, the merchant was expecting payment. Laughing in spite of himself, Abu Bakr paid.\n\nWhen the story reached the Prophet ﷺ, he reportedly laughed until his back teeth showed. Nu'aiman's reputation as the beloved jester of the companions was sealed for history.`
    },
  ],
};

export default function App() {
  const [tab, setTab] = useState("history");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap";
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  const items = DATA[tab];
  const handleTab = (t) => { setTab(t); setSelected(null); };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07111a",
      backgroundImage: [
        "repeating-linear-gradient(45deg, rgba(201,168,76,0.03) 0, rgba(201,168,76,0.03) 0.5px, transparent 0, transparent 50%)",
        "repeating-linear-gradient(-45deg, rgba(201,168,76,0.03) 0, rgba(201,168,76,0.03) 0.5px, transparent 0, transparent 50%)",
      ].join(","),
      backgroundSize: "28px 28px",
      color: C.text,
      fontFamily: garamond,
    }}>

      {/* ── Header ── */}
      <header style={{ textAlign: "center", padding: "64px 20px 40px" }}>
        <div style={{ color: C.gold, fontSize: 11, letterSpacing: 18, marginBottom: 20, opacity: 0.5 }}>
          ✦ ✦ ✦ ✦ ✦
        </div>
        <h1 style={{
          fontFamily: cinzel,
          fontSize: "clamp(28px, 5vw, 52px)",
          color: C.goldLight,
          margin: "0 0 12px",
          fontWeight: 700,
          lineHeight: 1.2,
        }}>
          Nur al-Islam
        </h1>
        <p style={{ color: C.muted, fontSize: 15, fontStyle: "italic", letterSpacing: 3, margin: "0 0 30px" }}>
          Light of Knowledge
        </p>
        <div style={{ display: "flex", alignItems: "center", maxWidth: 240, margin: "0 auto" }}>
          <div style={{ flex: 1, height: "0.5px", background: `linear-gradient(90deg, transparent, ${C.goldDim})` }} />
          <span style={{ color: C.gold, margin: "0 14px", fontSize: 13 }}>❖</span>
          <div style={{ flex: 1, height: "0.5px", background: `linear-gradient(90deg, ${C.goldDim}, transparent)` }} />
        </div>
      </header>

      {/* ── Tabs ── */}
      <nav style={{ display: "flex", justifyContent: "center", margin: "0 20px 52px" }}>
        {TABS.map((t, i) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => handleTab(t.id)}
              style={{
                padding: "12px 24px",
                background: active ? "rgba(201,168,76,0.1)" : "transparent",
                color: active ? C.goldLight : C.muted,
                border: `0.5px solid ${active ? "rgba(201,168,76,0.45)" : "rgba(255,255,255,0.09)"}`,
                borderLeft: i > 0 ? "none" : undefined,
                borderRadius: i === 0 ? "3px 0 0 3px" : i === 2 ? "0 3px 3px 0" : "0",
                cursor: "pointer",
                fontFamily: cinzel,
                fontSize: 10,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {t.label}
              <span style={{
                display: "block",
                fontFamily: garamond,
                textTransform: "none",
                fontSize: 10,
                letterSpacing: 1,
                fontStyle: "italic",
                opacity: 0.55,
                marginTop: 3,
              }}>
                {t.sub}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ── Main Content ── */}
      {selected ? (
        <DetailView item={selected} tab={tab} onBack={() => setSelected(null)} />
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 18,
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px 80px",
        }}>
          {items.map(item => (
            <Card key={item.id} item={item} tab={tab} onClick={() => setSelected(item)} />
          ))}
        </div>
      )}

      {/* ── Footer ── */}
      {!selected && (
        <footer style={{ textAlign: "center", padding: "0 20px 48px", color: C.muted, fontSize: 12, letterSpacing: 2, fontStyle: "italic" }}>
          <div style={{ display: "flex", alignItems: "center", maxWidth: 300, margin: "0 auto 16px" }}>
            <div style={{ flex: 1, height: "0.5px", background: `linear-gradient(90deg, transparent, ${C.goldDim})` }} />
            <span style={{ color: C.gold, margin: "0 12px", fontSize: 10 }}>◆</span>
            <div style={{ flex: 1, height: "0.5px", background: `linear-gradient(90deg, ${C.goldDim}, transparent)` }} />
          </div>
          Click any card to read the full story
        </footer>
      )}
    </div>
  );
}

function Card({ item, tab, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.03)",
        border: `0.5px solid ${hov ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)"}`,
        borderRadius: 4,
        padding: "26px 24px",
        cursor: "pointer",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.25s ease",
        boxShadow: hov ? "0 14px 44px rgba(0,0,0,0.5)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%", height: 1.5,
        background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.25s",
      }} />

      <div style={{ fontSize: 26, color: C.gold, marginBottom: 14 }}>{item.sym}</div>

      <div style={{ fontSize: 10, color: C.gold, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8, fontFamily: garamond }}>
        {tab === "hadith" ? item.meta.split("·")[0].trim() : item.meta}
      </div>

      <div style={{ fontFamily: cinzel, fontSize: 13, color: C.text, marginBottom: 12, lineHeight: 1.55, fontWeight: 400 }}>
        {item.title}
      </div>

      {item.arabic && (
        <div style={{
          fontSize: 20, color: C.goldLight, textAlign: "right",
          marginBottom: 14, fontStyle: "italic", opacity: 0.85, lineHeight: 1.9,
        }}>
          {item.arabic}
        </div>
      )}

      <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, fontStyle: "italic", fontFamily: garamond }}>
        {item.summary}
      </div>

      <div style={{
        marginTop: 18, fontSize: 10, color: C.gold, letterSpacing: 2,
        textTransform: "uppercase", opacity: hov ? 1 : 0, transition: "opacity 0.2s",
      }}>
        Read more →
      </div>
    </div>
  );
}

function DetailView({ item, tab, onBack }) {
  const [btnHov, setBtnHov] = useState(false);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 80px" }}>
      <button
        onClick={onBack}
        onMouseEnter={() => setBtnHov(true)}
        onMouseLeave={() => setBtnHov(false)}
        style={{
          background: "transparent",
          border: `0.5px solid ${btnHov ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.25)"}`,
          color: btnHov ? C.gold : C.muted,
          padding: "9px 20px",
          borderRadius: 3,
          cursor: "pointer",
          fontFamily: garamond,
          fontSize: 14,
          letterSpacing: 1,
          marginBottom: 36,
          transition: "all 0.2s",
        }}
      >
        ← Back to {tab === "history" ? "History" : tab === "hadith" ? "Hadith" : "Stories"}
      </button>

      <div style={{
        background: "rgba(255,255,255,0.03)",
        border: "0.5px solid rgba(201,168,76,0.22)",
        borderRadius: 5,
        padding: "clamp(28px, 5vw, 48px)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.gold} 40%, ${C.gold} 60%, transparent)`,
        }} />

        <div style={{ fontSize: 34, color: C.gold, marginBottom: 14 }}>{item.sym}</div>

        <div style={{ fontSize: 10, color: C.gold, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 14, fontFamily: garamond }}>
          {item.meta}
        </div>

        <h2 style={{
          fontFamily: cinzel,
          fontSize: "clamp(18px, 3.5vw, 28px)",
          color: C.goldLight,
          marginBottom: 26,
          fontWeight: 400,
          lineHeight: 1.45,
        }}>
          {item.title}
        </h2>

        {item.arabic && (
          <div style={{
            fontSize: "clamp(22px, 4vw, 34px)",
            color: C.goldLight,
            textAlign: "center",
            padding: "18px 24px",
            border: "0.5px solid rgba(201,168,76,0.2)",
            borderRadius: 3,
            background: "rgba(201,168,76,0.04)",
            marginBottom: 30,
            fontStyle: "italic",
            lineHeight: 2.1,
          }}>
            {item.arabic}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", margin: "24px 0 28px" }}>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(201,168,76,0.15)" }} />
          <span style={{ color: C.gold, margin: "0 14px", fontSize: 10 }}>◆</span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(201,168,76,0.15)" }} />
        </div>

        <div style={{
          fontSize: 17,
          color: "#8a7558",
          lineHeight: 2.05,
          whiteSpace: "pre-line",
          fontFamily: garamond,
        }}>
          {item.full}
        </div>
      </div>
    </div>
  );
}
