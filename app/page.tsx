const navItems = [
  ["info", "01", "包場資訊"],
  ["notice", "02", "注意事項"],
  ["location", "03", "地點指南"],
  ["schedule", "04", "當天流程"],
  ["seats", "05", "座位表"],
  ["credits", "06", "感謝 & 主辦"],
  ["contact", "07", "聯絡資訊"],
] as const;

const eventFacts = [
  ["DATE", "2026.09.12 SUN"],
  ["TIME", "13:20 開放入場／14:00 正式開始"],
  [
    "PLACE",
    "桃園市・統領威秀影廳（影廳待公開）\n桃園市桃園區中正路61號9樓／統領廣場 TONLIN PLAZA",
  ],
  ["CHECK", "以報名資訊現場兌換實體票券"],
  ["SPECIAL", " 來場將獲得神秘特典！"],
] as const;

const timeline = [
  ["13:20", "開放入場", "報到領取票券與來場特典"],
  ["13:50", "入座提醒", "尋找座位，請將手機靜音"],
  ["14:00", "正式開始", "主辦簡介與映前須知"],
  ["16:10", "映後時間", "大合照／抽獎大會"],
] as const;

function PlaceholderTag() {
  return <span className="placeholder-tag">示意資料／待更新</span>;
}

function FoodArt({
  kind,
  className = "",
}: {
  kind: "mayo" | "uji" | "special";
  className?: string;
}) {
  const images = {
    mayo: ["mayo-bottle-web.webp", "美乃滋瓶"],
    uji: ["uji-bowl-web.webp", "宇治銀時丼"],
    special: ["special-bowl-web.webp", "土方特製丼"],
  } as const;
  const [src, label] = images[kind];

  return (
    <img
      className={`food-art food-art--${kind} ${className}`.trim()}
      src={src}
      alt=""
      aria-label={label}
    />
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <FoodArt kind="mayo" />
        <FoodArt kind="uji" />

        <p className="eyebrow">銀時 × 土方 ・ PRIVATE SCREENING</p>
        <div className="title-stage">
          <img
            className="hero-character hero-character--left"
            src="hero-character-left.webp"
            alt="銀時 Q 版小人物"
          />
          <div className="title-wrap">
            <span className="title-kana">腐れ縁</span>
            <h1>銀土包場</h1>
            <p className="title-note">事前說明所</p>
          </div>
          <img
            className="hero-character hero-character--right"
            src="hero-character-right.webp"
            alt="土方 Q 版小人物"
          />
        </div>
        <p className="hero__copy">與其一次拿完不如一生細水長流</p>

        <nav className="hero-nav" aria-label="頁面區段導覽">
          {navItems.map(([id, number, label]) => (
            <a href={`#${id}`} key={id}>
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>

        <a className="scroll-cue" href="#info" aria-label="前往包場資訊">
          <span />
          SCROLL
        </a>
      </section>

      <div className="notice-ribbon" aria-label="重要提醒">
        <p>
          <span>NOTICE</span>
          本頁目前為事前說明示意版，時間、場地與連結將隨資訊公開更新。
        </p>
      </div>

      <section className="section section--info" id="info">
        <header className="section-heading">
          <p>01 / INFORMATION</p>
          <h2>包場資訊</h2>
          <span>一起把這天留給銀幕。</span>
        </header>

        <div className="info-layout">
          <article className="intro-card">
            <PlaceholderTag />
            <p className="intro-card__lead">這是一場為「銀土」同好們準備的限定包場。</p>
            <p>
              期待大家帶著喜歡兩人的心情來到現場，一起觀賞電影、交換特典。
              將播放《真選組動亂篇》＆《荊棘惡童篇》。
            </p>
            <div className="mini-note">
              <span>PLEASE NOTE</span>
              請勿在影廳內攝影、錄音，也請尊重每位參加者的觀影體驗。
            </div>
          </article>

          <dl className="fact-list">
            {eventFacts.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <article className="bonus-info">
          <div className="bonus-info__copy">
            <span className="handwritten">WELCOME GIFT / NOVELTY</span>
            <h3>來場特典</h3>
            <p>來場特典資訊請以右側圖卡公告內容為準。</p>
          </div>
          <figure className="bonus-image">
            <img src="bonus-gift.jpg" alt="銀土 CP 向電影包場來場特典圖卡" />
          </figure>
        </article>
        <FoodArt kind="special" />
      </section>

      <section className="section section--notice-cards" id="notice">
        <header className="section-heading">
          <p>02 / NOTICE</p>
          <h2>注意事項</h2>
          <span>出發前，請先確認活動的重要提醒。</span>
        </header>
        <figure className="notice-image-card">
          <div className="notice-image-placeholder" role="img" aria-label="注意事項圖卡預留位置">
            <span>IMAGE / NOTICE CARD</span>
            <b>注意事項圖卡</b>
            <p>正式圖片將放置於此</p>
          </div>
          <figcaption>
            <PlaceholderTag />
            <span>正式版將以主辦提供的注意事項圖片替換。</span>
          </figcaption>
        </figure>
        <FoodArt kind="uji" />
      </section>

      <section className="section section--blue" id="location">
        <header className="section-heading section-heading--light">
          <p>03 / LOCATION</p>
          <h2>地點指南</h2>
          <span>別擔心，沿著指引就能會合。</span>
        </header>

        <div className="location-grid">
          <article className="media-card media-card--map">
            <div className="map-doodle" aria-hidden="true">
              <span className="map-line map-line--one" />
              <span className="map-line map-line--two" />
              <span className="map-pin">!</span>
              <b>EXIT 2</b>
            </div>
            <div>
              <PlaceholderTag />
              <h3>圖卡｜會場交通路線</h3>
              <p>將放入車站出口、步行路線與會場入口圖卡。</p>
            </div>
          </article>

          <article className="media-card media-card--video">
            <div className="video-placeholder">
              <span aria-hidden="true">▶</span>
              <small>GUIDE VIDEO / COMING SOON</small>
            </div>
            <div>
              <PlaceholderTag />
              <h3>影片｜實景引路</h3>
              <p>從最近車站到會場的實際路線，會在這裡用影片帶你走一次。</p>
            </div>
          </article>
        </div>

        <div className="route-note">
          <span>ROUTE MEMO</span>
          <p>桃園火車站往遠百正門方向出站→往前走一段路→左手邊即是統領百貨</p>
        </div>
      </section>

      <section className="section section--schedule" id="schedule">
        <header className="section-heading">
          <p>04 / SCHEDULE</p>
          <h2>當天流程</h2>
          <span>準時報到，從容地享受每一刻。</span>
        </header>
        <div className="schedule-float schedule-float--left" aria-hidden="true">
          <img src="schedule-float-left.webp" alt="" />
        </div>
        <div className="schedule-float schedule-float--right" aria-hidden="true">
          <img src="schedule-float-right.webp" alt="" />
        </div>

        <div className="schedule-card">
          <div className="schedule-card__top">
            <div>
              <span className="handwritten">TIME TABLE</span>
              <h3>包場當日行程表</h3>
            </div>
            <PlaceholderTag />
          </div>
          <ol className="timeline">
            {timeline.map(([time, title, detail], index) => (
              <li key={time}>
                <span className="timeline__number">0{index + 1}</span>
                <time>{time}</time>
                <div>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="schedule-footnote">※ 正式版將以主辦提供的完整流程圖卡替換。</p>
        </div>
      </section>

      <section className="section section--dark" id="seats">
        <header className="section-heading section-heading--light">
          <p>05 / SEAT MAP</p>
          <h2>座位表</h2>
          <span>找到自己的位置，一起面向銀幕。</span>
        </header>

        <div className="seat-layout">
          <div className="seat-card">
            <div className="screen-label">SCREEN／銀幕</div>
            <div className="seat-map" aria-label="示意座位表">
              {Array.from({ length: 48 }, (_, index) => (
                <span className={index === 13 || index === 34 ? "seat seat--accent" : "seat"} key={index} />
              ))}
            </div>
            <div className="seat-legend">
              <span><i />一般座位</span>
              <span><i className="accent" />主辦保留</span>
            </div>
          </div>

          <div className="seat-copy">
            <img className="seat-decoration" src="seat-decoration.webp" alt="銀時與土方愛心吊飾插圖" />
            <PlaceholderTag />
            <h3>完整座位表將於此公開</h3>
            <p>
              之後會替換為正式座位圖卡，並附上可外連的 Excel 表格，
              方便查詢座號與報名代碼。
            </p>
            <span className="disabled-link" aria-disabled="true">
              <span>EXCEL ↗</span>
              連結待公開
            </span>
          </div>
        </div>
      </section>

      <section className="section section--credits" id="credits">
        <header className="section-heading">
          <p>06 / THANKS &amp; ORGANIZERS</p>
          <h2>感謝名單 &amp; 主辦名單</h2>
          <span>謝謝每一位讓這場相聚成真的人。</span>
        </header>

        <figure className="credits-card">
          <a href="credits-list.png" target="_blank" rel="noreferrer">
            <img
              src="credits-list.png"
              alt="銀土 CP 向包場特典感謝名單與主辦群名單"
            />
          </a>
          <figcaption>點擊圖片可開啟原始尺寸查看完整名單。</figcaption>
        </figure>
      </section>

      <section className="section section--contact" id="contact">
        <header className="section-heading">
          <p>07 / CONTACT</p>
          <h2>聯絡資訊</h2>
          <span>有任何疑問，歡迎在活動前和我們說。</span>
        </header>

        <div className="contact-ticket">
          <div className="contact-ticket__main">
            <PlaceholderTag />
            <p className="contact-ticket__label">ORGANIZER / 主辦聯絡人</p>
            <h3>包場籌備組-草凡</h3>
            <img className="contact-decoration" src="contact-decoration.webp" alt="銀時與土方金色圓形吊飾插圖" />
            <div className="contact-links">
              <a href="mailto:grassrabbit1214@gmail.com">
                <span>MAIL</span>
                grassrabbit1214@gmail.com
              </a>
              <div className="social-media">
                <span>SOCIAL / 社群媒體</span>
                <div>
                  <a href="https://www.threads.com/@kusabon1214" target="_blank" rel="noreferrer">Threads ↗</a>
                  <a href="https://www.plurk.com/grassrabbit_1214" target="_blank" rel="noreferrer">噗浪 ↗</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-ticket__stub" aria-hidden="true">
            <span>GINTOKI × HIJIKATA</span>
            <b>1005</b>
            <small>ADMIT ONE</small>
          </div>
        </div>
      </section>

      <footer className="footer">
        <FoodArt kind="mayo" />
        <p className="footer__mark">銀土包場 <span>/</span> 2026</p>
        <p>本頁為非官方粉絲自發企劃活動之說明頁面。</p>
        <p>網頁製作/阿蝶 插圖繪製：目目</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      <a className="back-to-top" href="#top" aria-label="回到頁面最上方">
        <span>↑</span>
        TOP
      </a>
    </main>
  );
}
