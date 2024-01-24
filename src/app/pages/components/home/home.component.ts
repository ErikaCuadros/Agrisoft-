import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  chatOpen = false;
  userMessage = '';
  chatHistory: { content: string, isFromUser: boolean }[] = [];
  primerMensajeEnviado = false;
  recognition: any;
  speechSynthesisIsSpeaking = false;
  isListening = false;
  currentIndex = 0;
  autoChangeInterval: any;

  @ViewChild('voiceInput', { static: false }) voiceInput!: ElementRef;
  @ViewChild('micButton') micButton!: ElementRef;
  @ViewChild('volumeIcon') volumeIcon!: ElementRef;



  // FUNCION INDICADOR PARA ACTIVAR MICROFONO DESPUÉS DE 1 SEGUNDO Y ALGO MAS JEJE
  startDictationWithPrompt() {
    this.speak('Habla ahora');
    setTimeout(() => {
      this.startDictation();
    }, 1800);
  }

  //FUNCIÓN DE DICTADO MICRÓFONO
  startDictation() {
    this.recognition.onstart = () => {
      this.micButton.nativeElement.classList.add('mic-on');
    }

    this.recognition.onend = () => {
      this.micButton.nativeElement.classList.remove('mic-on');
    }
    this.recognition.start();
    this.recognition.lang = 'es-ES';

    this.recognition.onresult = (event: any) => {
      const speechEvent = event as any;
      const result = speechEvent.results[0][0].transcript;
      this.voiceInput.nativeElement.value = result;
      this.userMessage = result;
    };
  }

  //FUNCIÓN PARA RECIBIR FUNCIÓN DEL DIDACTO DE MICROFONO E INCORPORAR EL MENSAJE A PROMPT PARA ENVIAR A SERVICIO

  //FUNCIÓN PARA PARAR EL MICRÓFONO
  stopDictation() {
    this.isListening = false;
    this.recognition.stop();
  }

  // FUNCIÓN PARA HABLAR AUTOMATICAMENTE DESPUES DE LA RESPUESTA RECIBIDA POR PARTE DEL SERVICIO
  speak(text: string): void {
    this.volumeIcon.nativeElement.classList.add('text-success');
    const utterance = new SpeechSynthesisUtterance(text);
    this.speechSynthesisIsSpeaking = true;

    utterance.onend = () => {
      this.volumeIcon.nativeElement.classList.remove('text-success');
    };

    window.speechSynthesis.speak(utterance);
  }

  // FUNCIÓN PARA ABRIR LA VENTANA DEL CHAT
  toggleSpeech(): void {
    if (this.speechSynthesisIsSpeaking) {
      window.speechSynthesis.cancel();
      this.speechSynthesisIsSpeaking = false;
    }
  }

  carouselItems = [
    { image: 'assets/images/maizz.jpg', title: 'CONOCE LAS PLAGAS AGRARIAS', description: 'Acceda a los reportes agrarios que estan afectando actualmente los cultivos del Ecuador' },
    { image: 'assets/images/carruselplatano.jpg', title: 'RECIBA ATENCIÓN ESPECIALIZADA', description: 'Acceda a los perfiles profesionales en el área agrónoma' },
    { image: 'assets/images/carruselaten.jpg', title: 'OBSERVA LAS MEJORES CONCEJOS PARA TU SIEMBRA', description: 'Acceda a los mejores concejos en el área de la agricultura dictados por profesionales experimentados' },
    { image: 'assets/images/cacao.jpg', title: 'OBSERVA LAS MEJORES PRODUCTOS EN EL ÁREA AGRÓNOMA', description: 'Acceda a las mejores productos brindados por nuestros proveedores' },
  ];

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000);
    this.autoChangeInterval = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  showSlide(index: number): void {
    this.currentIndex = index;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  imagesProveedor = [
    'assets/images/agripac.png',
    'assets/images/tmp.jpg',
    'assets/images/portal.jpeg',
    'assets/images/cropsa.jpg',
  ];

  currentIndexProveedor = 0;

  nextImage() {
    this.currentIndexProveedor = (this.currentIndexProveedor + 1) % this.imagesProveedor.length;
  }
  prevImage() {
    this.currentIndexProveedor = (this.currentIndexProveedor - 1 + this.imagesProveedor.length) % this.imagesProveedor.length;
  }

}
