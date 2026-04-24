// Detailed category content for all 6 service pillars
// Reuses Button, colors from Primitives

function CategoryHero({ tag, kicker, title, subtitle }) {
  return (
    <section style={{background: '#000', color: '#fff', padding: '120px 48px 80px', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 20%, rgba(37,99,235,0.2), transparent 60%)', pointerEvents: 'none'}}/>
      <div style={{position: 'relative', maxWidth: 1040, margin: '0 auto', textAlign: 'center'}}>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20}}>
          <span style={{fontFamily: 'Inter Tight', fontSize: 13, fontWeight: 600, color: '#8facff', letterSpacing: '0.15em'}}>{tag}</span>
          <span style={{width: 20, height: 1, background: 'rgba(255,255,255,0.2)'}}/>
          <span style={{fontSize: 13, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em'}}>{kicker}</span>
        </div>
        <h1 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 64, fontWeight: 600, letterSpacing: '-1.2px', lineHeight: 1.05, margin: '0 0 20px', color: '#fff'}}>
          {title}
        </h1>
        <p style={{fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', margin: '0 auto', maxWidth: 720, letterSpacing: '-0.2px'}}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

function ProblemSolutionGrid({ blocks }) {
  return (
    <section style={{background: '#fff', padding: '80px 48px'}}>
      <div style={{maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16}}>
        {blocks.map((b, i) => (
          <div key={i} style={{background: colors.pale, borderRadius: 18, padding: 32, border: `1px solid ${colors.border}`}}>
            <div style={{fontFamily: 'Inter Tight', fontSize: 13, color: '#2563eb', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 16}}>{String(i+1).padStart(2,'0')}</div>
            <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 22, fontWeight: 600, margin: '0 0 10px', color: colors.ink, letterSpacing: '-0.2px'}}>{b.title}</h3>
            <p style={{fontSize: 15, lineHeight: 1.55, color: colors.text2, margin: 0}}>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatStrip({ stats, dark=false }) {
  return (
    <section style={{background: dark ? '#000' : colors.pale, padding: '60px 48px', borderTop: dark ? '1px solid rgba(255,255,255,0.08)' : 'none'}}>
      <div style={{maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 24}}>
        {stats.map((s, i) => (
          <div key={i} style={{textAlign: 'center'}}>
            <div style={{fontFamily: 'Inter Tight', fontSize: 44, fontWeight: 600, letterSpacing: '-0.8px', background: colors.blueGradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', lineHeight: 1}}>{s.v}</div>
            <div style={{fontSize: 14, color: dark ? 'rgba(255,255,255,0.65)' : colors.text2, marginTop: 10, fontWeight: 500}}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryCTA({ onCTA }) {
  return (
    <section style={{background: colors.pale, padding: '80px 48px', textAlign: 'center'}}>
      <div style={{maxWidth: 720, margin: '0 auto'}}>
        <h2 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 40, fontWeight: 600, letterSpacing: '-0.6px', margin: '0 0 12px', color: colors.ink, lineHeight: 1.15}}>
          궁금한 점을 무료로 진단받아 보세요.
        </h2>
        <p style={{fontSize: 17, color: colors.text2, margin: '0 0 28px'}}>
          15년 경력의 SSPL 전문 컨설턴트가 직접 답변드립니다.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center'}}>
          <Button variant="pill" size="lg" onClick={onCTA}>무료 상담 신청</Button>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// 1. 기업컨설팅 (full category, not just legal setup)
function ConsultingPage() {
  const subs = [
    { n:'법인설립', d:'사업목적·업종코드·면세/과세 정비를 포함한 1:1 맞춤형 설립 컨설팅' },
    { n:'노무컨설팅', d:'근로기준법·노동법 리스크 최소화, 인사노무 전담 인력 대체' },
    { n:'정관규정', d:'임원퇴직금·중간배당·자사주·현물출자 등 법적 효력 확보' },
    { n:'법정의무교육', d:'5대 의무교육(산업안전·성희롱예방·개인정보·장애인인식·퇴직연금)' },
  ];
  return (
    <>
      <CategoryHero tag="01 CONSULTING" kicker="기업컨설팅" title="조직적·체계화된 운영관리로 성공적 미래를 보장합니다." subtitle="법인설립에서 법정의무교육까지. 기업의 전 생애주기를 관통하는 관리 체계를 설계합니다."/>
      <section style={{background: '#fff', padding: '80px 48px'}}>
        <div style={{maxWidth: 1040, margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16}}>
            {subs.map((s,i) => (
              <div key={i} style={{background: colors.pale, borderRadius: 18, padding: 32, border: `1px solid ${colors.border}`}}>
                <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 24, fontWeight: 600, margin: '0 0 8px', color: colors.ink, letterSpacing: '-0.3px'}}>{s.n}</h3>
                <p style={{fontSize: 15, lineHeight: 1.55, color: colors.text2, margin: 0}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatStrip stats={[{v:'최대 5억',lbl:'의무교육 미이행 과징금'},{v:'6자리',lbl:'업종코드가 좌우하는 지원금'},{v:'원시정관',lbl:'정비 필수 항목'}]}/>
      <CategoryCTA/>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 2. 무상지원금
function FundingPage() {
  return (
    <>
      <CategoryHero tag="02 FUNDING" kicker="무상지원금" title="놓치는 지원금, 전문가가 발굴합니다." subtitle="정부 고용지원금 20여 종과 연간 약 30조 원 규모의 R&D 지원금. SSPL이 직접 신청까지 대행합니다."/>
      <ProblemSolutionGrid blocks={[
        {title:'고용지원금 · 인건비 지원', body:'20여 개 이상의 정부 고용지원금 사업 중 기업 맞춤형으로 발굴·신청 대행. 전담 부서 없는 중소기업의 미수령 사례를 차단합니다.'},
        {title:'R&D 지원금 · 연 30조 원', body:'OECD 최고 수준 R&D 지원 국가. 부처별 과제 분석 후 기업 현황에 맞는 맞춤 신청을 지원합니다.'},
        {title:'놓치는 지원금 발굴', body:'중소기업 특성상 전담 부서가 없어 놓치기 쉬운 지원금. 과거 수령 가능했던 과제까지 소급 검토합니다.'},
        {title:'선순환 성장 구조', body:'인건비 절감 → 우수인재 채용 → 기업 성장. 지원금을 지렛대로 활용하는 구조를 설계합니다.'},
      ]}/>
      <StatStrip dark stats={[{v:'20+',lbl:'정부 고용지원금 사업'},{v:'30조',lbl:'연간 R&D 지원 규모'},{v:'1:1',lbl:'맞춤 신청 대행'}]}/>
      <CategoryCTA/>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 3. 재무·세무
function FinancePage() {
  return (
    <>
      <CategoryHero tag="03 FINANCE" kicker="재무·세무" title="합법적 절세, 탄탄한 재무 구조." subtitle="사업주의 수익 자산화와 리스크 최소화를 1:1 미팅으로 설계합니다."/>
      <ProblemSolutionGrid blocks={[
        {title:'재무분석', body:'기업 자산의 개인화 솔루션, 기업성장 설계, 사업주 자산 확립까지 통합 경영 컨설팅.'},
        {title:'절세전략', body:'법인세·소득세·종부세·건보료까지 — 합법적 세금 감면으로 탄탄한 재무 상태를 구축합니다.'},
        {title:'세액공제', body:'매년 개정되는 세법을 꼼꼼히 반영. 각 사업 부문별 공제 혜택을 극대화합니다.'},
        {title:'1:1 진단', body:'획일화된 세무자문이 아닌, 기업 맞춤형 미팅 기반 해결책을 제시합니다.'},
      ]}/>
      <CategoryCTA/>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 4. 특허·인증
function PatentPage() {
  const certs = [
    {k:'벤처인증', d:'벤처투자형(5천만 원 이상·자본 10%), 연구개발형(부설연구소+R&D 5% 이상), 혁신성장형, 예비벤처형'},
    {k:'메인비즈', d:'업력 3년 이상 중소기업 대상. 금융·세제·판로·수출·인력 다방면 지원'},
    {k:'이노비즈', d:'Innovation+Business. 제조·SW·바이오, 업력 3년, 기술혁신 4개 분야 60점 이상'},
    {k:'기업부설연구소', d:'R&D 세액공제 최대 25%, 정책자금 가점, 관세 80% 감면, 병역특례 가능'},
    {k:'특허출원/등록', d:'신규성·진보성·산업상 이용가능성 3요건. 선출원주의 대응 및 독점권 확보'},
    {k:'COREBiz', d:'SSPL 자체 인증. 통일주권·IR·FGI 투자유치까지 지속 관리'},
  ];
  return (
    <>
      <CategoryHero tag="04 PATENT" kicker="특허·인증" title="인증으로 증명하고, 특허로 보호합니다." subtitle="벤처·메인비즈·이노비즈부터 기업부설연구소·특허출원·COREBiz까지 원스톱 지원."/>
      <section style={{background: '#fff', padding: '80px 48px'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
          {certs.map((c,i) => (
            <div key={i} style={{background: colors.pale, borderRadius: 18, padding: 28, border: `1px solid ${colors.border}`}}>
              <div style={{width: 40, height: 40, borderRadius: 10, background: colors.blueGradient, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 14, marginBottom: 18}}>{String(i+1).padStart(2,'0')}</div>
              <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 20, fontWeight: 600, margin: '0 0 8px', color: colors.ink, letterSpacing: '-0.2px'}}>{c.k}</h3>
              <p style={{fontSize: 14, lineHeight: 1.55, color: colors.text2, margin: 0}}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>
      <StatStrip stats={[{v:'25%',lbl:'부설연구소 세액공제'},{v:'80%',lbl:'산업기술 관세 감면'},{v:'3요건',lbl:'특허 등록 필수'}]}/>
      <CategoryCTA/>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 5. 스마트팩토리
function SmartPage() {
  const levels = [
    {lvl:'기초', pct:'81.2%', d:'실적집계 수준. 대다수 중소 제조기업의 현위치'},
    {lvl:'중간1', pct:'16.2%', d:'설비 데이터 집계가 시작된 단계'},
    {lvl:'중간2', pct:'2.6%', d:'설비제어가 통합 운영되는 단계'},
    {lvl:'고도화', pct:'0%', d:'IoT·빅데이터가 결합된 목표 단계'},
  ];
  return (
    <>
      <CategoryHero tag="05 SMART" kicker="스마트팩토리" title="제조의 현재에서 제조의 미래로." subtitle="전체 제조 중소기업 중 스마트 솔루션 도입 기업은 단 1.4%. 지금이 골든타임입니다."/>
      <section style={{background: '#fff', padding: '80px 48px'}}>
        <div style={{maxWidth: 1040, margin: '0 auto'}}>
          <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 28, fontWeight: 600, margin: '0 0 28px', color: colors.ink, letterSpacing: '-0.3px'}}>스마트공장 4단계 로드맵</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            {levels.map((l,i) => (
              <div key={i} style={{display: 'grid', gridTemplateColumns: '120px 100px 1fr', gap: 20, alignItems: 'center', padding: '20px 24px', background: colors.pale, borderRadius: 12, border: `1px solid ${colors.border}`}}>
                <div style={{fontFamily: 'Inter Tight', fontSize: 18, fontWeight: 600, color: colors.ink, letterSpacing: '-0.2px'}}>Lv.{i+1} {l.lvl}</div>
                <div style={{fontFamily: 'Inter Tight', fontSize: 22, fontWeight: 700, background: colors.blueGradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>{l.pct}</div>
                <div style={{fontSize: 14, color: colors.text2, lineHeight: 1.5}}>{l.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProblemSolutionGrid blocks={[
        {title:'MES 도입', body:'주문 착수부터 완성품 품질검사까지 전 과정을 통합 관리하는 생산관리시스템.'},
        {title:'데이터 자동수집', body:'설비·센서 데이터 실시간 집계. 불량·생산 원인을 즉시 추적합니다.'},
        {title:'가동률·에너지 분석', body:'공정별 가동률과 에너지 사용량을 정량 분석해 원가 구조를 개선합니다.'},
        {title:'협력사 온라인 연계', body:'PC·태블릿·스마트폰으로 언제 어디서나 실시간 확인 및 협력사 연동.'},
      ]}/>
      <CategoryCTA/>
    </>
  );
}

// ───────────────────────────────────────────────────────────────
// 6. ESG경영
function ESGPage() {
  return (
    <>
      <CategoryHero tag="06 ESG" kicker="ESG경영" title="ESG는 선택이 아닌 전제입니다." subtitle="K-ESG 가이드라인 기반으로 조기 준비하는 기업만이 다음 10년의 기회를 잡습니다."/>
      <ProblemSolutionGrid blocks={[
        {title:'K-ESG 가이드라인 진단', body:'2021년 12월 발표된 K-ESG 가이드라인 기준, 기업의 E·S·G 영역별 현재 수준을 정밀 평가합니다.'},
        {title:'공공조달 가점 확보', body:'ESG 우수기업은 공공조달 입찰 시 가점을 받습니다. 조기 대응이 수주 확률을 바꿉니다.'},
        {title:'세액공제 기회', body:'대기업의 중소기업 ESG 지원 비용이 세액공제로 인정됩니다 — 파트너십의 기반이 됩니다.'},
        {title:'1조 원 투·융자 프로그램', body:'중소기업 대상 신설 예정인 ESG 투·융자 프로그램에 대비한 사전 구조화를 지원합니다.'},
      ]}/>
      <StatStrip dark stats={[{v:'1조원',lbl:'신설 중소기업 ESG 프로그램'},{v:'K-ESG',lbl:'정부 가이드라인 기반'},{v:'조기준비',lbl:'수주·세제 양면 혜택'}]}/>
      <CategoryCTA/>
    </>
  );
}

Object.assign(window, { ConsultingPage, FundingPage, FinancePage, PatentPage, SmartPage, ESGPage });
