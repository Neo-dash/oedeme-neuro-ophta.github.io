//window.disableTapAdvanceSlide = true;
//window.disableTapAdvanceAnimation = true;
//window.disableHyperlinkToSlide = true;
//window.overrideTransition = {ef:3853,t:2};
//window.disableSwipe = true;
//window.disableFullscreen = true
//window.exactFit = true
//window.loopUntilEsc = true
//window.disableTextSelection = true
//window.evalPostMessage = true //allow parent iframe to post any command to inner
//window.showNavigationGuide = true //show a message "click or swipe or use keyboard to navigate"

//window.enableThumbnailPanelIcon = true
//window.enableSpeakerNoteIcon = true

//window.thumbNaviPath = '../thumb1'
//window.thumbNaviName = 'Slide'
//window.thumbNaviWidth = 100
//window.thumbNaviHeight = 75



//override thumbnail navigation classes
/*var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.thumbNaviImage { } \n .thumbNaviPanel {}';
document.getElementsByTagName('head')[0].appendChild(style);*/


function onSlideIndexChange(sldNo){
	//
}

function onAnimationStart(index){
	//console.log('ani start:' + index)
}

function onAnimationEnd(index){
	//var count = getSlideCount()
	//console.log('ani end:' + index + '/' + count)
}

function onAnimationNextBuild(slideNo,stepNo,toAnimate){
	//window.parent.postMessage('onAnimationNextBuild(' + slideNo + ',' + stepNo + ',' + toAnimate + ')',"*")
}

	
function onSlideShowTimeUpdate(slideNo,time,total){
	//console.log(slideNo,time,total)
}

allSlideNotes = [{id:2,notes:'<p>On appelle le flux axoplasmique le transport de macromolécules le long des axones. Il existe un flux antérograde et un flux rétrograde</p>'},
{id:3,notes:'<p>L’œdème de l’OP n’est pas un œdème au sens « classique » du à une exsudation dans les tissus interstitiels. Il correspond à l’interruption du flux axonal par différents mécanismes (ischémique, compressif, inflammatoire). Pour mémoire, rappelons qu’ au niveau rétinien, l’interruption du flux axoplasmique des fibres ganglionnaires se traduit pas les nodules cotonneux</p>'},
{id:4,notes:'<p>La première étape diagnostique d’un OP consiste à faire une analyse de l’aspect au FO, puis de la fonction visuelle, et enfin d’établir une concordance entre les 2</p>'},
{id:5,notes:'<p>En haut, volumineux OP avec AV conservée et déficit minime au CV: évocateur d’un OP de stase</p><p>En bas, discret OP avec AV effondrée et scotome fasciculaire au CV: évocateur de NOIA</p>'},
{id:6,notes:'<p>DPAR: déficit pupillaire afférent relatif</p>'},
{id:7,notes:'<p>Les 4 grandes catégories d’OP</p>'},
{id:9,notes:'<p>Avant toute prise en charge d’un OP il faut éliminer les faux OP. Dans un faux OP il n’y a jamais d’exsudats, ou d’hémorragies</p><p>Dans un vrai OP les vaisseaux à la surface de la papille se perdent dans l’OP. En cas de doute, l’angiographie à la fluorescéine est indispensable. LOCT n’est pas discriminant dans les petits OP</p>'},
{id:10,notes:'<p>Si une HIC est suspectée, la première étape consiste à éliminer une HIC secondaire</p>'},
{id:13,notes:'<p>Ne jamais adresser un patient à l’IRM sans décrire au neuro-radio ce que l’on cherche!</p>'},
{id:14,notes:'<p>1ère images: métastases cérébrales d’un cancer du sein</p><p>2ème image: thrombophlébite sinus latéral gauche.</p><p>3ème image: dilatation des gaines du NO (coupes coronales) et aplatissement du pole postérieur des globes (coupes axiales)</p>'},
{id:15,notes:'<p>Si le premier bilan élimine une HIC secondaire à une tumeur ou une thrombophlébite cérébrale, on considère que c’est une HIC idiopathique, après avoir vérifié l’absence d’HTA, ou qu’elle n’est pas favorisée par des médicmanents ou apnée du sommeil (voir MK Mathews pour revue)</p><p>JA Fraser: étude du Emory sur facteurs de risques HIC; apnée et déficience en testostérone sont facteurs favorisants.</p>'},
{id:16,notes:'<p>OP volumineux d’HIC</p>'},
{id:19,notes:'<p>HTA maligne (toxémie gravidique)</p>'},
{id:21,notes:'<p>Topiramate est un anti-épileptique inhibiteur de l’anhydrase carbonique.</p>'},
{id:22,notes:'<p>Une HIC doit être régulièrement surveillée pour vérifier l’efficacité du traitement. Les risques d’atrophie du NO sur HIC chronique sont réels.</p>'},
{id:25,notes:'<p>Le déficit altitudinal du CV est très évocateur mais pas systématique</p>'},
{id:27,notes:'<p>Angiographie du NOIA non artéritique avec retard de perfusion du secteur nasal de la papille au temps précoce</p>'},
{id:29,notes:'<p>Malgré les propositions de l ’American college of rheumatology, la réalisation d ’une BAT reste critère majeur, et il ne faut pas s ’en priver</p>'},
{id:32,notes:'<p>Temps précoce de l’angiographie montrant une ischémie choroïdienne sectorielle englobant la papille.</p>'},
{id:36,notes:'<p>Au temps tardif, l’ischémie papillaire persiste alors que la choroïde a fini par se remplir</p>'},
{id:39,notes:'<p>Aspect de pseudo Foster-Kennedy sur un Horton bilatéral: OP récent sur l’OD et atrophie optique sur l’OG.</p>'},
{id:40,notes:'<p>Angiographie correspondante au Horton bilatéral</p>'},
{id:43,notes:'<p>A ce jour aucun traitement n’a fait la preuve de son efficacité dans le traitement de la NOIA non artéritique mais des essais thérapeutiques sont en cours.</p>'},
{id:44,notes:'<p>Ischémie de l’hemi papille supérieure</p>'},
{id:46,notes:'<p>V Purvin et al, Arch Ophthalmopl 2066: étude retrospective sur NOIA et cordarone.</p>'},
{id:51,notes:'<p>La découverte de signes inflammatoires associés à un OP est un élément d’orientation capital pour le diagnostic d’OP inflammatoire</p>'},
{id:54,notes:'<p>Le dosage des Ac et les différentes sérologies seront orientées en fonction des hypothèses diagnostiques</p>'},
{id:55,notes:'<p>Dans plus de la moitié des cas, on ne retrouve rien au bilan</p>'},
{id:59,notes:'<p>Forme typique</p>'},
{id:60,notes:'<p>Evolution typique d ’une Neurorétinite. Sérologie positive pour bartonella</p>'},
{id:61,notes:'<p>Même cas que précédent, mais une semaine avant, d ’où l ’importance de bien examiner macula, et si possible de faire OCT systématique</p>'},
{id:63,notes:'<p>5 espèces de Bartonellae sont pathogènes pour l  ’homme.</p><p>16% des griffes du chat seraient <0 pour B henselae; donc il est possible que Clarridgeiae soit en cause. Sero prévalence en France est de 4 à 6%</p><p>Contamination par morsure, griffure, piqûre de puce ou en se frottant l ’œil après avoir caressé un chat infecte. Presque tous les jeunes chats (moins de 12 mois) sont infectés. On ne retrouve pas de notion de griffure ou moursure avec chats dans 1/3 des cas, voire pas de contact du tout avec chats.</p><p>Maladie de Lyme : 12 espèces différentes, dont 3 pathogènes pour l ’homme. Le laboratoire des Spirochètes de Pasteur peut les identifier.</p><p>Si HTA et diabète normalement facile à éliminer, plus difficile pour BBS</p>'},
{id:64,notes:'<p> 1èreb et 2ème image: 2 cas de griffes du chat, dont le second avec occlusion artérielle</p><p>3ème image: Toxoplasmose: choriorétinite de Jensen</p><p>4ème image: Foyer de syphilis</p>'},
{id:65,notes:'<p>TPHA et VDRL doivent être >o pour le diagnostic de syphilis</p><p>Le test quantiferon mesure interferon gamma produit par les cellules T spécifiquement activées par la borreliose ou le BK. Permet de distinguer une infection active d ’une trace témoin d ’une infection ancienne. Très intéressant pour Lyme compte tenue prévalence de la maladie (200/100 000 en Alsace). Mais pas dispo en France.</p><p>50% serologies <0 pour MGC; peuvent se positiver 1 à 3 mois plus tard; donc à refaire. Test ELISA et IFI (immunofluorescence indirecte)</p>'},
{id:73,notes:'<p>Dans l’urgence, c’est HIC vs Horton.</p><p>Le Horton bilatéral demeure une urgence car un coté peut être incomplet, et possibilité de faire AVC ou IDM.</p>'},
{id:74,notes:'<p>Dans l’urgence, c’est HIC vs Horton.</p><p>L’augmentation du fibrinogène est un facteur de thrombose supplémentaire.</p><p>Est-ce toujours une urgence quand les 2 yeux sont atteints? Oui car un coté peut être incomplet, et possibilité de faire AVC ou IDM.</p><p>Deschamps et al: étude Rothschild sur OP bilatéral: 80% HIC</p><p>Lin et al: étude sur thrombose(> 9%) dans cas de tableaux évocateurs HIC</p>'},
{id:75,notes:'<p>Si on élimine une NOIA artéritique bilatérale, pour distinguer une NOIA non artéritique bilatérale d’une papillite bilatérale le plus souvent il faut s’aider des temps précoces de l’angio</p>'},
{id:76,notes:'<p>En HT: NOIA</p><p>En BS :  papillite</p>'},
{id:77,notes:'<p>JD Stein: étude sur apnée sommeil et incidence des neuropathies. Etude à partir recensement de plus de 2millions d’assurés américains</p>'}]