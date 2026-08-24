const navItems = [
  ["info", "01", "包場資訊"],
  ["location", "02", "地點指南"],
  ["schedule", "03", "當天流程"],
  ["seats", "04", "座位表"],
  ["contact", "05", "聯絡資訊"],
] as const;

const eventFacts = [
  ["DATE", "2026.11.08 SUN"],
  ["TIME", "13:20 開放入場／14:00 正式開始"],
  ["PLACE", "臺北市・銀幕影廳（場地待公開）"],
  ["CHECK", "電子票券／報名姓名"],
] as const;

const timeline = [
  ["13:20", "開放入場", "出示電子票券，領取特典"],
  ["13:50", "入座提醒", "尋找座位，請將手機靜音"],
  ["14:00", "正式開始", "主辦簡介與映前須知"],
  ["16:10", "映後時間", "大合照／特典交流"],
] as const;

function PlaceholderTag() {
  return <span className="placeholder-tag">示意資料／待更新</span>;
}

function FoodSticker({ kind }: { kind: "mayo" | "uji" | "special" }) {
  if (kind === "mayo") {
    return (
      <span className="food-sticker mayo-sticker" aria-hidden="true">
        <i />
        <b>MAYO</b>
      </span>
    );
  }

  return (
    <span className={`food-sticker bowl-sticker bowl-sticker--${kind}`} aria-hidden="true">
      <i />
      <b>{kind === "uji" ? "宇治銀時" : "土方特製"}</b>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <FoodSticker kind="mayo" />
        <FoodSticker kind="uji" />

        <p className="eyebrow">銀 × 土 ・ PRIVATE SCREENING</p>
        <div className="title-wrap">
          <span className="title-kana">しろくろの日</span>
          <h1>銀土包場</h1>
          <p className="title-note">事前說明所</p>
        </div>
        <p className="hero__copy">
          把喜歡的人、喜歡的故事，放進同一個銀幕裡。
          <br />
          關於這天的一切，都在這裡集合。
        </p>

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
            <p className="intro-card__lead">
              這是一場為「銀土」同好們準備的限定包場。
            </p>
            <p>
              期待大家帶著喜歡兩人的心情來到現場，一起觀賞電影、交換特典，
              也紀念這個難得的相聚日。正式活動內容與觀影須知將於資料確定後更新。
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
        <FoodSticker kind="special" />
      </section>

      <section className="section section--blue" id="location">
        <header className="section-heading section-heading--light">
          <p>02 / LOCATION</p>
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
          <p>捷運待公開站　2 號出口→直行約 3 分鐘→右轉看見藍色招牌。</p>
        </div>
      </section>

      <section className="section section--schedule" id="schedule">
        <header className="section-heading">
          <p>03 / SCHEDULE</p>
          <h2>當天流程</h2>
          <span>準時報到，從容地享受每一刻。</span>
        </header>

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
          <p>04 / SEAT MAP</p>
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

      <section className="section section--contact" id="contact">
        <header className="section-heading">
          <p>05 / CONTACT</p>
          <h2>聯絡資訊</h2>
          <span>有任何疑問，歡迎在活動前和我們說。</span>
        </header>

        <div className="contact-ticket">
          <div className="contact-ticket__main">
            <PlaceholderTag />
            <p className="contact-ticket__label">ORGANIZER / 主辦聯絡人</p>
            <h3>銀土包場籌備組</h3>
            <div className="contact-links">
              <a href="mailto:event@example.com"><span>MAIL</span>event@example.com</a>
              <a href="tel:+886900000000"><span>TEL</span>0900–000–000</a>
            </div>
            <p className="reply-note">回覆時間：週一至週五 19:00–22:00（示意）</p>
          </div>
          <div className="contact-ticket__stub" aria-hidden="true">
            <span>GIN × HIJI</span>
            <b>1108</b>
            <small>ADMIT ONE</small>
          </div>
        </div>
      </section>

      <footer className="footer">
        <FoodSticker kind="mayo" />
        <p className="footer__mark">銀土包場 <span>/</span> 2026</p>
        <p>本頁為非官方粉絲自發企劃活動之說明頁面。</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      <a className="back-to-top" href="#top" aria-label="回到頁面最上方">
        <span>↑</span>
        TOP
      </a>
    </main>
  );
}
