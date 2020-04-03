# Projekat NBA Stats
ITBootcamp
https://nbastatsmilanpanic.herokuapp.com/

NBA Stats, je aplikacija koja pruza uvid u osnovne podatke u vezi sa NBA utakmicama.
Za dobijanje podataka koriscen je API sa ove lokacije https://www.balldontlie.io/ a komunikaciju za autorizaciju
koriscen je bekend server na lokaciji https://coetus.herokuapp.com/api/users.

# NBA Stats aplikacija pravljena je u:
  * React-u
I uz pomoc ostalih biblioteka:
  * axios npm   install axios
  * react-router-dom   npm install --save react-router-dom
  * bootstrap   npm install bootstrap
  
# Aplikacija sadrzi sledece funkcionalnosti

  * Pocetna strana sadrzi dva dugmeta koja nas vode na formu za registrovanje novog korisnika ili za logovanje.
U registracionoj formi imamo polja za unos ime, prezime, korisnicko ime, mejl, sifra, i potvrda sifre.
Polje sa mejl se validira paternom da li je unesen ispravan format. Polje za sifru i potvrda sifre moraju da se poklapaju.

  * Na Home stranici pocevsi od hedera, gde imamo logo koji vraca na pocetnu stranu klikom na njega. Imamo tri link dugmeta koja vode
na druge stranice, Your Profile, Player Compare i poslednje za Logout, i gde klikom na njega dobijamo formu sa pitanjem da li zelimo    da se izlogujemo.

  * Sa leve strane nalazi se prikaz timova NBA lige, prikazuje se West conference ili East conference,u zavisnosti od prikazne vrednosti na dugmetu iznad koja se dinamicno menja. U tom odeljku omoguceno je da ostavimo po jedan "like" na omiljeni tim ili da to izbrisemo ako  zelimo. Ujedno svaki tim je i link koji nas vodi na stranicu svih utakmica tog tima za sezonu 2018/2019.
  
  * Klik na jedan od tih timova vodi nas na stranicu koja prikazuje sve utakmice sezone 2018/2019. Za prelazak na tu stranicu dodat je spiner koji se vrti dok se podaci ne ucitaju. Podatke dalje mozemo da filtriramo kroz selekt polje, po mesecu u kom su te utakmice odigrane.
  
  * Na sredistu Home stranice, nalazi se odeljak za prikaz i sortiranje pet najboljih igraca u navedenoj sezoni. Sortiranje se vrsi klikom na dugmice Points, Blocks, Assist.
  
  * Izborom stranice Your Profile u prvom odeljku prikazuju se osnovni podaci o logovanom korisniku. U drugom delu, izlistavaju se svi korisnici iz baze za koje je uradjeno polje za pretragu korisnika, a i na dnu stranice nalazi se stranicenje
  
  * Na stranici Player Compare, nalaze se dva input polja u koja se unosi tacno ime igraca cije statistike zelimo da uporedno predstavimo.

 
