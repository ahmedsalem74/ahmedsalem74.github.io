// === EDIT THIS OBJECT ONLY ===
window.profileData = {
name: "APT Example",
aliases: ["UNCXXXX", "Dev-0193", "Wizard Sample"],
overview: "APT Example is a financially motivated group active since 2023 targeting North America, Europe, and MENA with ransomware and data-theft operations.",
attribution: "Suspected cybercrime syndicate (RU-speaking)",
motivation: "Financial gain",
highlights: [
"First observed: 2023-02 (phishing + VPN brute force)",
"Leverages Living-off-the-Land (Rundll32, PowerShell, WMI)",
"Ransomware double-extortion; public leak site"
],
ttps: [
{ tactic:"Initial Access", technique:"Phishing", id:"T1566.001", notes:"Malicious attachments; macro lures" },
{ tactic:"Execution", technique:"PowerShell", id:"T1059.001", notes:"Scripted staging & payload retrieval" },
{ tactic:"Persistence", technique:"Registry Run Keys/Startup Folder", id:"T1547", notes:"Auto‑start entries" },
{ tactic:"Credential Access", technique:"OS Credential Dumping", id:"T1003.001", notes:"LSASS dump via comsvcs.dll" },
{ tactic:"Lateral Movement", technique:"Remote Services (SMB/RDP)", id:"T1021", notes:"RDP with stolen creds" },
{ tactic:"Exfiltration", technique:"Exfil to Cloud Storage", id:"T1567.002", notes:"Rclone to Mega/AnonFiles" },
{ tactic:"Impact", technique:"Data Encrypted for Impact", id:"T1486", notes:"Ransomware payload" }
],
timeline: [
{ date: "2023-02", event: "First observed activity", details: "Initial phishing campaigns targeting financial sector" },
{ date: "2023-05", event: "Ransomware deployment", details: "First use of INC ransomware in attacks" },
{ date: "2023-08", event: "Expanded targeting", details: "Started targeting healthcare and government sectors" },
{ date: "2023-11", event: "TTP evolution", details: "Added Living-off-the-Land techniques to bypass detection" },
{ date: "2024-02", event: "Recent campaign", details: "Q1-2024 campaign focused on European targets" }
],
victimsSeries: [
{ label: "Q1‑2025", value: 8 },
{ label: "Q2‑2025", value: 13 },
{ label: "Q3‑2025", value: 17 }
],
sectors: [
{ sector: "Financial Services", pct: 34 },
{ sector: "Manufacturing", pct: 22 },
{ sector: "Government", pct: 18 },
{ sector: "Healthcare", pct: 15 },
{ sector: "Education", pct: 11 }
],
countries: [
{ name: "United States", incidents: 17 },
{ name: "France", incidents: 5 },
{ name: "United Arab Emirates", incidents: 3 },
{ name: "Egypt", incidents: 4 },
{ name: "United Kingdom", incidents: 6 }
],
hashes: [
{ family:"INC", variant:"v2025.07", type:"Ransomware", md5:"3f2ac2...", sha1:"72c65f...", sha256:"d0a1b5...", notes:"Observed in Q3‑2025 campaign" },
{ family:"Cobalt Strike", variant:"Beacon", type:"Loader", md5:"c1b2a3...", sha1:"a0b1c2...", sha256:"ff12aa...", notes:"Signed DLL sideload" }
],
sampleLinks: [
{ label: "Any.Run task", url: "https://app.any.run/tasks/170f24cf-3e74-4371-bf1f-287e55f6ba73" },
{ label: "VirusTotal sample", url: "https://www.virustotal.com/" },
{ label: "CAPE report", url: "https://cape.contextis.com/" }
],
recommendations: [
"Block LOLBins via AppLocker/WDAC; restrict PowerShell to Constrained Language Mode",
"Hunt for suspicious RDP logons & Shadow Copy deletions",
"Monitor for data egress anomalies (cloud storage, rclone user‑agents)",
"Backup offline; test restoration regularly; implement MFA on VPN/SSO"
],
references: [
{ label:"Mandiant report (example)", url:"https://www.mandiant.com/" },
{ label:"Recorded Future intel (example)", url:"https://www.recordedfuture.com/" }
]
};