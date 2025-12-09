import { Question } from "../types";

// Ein fester Satz an 100 Fragen für die ITIL 4 Foundation Vorbereitung.
// Abdeckung: Grundbegriffe, 7 Prinzipien, 4 Dimensionen, SVS/SVC, Practices.

export const STATIC_QUESTIONS: Omit<Question, "id">[] = [
  // --- TEIL 1: GRUNDBEGRIFFE DES SERVICE MANAGEMENTS ---
  {
    text: "Was ist die Definition eines Service?",
    options: [
      "Eine Möglichkeit, gemeinsamen Wert zu schaffen, indem das Erreichen von Ergebnissen erleichtert wird, die Kunden erreichen wollen.",
      "Eine materielle Ware, die an einen Kunden übertragen wird.",
      "Ein technisches System, das rund um die Uhr verfügbar ist.",
      "Eine Vereinbarung zwischen einem Anbieter und einem Lieferanten."
    ],
    correctAnswerIndex: 0,
    explanation: "Ein Service ermöglicht Value Co-Creation, indem er dem Kunden hilft, gewünschte Ergebnisse zu erzielen, ohne dass der Kunde bestimmte Kosten und Risiken managen muss."
  },
  {
    text: "Was ist ein 'Output'?",
    options: [
      "Ein Ergebnis für einen Stakeholder.",
      "Ein materieller oder immaterieller Liefergegenstand einer Aktivität.",
      "Ein möglicher Event, der Schaden verursachen könnte.",
      "Eine Änderung am Status eines Configuration Items."
    ],
    correctAnswerIndex: 1,
    explanation: "Ein Output ist das direkte Ergebnis einer Aktivität (z.B. ein Bericht, eine Software), während ein Outcome das Resultat für den Stakeholder ist."
  },
  {
    text: "Ein Unternehmen führt ein neues System ein, wodurch die Mitarbeiter 20% schneller arbeiten können. Was stellt die 'schnellere Arbeit' dar?",
    options: [
      "Output",
      "Outcome",
      "Kosten",
      "Risiko"
    ],
    correctAnswerIndex: 1,
    explanation: "Das neue System ist der Output. Die schnellere Arbeit (das Ergebnis, das einen Wert darstellt) ist der Outcome."
  },
  {
    text: "Welcher Begriff beschreibt 'Mögliche Events, die Schaden verursachen oder Verluste herbeiführen könnten'?",
    options: [
      "Kosten",
      "Outcome",
      "Risiko",
      "Utility"
    ],
    correctAnswerIndex: 2,
    explanation: "Risiko ist definiert als mögliche Events, die Schaden verursachen, Verluste herbeiführen oder das Erreichen von Zielen erschweren könnten."
  },
  {
    text: "Was beschreibt 'Utility' (Zweckmäßigkeit)?",
    options: [
      "Die Gewährleistung, dass ein Service verfügbar ist.",
      "Die Funktionalität, die ein Produkt oder Service bietet, um einem bestimmten Bedürfnis gerecht zu werden.",
      "Die Zusicherung, dass ein Service sicher ist.",
      "Der Preis, den ein Kunde für einen Service zahlt."
    ],
    correctAnswerIndex: 1,
    explanation: "Utility ist das, was der Service tut (Fit for purpose). Warranty ist, wie der Service erbracht wird (Fit for use)."
  },
  {
    text: "Was beschreibt 'Warranty' (Gewährleistung)?",
    options: [
      "Die Funktionalität des Services.",
      "Die Zusicherung, dass ein Produkt oder Service den vereinbarten Anforderungen entspricht (Verfügbarkeit, Kapazität, Sicherheit).",
      "Der wahrgenommene Nutzen für den Kunden.",
      "Die Entfernung von Kosten für den Kunden."
    ],
    correctAnswerIndex: 1,
    explanation: "Warranty garantiert, dass der Service 'fit for use' ist (z.B. verfügbar, sicher, schnell genug)."
  },
  {
    text: "Wer ist ein 'Sponsor'?",
    options: [
      "Die Person, die den Service nutzt.",
      "Die Person, die das Budget für den Service konsumieren autorisiert.",
      "Die Person, die die Anforderungen an den Service definiert.",
      "Der Anbieter des Services."
    ],
    correctAnswerIndex: 1,
    explanation: "Der Sponsor ist die Person, die das Budget für den Servicekonsum autorisiert. Der Kunde definiert die Anforderungen, der User nutzt den Service."
  },
  {
    text: "Was versteht man unter 'Service Consumption' (Servicekonsum)?",
    options: [
      "Die Bereitstellung von Ressourcen durch den Provider.",
      "Aktivitäten, die von einer Organisation durchgeführt werden, um Services zu nutzen.",
      "Das Management der Provider-Ressourcen.",
      "Das Erstellen von Service Level Agreements."
    ],
    correctAnswerIndex: 1,
    explanation: "Servicekonsum umfasst das Management der eigenen Ressourcen des Kunden, um den Service zu nutzen, sowie die Nutzungshandlungen selbst."
  },
  {
    text: "Welche zwei Arten von Kosten sind im Service Management relevant?",
    options: [
      "Fixe und variable Kosten.",
      "Kosten, die dem Verbraucher entfernt werden, und Kosten, die ihm auferlegt werden.",
      "Hardware- und Softwarekosten.",
      "Geplante und ungeplante Kosten."
    ],
    correctAnswerIndex: 1,
    explanation: "Ein Service schafft Wert, indem er dem Kunden Kosten abnimmt (z.B. keine eigenen Server kaufen), ihm aber auch neue Kosten auferlegt (z.B. Abo-Gebühr)."
  },
  {
    text: "Was ist ein 'Service Offering' (Serviceangebot)?",
    options: [
      "Eine Beschreibung eines oder mehrerer Services, um Bedürfnisse einer Zielgruppe zu erfüllen.",
      "Ein Vertrag über Service Level.",
      "Eine Rechnung für erbrachte Leistungen.",
      "Eine technische Spezifikation."
    ],
    correctAnswerIndex: 0,
    explanation: "Ein Service Offering kann Waren (Goods), Zugang zu Ressourcen (Access) und Serviceaktionen (Actions) beinhalten."
  },

  // --- TEIL 2: DIE 7 GRUNDPRINZIPIEN (GUIDING PRINCIPLES) ---
  {
    text: "Welches Grundprinzip empfiehlt, vorhandene Services, Prozesse und Werkzeuge zu nutzen, anstatt alles neu zu bauen?",
    options: [
      "Start where you are (Dort beginnen, wo man steht)",
      "Focus on value (Wertorientierung)",
      "Think and work holistically (Ganzheitlich denken und arbeiten)",
      "Progress iteratively with feedback (Iterativ mit Feedback voranschreiten)"
    ],
    correctAnswerIndex: 0,
    explanation: "'Start where you are' besagt, dass man den aktuellen Zustand objektiv betrachten und Wiederverwendbares nutzen sollte, bevor man Neues erstellt."
  },
  {
    text: "Was ist ein wichtiger erster Schritt beim Prinzip 'Focus on value'?",
    options: [
      "Die Hardware zu inventarisieren.",
      "Zu wissen, wer der Servicekonsument ist und was für ihn Wert darstellt.",
      "Prozesse zu automatisieren.",
      "Ein Projektmanagement-Tool zu kaufen."
    ],
    correctAnswerIndex: 1,
    explanation: "Man muss wissen, wem man dient (Customer/User Experience), um Wert schaffen zu können."
  },
  {
    text: "Welches Prinzip betont die Wichtigkeit, Silos aufzubrechen?",
    options: [
      "Keep it simple and practical",
      "Collaborate and promote visibility (Zusammenarbeiten und Transparenz fördern)",
      "Optimize and automate",
      "Focus on value"
    ],
    correctAnswerIndex: 1,
    explanation: "Zusammenarbeit und Sichtbarkeit helfen, Barrieren zwischen Teams (Silos) abzubauen und das Vertrauen zu stärken."
  },
  {
    text: "Was sollte im Mittelpunkt stehen, wenn entschieden wird, wie ein Service verbessert werden soll?",
    options: [
      "Die neuesten Technologietrends",
      "Der Wert für den Kunden (Focus on value)",
      "Die Reduzierung der Mitarbeiterzahl",
      "Die Einhaltung alter Prozesse"
    ],
    correctAnswerIndex: 1,
    explanation: "Alles, was eine Organisation tut, sollte direkt oder indirekt mit dem Wert für die Stakeholder verknüpft sein."
  },
  {
    text: "Welches Prinzip rät dazu, große Initiativen in kleinere, handhabbare Stücke zu zerlegen?",
    options: [
      "Progress iteratively with feedback",
      "Think and work holistically",
      "Optimize and automate",
      "Start where you are"
    ],
    correctAnswerIndex: 0,
    explanation: "Durch iterative Schritte (Sprints, Phasen) wird das Risiko verringert, " +
    "schnelleres Feedback ermöglicht und vermieden, dass man 'den Ozean kocht'."
  },
  {
    text: "Was ist gemeint mit 'Feedback' im Prinzip 'Progress iteratively with feedback'?",
    options: [
      "Nur Beschwerden von Kunden.",
      "Rückmeldungen, die helfen, den Wert und die Richtung der Initiative ständig neu zu bewerten.",
      "Eine jährliche Mitarbeiterumfrage.",
      "Die Fehlermeldungen eines Servers."
    ],
    correctAnswerIndex: 1,
    explanation: "Feedback-Schleifen sind essenziell, um sicherzustellen, dass man noch auf dem richtigen Weg ist und um Anpassungen vorzunehmen."
  },
  {
    text: "Wenn ein Prozess zu komplex ist, welches Prinzip sollte angewendet werden?",
    options: [
      "Collaborate and promote visibility",
      "Keep it simple and practical",
      "Start where you are",
      "Focus on value"
    ],
    correctAnswerIndex: 1,
    explanation: "Man sollte immer die minimale Anzahl an Schritten verwenden, die nötig ist, um ein Ziel zu erreichen. Wenn etwas keinen Wert schafft, eliminiere es."
  },
  {
    text: "Welches Prinzip bezieht sich auf den Einsatz von Technologie, um menschliche Eingriffe zu reduzieren?",
    options: [
      "Optimize and automate",
      "Think and work holistically",
      "Focus on value",
      "Start where you are"
    ],
    correctAnswerIndex: 0,
    explanation: "Nachdem ein Prozess optimiert (verschlankt) wurde, sollte geprüft werden, ob er automatisiert werden kann. Automatisiere niemals einen schlechten Prozess."
  },
  {
    text: "Welches Prinzip betrachtet das Service Management als ein komplexes System interagierender Teile?",
    options: [
      "Focus on value",
      "Think and work holistically",
      "Keep it simple and practical",
      "Progress iteratively with feedback"
    ],
    correctAnswerIndex: 1,
    explanation: "Kein Service oder Element steht allein. Man muss die 4 Dimensionen und deren Wechselwirkungen betrachten."
  },
  {
    text: "Eine Organisation entscheidet sich, Daten über ihre Arbeitslast offen auf Bildschirmen anzuzeigen. Welches Prinzip wird hier befolgt?",
    options: [
      "Collaborate and promote visibility",
      "Optimize and automate",
      "Start where you are",
      "Keep it simple and practical"
    ],
    correctAnswerIndex: 0,
    explanation: "Transparenz (Visibility) hilft allen zu verstehen, was passiert, und fördert die Zusammenarbeit."
  },
  {
    text: "Was bedeutet 'Outcome-based thinking' im Kontext von 'Keep it simple and practical'?",
    options: [
      "Nur auf das Endergebnis schauen, nicht auf den Prozess.",
      "Lösungen entwickeln, die Ergebnisse liefern, statt nur Prozesse zu befolgen.",
      "Outsourcing aller Aktivitäten.",
      "Ignorieren von Regeln."
    ],
    correctAnswerIndex: 1,
    explanation: "Man sollte sich darauf konzentrieren, was erreicht werden soll, und den Weg dorthin so einfach wie möglich gestalten."
  },
  {
    text: "Welches Prinzip hilft zu vermeiden, dass man 'das Rad neu erfindet'?",
    options: [
      "Start where you are",
      "Focus on value",
      "Think and work holistically",
      "Optimize and automate"
    ],
    correctAnswerIndex: 0,
    explanation: "Durch Messen und Beobachten des Ist-Zustands kann man Vorhandenes nutzen, statt blind neu zu beginnen."
  },
  {
    text: "Welche Aussage trifft auf die Guiding Principles zu?",
    options: [
      "Sie gelten nur für die IT-Abteilung.",
      "Sie sind universell und auf jede Initiative anwendbar.",
      "Sie ersetzen die Practices.",
      "Man darf immer nur ein Prinzip gleichzeitig anwenden."
    ],
    correctAnswerIndex: 1,
    explanation: "Die 7 Prinzipien sind universelle Empfehlungen, die eine Organisation in allen Situationen leiten können."
  },

  // --- TEIL 3: DIE 4 DIMENSIONEN ---
  {
    text: "Welche der vier Dimensionen befasst sich mit Rollen, Verantwortlichkeiten und Organisationsstruktur?",
    options: [
      "Organisationen und Menschen",
      "Information und Technologie",
      "Partner und Lieferanten",
      "Wertströme und Prozesse"
    ],
    correctAnswerIndex: 0,
    explanation: "Diese Dimension umfasst die formale Organisationsstruktur, aber auch Kultur, Rollen und Fähigkeiten der Mitarbeiter."
  },
  {
    text: "Was ist KEINE der vier Dimensionen des Service Managements?",
    options: [
      "Partner und Lieferanten",
      "Wertströme und Prozesse",
      "Budget und Finanzen",
      "Information und Technologie"
    ],
    correctAnswerIndex: 2,
    explanation: "Budget ist wichtig, aber keine eigenständige Dimension in ITIL 4. Die vier sind: Org & Menschen, Info & Tech, Partner & Lieferanten, Wertströme & Prozesse."
  },
  {
    text: "Welche Dimension umfasst Workflow-Management-Systeme und Wissensdatenbanken?",
    options: [
      "Information und Technologie",
      "Organisationen und Menschen",
      "Partner und Lieferanten",
      "Wertströme und Prozesse"
    ],
    correctAnswerIndex: 0,
    explanation: "Technologie, die das Service Management unterstützt (wie Ticketing-Tools, KI, Cloud), gehört zu dieser Dimension."
  },
  {
    text: "In welcher Dimension werden Verträge und Vereinbarungen mit externen Firmen betrachtet?",
    options: [
      "Partner und Lieferanten",
      "Organisationen und Menschen",
      "Information und Technologie",
      "Wertströme und Prozesse"
    ],
    correctAnswerIndex: 0,
    explanation: "Diese Dimension umfasst die Beziehungen zu anderen Organisationen, die am Design, der Entwicklung oder Lieferung von Services beteiligt sind."
  },
  {
    text: "Was beschreibt die Dimension 'Wertströme und Prozesse'?",
    options: [
      "Die Software, die genutzt wird.",
      "Die Aktivitäten, Arbeitsabläufe und Verfahren, die nötig sind, um Wert zu schaffen.",
      "Die Hierarchie im Unternehmen.",
      "Die externen Berater."
    ],
    correctAnswerIndex: 1,
    explanation: "Sie definiert, WIE die Arbeit getan wird (Prozesse) und wie die Schritte verknüpft sind (Value Streams)."
  },
  {
    text: "Welches Akronym beschreibt die externen Faktoren, die die 4 Dimensionen beeinflussen?",
    options: [
      "SWOT",
      "PESTLE",
      "SMART",
      "AGILE"
    ],
    correctAnswerIndex: 1,
    explanation: "Political, Economic, Social, Technological, Legal, Environmental - diese Faktoren beeinflussen, wie eine Organisation arbeitet."
  },
  {
    text: "Ein Unternehmen leidet unter schlechter Kommunikation zwischen Teams aufgrund einer 'Blame Culture'. Welche Dimension ist betroffen?",
    options: [
      "Organisationen und Menschen",
      "Information und Technologie",
      "Partner und Lieferanten",
      "Wertströme und Prozesse"
    ],
    correctAnswerIndex: 0,
    explanation: "Kultur, Kommunikation und Verhalten fallen unter 'Organisationen und Menschen'."
  },

  // --- TEIL 4: SVS & SVC (Service Value System & Chain) ---
  {
    text: "Was ist der Zweck des Service Value System (SVS)?",
    options: [
      "Sicherstellen, dass die Organisation als Ganzes effektiv funktioniert, um Wert zu schaffen.",
      "Nur die IT-Abteilung zu verwalten.",
      "Lieferantenverträge zu managen.",
      "Software zu entwickeln."
    ],
    correctAnswerIndex: 0,
    explanation: "Das SVS beschreibt, wie alle Komponenten und Aktivitäten einer Organisation zusammenarbeiten, um Value Co-Creation zu ermöglichen."
  },
  {
    text: "Was ist der Input für das SVS?",
    options: [
      "Produkte",
      "Opportunity (Gelegenheit) und Demand (Nachfrage)",
      "Wert",
      "Governance"
    ],
    correctAnswerIndex: 1,
    explanation: "Das SVS wandelt Opportunity und Demand am Eingang in Value (Wert) am Ausgang um."
  },
  {
    text: "Welches Element des SVS ermöglicht es der Organisation, ihre Richtung und Kontrolle beizubehalten?",
    options: [
      "Governance",
      "Practices",
      "Continual Improvement",
      "Service Value Chain"
    ],
    correctAnswerIndex: 0,
    explanation: "Governance ist das System, durch das eine Organisation geleitet und kontrolliert wird."
  },
  {
    text: "Wie viele Aktivitäten hat die Service Value Chain (SVC)?",
    options: [
      "4",
      "6",
      "7",
      "34"
    ],
    correctAnswerIndex: 1,
    explanation: "Die SVC besteht aus 6 Aktivitäten: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support."
  },
  {
    text: "Welche SVC-Aktivität sorgt für ein gemeinsames Verständnis von Vision, Status und Verbesserungsrichtung?",
    options: [
      "Plan (Planung)",
      "Engage (Engagement)",
      "Improve (Verbesserung)",
      "Obtain/Build (Erhalten/Erstellen)"
    ],
    correctAnswerIndex: 0,
    explanation: "Planung beschäftigt sich mit dem Verständnis des aktuellen Status und der zukünftigen Richtung."
  },
  {
    text: "Welche SVC-Aktivität stellt sicher, dass Stakeholder-Bedürfnisse verstanden werden und Transparenz herrscht?",
    options: [
      "Plan",
      "Engage",
      "Design & Transition",
      "Deliver & Support"
    ],
    correctAnswerIndex: 1,
    explanation: "'Engage' ist die Schnittstelle zu externen Stakeholdern, um deren Bedarf zu verstehen."
  },
  {
    text: "Welche SVC-Aktivität stellt sicher, dass Services die vereinbarten Spezifikationen für Qualität, Kosten und Zeit erfüllen?",
    options: [
      "Design & Transition",
      "Obtain/Build",
      "Deliver & Support",
      "Improve"
    ],
    correctAnswerIndex: 0,
    explanation: "Design & Transition sorgt dafür, dass Produkte/Services so gestaltet werden, dass sie die Erwartungen erfüllen."
  },
  {
    text: "Welche SVC-Aktivität beschafft Komponenten oder entwickelt sie?",
    options: [
      "Plan",
      "Obtain/Build",
      "Design & Transition",
      "Engage"
    ],
    correctAnswerIndex: 1,
    explanation: "Obtain/Build stellt sicher, dass Servicekomponenten verfügbar sind (gekauft oder gebaut)."
  },
  {
    text: "Welche SVC-Aktivität stellt sicher, dass Services gemäß den vereinbarten Spezifikationen verfügbar sind und unterstützt werden?",
    options: [
      "Plan",
      "Improve",
      "Deliver and Support",
      "Engage"
    ],
    correctAnswerIndex: 2,
    explanation: "Deliver & Support ist das operative Geschäft: Den Service laufen lassen und User unterstützen."
  },
  {
    text: "Was ist ein 'Service Value Stream'?",
    options: [
      "Eine spezifische Reise durch die SVC-Aktivitäten, um ein bestimmtes Szenario zu erfüllen.",
      "Eine Liste von Software-Tools.",
      "Ein Report über Finanzen.",
      "Eine Art von Meeting."
    ],
    correctAnswerIndex: 0,
    explanation: "Ein Value Stream verknüpft die SVC-Aktivitäten in einer bestimmten Reihenfolge (z.B. Incident Handling Stream vs. New Service Stream)."
  },

  // --- TEIL 5: MANAGEMENT PRACTICES (Fokus: Die wichtigsten 7 & 8 weitere) ---
  
  // INCIDENT MANAGEMENT
  {
    text: "Welche Practice hat den Zweck, unerwartete Unterbrechungen eines Services zu minimieren?",
    options: [
      "Problem Management",
      "Incident Management",
      "Change Enablement",
      "Service Request Management"
    ],
    correctAnswerIndex: 1,
    explanation: "Incident Management zielt darauf ab, den normalen Servicebetrieb so schnell wie möglich wiederherzustellen."
  },
  {
    text: "Wie sollte eine Organisation mit einem 'Major Incident' umgehen?",
    options: [
      "Er sollte von einem einzelnen Techniker gelöst werden.",
      "Er erfordert ein separates Verfahren mit kürzeren Zeitrahmen und höherer Priorität (z.B. Swarming).",
      "Er wird wie jeder andere Incident behandelt.",
      "Er wird ignoriert, bis er von selbst verschwindet."
    ],
    correctAnswerIndex: 1,
    explanation: "Major Incidents haben massive Auswirkungen auf das Geschäft und benötigen spezielle Prozeduren und oft ein dediziertes Team."
  },
  {
    text: "Was ist 'Swarming' im Incident Management?",
    options: [
      "Viele Incidents auf einmal öffnen.",
      "Ein Ansatz, bei dem viele Experten zusammenarbeiten, bis die Ursache klar ist, statt das Ticket weiterzureichen.",
      "Ein Computervirus.",
      "Ein Meeting zur Budgetplanung."
    ],
    correctAnswerIndex: 1,
    explanation: "Swarming reduziert Wartezeiten und Ticket-Ping-Pong."
  },

  // PROBLEM MANAGEMENT
  {
    text: "Was ist ein 'Problem' in ITIL?",
    options: [
      "Eine ungeplante Unterbrechung eines Services.",
      "Die unbekannte Ursache eines oder mehrerer Incidents.",
      "Eine Anfrage eines Users nach Information.",
      "Eine Änderung an der Infrastruktur."
    ],
    correctAnswerIndex: 1,
    explanation: "Ein Incident ist die Störung selbst, ein Problem ist die zugrundeliegende (oft noch unbekannte) Ursache."
  },
  {
    text: "Welche sind die drei Phasen des Problem Managements?",
    options: [
      "Incident, Problem, Change",
      "Problem Identification, Problem Control, Error Control",
      "Plan, Do, Check",
      "Start, Middle, End"
    ],
    correctAnswerIndex: 1,
    explanation: "Erst identifiziert man das Problem, dann analysiert man es (Control), dann managt man den bekannten Fehler (Error Control)."
  },
  {
    text: "Was ist ein 'Known Error' (Bekannter Fehler)?",
    options: [
      "Ein Fehler, der gerade erst aufgetreten ist.",
      "Ein Problem, das analysiert wurde und für das keine Lösung existiert.",
      "Ein Problem, das analysiert wurde und für das ein Workaround oder eine Lösung existiert.",
      "Ein Fehler im Code, den niemand finden kann."
    ],
    correctAnswerIndex: 2,
    explanation: "Sobald die Ursache und ein Workaround bekannt sind, wird das Problem zum Known Error."
  },
  {
    text: "Welche Practice beinhaltet Workarounds?",
    options: [
      "Service Level Management",
      "Problem Management",
      "Continual Improvement",
      "Relationship Management"
    ],
    correctAnswerIndex: 1,
    explanation: "Problem Management identifiziert und dokumentiert Workarounds für Incidents, für die es noch keine dauerhafte Lösung gibt."
  },

  // CHANGE ENABLEMENT
  {
    text: "Was ist der Zweck von 'Change Enablement'?",
    options: [
      "Verhindern, dass Änderungen vorgenommen werden.",
      "Die Anzahl erfolgreicher Service- und Produktänderungen zu maximieren.",
      "Incidents zu dokumentieren.",
      "Mitarbeiter zu schulen."
    ],
    correctAnswerIndex: 1,
    explanation: "Es geht darum, Risiken zu managen und gleichzeitig notwendige Änderungen (Changes) schnell und sicher durchzuführen."
  },
  {
    text: "Was ist ein 'Standard Change'?",
    options: [
      "Ein Notfall-Change.",
      "Ein Change mit hohem Risiko.",
      "Ein vorautorisierter Change mit geringem Risiko und bekanntem Verfahren.",
      "Ein Change, der noch nie gemacht wurde."
    ],
    correctAnswerIndex: 2,
    explanation: "Standard Changes (z.B. Passwort-Reset, PC-Tausch) müssen nicht jedes Mal neu genehmigt werden."
  },
  {
    text: "Was ist ein 'Emergency Change' (Notfalländerung)?",
    options: [
      "Ein Change, der sofort implementiert werden muss (z.B. Security Patch).",
      "Ein Change, der im nächsten Jahr geplant ist.",
      "Ein Change an der Kaffeemaschine.",
      "Ein Standard Change."
    ],
    correctAnswerIndex: 0,
    explanation: "Notfalländerungen haben hohe Dringlichkeit, aber man darf die Dokumentation nicht komplett weglassen (nur ggf. nachreichen)."
  },
  {
    text: "Wer ist die 'Change Authority'?",
    options: [
      "Immer der CEO.",
      "Die Person oder Gruppe, die eine Änderung autorisiert (abhängig von der Art des Changes).",
      "Der Service Desk.",
      "Der Kunde."
    ],
    correctAnswerIndex: 1,
    explanation: "Die Change Authority variiert: Bei Standard Changes ist es niemand (vorautorisiert), bei Normal Changes ein Manager/CAB, bei Emergency Changes das ECAB."
  },

  // SERVICE DESK
  {
    text: "Was ist der Hauptzweck des Service Desk?",
    options: [
      "Softwarefehler zu beheben.",
      "Den zentralen Ansprechpartner (Single Point of Contact) für User bereitzustellen.",
      "Die Serverinfrastruktur zu warten.",
      "Strategische Entscheidungen zu treffen."
    ],
    correctAnswerIndex: 1,
    explanation: "Der Service Desk ist die Schnittstelle zwischen dem Service Provider und den Nutzern für Incidents und Service Requests."
  },
  {
    text: "Welche Fähigkeiten sind für Service Desk Mitarbeiter am wichtigsten?",
    options: [
      "Nur tiefes technisches Wissen.",
      "Empathie, emotionale Intelligenz und effektive Kommunikation.",
      "Programmierkenntnisse.",
      "Buchhaltung."
    ],
    correctAnswerIndex: 1,
    explanation: "Moderne Service Desks legen mehr Wert auf 'Soft Skills' und Verständnis für das Business als auf reine Technik."
  },
  {
    text: "Über welche Kanäle kann ein Service Desk erreichbar sein?",
    options: [
      "Nur Telefon.",
      "Nur E-Mail.",
      "Omni-Channel (Telefon, Chat, Portal, Walk-in, E-Mail).",
      "Nur Fax."
    ],
    correctAnswerIndex: 2,
    explanation: "Ein guter Service Desk bietet Support über die Kanäle an, die für die Nutzer am bequemsten sind."
  },

  // SERVICE REQUEST MANAGEMENT
  {
    text: "Was ist ein 'Service Request'?",
    options: [
      "Eine Meldung, dass etwas kaputt ist.",
      "Eine formale Anfrage eines Users nach etwas, das bereitgestellt werden soll (z.B. Info, Zugriff).",
      "Ein großer Umbau des Rechenzentrums.",
      "Eine Beschwerde."
    ],
    correctAnswerIndex: 1,
    explanation: "Service Requests sind Anfragen für vordefinierte Leistungen, die keine Störung (Incident) darstellen (z.B. 'Ich brauche einen neuen Monitor')."
  },
  {
    text: "Service Requests sollten so weit wie möglich...",
    options: [
      "...abgelehnt werden.",
      "...automatisiert und standardisiert werden.",
      "...manuell bearbeitet werden.",
      "...ignoriert werden."
    ],
    correctAnswerIndex: 1,
    explanation: "Da Service Requests oft wiederkehrend sind, bieten sie das größte Potenzial für Automatisierung (Self-Service)."
  },

  // SERVICE LEVEL MANAGEMENT
  {
    text: "Welche Practice stellt sicher, dass alle Services vereinbarte Qualitätsziele erfüllen?",
    options: [
      "Service Level Management",
      "Supplier Management",
      "Change Enablement",
      "Information Security Management"
    ],
    correctAnswerIndex: 0,
    explanation: "SLM definiert, dokumentiert und überwacht Service Level Agreements (SLAs)."
  },
  {
    text: "Was ist ein SLA?",
    options: [
      "Service Legal Action",
      "Service Level Agreement",
      "System Level Access",
      "Supplier Level Assurance"
    ],
    correctAnswerIndex: 1,
    explanation: "Eine dokumentierte Vereinbarung zwischen Provider und Kunde, die die erwarteten Services und deren Level definiert."
  },
  {
    text: "Was ist der 'Watermelon Effect' im SLM?",
    options: [
      "Wenn die SLAs grün sind (erfüllt), aber der Kunde rot (unzufrieden) ist.",
      "Wenn SLAs rot sind, aber der Kunde glücklich ist.",
      "Wenn man zu viel Obst im Büro hat.",
      "Wenn ein Server überhitzt."
    ],
    correctAnswerIndex: 0,
    explanation: "Dies passiert, wenn SLAs nur technische Metriken messen, aber nicht die echte Kundenerfahrung widerspiegeln."
  },
  {
    text: "Welche Art von Metriken sind für SLM am wichtigsten?",
    options: [
      "Reine System-Metriken (z.B. CPU-Last).",
      "Business-bezogene Metriken, die die Kundenerfahrung widerspiegeln.",
      "Anzahl der geschriebenen Codezeilen.",
      "Anzahl der Mitarbeiter."
    ],
    correctAnswerIndex: 1,
    explanation: "SLAs sollten aus der Perspektive des Kunden geschrieben sein (Business-Outcome), nicht nur technisch."
  },

  // CONTINUAL IMPROVEMENT
  {
    text: "Welche Practice hat das Ziel, Services und Praktiken laufend an die sich ändernden Geschäftsanforderungen anzupassen?",
    options: [
      "Continual Improvement",
      "Strategy Management",
      "Service Level Management",
      "Relationship Management"
    ],
    correctAnswerIndex: 0,
    explanation: "Continual Improvement ist darauf ausgerichtet, Produkte, Services und Praktiken ständig zu verbessern."
  },
  {
    text: "Was ist ein 'CIR' (Continual Improvement Register)?",
    options: [
      "Eine Liste aller Incidents.",
      "Eine Datenbank aller Verbesserungsideen und deren Status.",
      "Ein Protokoll aller Serverausfälle.",
      "Eine Liste aller Mitarbeiter."
    ],
    correctAnswerIndex: 1,
    explanation: "Das CIR wird genutzt, um alle Verbesserungsinitiativen zu erfassen, zu priorisieren und zu verfolgen."
  },
  {
    text: "Was ist der erste Schritt im Continual Improvement Model?",
    options: [
      "Where are we now? (Wo stehen wir jetzt?)",
      "What is the vision? (Was ist die Vision?)",
      "Take action (Handeln)",
      "Did we get there? (Haben wir es erreicht?)"
    ],
    correctAnswerIndex: 1,
    explanation: "Zuerst muss klar sein, wohin die Reise gehen soll (Vision/Ziel), bevor man den aktuellen Status analysiert."
  },

  // WEITERE PRACTICES
  {
    text: "Welche Practice ist für die Verwaltung des gesamten Lebenszyklus aller IT-Assets verantwortlich?",
    options: [
      "Service Configuration Management",
      "IT Asset Management",
      "Deployment Management",
      "Release Management"
    ],
    correctAnswerIndex: 1,
    explanation: "IT Asset Management plant und verwaltet IT-Assets (Werte), um Kosten zu kontrollieren und Compliance sicherzustellen."
  },
  {
    text: "Was ist der Unterschied zwischen IT Asset Management und Service Configuration Management?",
    options: [
      "Es gibt keinen.",
      "ITAM fokussiert auf Wert/Kosten/Eigentum von Assets; Configuration Mgmt fokussiert auf Beziehungen zwischen CIs.",
      "ITAM ist für Hardware, Configuration für Software.",
      "Configuration Mgmt ist wichtiger."
    ],
    correctAnswerIndex: 1,
    explanation: "ITAM = Finanzielle/Vertragliche Sicht. Config Mgmt = Technische/Logische Sicht (Topologie)."
  },
  {
    text: "Was ist ein Configuration Item (CI)?",
    options: [
      "Ein Fehler im System.",
      "Jede Komponente, die gemanagt werden muss, um einen Service bereitzustellen.",
      "Ein Mitarbeiter.",
      "Ein SLA."
    ],
    correctAnswerIndex: 1,
    explanation: "CIs können Hardware, Software, Netzwerke, Dokumente oder sogar Personen sein, sofern sie für den Service relevant sind."
  },
  {
    text: "Was ist der Unterschied zwischen Deployment und Release?",
    options: [
      "Es gibt keinen Unterschied.",
      "Deployment bewegt Hardware/Software in die Live-Umgebung; Release macht sie für User verfügbar.",
      "Release ist für Hardware, Deployment für Software.",
      "Deployment ist Planung, Release ist Ausführung."
    ],
    correctAnswerIndex: 1,
    explanation: "Deployment Management ist die technische Installation. Release Management macht die neuen Features für den Nutzer nutzbar (Service Action)."
  },
  {
    text: "Welche Practice beobachtet Services und zeichnet Events (Statusänderungen) auf?",
    options: [
      "Monitoring and Event Management",
      "Incident Management",
      "Problem Management",
      "Change Enablement"
    ],
    correctAnswerIndex: 0,
    explanation: "Diese Practice hilft, Probleme zu erkennen, bevor User sie melden."
  },
  {
    text: "Welche Practice pflegt die Verbindungen zwischen der Organisation und ihren Stakeholdern?",
    options: [
      "Supplier Management",
      "Relationship Management",
      "Service Desk",
      "Change Enablement"
    ],
    correctAnswerIndex: 1,
    explanation: "Relationship Management pflegt die Beziehungen auf strategischer und taktischer Ebene (nicht nur mit Lieferanten, auch mit Kunden)."
  },
  {
    text: "Welche Practice managt die Verträge und Leistung von externen Dienstleistern?",
    options: [
      "Supplier Management",
      "Relationship Management",
      "Service Level Management",
      "Deployment Management"
    ],
    correctAnswerIndex: 0,
    explanation: "Supplier Management sorgt dafür, dass wir 'Value for Money' von Lieferanten bekommen."
  },
  {
    text: "Was ist das Ziel von 'Information Security Management'?",
    options: [
      "Alle Daten zu löschen.",
      "Die Vertraulichkeit, Integrität und Verfügbarkeit von Informationen zu schützen.",
      "Firewalls zu verkaufen.",
      "Den Service Desk zu ersetzen."
    ],
    correctAnswerIndex: 1,
    explanation: "CIA-Triade: Confidentiality, Integrity, Availability."
  },

  // --- SZENARIO & TIEFERGEHENDE FRAGEN (ZUM ÜBEN DES VERSTÄNDNISSES) ---
  {
    text: "Ein User ruft an, weil sein Drucker nicht geht. Was ist das?",
    options: [
      "Ein Problem",
      "Ein Incident",
      "Ein Change",
      "Ein Event"
    ],
    correctAnswerIndex: 1,
    explanation: "Es ist eine ungeplante Unterbrechung -> Incident."
  },
  {
    text: "Der Drucker geht jede Woche kaputt. Die IT untersucht nun die Ursache. Was ist das?",
    options: [
      "Incident Management",
      "Problem Management",
      "Change Enablement",
      "Service Request Management"
    ],
    correctAnswerIndex: 1,
    explanation: "Die Suche nach der Ursache wiederkehrender Incidents ist Problem Management."
  },
  {
    text: "Ein User möchte eine Lizenz für Adobe Acrobat installiert haben. Was ist das?",
    options: [
      "Ein Incident",
      "Ein Service Request",
      "Ein Problem",
      "Ein Emergency Change"
    ],
    correctAnswerIndex: 1,
    explanation: "Keine Störung, sondern eine Anfrage nach einer Standardleistung -> Service Request."
  },
  {
    text: "Ein Server muss gepatcht werden, um eine Sicherheitslücke zu schließen. Was ist das?",
    options: [
      "Ein Incident",
      "Ein Change",
      "Ein Service Request",
      "Ein Problem"
    ],
    correctAnswerIndex: 1,
    explanation: "Es ist eine Änderung an einem CI -> Change. (Vermutlich ein Emergency Change, wenn dringend)."
  },
  {
    text: "Welche Aktivität in der SVC würde 'Code schreiben' beinhalten?",
    options: [
      "Plan",
      "Obtain/Build",
      "Deliver & Support",
      "Engage"
    ],
    correctAnswerIndex: 1,
    explanation: "Das Erstellen (Build) von Software passiert in 'Obtain/Build'."
  },
  {
    text: "Welche Aktivität in der SVC würde 'Server konfigurieren und installieren' beinhalten?",
    options: [
      "Obtain/Build",
      "Design & Transition",
      "Deliver & Support",
      "Improve"
    ],
    correctAnswerIndex: 1,
    explanation: "Transition-Aktivitäten (Überführung in Live) fallen oft unter Design & Transition (oder Obtain/Build, je nach Granularität, aber Transition ist der Fokus auf die Änderung)."
  },
  {
    text: "Welches Prinzip würde empfehlen, Metriken nicht nur zu sammeln, sondern auch zu nutzen?",
    options: [
      "Focus on value",
      "Start where you are",
      "Keep it simple and practical",
      "Progress iteratively"
    ],
    correctAnswerIndex: 1,
    explanation: "'Start where you are' beinhaltet das Messen. 'Keep it simple' sagt: Sammle keine Daten, die du nicht nutzt."
  },
  {
    text: "Automatisierung ist gut, aber was sollte man vorher tun?",
    options: [
      "Software kaufen.",
      "Den Prozess optimieren (Optimize and automate).",
      "Mitarbeiter entlassen.",
      "Nichts tun."
    ],
    correctAnswerIndex: 1,
    explanation: "Ein ineffizienter Prozess bleibt ineffizient, auch wenn er automatisiert ist."
  },
  {
    text: "Welche Rolle spielt 'Kultur' im Service Management?",
    options: [
      "Keine, es geht nur um Technik.",
      "Sie ist Teil der Dimension 'Organisationen und Menschen' und entscheidend für Erfolg.",
      "Sie ist nur für HR wichtig.",
      "Sie ist ein Risiko."
    ],
    correctAnswerIndex: 1,
    explanation: "Shared Values, Vertrauen und Führungskultur sind essenziell für Zusammenarbeit (SVS)."
  },
  {
    text: "Was bedeutet 'Service Relationship Management'?",
    options: [
      "Verwalten von Servern.",
      "Gemeinsame Aktivitäten von Provider und Consumer zur Wertschöpfung.",
      "Verwalten von Lieferanten.",
      "Verkauf von Produkten."
    ],
    correctAnswerIndex: 1,
    explanation: "Es beschreibt die Zusammenarbeit zwischen Dienstleister und Kunde (Service Provision + Service Consumption + Service Relationship Management)."
  },
  {
    text: "Ein 'Phased Release' (gestufte Einführung) ist ein Beispiel für welches Prinzip?",
    options: [
      "Progress iteratively with feedback",
      "Focus on value",
      "Think and work holistically",
      "Optimize and automate"
    ],
    correctAnswerIndex: 0,
    explanation: "Statt 'Big Bang' wird schrittweise ausgerollt, um Feedback zu sammeln."
  },
  {
    text: "Was ist ein 'Event'?",
    options: [
      "Eine Party.",
      "Jede Zustandsänderung, die für das Management eines CIs oder Services von Bedeutung ist.",
      "Ein Fehler.",
      "Ein Meeting."
    ],
    correctAnswerIndex: 1,
    explanation: "Events können rein informativ sein, Warnungen darstellen oder Ausnahmen (Fehler) sein."
  },
  {
    text: "Wer profitiert hauptsächlich vom Service Level Management?",
    options: [
      "Nur der Provider.",
      "Der Kunde und der Provider (durch klare Erwartungen).",
      "Die Regierung.",
      "Niemand."
    ],
    correctAnswerIndex: 1,
    explanation: "SLM schafft Transparenz über das, was geliefert werden soll."
  },
  {
    text: "Welche Practice hilft, wenn man wissen will, welche Softwareversion auf welchem Server läuft?",
    options: [
      "Incident Management",
      "Service Configuration Management",
      "Service Level Management",
      "Relationship Management"
    ],
    correctAnswerIndex: 1,
    explanation: "Dies ist eine klassische CMDB-Information (Configuration Management Database)."
  },
  {
    text: "Was ist das ultimative Ziel von ITIL 4?",
    options: [
      "Prozesse zu dokumentieren.",
      "Co-Creation of Value (Gemeinsame Wertschöpfung).",
      "Zertifizierungen zu verkaufen.",
      "Kosten zu erhöhen."
    ],
    correctAnswerIndex: 1,
    explanation: "Alles in ITIL dient dazu, Wert für die Stakeholder zu schaffen."
  },
  {
    text: "Welche Aussage über 'Probleme' und 'Incidents' ist korrekt?",
    options: [
      "Sie sind dasselbe.",
      "Probleme verursachen Incidents, und Incidents können auf Probleme hinweisen.",
      "Man muss erst alle Incidents lösen, bevor man Probleme suchen darf.",
      "Incidents sind strategisch, Probleme sind taktisch."
    ],
    correctAnswerIndex: 1,
    explanation: "Die Beziehung ist kausal: Das Problem ist die Ursache, der Incident die Wirkung."
  },
  {
    text: "Was sollte man tun, wenn ein Workaround für ein Problem gefunden wurde?",
    options: [
      "Ihn geheim halten.",
      "Ihn im Incident Management System verfügbar machen.",
      "Ihn löschen.",
      "Das Problem schließen."
    ],
    correctAnswerIndex: 1,
    explanation: "Workarounds helfen dem Service Desk, Incidents schneller zu lösen, während die dauerhafte Lösung gesucht wird."
  },
  {
    text: "Welche Practice sorgt dafür, dass Änderungen rückgängig gemacht werden können (Remediation Planning)?",
    options: [
      "Change Enablement",
      "Problem Management",
      "Service Request Management",
      "Incident Management"
    ],
    correctAnswerIndex: 0,
    explanation: "Jeder Change sollte einen Rückfallplan (Back-out plan) haben, falls er fehlschlägt."
  },
  {
    text: "Was beschreibt 'Service Actions'?",
    options: [
      "Verträge.",
      "Aktionen, die vom Service Provider durchgeführt werden, um Servicekonsumenten zu unterstützen.",
      "Hardwarekomponenten.",
      "Beschwerden."
    ],
    correctAnswerIndex: 1,
    explanation: "Beispiele: Support-Mitarbeiter hilft User, Server verarbeitet Daten."
  },
  {
    text: "Wie oft sollten die 7 Grundprinzipien überprüft werden?",
    options: [
      "Einmalig beim Start.",
      "Jedes Mal, wenn eine Entscheidung getroffen oder eine Änderung geplant wird.",
      "Nur bei Audits.",
      "Nie."
    ],
    correctAnswerIndex: 1,
    explanation: "Sie sind ein ständiger Leitfaden für Entscheidungen."
  },
  {
    text: "Was ist 'Governance' im SVS?",
    options: [
      "Management von Servern.",
      "Das System, durch das eine Organisation geleitet und kontrolliert wird.",
      "Eine Software.",
      "Ein Team von Technikern."
    ],
    correctAnswerIndex: 1,
    explanation: "Governance stellt sicher, dass Aktivitäten den Zielen der Organisation entsprechen (Evaluate, Direct, Monitor)."
  },
  {
    text: "Was ist der Unterschied zwischen 'Customer' und 'User'?",
    options: [
      "User zahlt, Customer nutzt.",
      "Customer definiert Anforderungen und zahlt oft; User nutzt den Service im Alltag.",
      "Es gibt keinen Unterschied.",
      "User ist extern, Customer ist intern."
    ],
    correctAnswerIndex: 1,
    explanation: "Customer = Anforderer/Verantwortlicher. User = Endanwender."
  },
  {
    text: "Welches ist KEINE Aktivität der Service Value Chain?",
    options: [
      "Plan",
      "Improve",
      "Design & Transition",
      "Authorize"
    ],
    correctAnswerIndex: 3,
    explanation: "'Authorize' ist keine SVC-Aktivität (gehört eher zu Change Enablement oder Governance). Die 6 sind: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support."
  },
  {
    text: "Was bedeutet 'Co-Creation of Value'?",
    options: [
      "Der Provider liefert Wert an den Kunden.",
      "Der Kunde erschafft Wert allein.",
      "Provider und Consumer arbeiten zusammen, um Wert zu schaffen.",
      "Wert wird durch Zufall erzeugt."
    ],
    correctAnswerIndex: 2,
    explanation: "Der alte 'Monolog' (Provider liefert an passiven Kunden) ist vorbei. ITIL 4 betont die aktive Zusammenarbeit."
  },
  {
    text: "Warum ist 'Service Desk' eine Practice und keine Funktion mehr (in ITIL 4)?",
    options: [
      "Weil Funktionen abgeschafft wurden.",
      "Um zu betonen, dass es um Fähigkeiten und Prozesse geht, nicht nur um ein Team/Abteilung.",
      "Es ist ein Tippfehler.",
      "Funktionen sind besser."
    ],
    correctAnswerIndex: 1,
    explanation: "ITIL 4 nutzt 'Practices' (Ressourcen + Prozesse), um organisatorische Silos (Funktionen) aufzuweichen."
  },
  {
    text: "Welches Prinzip warnt davor, Metriken zum Selbstzweck zu machen?",
    options: [
      "Focus on value",
      "Start where you are",
      "Think and work holistically",
      "Progress iteratively"
    ],
    correctAnswerIndex: 0,
    explanation: "Jede Metrik muss einem Zweck dienen, der Wert schafft. Wenn eine Metrik keinen Wertbeitrag leistet, weg damit."
  },
  {
    text: "Was ist eine 'Opportunity' im SVS?",
    options: [
      "Ein Risiko.",
      "Eine Option oder Möglichkeit, Wert für Stakeholder zu schaffen oder Services zu verbessern.",
      "Ein Fehler im System.",
      "Eine Rechnung."
    ],
    correctAnswerIndex: 1,
    explanation: "Opportunity (Chance) und Demand (Nachfrage) sind die Auslöser für das Service Value System."
  },
  {
    text: "Welche Practice würde 'User Satisfaction Surveys' (Umfragen) durchführen?",
    options: [
      "Service Level Management",
      "Relationship Management",
      "Beide (SLM und RM)",
      "Incident Management"
    ],
    correctAnswerIndex: 2,
    explanation: "Sowohl SLM (Servicequalität) als auch RM (Beziehungspflege) nutzen Umfragen, um Feedback zu erhalten."
  },
  {
    text: "Wann sollte man einen 'Emergency Change' nutzen?",
    options: [
      "Wenn man vergessen hat, einen normalen Change zu planen.",
      "Nur wenn ein dringender Business-Bedarf besteht (z.B. kritischer Fix).",
      "Immer, weil es schneller geht.",
      "Niemals."
    ],
    correctAnswerIndex: 1,
    explanation: "Emergency Changes haben höhere Risiken und Kosten und sollten nicht für schlechte Planung missbraucht werden."
  }
];
