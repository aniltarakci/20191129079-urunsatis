import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css']
})
export class UrunComponent implements OnInit {

  id = this.route.snapshot.queryParamMap.get('id');
  Products = [
    {id: "1.1", urunadi: 'Küçük Yalanlar', yazar: 'Hikmet Hükümenoğlu', sayfasayisi: '350', urunfiyati: '43₺',images:"assets/ask/kucukyalanlar.jpg"},
    {id: "1.2", urunadi: 'Hasret', yazar: 'Canan Tan', sayfasayisi: '352', urunfiyati: '36₺',images:"assets/ask/hasret.jpg"},
    {id: "1.3", urunadi: 'Unutma Beni Apartmanı', yazar: 'Nermin Yıldırım', sayfasayisi: '424', urunfiyati: '53₺',images:"assets/ask/unutmabeniapartmani.jpg"},
    {id: "1.4", urunadi: 'Aşkın Halleri', yazar: 'Alper Hasanoğlu', sayfasayisi: '264', urunfiyati: '34₺',images:"assets/ask/askinhalleri.jpg"},
    {id: "1.5", urunadi: 'Bal', yazar: 'Emre Gül', sayfasayisi: '368', urunfiyati: '29₺',images:"assets/ask/bal.jpg"},
    {id: "1.6", urunadi: 'Gizemli Gelinlik', yazar: 'Rachel Hauck', sayfasayisi: '360', urunfiyati: '52₺',images:"assets/ask/gizemligelinlik.jpg"},
    {id: "1.7", urunadi: 'İzabel', yazar: 'J. A. Redmerski', sayfasayisi: '368', urunfiyati: '35₺',images:"assets/ask/izabel.jpg"},
    {id: "1.8", urunadi: 'Mavi Gece', yazar: 'K. Kübra Berk', sayfasayisi: '400', urunfiyati: '39₺',images:"assets/ask/mavigece.jpg"},
    {id: "1.9", urunadi: 'Sen Yokken', yazar: 'Güneş Demirel', sayfasayisi: '336', urunfiyati: '52₺',images:"assets/ask/senyokken.jpg"},
    {id: "1.10", urunadi: 'Son Şans', yazar: 'Damlanur Büyükşen', sayfasayisi: '264', urunfiyati: '49₺',images:"assets/ask/sonsans.jpg"},
    {id: "1.11", urunadi: 'Tutku', yazar: 'Lauren Kate', sayfasayisi: '264', urunfiyati: '50₺',images:"assets/ask/tutku.jpg"},
    {id: "1.12", urunadi: 'Beyaz Geceler', yazar: 'Fyodor Mihailoviç Dostoyevski', sayfasayisi: '79', urunfiyati: '60₺',images:"assets/ask/beyazgeceler.jpg"},

    {id: "2.1", urunadi: 'Mutlu Beyin', yazar: 'Loretta Graziano Breuning', sayfasayisi: '198', urunfiyati: '77₺',images:"assets/bilim/mutlubeyin.jpg"},
    {id: "2.2", urunadi: 'Defterimden Portreler', yazar: 'İlber Ortaylı', sayfasayisi: '304', urunfiyati: '44₺',images:"assets/bilim/defterimdenportreler.jpg"},
    {id: "2.3", urunadi: 'Sapiens', yazar: 'Yuval Noah Harari', sayfasayisi: '412', urunfiyati: '55₺',images:"assets/bilim/sapiens.jpg"},
    {id: "2.4", urunadi: 'Beyin Oyunları', yazar: 'Tamer Demirdelen', sayfasayisi: '199', urunfiyati: '49₺',images:"assets/bilim/beyinoyunlari.jpg"},
    {id: "2.5", urunadi: 'İlk Üç Dakika', yazar: 'Steven Weinberg', sayfasayisi: '216', urunfiyati: '41₺',images:"assets/bilim/ilkucdakika.jpg"},
    {id: "2.6", urunadi: 'İnsanlık 2.0', yazar: 'Ray Kurzweil', sayfasayisi: '720', urunfiyati: '53₺',images:"assets/bilim/insanlik20.jpg"},
    {id: "2.7", urunadi: 'Holografik Evren', yazar: 'Michael Talbot', sayfasayisi: '456', urunfiyati: '39₺',images:"assets/bilim/holografikevren.jpg"},
    {id: "2.8", urunadi: 'Gen', yazar: 'Siddhartha Mukherjee', sayfasayisi: '616', urunfiyati: '61₺',images:"assets/bilim/gen.jpg"},
    {id: "2.9", urunadi: 'Geleceğin Fiziği', yazar: 'Michio Kaku', sayfasayisi: '454', urunfiyati: '60₺',images:"assets/bilim/geleceginfizigi.jpg"},
    {id: "2.10", urunadi: 'Kaos', yazar: 'James Gleick', sayfasayisi: '390', urunfiyati: '37₺',images:"assets/bilim/kaos.jpg"},
    {id: "2.11", urunadi: 'Mikrobiyota', yazar: 'Ed Yong', sayfasayisi: '408', urunfiyati: '51₺',images:"assets/bilim/mikrobiyota.jpg"},
    {id: "2.12", urunadi: 'Türlerin Kökeni', yazar: 'Charles Darwin', sayfasayisi: '472', urunfiyati: '43₺',images:"assets/bilim/turlerinkokeni.jpg"},

    {id: "3.1", urunadi: 'Şeker Portakalı', yazar: 'Jose Mauro De Vasconcelos', sayfasayisi: '182', urunfiyati: '45₺',images:"assets/cocuk/sekerportakali.jpg"},
    {id: "3.2", urunadi: 'Çocuklar Nasıl Başarır?', yazar: 'Mümin Sekman, Bahar Eriş', sayfasayisi: '296', urunfiyati: '51₺',images:"assets/cocuk/cocuklarnasilbasarir.jpg"},
    {id: "3.3", urunadi: 'Dikkat Öğretmen', yazar: 'Salih Memecan ', sayfasayisi: '24', urunfiyati: '25₺',images:"assets/cocuk/dikkatogretmen.jpg"},
    {id: "3.4", urunadi: 'Mutlu Prens', yazar: 'Oscar Wilde', sayfasayisi: '80', urunfiyati: '23₺',images:"assets/cocuk/mutluprens.jpg"},
    {id: "3.5", urunadi: 'Çatıdaki Gezegen', yazar: 'Behiç Ak', sayfasayisi: '180', urunfiyati: '17₺',images:"assets/cocuk/catidakigezegen.jpg"},
    {id: "3.6", urunadi: 'Endişe Ağacı', yazar: 'Marianne Musgrove', sayfasayisi: '128', urunfiyati: '15₺',images:"assets/cocuk/endiseagaci.jpg"},
    {id: "3.7", urunadi: 'Bay Zıp Zıp', yazar: 'Roger Hargreaves', sayfasayisi: '32', urunfiyati: '19₺',images:"assets/cocuk/bayzipzip.jpg"},
    {id: "3.8", urunadi: 'Bay Unutkan', yazar: 'Roger Hargreaves', sayfasayisi: '32', urunfiyati: '14',images:"assets/cocuk/bayunutkan.jpg"},
    {id: "3.9", urunadi: 'Kiralık Canavar', yazar: 'Andreas Steinhöfel', sayfasayisi: '104', urunfiyati: '15₺',images:"assets/cocuk/kiralikcanavar.jpg"},
    {id: "3.10", urunadi: 'Haydi Biraz Cesaret', yazar: 'Raina Telgemeier', sayfasayisi: '224', urunfiyati: '19₺',images:"assets/cocuk/haydibirazcesaret.jpg"},
    {id: "3.11", urunadi: 'Keloğlan Masalları', yazar: 'Süleyman Özkonuk', sayfasayisi: '72', urunfiyati: '13₺',images:"assets/cocuk/keloglanmasallari.jpg"},
    {id: "3.12", urunadi: 'Rapunzel', yazar: 'Grimm Kardeşler', sayfasayisi: '16', urunfiyati: '12₺',images:"assets/cocuk/rapunzel.jpg"},

    {id: "4.1", urunadi: 'Zacharius Usta', yazar: 'Jules Verne', sayfasayisi: '56', urunfiyati: '51₺',images:"assets/klasik/zachariususta.jpg"},
    {id: "4.2", urunadi: 'Sefiller', yazar: 'Victor Hugo', sayfasayisi: '400', urunfiyati: '46₺',images:"assets/klasik/sefiller.jpg"},
    {id: "4.3", urunadi: 'Körler Ülkesi', yazar: 'Herbert George Wells', sayfasayisi: '68', urunfiyati: '49₺',images:"assets/klasik/korlerulkesi.jpg"},
    {id: "4.4", urunadi: 'Yeraltından Notlar', yazar: 'Fyodor Mihailoviç Dostoyevski', sayfasayisi: '168', urunfiyati: '52₺',images:"assets/klasik/yeraltindannotlar.jpg"},
    {id: "4.5", urunadi: 'Fareler Ve İnsanlar', yazar: 'John Steinbeck', sayfasayisi: '111', urunfiyati: '57₺',images:"assets/klasik/farelerveinsanlar.jpg"},
    {id: "4.6", urunadi: 'Suç Ve Ceza', yazar: 'Fyodor Mihayloviç Dostoyevski', sayfasayisi: '687', urunfiyati: '31₺',images:"assets/klasik/sucveceza.jpg"},
    {id: "4.7", urunadi: 'Uğultulu Tepeler', yazar: 'Emily Bronte', sayfasayisi: '408', urunfiyati: '36₺',images:"assets/klasik/ugultulutepeler.jpg"},
    {id: "4.8", urunadi: 'Yaşlı Adam Ve Deniz', yazar: 'Ernest Hemingway', sayfasayisi: '136', urunfiyati: '33₺',images:"assets/klasik/yasliadamvedeniz.jpg"},
    {id: "4.9", urunadi: 'İnci', yazar: 'John Steinbeck', sayfasayisi: '102', urunfiyati: '56₺',images:"assets/klasik/inci.jpg"},
    {id: "4.10", urunadi: 'Vadideki Zambak', yazar: 'Honore de Balzac', sayfasayisi: '328', urunfiyati: '50₺',images:"assets/klasik/vadidekizambak.jpg"},
    {id: "4.11", urunadi: 'Beyaz Diş', yazar: 'Jack London', sayfasayisi: '177', urunfiyati: '44₺',images:"assets/klasik/beyazdis.jpg"},
    {id: "4.12", urunadi: 'Yaban Kazı', yazar: 'Ogai Mori', sayfasayisi: '144', urunfiyati: '41₺',images:"assets/klasik/yabankazi.jpg"},

    {id: "5.1", urunadi: 'Bab-i Esrar', yazar: 'Ahmet Ümit', sayfasayisi: '440', urunfiyati: '54₺',images:"assets/polisiye/babiesrar.jpg"},
    {id: "5.2", urunadi: 'Suçluluk Ateşi', yazar: 'Inger Gammelgaard Madsen', sayfasayisi: '352', urunfiyati: '49₺',images:"assets/polisiye/suclulukatesi.jpg"},
    {id: "5.3", urunadi: 'Baskervillelerin Köpeği', yazar: 'Sir Arthur Conan Doyle', sayfasayisi: '220', urunfiyati: '60₺',images:"assets/polisiye/baskervillelerinkopegi.jpg"},
    {id: "5.4", urunadi: 'Yabancı', yazar: 'Camilla Lackberg', sayfasayisi: '368', urunfiyati: '47₺',images:"assets/polisiye/yabanci.jpg"},
    {id: "5.5", urunadi: 'Tepenin Laneti', yazar: 'John Verdon', sayfasayisi: '462', urunfiyati: '25₺',images:"assets/polisiye/tepeninlaneti.jpg"},
    {id: "5.6", urunadi: 'Şeytanın Çırağı', yazar: 'Şiro Hamao', sayfasayisi: '128', urunfiyati: '27₺',images:"assets/polisiye/seytaninciragi.jpg"},
    {id: "5.7", urunadi: 'Küllerin Günü', yazar: 'Jean-Christophe Grange', sayfasayisi: '280', urunfiyati: '31₺',images:"assets/polisiye/kulleringunu.jpg"},
    {id: "5.8", urunadi: 'Sis Ve Gece', yazar: 'Ahmet Ümit', sayfasayisi: '292', urunfiyati: '29₺',images:"assets/polisiye/sisvegece.jpg"},
    {id: "5.9", urunadi: 'Sessiz Hasta', yazar: 'Alex Michaelides', sayfasayisi: '320', urunfiyati: '37₺',images:"assets/polisiye/sessizhasta.jpg"},
    {id: "5.10", urunadi: 'Acı Kahve', yazar: 'Agatha Christie', sayfasayisi: '152', urunfiyati: '41₺',images:"assets/polisiye/acikahve.jpg"},
    {id: "5.11", urunadi: 'Kavim', yazar: 'Ahmet Ümit', sayfasayisi: '440', urunfiyati: '37₺',images:"assets/polisiye/kavim.jpg"},
    {id: "5.12", urunadi: 'Tatlı Rüyalar', yazar: 'Alper Canıgüz', sayfasayisi: '208', urunfiyati: '69₺',images:"assets/polisiye/tatliruyalar.jpg"},

    {id: "6.1", urunadi: 'Madalyonun İçi', yazar: 'Gülseren Budayıcıoğlu', sayfasayisi: '383', urunfiyati: '69₺',images:"assets/psikoloji/madalyonunici.jpg"},
    {id: "6.2", urunadi: 'Boş Ayna', yazar: 'Karyl McBride', sayfasayisi: '280', urunfiyati: '63₺',images:"assets/psikoloji/bosayna.jpg"},
    {id: "6.3", urunadi: 'Beden Kayıt Tutar', yazar: 'Bessel A. van der Kolk', sayfasayisi: '462', urunfiyati: '48₺',images:"assets/psikoloji/bedenkayittutar.jpg"},
    {id: "6.4", urunadi: 'Yaratma Cesareti', yazar: 'Rollo May', sayfasayisi: '168', urunfiyati: '57₺',images:"assets/psikoloji/yaratmacesareti.jpg"},
    {id: "6.5", urunadi: 'İçimizdeki Çocuk', yazar: 'Doğan Cüceloğlu', sayfasayisi: '256', urunfiyati: '30₺',images:"assets/psikoloji/icimizdekicocuk.jpg"},
    {id: "6.6", urunadi: 'Savaşçı', yazar: 'Doğan Cüceloğlu', sayfasayisi: '400', urunfiyati: '20₺',images:"assets/psikoloji/savasci.jpg"},
    {id: "6.7", urunadi: 'Dört Arketip', yazar: 'Carl Gustav Jung', sayfasayisi: '168', urunfiyati: '28₺',images:"assets/psikoloji/dortarketip.jpg"},
    {id: "6.8", urunadi: 'Şema Terapi', yazar: 'Jeffrey E. Young', sayfasayisi: '616', urunfiyati: '19₺',images:"assets/psikoloji/sematerapi.jpg"},
    {id: "6.9", urunadi: 'Öfke Dansı', yazar: 'Harriet Lerner', sayfasayisi: '199', urunfiyati: '14₺',images:"assets/psikoloji/ofkedansi.jpg"},
    {id: "6.10", urunadi: 'Yavaşla', yazar: 'Kemal Sayar', sayfasayisi: '246', urunfiyati: '15₺',images:"assets/psikoloji/yavasla.jpg"},
    {id: "6.11", urunadi: 'Mutluluk Tuzağı', yazar: 'Russ Harris', sayfasayisi: '384', urunfiyati: '30₺',images:"assets/psikoloji/mutluluktuzagi.jpg"},
    {id: "6.12", urunadi: 'Başkalarının Aklı', yazar: 'Tali Sharot', sayfasayisi: '256', urunfiyati: '39₺',images:"assets/psikoloji/baskalarininakli.jpg"},

    {id: "7.1", urunadi: 'Demir Ökçe', yazar: 'Jack London', sayfasayisi: '336', urunfiyati: '42₺',images:"assets/roman/demirokce.jpg"},
    {id: "7.2", urunadi: 'Sevgili Arsız Ölüm', yazar: 'Latife Tekin', sayfasayisi: '248', urunfiyati: '43₺',images:"assets/roman/sevgiliarsizolum.jpg"},
    {id: "7.3", urunadi: 'Ben, Kirke', yazar: 'Madeline Miller', sayfasayisi: '408', urunfiyati: '46₺',images:"assets/roman/benkirke.jpg"},
    {id: "7.4", urunadi: 'Ziyan', yazar: 'Hakan Günday', sayfasayisi: '352', urunfiyati: '49₺',images:"assets/roman/ziyan.jpg"},
    {id: "7.5", urunadi: 'Süt Lekesi', yazar: 'Esra Ezmeci', sayfasayisi: '264', urunfiyati: '27₺',images:"assets/roman/sutlekesi.jpg"},
    {id: "7.6", urunadi: '1984', yazar: 'George Orwell', sayfasayisi: '352', urunfiyati: '25₺',images:"assets/roman/1984.jpg"},
    {id: "7.7", urunadi: 'Hazan', yazar: 'Ayşe Kulin', sayfasayisi: '350', urunfiyati: '23₺',images:"assets/roman/hazan.jpg"},
    {id: "7.8", urunadi: 'Zamir', yazar: 'Hakan Günday', sayfasayisi: '368', urunfiyati: '45₺',images:"assets/roman/zamir.jpg"},
    {id: "7.9", urunadi: 'Satranç', yazar: 'Stefan Zweig', sayfasayisi: '71', urunfiyati: '33₺',images:"assets/roman/satranc.jpg"},
    {id: "7.10", urunadi: 'Fink', yazar: 'Murat Menteş', sayfasayisi: '310', urunfiyati: '40₺',images:"assets/roman/fink.jpg"},
    {id: "7.11", urunadi: 'Martin Eden', yazar: 'Jack London', sayfasayisi: '496', urunfiyati: '48₺',images:"assets/roman/martineden.jpg"},
    {id: "7.12", urunadi: 'Dönüşüm', yazar: 'Franz Kafka', sayfasayisi: '104', urunfiyati: '36₺',images:"assets/roman/donusum.jpg"},
  ];
  prodsuct = this.Products.find(x=>x.id==this.id);

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

}
