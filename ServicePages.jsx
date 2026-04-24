function ServiceDetail() {
  const blocks = [
    { n: '01', title: '사업목적 설정', body: '미래 사업분야까지 고려한 법인 사업목적 설정. 등기 미기재 목적은 운영이 불가능합니다.' },
    { n: '02', title: '업종코드 정비', body: '6자리 업종코드가 고용지원금·정책자금 수령 여부를 결정합니다. 잘못된 코드는 세무조사 위험.' },
    { n: '03', title: '면세/과세 업종', body: '추가 정정이 미비한 경우 매입세액 불공제 위험. 사전 진단이 필수입니다.' },
    { n: '04', title: 'SSPL의 솔루션', body: '1:1 맞춤형 법인설립 컨설팅으로 전 생애주기 리스크를 선제적으로 차단합니다.' },
  ];
  return (
    <section style={{background: '#fff', padding: '100px 48px'}}>
      <div style={{maxWidth: 1040, margin: '0 auto'}}>
        <div style={{marginBottom: 56}}>
          <div style={{fontSize: 14, color: colors.blue, letterSpacing: '0.1em', fontWeight: 600, marginBottom: 12}}>기업컨설팅 / 법인설립</div>
          <h1 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 56, fontWeight: 600, letterSpacing: '-1px', margin: '0 0 20px', color: colors.ink, lineHeight: 1.08}}>
            처음부터 제대로,<br/>리스크 없는 법인설립.
          </h1>
          <p style={{fontSize: 19, color: colors.text2, lineHeight: 1.55, margin: 0, maxWidth: 720}}>
            중소기업은 내·외부 리스크에 대한 경험과 인력 부족으로 대처가 늦어집니다.
            SSPL은 법인설립 단계부터 전 생애주기의 리스크를 선제적으로 진단합니다.
          </p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 48}}>
          {blocks.map(b => (
            <div key={b.n} style={{background: colors.pale, borderRadius: 18, padding: 32, border: `1px solid ${colors.border}`}}>
              <div style={{fontFamily: 'Inter Tight', fontSize: 13, color: colors.blue, fontWeight: 600, letterSpacing: '0.1em', marginBottom: 16}}>{b.n}</div>
              <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 24, fontWeight: 600, margin: '0 0 10px', color: colors.ink, letterSpacing: '-0.2px'}}>{b.title}</h3>
              <p style={{fontSize: 15, lineHeight: 1.55, color: colors.text2, margin: 0}}>{b.body}</p>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: 14, justifyContent: 'center'}}>
          <Button variant="pill" size="lg">무료 진단 신청</Button>
          <Button variant="outline" size="lg">서비스 가이드 다운로드</Button>
        </div>
      </div>
    </section>
  );
}

function ProcessPage() {
  const steps = [
    { t: '문의·상담', d: '전화, 온라인 폼, 또는 카카오톡으로 간단한 상담 신청. 15분 내 회신.' },
    { t: '기업 현황 분석', d: '재무·세무·인사·특허·R&D 등 전 영역의 숨은 리스크와 기회를 진단합니다.' },
    { t: '맞춤 전략 수립', d: '업종·규모·성장단계에 맞춘 1:1 컨설팅 로드맵과 실행 플랜을 제공합니다.' },
    { t: '실행 지원', d: '인증 신청, 지원금 신청, 정관 정비 등 실무를 SSPL이 직접 대행합니다.' },
    { t: '사후관리', d: '분기별 리스크 점검 및 신규 지원사업 매칭으로 지속 성장을 보장합니다.' },
  ];
  return (
    <section style={{background: colors.pale, padding: '100px 48px'}}>
      <div style={{maxWidth: 1040, margin: '0 auto'}}>
        <div style={{marginBottom: 56, textAlign: 'center'}}>
          <div style={{fontSize: 14, color: colors.text2, letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12}}>컨설팅 프로세스</div>
          <h1 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 56, fontWeight: 600, letterSpacing: '-1px', margin: 0, color: colors.ink}}>
            5단계, 체계화된 여정
          </h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
          {steps.map((s, i) => (
            <div key={i} style={{background: '#fff', borderRadius: 18, padding: '28px 32px', border: `1px solid ${colors.border}`, display: 'flex', gap: 28, alignItems: 'flex-start'}}>
              <div style={{flex: 'none', width: 64, height: 64, borderRadius: 16, background: colors.blueGradient, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter Tight', fontSize: 24, fontWeight: 600}}>
                {String(i+1).padStart(2,'0')}
              </div>
              <div style={{flex: 1, paddingTop: 4}}>
                <h3 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 24, fontWeight: 600, margin: '0 0 6px', color: colors.ink, letterSpacing: '-0.2px'}}>{s.t}</h3>
                <p style={{fontSize: 16, lineHeight: 1.55, color: colors.text2, margin: 0}}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServiceDetail, ProcessPage });
