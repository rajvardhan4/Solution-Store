export default function ProductPreview({kind}){return kind==='chat'?(<div className="preview"><span className="tag">{"CHAT PILOT · INTERFACE CONCEPT"}</span>
<div className="dashboard"><div className="dash-side">{"◈ CHAT PILOT"}<br /><br />{"Overview"}<br />{"Knowledge"}<br />{"Conversations"}<br />{"Analytics"}<br />{"Settings"}</div>
<div className="dash-main"><div className="dash-top">{"WORKSPACE / CONVERSATIONS"}</div>
<h4>{"Every conversation, connected."}</h4>
<div className="chat-bubble">{"Hi! How can I help you today?"}</div>
<div className="chat-bubble reply">{"Tell me more about your services."}</div>
<div className="chat-bubble">{"Let's find the right solution for you."}</div>
<div className="chat-input">{"Write your message… "}<span style={{"float": "right"}}>{"↑"}</span>
</div>
</div>
</div>
</div>
):(<div className="preview hrm"><span className="tag">{"HRM PILOT · INTERFACE CONCEPT"}</span>
<div className="dashboard"><div className="dash-side">{"▦ HRM PILOT"}<br /><br />{"Dashboard"}<br />{"Attendance"}<br />{"Leave"}<br />{"Payroll"}<br />{"Workspace"}</div>
<div className="dash-main"><div className="dash-top">{"YOUR PEOPLE / YOUR WORKSPACE"}</div>
<h4>{"A clearer view of your team."}</h4>
<div className="metrics"><div className="metric">{"ATTENDANCE"}<b>{"Today ↗"}</b>
</div>
<div className="metric">{"LEAVE REQUESTS"}<b>{"Review →"}</b>
</div>
</div>
<div className="chart" aria-hidden="true"><i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<div className="dash-top" style={{"marginTop": "13px"}}>{"A CONNECTED HR EXPERIENCE"}</div>
</div>
</div>
</div>
);}
