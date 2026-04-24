// Shared primitives
const { useState } = React;

const colors = {
  black: '#000', white: '#fff', pale: '#f5f5f7', ink: '#1d1d1f',
  blue: '#0071e3', blueLink: '#0066cc', blueBright: '#2997ff',
  text2: '#6e6e73', text3: '#86868b',
  border: '#d2d2d7', borderMid: '#86868b',
  graphite: '#272729', graphite2: '#2a2a2c',
  blueGradient: 'linear-gradient(135deg, #2563eb 0%, #0a3e9c 55%, #061f5c 100%)',
};

function Button({ variant='primary', size='md', children, onClick, style }) {
  const base = {
    fontFamily: 'Inter, Pretendard Variable, sans-serif',
    fontWeight: 500, letterSpacing: '-0.224px',
    border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
    transition: 'all 200ms cubic-bezier(0.28,0.11,0.32,1)',
  };
  const sizes = {
    sm: { fontSize: 13, padding: '8px 14px' },
    md: { fontSize: 14, padding: '10px 18px' },
    lg: { fontSize: 16, padding: '14px 28px' },
  };
  const variants = {
    primary: { background: colors.blue, color: '#fff', borderRadius: 8 },
    dark:    { background: colors.ink, color: '#fff', borderRadius: 8 },
    pill:    { background: colors.blue, color: '#fff', borderRadius: 980, padding: '14px 28px', fontSize: 15 },
    pillDark:{ background: colors.ink, color: '#fff', borderRadius: 980, padding: '14px 28px', fontSize: 15 },
    outline: { background: '#fff', color: colors.ink, border: `1px solid ${colors.borderMid}`, borderRadius: 8 },
    ghost:   { background: 'transparent', color: colors.blueLink, borderRadius: 8 },
    ghostOnDark: { background: 'transparent', color: colors.blueBright, borderRadius: 8 },
  };
  return <button onClick={onClick} style={{...base, ...sizes[size], ...variants[variant], ...style}}>{children}</button>;
}

function GlobalNav({ onNav, active='home' }) {
  const items = [
    ['home','홈'], ['about','회사소개'], ['consulting','기업컨설팅'],
    ['funding','무상지원금'], ['finance','재무·세무'], ['patent','특허·인증'],
    ['smart','스마트팩토리'], ['esg','ESG경영'], ['cases','진행사례'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      padding: '14px 48px', display: 'flex', alignItems: 'center', gap: 28, borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <span onClick={() => onNav('home')} style={{
        fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 20, letterSpacing: '-0.6px', cursor: 'pointer',
        color: 'rgb(143, 172, 255)',
      }}>SSPL</span>
      <div style={{display:'flex', gap: 22, flex: 1, flexWrap: 'wrap'}}>
        {items.map(([k,label]) => (
          <a key={k} onClick={() => onNav(k)} style={{
            color: active === k ? '#fff' : 'rgba(255,255,255,0.78)',
            fontSize: 13, fontWeight: active === k ? 600 : 400,
            letterSpacing: '-0.1px', cursor: 'pointer',
          }}>{label}</a>
        ))}
      </div>
      <Button variant="primary" size="sm" onClick={() => onNav('contact')} style={{whiteSpace: 'nowrap'}}>무료 상담</Button>
    </nav>
  );
}

function FloatingContact({ onContact }) {
  const items = [
    { label: '온라인 상담', icon: '💬', color: colors.blue, action: 'form' },
    { label: '카카오톡', icon: '💛', color: '#FEE500', action: 'kakao' },
  ];
  return (
    <div style={{position:'fixed', right: 24, bottom: 24, display: 'flex', flexDirection: 'column', gap: 10, zIndex: 100}}>
      {items.map((it, i) => (
        <button key={i} title={it.label} onClick={() => onContact && onContact(it.action)} style={{
          width: 60, height: 60, borderRadius: '50%', border: 0, cursor: 'pointer',
          background: it.color, color: it.action === 'kakao' ? '#3c1e1e' : '#fff',
          fontSize: 22, boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 200ms cubic-bezier(0.28,0.11,0.32,1)',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >{it.icon}</button>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{background: colors.ink, color: 'rgba(255,255,255,0.72)', padding: '56px 48px 40px'}}>
      <div style={{maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40}}>
        <div>
          <div style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 24, letterSpacing: '-0.5px', background: colors.blueGradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: 12}}>SSPL</div>
          <p style={{fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: 0}}>
            상상플러스랩은 15년 경력의 경영컨설팅 전문 기업으로<br/>1,000여 개 업체의 성장을 함께 해왔습니다.
          </p>
        </div>
        {[
          ['서비스', ['기업컨설팅','무상지원금','재무·세무','특허·인증','ESG경영']],
          ['회사', ['회사소개','오시는 길','공지사항','진행사례']],
          ['상담', ['070-4788-9773','온라인 상담','카카오톡','오시는 길']],
        ].map(([title, items], i) => (
          <div key={i}>
            <div style={{fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 14}}>{title}</div>
            {items.map(it => <div key={it} style={{fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 8}}>{it}</div>)}
          </div>
        ))}
      </div>
      <div style={{maxWidth: 1440, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 11, color: 'rgba(255,255,255,0.4)'}}>
        (주)상상플러스랩 · 대표 최영희 · 서울시 금천구 가산디지털2로 43-14, 가산한화비즈메트로2차 1319호 · TEL 070-4788-9773
      </div>
    </footer>
  );
}

Object.assign(window, { Button, GlobalNav, FloatingContact, Footer, colors });
