<script lang="ts">
	import { afterUpdate } from 'svelte';

	export const data = {
		pages: [
			{
				name: 'introduction',
				title: 'Introduction',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium praesentium debitis accusantium tempora saepe similique ipsum provident molestias aperiam at aut expedita corporis soluta consequuntur temporibus earum '
			},
			{
				name: 'what-happened',
				title: 'What Happened',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium praesentium debitis accusantium tempora saepe similique ipsum provident molestias aperiam at aut expedita corporis soluta consequuntur temporibus earum '
			},
			{
				name: 'stories',
				title: 'Stories'
			},
			{
				name: 'victims',
				title: 'Victims',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium praesentium debitis accusantium tempora saepe similique ipsum provident molestias aperiam at aut expedita corporis soluta consequuntur temporibus earum '
			},
			{
				name: 'post-war',
				title: 'Post War',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium praesentium debitis accusantium tempora saepe similique ipsum provident molestias aperiam at aut expedita corporis soluta consequuntur temporibus earum '
			}
		]
	};

	export const data2 = {
		pages: [
			{
				name: 'introduction',
				title: 'Introduction',
				body: '<p>Općina Prijedor je po Popisu stanovništva iz 1991. brojala ukupno 112.543 stanovnika, od čega su 49.351 (43,9%) Muslimana (Bošnjaka); 47.581 (42,3%) Srba; 6.316 (5,6%) Hrvata; 6.459 (5,7%) Jugoslovena i 2.836 (2,5%) Ostalih.</p><p>JNA i druge srpske oružane formacije su oružanim putem preuzele vlast u gradu 30. aprila 1992. i zauzele sve vitalne objekte u gradu. Naoružani Srbi zauzeli su položaje na kontrolnim punktovima po cijelom Prijedoru, sa vojnicima i snajperistima na krovovima glavnih zgrada, srpsku zastavu su postavili na zgradi Općine, a na prilaznim putevima kontrolne punktove, na kojima je vršena kontrola ulaska i izlaska iz grada.</p><p>Sa preuzimanjem vlasti uveden je policijski sat, zabranjeno kretanje u vremenu od 22:00 do 06:00 sati. Istovremeno je upućen ultimatum o prikupljanju i predaji naoružanja.</p><p>Prva hapšenja su izvršena 20. maja 1992, kada su bošnjački politički rukovodioci i intelektualci uhapšeni i zatvoreni u prostorije Stanice javne bezbjednosti u Prijedoru, gdje su mnogi fizički maltretirani od strane srpske policije. Istovremeno su prestale sa radom sve obrazovne institucije (dječiji vrtići, osnovne i srednje škole). Period od početka maja do prvog napada na selo Hambarine bio je period potpune blokade, ograničenog kretanja za Bošnjake i Hrvate.</p><p>	Napad na bošnjačka sela u okolini Prijedora počeo je 23. maja 1992. godine oko 12,00 sati, kada je iz artiljerijskog naoružanja granatirano selo Hambarine. Bošnjačko stanovništvo je napustilo Hambarine i pobjeglo u sela Čarakovo, Zecovi, Rizvanovići, Rakovčani i u Donju Ljubiju, a jedan dio zbjega u šumi kod Kureva. Istovremeno sa napuštanjem sela otpočinje pljačka i devastacija bošnjačke imovine. Tokom noći su granatirana sela Gornji Volar i Šurkovac.'
			},
			{
				name: 'what-happened',
				title: 'What Happened',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: '<p>U periodu 23.-30. maja 1992. godine srpske oružane jedinice izvršile su oružane napade na skoro sva naselja u kojima su živjeli Bošnjaci i Hrvati. Od 24. maja 1992. srpski agresor je otpočeo sa formiranjem logora. U logor Omarska zatvorena je prva grupa civila Bošnjaka iz Prijedora.</p><img src="/omarska.jpg" /><p>Oko dva sata poslijepodne 24. maja 1992. napadnut je Kozarac. Napad je započeo granatiranjem, nakon čega je uslijedio prodor tenkova i pješadije. Ulaskom u Kozarac počela je paljevina kuća i pljačka imovine. Za četiri dana, do 28. maja 1992. godine uništeno je oko 50% Kozarca, dok je preostala šteta nastala u razdoblju između juna i avgusta 1992. U Kozarcu je porušeno 12 džamija. U oružanom napadu koji je potrajao do 26. maja 1992. godine, ubijeni su i ranjeni brojni civili Kozarca. Preživjeli Bošnjaci bili su prisiljeni da napuste svoje kuće, u pravcu grada Prijedora, pod oružanom pratnjom pripadnika srpskih snaga koje su  prisilno odvajale muškarce od žena i djece. Preživjele muškarce iz Kozarca su odveli u logore Keraterm i Omarska, a žene i djecu u logor Trnopolje, te u razne objekte u gradu Prijedoru (Narodno kazalište, srednjoškolski centar...). Članove političkog rukovodstva, ugledni i bogati Bošnjaci i Hrvati, su hapšeni i odvođeni u koncentracione logore: Krings u Sanskom Mostu, te Keraterm, Trnopolje i Omarska na području općine Prijedor. Pripadnici 43. motorizovane brigade JNA su 30. maja 1992,  krećući se kroz grad tenkovima, u Partizanskoj ulici ispaljivali granate, od kojih je toga dana ubijen i ranjen veliki broj civila i uništeni brojni civilni objekti.</p><p>Početkom juna organizovano su iz grada odvođeni Bošnjaci u već pripremljene i unaprijed planirane logore. U Prijedoru su srpske vlasti organizirale konvoj od oko 70 autobusa u kojima su se nalazili građani civili koje su uhapsili pripadnici srpskih snaga. U svakom je autobusu bilo oko 80 lica. Konvoj autobusa sa uhapšenim odvezen je u logor Omarska. Po dolasku u krug logara Omarska, i u trenutcima izlaska iz autobusa izvršena su prva ubijanja. Istovremeno su počela hapšenja i odvođenja u logor Trnopolje. Iz prijedorskih naselja Stari Raškovac i Skela u logor Trnopolje odvezena su dva autobusa žena i djece, a tri autobusa sa uhapšenim muškarcima odvezena su pred zgradu prijedorske policije, gdje su ih fizički maltretirali i zlostavljali, a potom odvezli u logor Omarska. Ubijanja Bošnjaka vršena su u gradu, a posebno u Pionirskoj ulici. Tijela ubijenih Bošnjaka prikupljana su na gradskom teniskom igralištu. Prikupljanje tijela ubijenih vršeno je u periodu od 30. maja do 10. juna 1992. i pretpostavlja se da su odvezena na lokalitet rudnika Tomašica.</p><img src="/tomasica.jpg" /><p>Prilikom napada na sela Kevljani i Sivci, 14. juna 1992, ubijeno je na desetine Bošnjaka, a stotine zatvoreno u logore.</p><p>U vremenu od 20.-25. 7. 1992. godine srpske vlasti potpomognute zločinačkom JNA izvršili su napade na bošnjačka sela na lijevoj obali Sane: Bišćane, Rizvanoviće, Rakovčane, Hambarine, Čarakovo, Zecove, te hrvatska sela: Briševo, Raljaš, Staru Rijeku i druge. Krvavi pir koji je izvođen prvo artiljerijskim napadima, a potom pješadijskom, rezultirao je ubistvom više hiljada bošnjačkih i hrvatskih civila, a neutvrđen broj odveden je u logore, gdje je kasnije uglavnom likvidiran.</p>'
			},
			{
				name: 'stories',
				title: 'Stories',
				body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium praesentium debitis accusantium tempora saepe similique ipsum provident molestias aperiam at aut expedita corporis soluta consequuntur temporibus earum '
			},
			{
				name: 'victims',
				title: 'Victims',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: 'U Prijedoru je izvršen masovni zločin namjernog i organizovanog mučenja u koncentracionim logorima smrti. U tri najpoznatija logora smrti Omarska, Trnopolje i Keraterm ubijeno je i mučeno više od 10.000 civila, uglavnom, Bošnjaka. Koncentracioni logori koje su Srbi formirali postala su najpoznatija mučilišta na tlu Europe nakon Drugog svjetskog rata. U njima su provođena najgora mučenja i ubijanja. Bošnjakinje su u njima silovane do smrti, a potom ubijane. “Srpski su im zločinci nožem vadili djecu iz utroba i na njihove ih oči komadali“. <br> Poseban slučaj narušavanja mentalnog integriteta cijelih porodica je odvođenje u nepoznato i nestanak njihovih najmilijih. Za ogroman broj porodica ovo narušavanje mentalnog integriteta traje i danas. Još uvijek hiljade Prijedorčana i drugih ne znaju ništa o svojim najmilijim. Jednoj majci iz porodice Garibović ubijeno je šest sinova. U porodici Bašić iz Zecova za jedan dan ubijeno je trinaestero djece starosti od nekoliko dana do 18 godina (do danas nisu pronađeni). <br> U Prijedoru je izvršen i zločin silovanja, gdje je silovano više stotina Prijedorčanki. Silovanja su vršena sistematski, kako u logorima, tako u kućama, policijskim stanicama i drugim mjestima. Silovane su djevojčice od dvanaest i starice preko šesdeset godina. Silovanja su vršena pojedinačno ili grupno. „Izveli su jednu ženu i šest curica. Sve su silovane pet metara od nas. Jedna curica je odvedena, ne znam joj imena, lijepa, možda svojih šesnaest godina. Dok smo bili u logoru nije se vratila. Ove druge su tokom noći odvedene u Prijedor. Žena je ostala kod nas. Sutradan oko 12 sati, curice su vraćene.“ Prilikom izvođenja samog čina žrtvama su nanošene ozljede noževima, udarcima kundakom pušaka ili pesnica. To im je bila neka vrsta nagrade. Zabilježeni su i slučajevi silovanja muškaraca. <br> Pored masovnih (128, sa 1.511 tijela) i pojedinačnih (278, sa 278 tijela) grobnica ekshumiranih na teritoriji općine Prijedor, tijela Prijedorčana su pronalažena u masovnim i pojedinačnim grobnicama u još šesnaest drugih gradova. Radi se o 312 ekshumiranih tijela, od čega je 276 identifikovano. '
			},
			{
				name: 'post-war',
				title: 'Post War',
				img: '/most.jpeg',
				img_alt: 'slika starog mosta',
				body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel laudantium praesentium debitis accusantium tempora saepe similique ipsum provident molestias aperiam at aut expedita corporis soluta consequuntur temporibus earum '
			}
		]
	};

	export let page: String;
	export let pageNum = 0;
	afterUpdate(() => {
		switch (page) {
			case 'intro':
				pageNum = 0;
				break;
			case 'what-happened':
				pageNum = 1;
				break;
			case 'stories':
				pageNum = 2;
				break;
			case 'victims':
				pageNum = 3;
				break;
			case 'post-war':
				pageNum = 4;
				break;
			default:
				pageNum = 0;
		}
	});
</script>

<div class="page-body m-auto w-2/3">
	{@html data2.pages[pageNum].body}
</div>
