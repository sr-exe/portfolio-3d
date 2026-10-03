import { useEffect, useRef, useState } from 'react'
import { askChips } from '../data/portfolio.js'
import { answerOffline, startSuggestions } from '../lib/assistant.js'
import SectionHead from '../components/SectionHead.jsx'
import Reveal from '../components/Reveal.jsx'

const WELCOME = {
  role: 'assistant',
  text: "I answer only from what's published on this portfolio. Want to know what Shubham is currently building?",
  suggestions: startSuggestions(),
}

async function askServer(question, history) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 12000)
  try {
    const r = await fetch('/api/ask', {
      method: 'POST', headers: { 'content-type': 'application/json' }, signal: ctrl.signal,
      body: JSON.stringify({ question, history: history.slice(-6).map((m) => ({ role: m.role, content: m.text })) }),
    })
    if (!r.ok || !(r.headers.get('content-type') || '').includes('json')) return null
    const j = await r.json()
    return j.text || null
  } catch { return null } finally { clearTimeout(t) }
}

export default function AskAI() {
  const [msgs, setMsgs] = useState([WELCOME])
  const [val, setVal] = useState('')
  const [busy, setBusy] = useState(false)
  const [mode, setMode] = useState('FAQ MODE')
  const log = useRef(null)
  useEffect(() => { log.current?.scrollTo({ top: log.current.scrollHeight }) }, [msgs])

  async function send(q) {
    q = q.trim()
    if (!q || busy) return
    setVal(''); setBusy(true)
    const hist = [...msgs, { role: 'user', text: q }]
    setMsgs(hist)
    const local = answerOffline(q)
    const llm = await askServer(q, hist)
    if (llm) { setMode('LLM MODE'); setMsgs([...hist, { role: 'assistant', text: llm, suggestions: local.suggestions }]) }
    else { setMode('FAQ MODE'); setMsgs([...hist, { role: 'assistant', text: local.text, suggestions: local.suggestions }]) }
    setBusy(false)
  }

  const last = msgs[msgs.length - 1]
  return (
    <section id="ask" className="section">
      <SectionHead n="07" label="ASK" title={<>ASK SHUBHAM'S<br />PORTFOLIO</>}
        kicker="Not a general chatbot. It answers only from the facts published on this page, and says so when it doesn't know." />
      <Reveal className="chat">
        <div className="chat-bar"><span>PORTFOLIO_ASSISTANT</span><span>{mode}</span></div>
        <div className="chat-log" ref={log} role="log" aria-live="polite" aria-label="Conversation">
          {msgs.map((m, i) => (
            <div key={i} className={`msg msg-${m.role}`}>
              <span className="msg-who">{m.role === 'user' ? 'YOU' : 'SR.EXE'}</span>
              <p>{m.text}</p>
            </div>
          ))}
          {busy && <div className="msg msg-assistant"><span className="msg-who">SR.EXE</span><p>…</p></div>}
        </div>
        <div className="chips-ask" aria-label="Suggested questions">
          <span className="tag">{msgs.length === 1 ? 'ASK ABOUT' : 'NEXT →'}</span>
          {(msgs.length === 1 ? askChips : last.suggestions || []).map((c) => (
            <button key={c.label} type="button" className="chip-btn" data-hot onClick={() => send(c.q)} disabled={busy}>{c.label}</button>
          ))}
        </div>
        <form className="chat-form" onSubmit={(e) => { e.preventDefault(); send(val) }}>
          <label htmlFor="ask-input" className="sr-only">Ask a question about Shubham's portfolio</label>
          <input id="ask-input" value={val} onChange={(e) => setVal(e.target.value)} maxLength={300}
            placeholder="e.g. Does Shubham know Spring Boot?" autoComplete="off" />
          <button type="submit" className="btn btn-solid" disabled={busy || !val.trim()}>ASK →</button>
        </form>
      </Reveal>
    </section>
  )
}
