// Data for the application
const appData = {
    company: { name: "Centre de Date", tagline: "Inima digitală a tehnologiei moderne." },
    heroSlogans: ["Construim fundația fizică.", "Virtualizăm resursele.", "Conectăm totul prin rețea.", "Scalăm în Cloud.", "Automatizăm prin DevOps.", "Livrăm Aplicații.", "Gestionăm Datele."],
    sectors: [
        { id: 'physical', icon: '🔩', name: 'Infrastructură Fizică', mission: 'Asigurăm fundația solidă, sigură și constant alimentată pe care rulează întregul ecosistem digital.', responsibilities: ['Managementul alimentării cu energie (UPS, generatoare)', 'Sisteme de răcire (HVAC)', 'Securitate fizică (acces, camere)', 'Cablare structurată și instalarea rack-urilor'], technologies: ['APC/Schneider Electric', 'Vertiv', 'Cisco UCS', 'Dell PowerEdge', 'HVAC Systems'], analogy: "Dacă centrul de date este o clădire, noi suntem fundația, pereții, rețeaua electrică și paza. Nimic nu funcționează fără noi." },
        { id: 'virt', icon: '🖥️', name: 'Virtualizare', mission: 'Multiplicăm eficient resursele hardware pentru a rula zeci de servere pe o singură mașină fizică.', responsibilities: ['Managementul hypervisor-elor', 'Crearea și administrarea mașinilor virtuale (VM-uri)', 'Migrarea live a VM-urilor (vMotion)', 'Alocarea dinamică a resurselor (CPU, RAM)'], technologies: ['VMware vSphere', 'Proxmox', 'Microsoft Hyper-V', 'KVM', 'Citrix XenServer'], analogy: 'Noi luăm o clădire open-space și o compartimentăm cu pereți mobili, creând birouri de orice dimensiune, exact când este nevoie.' },
        { id: 'network', icon: '🌐', name: 'Rețea', mission: 'Conectăm toate componentele interne și asigurăm o legătură rapidă și sigură cu lumea exterioară.', responsibilities: ['Configurarea switch-urilor și router-elor', 'Managementul firewall-urilor și al securității', 'Implementarea protocoalelor de routing (BGP, OSPF)', 'Monitorizarea traficului și a latenței'], technologies: ['Cisco', 'Arista', 'Juniper', 'Fortinet', 'Palo Alto', 'BGP', 'OSPF'], analogy: 'Noi suntem sistemul nervos. Asigurăm că toate departamentele pot comunica între ele și cu exteriorul, instantaneu și în siguranță.' },
        { id: 'cloud', icon: '☁️', name: 'Cloud', mission: 'Oferim flexibilitate și scalabilitate la cerere, permițând aplicațiilor să crească sau să se micșoreze instantaneu.', responsibilities: ['Managementul resurselor în cloud public (AWS, Azure, GCP)', 'Construirea de cloud-uri private (OpenStack)', 'Orchestrarea containerelor (Kubernetes)', 'Oferirea de servicii PaaS și IaaS'], technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'OpenStack'], analogy: 'Noi oferim un serviciu de închiriere de birouri ultra-flexibil. Ai nevoie de 100 de birouri pentru o oră? Le primești instant. Nu le mai folosești? Dispar, și nu mai plătești.' },
        { id: 'devops', icon: '⚙️', name: 'DevOps', mission: 'Automatizăm puntea dintre dezvoltare și operațiuni pentru a livra software mai rapid și mai fiabil.', responsibilities: ['Crearea de pipeline-uri CI/CD (Integrare Continuă/Livrare Continuă)', 'Managementul infrastructurii ca și cod (IaC)', 'Monitorizare și logging centralizat', 'Automatizarea proceselor de deployment'], technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'], analogy: 'Noi suntem linia de asamblare robotizată a fabricii. Luăm piesele de la ingineri (developeri) și asamblăm produsul final (aplicația) automat, rapid și fără erori umane.' },
        { id: 'apps', icon: '📱', name: 'Aplicații', mission: 'Dezvoltăm și menținem software-ul care rulează în centrul de date și aduce valoare utilizatorilor finali.', responsibilities: ['Scrierea codului sursă (backend și frontend)', 'Testarea și depanarea aplicațiilor', 'Optimizarea performanței codului', 'Colaborarea cu echipele de DevOps și Baze de Date'], technologies: ['Java', 'Python', 'Node.js', 'Go', 'React', 'Angular', 'Vue.js'], analogy: 'Noi suntem arhitecții și designerii care proiectează produsele și serviciile oferite în clădire. Noi creăm valoarea vizibilă pentru client.' },
        { id: 'db', icon: '🗄️', name: 'Baze de Date', mission: 'Gestionăm, securizăm și optimizăm "memoria" centrului de date, asigurând integritatea și accesul rapid la informații.', responsibilities: ['Instalarea și configurarea sistemelor de baze de date', 'Backup și recuperare în caz de dezastru', 'Optimizarea interogărilor (query tuning)', 'Asigurarea securității și integrității datelor'], technologies: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'Elasticsearch'], analogy: 'Noi suntem arhiva centrală și biblioteca. Organizăm toată informația, ne asigurăm că este în siguranță, corectă și că poate fi găsită rapid de oricine are nevoie de ea.' }
    ],
    synthesisFlows: { physical: "Infrastructura Fizică este fundația. Oferă energie, răcire și spațiu pentru serverele pe care rulează Virtualizarea.", virt: "Virtualizarea folosește serverele fizice pentru a crea mașini virtuale (VM-uri), care sunt apoi folosite de Cloud și conectate prin Rețea.", network: "Rețeaua conectează totul: mașinile virtuale între ele, aplicațiile de baze de date și întregul centru de date la internet.", cloud: "Platforma Cloud folosește resurse de la Virtualizare și Rețea pentru a oferi un mediu scalabil, orchestrat de echipa DevOps pentru a rula Aplicații.", devops: "Echipa DevOps automatizează fluxul de la Aplicații la Cloud, folosind sisteme de versionare și scripturi pentru a proviziona infrastructură și a rula teste.", apps: "Aplicațiile sunt scopul final. Ele rulează în Cloud, sunt conectate prin Rețea, implementate de DevOps și stochează informații în Baze de Date.", db: "Bazele de Date sunt creierul memoriei. Aplicațiile scriu și citesc date constant, iar DevOps asigură mentenanța și backup-ul lor automatizat." },
    synthesisConnections: { physical: ['virt'], virt: ['physical', 'network', 'cloud'], network: ['virt', 'apps'], cloud: ['virt', 'devops'], devops: ['cloud', 'apps', 'db'], apps: ['network', 'devops', 'db'], db: ['apps', 'devops'] },
    careers: { physical: ['Data Center Technician', 'Facilities Engineer', 'Electrical Engineer'], virt: ['Virtualization Engineer', 'Systems Administrator', 'Cloud Administrator'], network: ['Network Engineer', 'Network Architect', 'Security Engineer'], cloud: ['Cloud Engineer', 'Cloud Architect', 'Kubernetes Administrator'], devops: ['DevOps Engineer', 'Site Reliability Engineer (SRE)', 'Platform Engineer'], apps: ['Backend Developer', 'Frontend Developer', 'Software Architect'], db: ['Database Administrator (DBA)', 'Data Engineer', 'Database Architect'] },
    quiz: [
        { q: "Ce sector este responsabil pentru răcirea și alimentarea cu energie a serverelor?", a: "Infrastructură Fizică", o: ["Virtualizare", "Cloud", "Rețea"] }, { q: "Ce tehnologie permite rularea mai multor sisteme de operare pe un singur server fizic?", a: "Virtualizare", o: ["DevOps", "Baze de Date", "Aplicații"] }, { q: "Protocolul BGP este esențial pentru funcționarea cărui sector?", a: "Rețea", o: ["Baze de Date", "Infrastructură Fizică", "Aplicații"] }, { q: "Kubernetes este o tehnologie cheie pentru orchestrarea containerelor în sectorul...?", a: "Cloud", o: ["Rețea", "Virtualizare", "Baze de Date"] }, { q: "Automatizarea pipeline-urilor CI/CD este o responsabilitate principală pentru...?", a: "DevOps", o: ["Aplicații", "Rețea", "Infrastructură Fizică"] }, { q: "Scrierea codului sursă pentru serviciile oferite clienților este sarcina sectorului...?", a: "Aplicații", o: ["DevOps", "Cloud", "Virtualizare"] }, { q: "Optimizarea interogărilor SQL (query tuning) este o sarcină specifică pentru...?", a: "Baze de Date", o: ["Rețea", "Infrastructură Fizică", "Cloud"] }
    ]
};

// --- Initialization ---
function initializeApp() {
    populateContent();
    setupEventListeners();
}

// --- Content Population ---
function populateContent() {
    document.querySelector('.hero-title').textContent = appData.company.name;
    document.querySelector('.hero-tagline').textContent = appData.company.tagline;
    
    const accordionContainer = document.getElementById('sectors-accordion');
    accordionContainer.innerHTML = appData.sectors.map(s => `
        <div class="sector-item" data-sector-id="${s.id}">
            <div class="sector-header"><span class="sector-icon">${s.icon}</span><h3 class="sector-title">${s.name}</h3><span class="sector-toggle">+</span></div>
            <div class="sector-body"><p><strong>Misiune:</strong> ${s.mission}</p><h4>Responsabilități Cheie</h4><ul>${s.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul><h4>Tehnologii</h4><ul class="tech-tags">${s.technologies.map(t => `<li class="tech-tag">${t}</li>`).join('')}</ul><p class="analogy"><strong>Analogie:</strong> ${s.analogy}</p></div>
        </div>`).join('');

    const careersGrid = document.getElementById('career-grid');
    careersGrid.innerHTML = appData.sectors.map(s => `
        <div class="card career-card"><h3>${s.name}</h3><p>Roluri posibile:</p><ul>${appData.careers[s.id].map(role => `<li>${role}</li>`).join('')}</ul></div>`).join('');
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    setupNavigation();
    setupHeroTyping();
    setupProgressTracking();
    setupSectorsAccordion();
    setupSynthesisDiagram();
    setupQuiz();
    setupFormHandling();
}

function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenuContainer = document.querySelector('.nav-menu-container');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenuContainer.classList.toggle('active');
    });

    const closeMenu = () => {
        navToggle.classList.remove('active');
        navMenuContainer.classList.remove('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        });
    });

    document.querySelector('.btn').addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
}

function setupHeroTyping() {
    const el = document.getElementById('hero-slogan');
    if (!el) return;
    let textIndex = 0, charIndex = 0;
    const type = () => { charIndex < appData.heroSlogans[textIndex].length ? (el.textContent += appData.heroSlogans[textIndex].charAt(charIndex++), setTimeout(type, 70)) : setTimeout(erase, 2000) };
    const erase = () => { charIndex > 0 ? (el.textContent = appData.heroSlogans[textIndex].substring(0, --charIndex), setTimeout(erase, 40)) : (textIndex = (textIndex + 1) % appData.heroSlogans.length, setTimeout(type, 500)) };
    type();
}

function setupProgressTracking() {
    window.addEventListener('scroll', () => {
        const progressFill = document.getElementById('progress-fill');
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if(scrollable > 0) progressFill.style.width = `${(window.scrollY / scrollable) * 100}%`;
    });
}

function setupSectorsAccordion() {
    const accordion = document.getElementById('sectors-accordion');
    accordion.addEventListener('click', e => {
        const header = e.target.closest('.sector-header');
        if (!header) return;
        const item = header.parentElement;
        item.classList.toggle('active');
        accordion.querySelectorAll('.sector-item').forEach(i => { if (i !== item) i.classList.remove('active') });
    });
}

function setupSynthesisDiagram() {
    const diagram = document.getElementById('synthesis-diagram');
    const nodes = diagram.querySelectorAll('.diagram-node');
    const edges = diagram.querySelectorAll('.diagram-edge');
    const synthesisText = document.getElementById('synthesis-text');
    let activeNode = null;

    const updateDiagram = (nodeId) => {
        synthesisText.textContent = appData.synthesisFlows[nodeId];
        const connections = appData.synthesisConnections[nodeId];
        nodes.forEach(n => n.id === `node-${nodeId}` || connections.includes(n.id.replace('node-', '')) ? n.classList.remove('dimmed') : n.classList.add('dimmed'));
        edges.forEach(e => {
            const [_, from, to] = e.id.split('-');
            if ((from === nodeId && connections.includes(to)) || (to === nodeId && connections.includes(from))) e.classList.add('active'); else e.classList.remove('active');
        });
    };

    const resetDiagram = () => {
        synthesisText.textContent = "Atinge un nod pentru a vedea descrierea fluxului.";
        nodes.forEach(n => n.classList.remove('active', 'dimmed'));
        edges.forEach(e => e.classList.remove('active', 'dimmed'));
        activeNode = null;
    };
    
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const nodeId = node.id.replace('node-', '');
            if(activeNode === node) {
                resetDiagram();
            } else {
                nodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                activeNode = node;
                updateDiagram(nodeId);
            }
        });
    });
}

function setupQuiz() {
    let currentQ = 0;
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const nextBtn = document.getElementById('next-question');
    const prevBtn = document.getElementById('prev-question');

    function showQuestion() {
        const q = appData.quiz[currentQ];
        questionEl.textContent = q.q;
        const options = [q.a, ...q.o].sort(() => Math.random() - 0.5);
        optionsEl.innerHTML = options.map(opt => `<div class="option">${opt}</div>`).join('');
        prevBtn.style.visibility = currentQ === 0 ? 'hidden' : 'visible';
        nextBtn.textContent = currentQ === appData.quiz.length - 1 ? 'Finalizează' : 'Următorul';
    }

    optionsEl.addEventListener('click', e => {
        if (e.target.classList.contains('option')) {
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            e.target.classList.add('selected');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQ < appData.quiz.length - 1) {
            currentQ++; showQuestion();
        } else {
            document.getElementById('quiz-container').innerHTML = `<h3>Felicitări!</h3><p>Ai finalizat quiz-ul. Sperăm că această călătorie a fost utilă!</p>`;
        }
    });
    prevBtn.addEventListener('click', () => { if (currentQ > 0) { currentQ--; showQuestion() } });
    showQuestion();
}

function setupFormHandling() {
    const form = document.getElementById('application-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = 'Se trimite...';
        setTimeout(() => {
            btn.textContent = 'Aplicație Trimisă!';
            btn.style.backgroundColor = 'var(--color-accent-green)';
            form.reset();
        }, 1500);
    });
}

// Start the application when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
