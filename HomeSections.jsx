function Hero({ onCTA }) {
  return (
    <section style={{background: '#000', color: '#fff', padding: '140px 48px 120px', textAlign: 'center', overflow: 'hidden', position: 'relative'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(0,113,227,0.18), transparent 60%)', pointerEvents: 'none'}}/>
      <div style={{position: 'relative', maxWidth: 1040, margin: '0 auto'}}>
        <div style={{fontSize: 13, letterSpacing: '0.2em', color: colors.blueBright, marginBottom: 20, fontWeight: 500}}>SANGSANG PLUS LAB</div>
        <h1 style={{fontFamily: 'Inter Tight, Pretendard Variable, sans-serif', fontSize: 72, lineHeight: 1.04, letterSpacing: '-1.5px', fontWeight: 600, margin: '0 0 24px', color: '#fff'}}>
          기업의 존재 의미와<br/>
          <span style={{background: colors.blueGradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>미래가치를 올려 드립니다.</span>
        </h1>
        <p style={{fontFamily: 'Pretendard Variable, Inter, sans-serif', fontSize: 21, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', maxWidth: 680, margin: '0 auto 40px', letterSpacing: '-0.2px'}}>
          15년 경영컨설팅 전문, 1,000여 개 업체의 성장 파트너.<br/>
          차별적 서비스와 다양한 노하우로 보이지 않는 가치를 진단합니다.
        </p>
        <div style={{display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap'}}>
          <Button variant="pill" size="lg" onClick={onCTA}>무료 상담 신청하기</Button>
          <Button variant="ghostOnDark" size="lg">진행사례 보기 →</Button>
        </div>
      </div>
    </section>
  );
}

function TrustStats() {
  const stats = [
    { v: '15', unit: '년', lbl: '경영컨설팅 전문' },
    { v: '1,000+', unit: '', lbl: '업체 컨설팅 실적' },
    { v: '6', unit: '대', lbl: '핵심 서비스 분야' },
    { v: '다수', unit: '', lbl: '국가기관 자문 경력' },
  ];
  return (
    <section style={{background: colors.pale, padding: '100px 48px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 64}}>
          <div style={{fontSize: 14, color: colors.text2, letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12}}>숫자로 보는 신뢰</div>
          <h2 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 44, fontWeight: 600, letterSpacing: '-0.5px', margin: 0, color: colors.ink}}>
            검증된 경험, 입증된 결과
          </h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20}}>
          {stats.map((s, i) => (
            <div key={i} style={{background: '#fff', borderRadius: 18, padding: '36px 28px', textAlign: 'center', border: `1px solid ${colors.border}`}}>
              <div style={{fontFamily: 'Inter Tight', fontSize: 56, fontWeight: 600, letterSpacing: '-1.5px', lineHeight: 1, background: colors.blueGradient, WebkitBackgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
                {s.v}<span style={{fontSize: 28, color: colors.ink, WebkitTextFillColor: colors.ink}}>{s.unit}</span>
              </div>
              <div style={{fontSize: 15, color: colors.text2, marginTop: 14, fontWeight: 500}}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGrid({ onPick }) {
  const services = [
    { k:'consulting', title: '기업컨설팅', desc: '법인설립부터 법정의무교육까지. 조직적·체계화된 운영관리로 성공적 미래를 보장합니다.', tag: '01' },
    { k:'funding', title: '무상지원금', desc: '매년 약 30조 원 규모의 R&D·고용 지원금 발굴 및 신청 대행.', tag: '02' },
    { k:'finance', title: '재무·세무', desc: '합법적 절세 전략과 1:1 맞춤 재무분석으로 탄탄한 재무 구조 확립.', tag: '03' },
    { k:'patent', title: '특허·인증', desc: '벤처·메인비즈·이노비즈 인증, 기업부설연구소 설립, 특허출원 원스톱 지원.', tag: '04' },
    { k:'smart', title: '스마트팩토리', desc: 'MES 기반 전 제조과정 스마트화. IoT·빅데이터 기반 고도화까지.', tag: '05' },
    { k:'esg', title: 'ESG경영', desc: 'K-ESG 가이드라인 기반 조기 대응. 공공조달 가점과 세액공제 혜택 확보.', tag: '06' },
  ];
  return (
    <section style={{background: '#fff', padding: '100px 48px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{marginBottom: 56}}>
          <div style={{fontSize: 14, color: colors.text2, letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12}}>핵심 서비스</div>
          <h2 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 44, fontWeight: 600, letterSpacing: '-0.5px', margin: 0, color: colors.ink, maxWidth: 720}}>
            6대 전문 서비스로 기업의 전 생애주기를<br/>지원합니다.
          </h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
          {services.map((s) => (
            <div key={s.k} onClick={() => onPick && onPick(s.k)} style={{
              background: colors.pale, borderRadius: 18, padding: 32, cursor: 'pointer',
              transition: 'all 300ms cubic-bezier(0.28,0.11,0.32,1)',
              border: `1px solid transparent`,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = colors.border; }}
            onMouseLeave={e => { e.currentTarget.style.background = colors.pale; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'transparent'; }}
            >
              <div style={{fontFamily: 'Inter Tight', fontSize: 13, fontWeight: 600, color: colors.blue, letterSpacing: '0.1em', marginBottom: 20}}>{s.tag}</div>
              <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 28, fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 12px', color: colors.ink}}>{s.title}</h3>
              <p style={{fontSize: 15, lineHeight: 1.55, color: colors.text2, margin: '0 0 20px', letterSpacing: '-0.1px'}}>{s.desc}</p>
              <span style={{fontSize: 14, color: colors.blueLink, fontWeight: 500}}>자세히 알아보기 →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStrip() {
  const steps = ['문의·상담', '기업 진단', '맞춤 전략 수립', '실행 지원', '사후관리'];
  return (
    <section style={{background: '#000', color: '#fff', padding: '100px 48px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 64}}>
          <div style={{fontSize: 14, color: colors.blueBright, letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12}}>CONSULTING PROCESS</div>
          <h2 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 44, fontWeight: 600, letterSpacing: '-0.5px', margin: 0, color: '#fff'}}>
            체계화된 5단계 컨설팅 프로세스
          </h2>
        </div>
        <div style={{display: 'flex', gap: 16, alignItems: 'stretch'}}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div style={{flex: 1, background: colors.graphite, borderRadius: 18, padding: 24, minHeight: 140, position: 'relative'}}>
                <div style={{fontFamily: 'Inter Tight', fontSize: 13, color: colors.blueBright, fontWeight: 600, letterSpacing: '0.1em'}}>STEP {String(i+1).padStart(2,'0')}</div>
                <div style={{fontSize: 20, fontWeight: 600, marginTop: 32, letterSpacing: '-0.2px'}}>{s}</div>
              </div>
              {i < steps.length - 1 && <div style={{display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 18}}>→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseSection() {
  const cases = [
    { biz: '실내건축/목재가구', grade: 'S', revenue: '30억', tags: ['법인정관','법인세 절세','벤처인증','기업부설연구소','특허출원'] },
    { biz: '의료기기/도소매', grade: 'R', revenue: '10억', tags: ['법인정관','법인세 절세','벤처인증','특허출원'] },
    { biz: '금속가공', grade: 'Q', revenue: '80억', tags: ['법인정관','직무발명보상제','연구전담부서','기업부설연구소'] },
  ];
  return (
    <section style={{background: colors.pale, padding: '100px 48px'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48}}>
          <div>
            <div style={{fontSize: 14, color: colors.text2, letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12}}>진행사례</div>
            <h2 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 44, fontWeight: 600, letterSpacing: '-0.5px', margin: 0, color: colors.ink}}>
              검증된 성공 사례
            </h2>
          </div>
          <Button variant="ghost">전체 사례 보기 →</Button>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
          {cases.map((c, i) => (
            <div key={i} style={{background: '#fff', borderRadius: 18, padding: 28, border: `1px solid ${colors.border}`}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16}}>
                <div style={{width: 44, height: 44, borderRadius: 10, background: colors.blueGradient, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter Tight', fontSize: 20, fontWeight: 600}}>{c.grade}</div>
                <div>
                  <div style={{fontSize: 15, fontWeight: 600, color: colors.ink}}>{c.biz} {c.grade}업체</div>
                  <div style={{fontSize: 12, color: colors.text2}}>연매출 {c.revenue}</div>
                </div>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${colors.border}`}}>
                {c.tags.map(t => (
                  <span key={t} style={{fontSize: 12, padding: '4px 10px', borderRadius: 980, background: colors.pale, color: colors.ink, fontWeight: 500}}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand({ onCTA }) {
  return (
    <section style={{background: '#000', padding: '120px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(0,113,227,0.22), transparent 65%)'}}/>
      <div style={{position: 'relative', maxWidth: 800, margin: '0 auto'}}>
        <h2 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 52, fontWeight: 600, letterSpacing: '-0.8px', color: '#fff', margin: '0 0 20px', lineHeight: 1.1}}>
          전화 한 통으로<br/>무료 기업 진단.
        </h2>
        <p style={{fontSize: 19, color: 'rgba(255,255,255,0.7)', margin: '0 0 36px', lineHeight: 1.5}}>
          지금 SSPL 전문 컨설턴트에게 여러분의 숨은 가치를 확인받으세요.
        </p>
        <div style={{display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap'}}>
          <Button variant="pill" size="lg" onClick={onCTA}>무료 상담 신청하기</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TrustStats, ServiceGrid, ProcessStrip, CaseSection, CTABand });
