// 상담문의 폼 페이지 — Contact/Inquiry form

function ContactPage() {
  const [form, setForm] = React.useState({
    company: '', name: '', phone: '', email: '',
    industry: '', revenue: '30억 미만', service: '기업컨설팅', message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = React.useState(false);

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [k]: v }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return;
    setSubmitted(true);
  };

  const fieldStyle = {
    fontFamily: 'Pretendard Variable, Inter, sans-serif',
    fontSize: 15, padding: '12px 14px', borderRadius: 10,
    border: `1px solid ${colors.borderMid}`, background: '#fff', color: colors.ink,
    outline: 'none', width: '100%', boxSizing: 'border-box',
    transition: 'all 200ms cubic-bezier(0.28,0.11,0.32,1)',
  };
  const labelStyle = { fontSize: 13, fontWeight: 600, color: colors.ink, marginBottom: 6, display: 'block', letterSpacing: '-0.1px' };

  if (submitted) {
    return (
      <section style={{background: colors.pale, padding: '140px 48px', minHeight: '60vh'}}>
        <div style={{maxWidth: 560, margin: '0 auto', textAlign: 'center', background: '#fff', borderRadius: 24, padding: 56, border: `1px solid ${colors.border}`}}>
          <div style={{width: 64, height: 64, borderRadius: '50%', background: colors.blueGradient, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 28}}>✓</div>
          <h1 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 36, fontWeight: 600, letterSpacing: '-0.5px', margin: '0 0 12px', color: colors.ink}}>상담 신청이 접수됐습니다.</h1>
          <p style={{fontSize: 16, color: colors.text2, lineHeight: 1.55, margin: '0 0 28px'}}>SSPL 전문 컨설턴트가 영업일 기준 1일 내 연락드리겠습니다.<br/>소중한 문의에 감사드립니다.</p>
          <Button variant="pill" onClick={() => setSubmitted(false)}>새 상담 신청</Button>
        </div>
      </section>
    );
  }

  return (
    <section style={{background: colors.pale, padding: '80px 48px'}}>
      <div style={{maxWidth: 720, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <div style={{fontSize: 13, color: colors.text2, letterSpacing: '0.15em', fontWeight: 500, marginBottom: 12}}>CONTACT</div>
          <h1 style={{fontFamily: 'Inter Tight, Pretendard Variable', fontSize: 48, fontWeight: 600, letterSpacing: '-0.8px', margin: '0 0 12px', color: colors.ink, lineHeight: 1.1}}>무료 상담 신청</h1>
          <p style={{fontSize: 17, color: colors.text2, margin: 0, lineHeight: 1.5}}>15년 경력의 전문 컨설턴트가 직접 답변드립니다.<br/>아래 양식 작성 후 제출해 주세요.</p>
        </div>

        <form onSubmit={onSubmit} style={{background: '#fff', borderRadius: 20, padding: 40, border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column', gap: 18}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
            <div><label style={labelStyle}>회사명 *</label><input style={fieldStyle} required value={form.company} onChange={set('company')} placeholder="(주)OOOO"/></div>
            <div><label style={labelStyle}>담당자 *</label><input style={fieldStyle} required value={form.name} onChange={set('name')} placeholder="홍길동"/></div>
            <div><label style={labelStyle}>연락처 *</label><input style={fieldStyle} required type="tel" value={form.phone} onChange={set('phone')} placeholder="010-0000-0000"/></div>
            <div><label style={labelStyle}>이메일</label><input style={fieldStyle} type="email" value={form.email} onChange={set('email')} placeholder="name@company.com"/></div>
            <div><label style={labelStyle}>업종</label><input style={fieldStyle} value={form.industry} onChange={set('industry')} placeholder="예: 제조, IT, 도소매"/></div>
            <div><label style={labelStyle}>연매출</label>
              <select style={fieldStyle} value={form.revenue} onChange={set('revenue')}>
                <option>1억 미만</option><option>1~10억</option><option>10~30억</option>
                <option>30억 미만</option><option>30~50억</option><option>50~100억</option><option>100억 이상</option>
              </select>
            </div>
          </div>

          <div><label style={labelStyle}>관심 서비스 *</label>
            <select style={fieldStyle} required value={form.service} onChange={set('service')}>
              <option>기업컨설팅</option><option>무상지원금</option><option>재무·세무</option>
              <option>특허·인증</option><option>스마트팩토리</option><option>ESG경영</option>
              <option>기타 / 전체 진단</option>
            </select>
          </div>

          <div><label style={labelStyle}>상담 내용</label>
            <textarea style={{...fieldStyle, minHeight: 120, resize: 'vertical', fontFamily: 'Pretendard Variable, Inter, sans-serif'}}
              value={form.message} onChange={set('message')}
              placeholder="간단한 문의 내용이나 현재 상황을 적어주시면 더 정확한 답변을 드립니다."/>
          </div>

          <label style={{display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px', background: colors.pale, borderRadius: 10, cursor: 'pointer', fontSize: 14, color: colors.text2, lineHeight: 1.5}}>
            <input type="checkbox" checked={form.agree} onChange={set('agree')} style={{marginTop: 3}}/>
            <span>
              <strong style={{color: colors.ink}}>개인정보 수집·이용에 동의합니다.</strong> (필수)<br/>
              수집 항목: 회사명·담당자·연락처·이메일 / 이용 목적: 상담 응대 / 보유 기간: 상담 완료 후 3년
            </span>
          </label>

          <button type="submit" disabled={!form.agree} style={{
            background: form.agree ? colors.blueGradient : colors.border,
            color: '#fff', border: 0, borderRadius: 980,
            padding: '16px 32px', fontSize: 16, fontWeight: 600,
            cursor: form.agree ? 'pointer' : 'not-allowed',
            fontFamily: 'Pretendard Variable, Inter, sans-serif', marginTop: 8,
            transition: 'filter 200ms',
          }}>상담 신청하기</button>
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { ContactPage });
